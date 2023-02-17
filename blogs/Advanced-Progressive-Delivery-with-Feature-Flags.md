---
title: 'Advanced Progressive Delivery with Feature Flags'
description: 'Advanced Progressive Delivery with Feature Flags'
publishedDate: '2023-02-17'
modifiedDate: '2023-02-17'
cover: '/images/blogs/progressive-delivery-with-feature-flag.png'
tags: ['progressive delivery', 'feature flags', 'testing in production']
authors: ['HU Beau']
url: 'Advanced-Progressive-Delivery-with-Feature-Flags'
---



<!-- **Table of contents**

[1. Progressive delivery with feature flags](#Progressive-delivery-with-feature-flags)

[2. Progressive delivery by customized user attributer](#progressive-delivery-by-customized-user-attributer)

[3. Another paragraph](#paragraph2) -->



## Progressive delivery with feature flags

Feature flags enable progressive delivery whereby a feature is gradually released to a larger percentage of users to ensure that it performs as expected, enabling teams to detect problems earlier and reduce the impact of any issues. 

Suppose a feature is causing problems during the rollout. In that case, you can roll back the feature from the issue audience, solving the problem immediately without the need to roll back a complex release that may contain multiple critical features or fixes. 

<img style="max-width:900px;width: 100%;" src="/images/blogs/progressive-delivery-with-feature-flag-0.png" />


## Progressive delivery by customized user attributer

Many open-source feature flag tools allow you to release a feature progressively. For example, you can roll out a feature to 5% of users, then to 25%, 50% until 100%. The rollout is assigned to a variation randomly. The assignment algorithm is often based on the composition of the user ID and feature key.
In some scenarios, this simple rollout method can't achieve the needs, for example:

- GitBook has more than thousands of documentation projects, each of which is made up of multiple editors. When GitBook rolls out the new Squash Merge feature, it should be visible to all members of a documentation project, not just some of them. 
- Slack has more than thousands of organizations. When Slack rolls out the new feature "Dynamic Emoji generation", it should be visible to all members of a documentation project, not just some of them.

Today, open-source feature-flag tools like Unleash and [FeatBit](https://github.com/featbit/featbit) provide an advanced rollout solution that allows you to roll out a feature progressively based on a custom user attribute. 


<img style="max-width:900px;width: 100%;" src="/images/blogs/progressive-delivery-with-feature-flag.png" />

For example, as shown below, you can use UI to release the "Squash Merge" feature to 10% of projects instead of users. This keeps users on the same project always having the same features. If everything is OK after a while (several hours or days), you can continue to roll out the feature to a larger percentage of projects.

<img style="max-width:900px;width: 100%;" src="https://user-images.githubusercontent.com/68597908/215259949-19159fc4-3ded-4df4-aa64-0deca41982a1.png" />

## Why not use traffic routing technology

Suppose a new deployment contains multiple features, and the feature release strategies differ. In that case, you must prepare multiple build packages and deploy them to multiple machines/containers/pods/else. You must also set a complicated traffic routing rule to dispatch traffic. This is such huge work and easy to do wrong things. 

If the new deployment contains one feature, you still need to set the rules in the traffic routing tool. You must fetch user information to split the traffic to the new feature's server/container/service. You also need an independent Identity Server to fetch user information before the user loads the application. It's complicated enough, and only Ops engineers can do it.


