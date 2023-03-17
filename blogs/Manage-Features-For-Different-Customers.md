---
title: 'How to manage and release features to different customers in both SaaS and self-hosted environments'
description: 'How to manage and release features to different customers in both SaaS and self-hosted environments'
publishedDate: '2023-03-15'
modifiedDate: '2023-03-15'
cover: '/images/blogs/manage-features-for-different-customers/front-pic-1.png'
tags: ['Progressive Release', 'Best Practice', 'Testing in Production']
authors: ['HU Beau']
url: 'Manage-Features-For-Different-Customers'
---


## Scenarios

Many organisations struggle with how to maintain a single repository and master branch to continuously deliver their software to their customers who require different features. 

Some customers use online SaaS services, but some customers need to deploy in a private and self-hosted environment. You're struggling with how to keep the same released version.

If a new feature is only built for one particular customer at the beginning, you're struggling with how to canary ship a new feature to that particular customer and keep the same code for all the other customers.

You also struggle with how to respond quickly to customer requirements without involving too many engineers. If a customer success team can do that without engineers, that's perfect.

## Solution

Feature Flags Management Service is the must-have technology to solve these scenarios. Feature Flags is a modern engineering technology that decouples code deployments from feature releases, giving you control over who sees each feature and when they see it.

Feature Flags can be categorized into four pillars (Release Flag, Experimentation Flag, Operational Flag, and Permission Flag) in its lifecycle through development to customer success. 

Operational flags and permission flags can be used to manage entitlements in software, which refers to controlling what features or functionality a user has access to based on their subscription or payment plan.

Release flags and experiment flags can help you to deliver a feature to a specific customer with minimal risk. It allows teams to test new features in production and progressively (percentage rollout) release the new feature to targeted customers to reduce the "blast radius".

## Practice

FeatBit is an open source feature flags project. It can work perfectly in scenarios to achieve the goal. Here are some examples of how FeatBit works.

### Manage your APP features

You may have features like Audit Log, Notification, IAM modules on your SaaS platform, but not every customer needs all of these features. They want to pay for the features they need at a compromise price. So you need to hide (or disable) these features for basic-level customers. The easy way is to use feature flags to control your menu items, or to control the root component of the feature page in **front-end APP**. 

```javascript
this.menus = [
    ...
    {
        title: 'Audit logs',
        icon: 'audit',
        path: '/audit-logs',
        disabled: featBit.flags["audit-log"]
    },
    {
        title: 'IAM',
        icon: 'icons:icon-user-permission',
        path: '/iam/team',
        disabled: featBit.flags["IAM"]
    }
];
```

The code above shows that the visibility of the menu item is controlled by a feature flag code `featBit.flags["{flag-key}"]`. The code below shows that a root component of a feature page is split into two versions: when `featBit.flags["audit-log"]` is `true`, it displays the feature; if it's `false`, it displays the "upgrade plan" page.

```xml
// Vue code 
<template>
    <div class="audit-log-container">
        <Auditlog v-if="featBitStore.flags['audit-log'] == true" />
        <UpgradPlan v-else />
    </div>
</template>
```

The return value of `featBit.flags["{audit-log}"]` is determined by how you configure the rule in FeatBit's UI portal. The image below shows that users who are in premium plan segment can get `true` value. 


<img style="max-width: 800px;width: 100%;" src="/images/blogs/manage-features-for-different-customers/target-rule-1.png" />
<br/>

The image below shows the configuration where users who match the condition are in the premium tier. For example, the "Rule 3 - domain" means that the users accessing the service under the domain list are the end users of the premium tier customer.

<img style="max-width: 800px;width: 100%;" src="/images/blogs/manage-features-for-different-customers/target-rule-2.png" />
<br/>

If you think control only front-end APP feature is not secure, you can also wrap up the feature code on the **back-end** (e.g. The APIs who deal with the feature):

```csharp
featBit.init(
    "{featbit-environment-key}", 
    featBitUser
);

if(featBit.variation("feature-flag-key") == true)
    runFeatureA();
else
    doNothing();
```

The code above shows that if the incoming request doesn't match the feature flag' condition created in Portal, it will refuse the request.

### Manage your features in a self-hosted environment

Your customer may require you to deploy the software in their private environment (public cloud VPC or their private IDC, etc.). The requirements may be different. For example, if your product uses MongoDB, but your customer needs you to deploy your MongoDB in their cloud-based MongoDB service, such as Azure CosmosDB, AWS DocumentDB/DynamoDB. 

