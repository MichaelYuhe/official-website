---
title: 'Best Free and Open Source Feature Flag Tools'
description: 'Best Free and Open Source Feature Flag Tools'
publishedDate: '2023-02-19'
modifiedDate: '2023-02-19'
cover: '/images/blogs/open-sourece-feature-flag-tools-review/front-pic-1.png'
tags: ['open source', 'feature flags']
authors: ['HU Beau']
url: 'Free-and-Open-Source-Feature-Flag-Tools'
---


## Overview

Feature flag is a modern engineering technology that decouples code deployments from feature releases, giving you control over who sees each feature and when they see it. You can visit another blog to get more information - [best practices with feature flags](https://www.featbit.co/blogs/Feature-Flags-Best-Practice-I-Overview).

In this guide, I’ll explore some of the best open source feature flag tools, all of which are either totally free or offer open-core free plans. It includes:  [FeatBit](https://github.com/featbit/featbit) | [Flagsmith](https://github.com/flagsmith/flagsmith)  | [Growhtbook](https://github.com/growthbook/growthbook)  | [Unleash](https://github.com/Unleash/unleash)

In this guide, I will review these tools in three dimensions:

1. **Basic information**, such as open-source license, who is each feature flagging tool for, etc.
2. **Features Comparison**, the features each offers in its open-source version.
3. **SDKs Comparison**, the SDKs each feature flagging tool offers and their differences.
4. **Benchmark**, the performance report found in each tool's official websites.

## Basic information

This section will introduce feature flag tools' basic information, it includes:

- Open-source license.
- What programming language is the project written in.
- Who is the feature flagging tool for.
- One significant difference from other products.
- Founded year.

##### FeatBit

FeatBit is a scalable and 100% open-source feature management tool. It's mainly written in C#. FeatBit uses the MIT license.

FeatBit is designed to empower all teams to deliver, control, and experiment with their software. It empowers engineers to deliver faster and safer, meanwhile empowering all teams to speed up their product's innovation and monetization. 

GitHub address: [https://github.com/featbit/featbit](https://github.com/featbit/featbit)

Significant difference: 100% Open Source.

Founded year: 2021.

##### Flagsmith

Flagsmith is an open-source feature flag & remote config service. It's mainly written in python. [License of Flagsmith](https://github.com/Flagsmith/flagsmith/blob/main/LICENSE.md).

Flagsmith is for product-conscious front-end developers who want to be able to test new features in production and roll them out at the right time without having to modify the back-end.

GitHub address: [https://github.com/flagsmith/flagsmith](https://github.com/flagsmith/flagsmith)

Significant difference: Remote config.

Founded year: 2018.

##### Unleash

Unleash is an open-source feature flag tool. It's mainly written in Typescript. It uses the Apache-2.0 license.

Unleash is for development teams who want freedom and creativity to test their releases in a safe environment and ensure consistent performance for all users.

GitHub address: [https://github.com/Unleash/unleash](https://github.com/Unleash/unleash)

Significant difference: Most starred on GitHub.

Founded year: 2019.

##### Growthbook

Growthbook is an open-source feature flag and a/b test tool. It's mainly written in typescript. Growthbook uses the MIT license.

GrowthBook is designed to be used by any data-driven team in your company, with SDKs built with developers in mind, transparency and automation for data-analysts and an accessible user-interface for product managers.

GitHub address: [https://github.com/growthbook/growthbook](https://github.com/growthbook/growthbook)

Significant difference: Powerful A/B test.

Founded year: 2020


## Features

This section will compare the features offered in each tool's open-source & free version. I will separate features into five modules to compare:

- **Flag targeting**, the features that allow you to control who sees each feature and when they see it.
- **Managing Flags**, the features that help you organize and manage feature flags better.
- **Integrations & API**, the features that allow other APPs to communicate with the feature flagging system.
- **Workflow**, the features that help to automate manual tasks to a reusable workflow.
- **Security & Compliance**, the features to protect data and networks so that the program aligns with the customer's required compliance standards.
- **Others**, other independent features which are not mentioned above.

I used release version below for the comparison of feature flagging tools:

<img style="max-width: 768px;width: 100%;" src="/images/blogs/open-sourece-feature-flag-tools-review/table-release-version.png" />
<br/>

#### Flag targeting

The features in Flag Targeting module allow you to control who sees each feature and when they see it. Here's the comparison list.

>
> "**V**" means the product provides the feature free and open-source.
>


<img style="max-width:800px;width: 100%;" src="/images/blogs/open-sourece-feature-flag-tools-review/table-flag-targeting.png" />
<br/>

All tools allow you to do Testing in Production and Progressive Release. But without features offered by FeatBit, you will lose essential capabilities of delivery & innovation:

- "Advanced rollout algorithm by custom attribute" is practical when you want to progressively release a feature based on an attribute(for example, Slack organization). It prevents users in the same group on Slack from seeing different versions of a feature.
- "Reusable segments" are helpful for keeping groups of users, like beta-users or enterprise-customers, up to date. They allow you to more quickly turn features on or off for certain groups with confidence.
- "End-user management" features give you a summary view of how each user experiences all of the features in your app. During the progressive release, you need this information to get how to improve the product quality.
- "AB testing traffic split based on existing feature flag rollout strategy" allows you to do A/B testing during the progressive rollout. It gives you more chances to provide the best product before releasing the feature to broader users.

#### Managing Flags

Managing Flags Module help you to organize and manage feature flags better. Here's the feature list that each feature flagging tool offers:

<img style="max-width:800px;width: 100%;" src="/images/blogs/open-sourece-feature-flag-tools-review/table-managing-flags.png" />
<br/>

With these features, you can easily search and manage feature flags across different environments of a project. Growthbook and Unleash currently offer more features.

#### Integrations & API

Integrations & API Module allow other APPs to communicate with your feature flagging system. Here's the feature list that each feature flagging tool offers:

<img style="max-width:800px;width: 100%;" src="/images/blogs/open-sourece-feature-flag-tools-review/table-integration-n-api.png" />
<br/>

All feature flagging tools (mentioned on the list) offer this module's free and open-source features. As a 100% open-source feature flagging tool, FeatBit will continuously provide more open-source features than others.

#### Workflow

The Workflow Module features help automate manual tasks into a reusable workflow. Combining Workflow and Integration can build a more flexible and automated working process.

- You can trigger a workflow in your DevOps CI/CD pipeline.
- You can automate your feature release strategies with constraints and predefined dates.
- Feature can be rolled back automatically when the monitoring system observe an issue.
- Etc.

Here's the feature list that each feature flagging tool offers in their free & open-source version:

<img style="max-width:800px;width: 100%;" src="/images/blogs/open-sourece-feature-flag-tools-review/table-workflow.png" />
<br/>

As shown above, Unleash, Flagsmith, and Growthbook put features in their paid version. Only FeatBit is offering the free & open-source version.

#### Security & Compliance

The features are often designed to protect customers' data,  networks and privacy so that the program aligns with the customer's required compliance standards.

<img style="max-width:800px;width: 100%;" src="/images/blogs/open-sourece-feature-flag-tools-review/table-security-n-compliance.png" />
<br/>

As shown above, Unleash, Flagsmith, and Growthbook put related features in their paid version. Not all features can be open-source because of the Security & Compliance required of a customer, but some can. FeatBit offers a free & open-source version for some related features.

#### Others

I also list some independent features which are not mentioned above.

<img style="max-width:800px;width: 100%;" src="/images/blogs/open-sourece-feature-flag-tools-review/table-others.png" />
<br/>

As shown above, FeatBit and Growthbook allow users to invite unlimited team members, and create unlimited projects and environments in their free & open-source versions.

FeatBit and Growthbook provide a free & open-source built-in ab testing system.

FeatBit provides a light version; you can integrate it into your product and deploy them together to your customer's private environment. You can use the FeatBit center service to remotely control your features deployed in the customer's private environment. With this light version, you can also collect feature usage data (or other custom events). The data can be analyzed or exported in your FeatBit center service. It means you're free to install FeatBit in any environment.

## SDKs

SDKs allow developers quickly write feature flag code to wrap up feature code and control the feature. In this section, I will compare feature flagging tool SDKs in two dimensions:

- Which SDKs that each feature is flagging service support.
- What's the difference between each feature flagging tool's SDK design.

#### SDKs that each feature flagging service support 

In this section, I will separate SDKs into two groups to compare: one for back-end SDKs and another for web APP and mobile APP SDKs.

>
> "**V**" means the feature flagging tool officially support the SDK.
>

##### Back-end SDKs comparison

<img style="max-width:800px;width: 100%;" src="/images/blogs/open-sourece-feature-flag-tools-review/table-server-side-sdk-1.png" />
<br/>

As shown above, Unleash and Flagsmith offer more server-side SDKs.

##### Web APP & Mobile APP SDKs comparison

<img style="max-width:800px;width: 100%;" src="/images/blogs/open-sourece-feature-flag-tools-review/table-client-side-sdk-1.png" />
<br/>

As shown above, Unleash and Flagsmith offer more Web APP & Mobile APP SDKs.


#### The difference between each FF tool's SDK design

Besides the number of SDKs supported by the feature flagging tool, I will compare the difference between them in this section.

I will separate SDKs into two groups to compare: one table for back-end SDKs and one for web APP and mobile APP SDKs.

##### Back-end SDKs comparison

Here are seven metrics I used to compare. The more metrics the SDK achieved, the better design of the SDK.

- **Caching flags**, whether the SDK's feature flags configuration is cached in memory.
- **Real-time sync**, whether the SDK can receive the feature flag update in real-time.
- **Communication method**, how SDK is connecting to feature flagging service.
- **Bootstrap without network**, whether the SDK can bootstrap and work without a network.
- **Local evaluation**, whether the SDK evaluates the feature flag locally without sending a request to the feature flagging service.
- **Local backup**, whether the SDK stores the latest feature flag config status in persistent storage can be used to bootstrap later.
- **Usage metrics**, whether the SDK can record the usages of feature flags and send data back to the feature flagging service.

Here's a comparison result of whether each feature flagging tool's SDK achieves the metrics.

>
> "**V**" means the feature flagging tool has reached the corresponding metric.
>

<img style="max-width:800px;width: 100%;" src="/images/blogs/open-sourece-feature-flag-tools-review/table-server-side-sdk-2.png" />
<br/>

Obviously, FeatBit won this comparison. 

##### Web APP & Mobile APP SDKs comparison

Here are seven metrics I used to compare. The more metrics the SDK achieved, the better design of the SDK.

- **Caching flags**, whether the flag's evaluated result is cached in memory.
- **Real-time sync**, whether the feature flag's result is updated in real-time.
- **Communication method**, how SDK is connecting to feature flagging service.
- **Bootstrap**, whether the SDK can bootstrap and work without a network.
- **Local backup**, whether the SDK stores the latest flag's evaluated result in persistent storage can be used to bootstrap later.
- **Usage metrics**, whether the SDK can record the usages of feature flags and send data back to the feature flagging service.
- **DevMode**, whether the developer can switch the flag variation within UI without changing code.

Here's a comparison result of whether each feature flagging tool's SDK achieves the metrics.

>
> "**V**" means the feature flagging tool has reached the corresponding metric.
>

<img style="max-width:800px;width: 100%;" src="/images/blogs/open-sourece-feature-flag-tools-review/table-client-side-sdk-2.png" />
<br/>

Obviously, FeatBit won this comparison.

## Benchmark

- **FeatBit**: [Open source feature flag service performance tested on AWS free tier EC2](https://www.featbit.co/blogs/Free-and-open-source-feature-flag-service-benchmark-I)

- **Unleash**: No report found.

- **Flagsmith**: No report found.

- **Growthbook**: No report found.

## End summary

This article reviewed four OS feature flagging tools (FeatBit, Flagsmith, GrowthBook, and Unleash) in three dimensions (Basic information, Feature comparison, and SDK comparison).

All those tools are on the way to making better software, but FeatBit offers more open-source features.

If you're looking for a FOSS feature management service, FeatBit should be your first choice. BTW, you're free to install FeatBit in any environment.

----------------

[FeatBit official Website](https://featbit.co) | [FeatBit GitHub](https://github.com/featbit/featbit)