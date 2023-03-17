---
title: 'Some approaches to reduce your software delivery risk'
description: 'Minimising and reducing software delivery risk with feature flags'
publishedDate: '2023-02-28'
modifiedDate: '2023-02-28'
cover: '/images/blogs/minimize-delivery-risk/feature-flags.png'
tags: ['Best Practice']
authors: ['HU Beau']
url: 'Minimize-delivery-risk'
---

-----------------------

## Introduction

Delivering software is a complex process involving many different factors. From defining requirements to testing and deploying the software, there are many steps involved in the delivery process. However, the goal is always the same: to deliver software on time, that meets customer expectations, and that is free of bugs and defects. In this blog, I will discuss several technical approaches that can be used to minimise software delivery risk.


## Trunk-based development

<img style="max-width: 800px;width: 100%;" src="/images/blogs/minimize-delivery-risk/trunk-based-dev.jpg" />
<br/>

Trunk-based development (TBD) is the practice of continuously merging code into the trunk and avoiding long-lived feature branches. This practice is considered a complement to continuous integration and has been proven to reduce delivery risk over the years. 

TBD encourages short-lived branches that are merged quickly into the trunk. This makes it easier to review changes and ensures that code reviews are conducted on a regular basis, rather than only when a feature is completed. TBD encourages also small, incremental changes that are easier to review and less likely to introduce issues. This makes the code review process more efficient and effective.

By working on a shared trunk, team members can more easily collaborate and share knowledge. This can improve the quality of the codebase and reduce the likelihood of issues arising. TBD helps ensure code consistency by encouraging all changes to be made directly to the trunk. This makes it easier to enforce coding standards and identify and correct issues in the codebase.

Overall, the more frequently you merge, the less code you need to review for each PR, the less risk of human error.

## Code security scanning


<img style="max-width: 800px;width: 100%;" src="/images/blogs/minimize-delivery-risk/code-security-scan.png" />
<br/>

Code security scanning can play a crucial role in reducing software delivery risk. Here are a few ways in which it can help:

Code security scanning can detect security vulnerabilities in the codebase that might otherwise go unnoticed. This can include vulnerabilities such as SQL injection, cross-site scripting (XSS), and insecure authentication mechanisms. By identifying these vulnerabilities early in the development process, teams can take proactive steps to address them and prevent them from being deployed to production.

Security scanning can be integrated into the development pipeline to provide continuous monitoring of the codebase. This can help detect issues early in the development process, before they become more costly and time-consuming to fix.

Overall, code security scanning helps to ensure that software changes are reliable and secure.

## Tests Run Before Deploy

Some automated and manual tests should be implemented and run prior to deployment. 

- Automated unit tests are designed to test individual pieces of code in isolation. With these tests, teams can ensure that individual components are working as expected. 
- Manual QA tests are performed by human testers and involve the testing in different scenarios. With these tests, teams can ensure that the software is functioning as expected.
- Acceptance tests are designed to ensure that the software meets the requirements. By performing these tests, teams can ensure that the software meets the needs of users.
- Performance tests are designed to test the scalability and performance of the software. By running these tests, teams can identify potential performance bottlenecks.
- Etc.

Try to create these tests if they don't exist in your pipeline. It's not as complicated as you think.

## Canary Deployment

Canary deployment is a deployment strategy where a new version of the application is released to a small percentage of users first, before rolling it out to the rest of the user base.

By releasing a new version of the application to a small percentage of users first, teams can quickly identify issues that might not have been caught in testing. Since canary deployment only releases the new version to a small percentage of users, any issues that are identified will only affect a small percentage of users.

Overall, canary deployment can help ensure that new versions of the application are released smoothly and with minimal risk to users.

## Feature flags

Feature Flag is a powerful technique for reducing software release risk by allowing teams to test new features in production without impacting all users at once. By using feature flags, teams can control which users or groups of users have access to new features, allowing them to test the features with a limited audience and gather feedback before rolling them out to everyone.

<img style="max-width: 800px;width: 100%;" src="/images/blogs/minimize-delivery-risk/feature-flags.png" />
<br/>

There are three main differences between classic Canary Deployment and Feature Flags. 

First, Feature Flag delivers and controls a feature or piece of code, not an entire application. If one of the new features broke, other features could still work without the disorder. 

Second, feature flags decouple code deployments from feature releases, allowing the feature to be rolled back from users without redeployment. 

Finally, Feature flags are created and managed directly by developers and can be used by developers without DevOps and Ops.

### Testing in production

It’s impossible to replicate a production environment. The only sure way to know how a feature will perform in the real world is to test it with real users. Feature flags give you the control you need to test in production safely. Take advantage of FeatBit's targeting capabilities to expose a new feature to a subset of specific users. If system performance suffers, you can halt the rollout and limit the blast radius of the incident. But if all goes well, you can gradually release the new feature to a wider audience.

### Release features progressively

Release progressions are a key tenet of Progressive Delivery. They give teams the confidence to move fast without breaking things. FeatBit allows for precise user targeting and feature flag rules that open the door to all kinds of targeted rollouts: ring deployments, percentage deployments, canary launches, and so on. These targeted, incremental release strategies, or release progressions, involve far less risk than big-bang waterfall releases.


## Conclusion

In summary, several technical practices can be used to reduce software delivery risk (as well as some techniques I haven't mentioned above). By combining these practices, teams can significantly reduce the risk of software delivery, ensuring that new features are rolled out smoothly and with minimal impact on users.