You need to do some additional work to adapt different MongoDB provider's requirements. You can use feature flags and if/else statements to control which code is used to connect to the customer's MongoDB provider. This allows you to manage all the different feature versions in a single repository and master branch.

Unlike a SaaS system, you can't remotely control at anytime who sees each feature and when they see it. In this case, you must deploy your product with a predefined configuration of feature flags. For example, you can initialize your feature flags default values with JSON data. Here's an example of JSON data file for the Web App SDK's bootstrap.


```json
[
    {
      "id": "zigbee-network",
      "variation": "false",
      "variationType": "boolean"
    },
    {
      "id": "mongodb-provider",
      "variation": "AWS-Dynamo",
      "variationType": "string"
    },
    //...
    {
      "id": "audit-log-teams-management",
      "variation": "{\"color\": \"pink\",\"background-color\":\"blue\"}",
      "variationType": "json"
    },
    {
      "id": "numan-consumption",
      "variation": "3",
      "variationType": "number"
    }
]
```

FeatBit can help you make this work easier. You can use FeatBit to export a new Feature Flags configuration and send it to your self-hosted environment to enable the feature for your customer. FeatBit has prepared and is preparing several small functionalities to make this process easy. The following image shows FeatBit's user interface for exporting Feature Flags configuration to a self-hosted customer:


<img style="max-width: 800px;width: 100%;" src="/images/blogs/manage-features-for-different-customers/feature-management.png" />
<br/>

FeatBit hopes that the whole release/delivery process can be done without any engineers.

### Deploy FeatBit Light Version along with your Product

Another way to make the work just easier is to deploy FeatBit's self-host dedicated light version along your product's deployment.

### Release new features confidently for a particular customer

A very common situation is that one of your customers has paid you for a particular feature. This feature may be a standalone feature or an upgrade to an existing feature. Even this feature may serve other customers in the future, but it's only for one customer now.
Whether in a SaaS or self-hosted environment, you can separate and wrap up your new feature code with a feature flag. You use a feature flag to control over who sees a new feature and when they see it. (This is like what I mentioned in section above "Manage your APP features")

```csharp
if(featBit.variation("feature-flag-key") == true)
    runFeatureA();
```

For example, the code above uses a simple if/else statement to wrap up and control the execution of the new feature. This customer may have many end-users, so you also need to progressively (percentage rollout) release the new feature for the customer to minimize the "blast radius" (bugs and issues that may affect the end users' work). With the code implemented above, all you need to do is configure the release strategy as follows:


<img style="max-width: 800px;width: 100%;" src="/images/blogs/manage-features-for-different-customers/release-progressively.png" />
<br/>

10% of `Customer F`'s users or 10% of users at domain `tx.watermanager.xyz` can access the new feature. You can scale the percentage to roll out and roll back the feature (this is called a Progressive Release).

## Microservice architecture

If it's a back-end feature, and you can separate versions of the same service into different small projects. For example, you have 3 versions of the same feature, and each with its own image. 

You can write a feature flag in the code where you call the service that contains different versions. This method is more developer friendly.


<img style="max-width: 800px;width: 100%;" src="/images/blogs/manage-features-for-different-customers/micro-service.png" />
<br/>

You can also use a feature flag service to export the associated feature configuration to the microservice deployment file (such as yaml). In this case, the deployment configuration file will install the appropriate image based on the feature configuration file. This is a DevOps friendly solution.

```yaml
  ...
  
  ui:
    image: infmonkeys-fe-v1:latest
    restart: always
    
  microservicea:
    image: microservicea:latest
    restart: always

  microserviceb:
    image: microserviceb-v2:latest
    restart: always
    
  ...
```

Or you can also use traffic routing tools like Nginx, Istio, etc. It's more complicated than the two methods mentioned above. You should choose the proper method for your product when you deploy to a self-hosted environment. Using a third feature flag service (such as Launchdarkly, FeatBit) is a smart option. An open-source feature flag service (such as FeatBit) is always more flexible for you.

## Conclusion

All you need to do is use a mature feature flags service to implement the practice in your own code source. Then use its professional management service to manage your features. FeatBit provides a built-in UI portal for feature management. It also allows you to integrate feature flag management into your Retool system using FeatBit's workflow, open API & integration services.
