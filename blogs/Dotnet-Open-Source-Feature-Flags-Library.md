---
title: '.NET/C# open source feature flags library'
description: '.NET/dotnet/C#, Free and Open source open source feature flags library'
publishedDate: '2023-03-21'
modifiedDate: '2023-03-21'
cover: '/images/blogs/dotnet-sdk/front-pic-1.jpg'
tags: ['SDKs']
authors: ['HU Beau']
url: 'Dotnet-Open-Source-Feature-Flags-Library'
---

-----------------------

## Overview

FeatBit has created a free and open source feature flags library (SDK) for .NET (C#).

This library allows .NET (c#) developers to decouple code deployments from feature releases, giving you control over who sees each feature and when they see it.

This SDK can be used locally in .NET projects with no other dependencies (e.g. network, remote control centre, etc.). It can also be used with a Feature Flags Service Centre that empowers all teams to deliver and control their software.

For more details, the links below will take you to the relevant GitHub repositories:

[FeatBit .NET library (SDK)](https://github.com/featbit/featbit-dotnet-sdk) | [FeatBit Feature Flags Service Center (Written also in C#)](https://github.com/featbit/featbit)

## Installation

The latest stable version is available on [NuGet](https://www.nuget.org/packages/FeatBit.ServerSdk/).

```
dotnet add package FeatBit.ServerSdk
```

## How to use 

The following code demonstrates basic usage of FeatBit.ServerSdk.

<img style="max-width: 700px;width: 100%;" src="/images/blogs/dotnet-sdk/how-to-use-code.png" />
<br/>

If the return value of the evaluation function `client.BoolVariation()` is `true`, then execute the feature code. Otherwise, run another version of the feature code or do nothing.

[More information on FeatBit .NET library (SDK) GitHub repo](https://github.com/featbit/featbit-dotnet-sdk)

<!-- ## Best practice

This library contains various features that enables teams to use flags on a massive scale across various use cases:

- **Trunk-based development**. You can use feature flags to wrap up your feature code, if feature flag is turned off, the feature code wouldnt't be executed. You can comfortably merge imperfect code with the main branch in your version control system today and then pick up where you left off tomorrow. If the mainline gets pushed to the release branch, no sweat; users will be unable to interact with your flagged code.
- **Testing in Production**. The FeatBit's .NET library allows you to selectively enable or disable certain features or functionality for specific users or groups of users, which means you can test new features in the real world (Testing in Production) with a small subset of users before rolling them out to everyone. 
- **Progressive Release**. also known as a gradual rollout, involves gradually increasing the percentage of users who have access to the new feature. For example, a developer may release a new feature to 10% of users initially, and then gradually increase the percentage over time as they monitor the performance and collect feedback.
- **Fine-tune target audiences and manage entitlement**. By configuring the feature flag release strategy, you can create customized experiences for individual users or groups of users based on their preferences, behavior, or other characteristics. Here's an example of the feature flag configuration. -->

### Use library locally

You can set up a bootstrap configuration file to define your feature flag strategies. This configuration file can be exported from the UI Portal or the API. An example of configuration file can be found at the following link: [Featbit bootstrap file](https://github.com/featbit/featbit-dotnet-sdk/blob/main/bootstrapping/tests/FeatBit.ServerSdk.Tests/Bootstrapping/featbit-bootstrap.json)

The configuration file contains all the feature flag release strategies, including individual targeting users, custom rules, reusable segment, etc.

Then load the feature flags config file into your program using FeatBit's dotnet SDK:

```csharp
using FeatBit.Sdk.Server.Options;

var json = File.ReadAllText("featbit-bootstrap.json");

var options = new FbOptionsBuilder()
    .Offline(true)
    .UseJsonBootstrapProvider(json)
    .Build();

var client = new FbClient(options);
```

This is also called `Offline mode`, you can visit [offline-mode & Bootstrapping sections in documentation](https://github.com/featbit/featbit-dotnet-sdk/tree/main/bootstrapping#offline-mode) to get more information.



### Use library with Feature Flagging Service Center

With a Feature Flags Service Centre, all of the above configuration can be done from the UI. For example, the image below shows how to add beta users to test a feature in production.

<img style="max-width: 800px;width: 100%;" src="/images/blogs/dotnet-sdk/UI-Config-TIP.png" />
<br/>

The update happens in real time. As soon as you save the feature flag setting in the UI Portal, your .NET library will receives the update and evaluates feature flags with the latest configuration. 

Often feature flags are used not only within a .NET application, but in conjunction with the entire product system. For example, in a subscription management scenario for a To-B product, the front-end application and the back-end application may need to share the same feature flag in order to correctly manage entitlements for a particular customer.


**This empowers all teams to deliver and control their software.**

For more details, the links below will take you to the relevant GitHub repositories:

[FeatBit .NET library (SDK)](https://github.com/featbit/featbit-dotnet-sdk) | [FeatBit Feature Flagging Service Center (Written also in C#)](https://github.com/featbit/featbit)

## Compare with Microsoft FeatureManagement

Microsoft.FeatureManagement integrates cleanly with ASP.NET Core. It supports things like hot reloading and support for easily creating custom filters based on your own application logic/models. 

FeatBit's .NET SDK isn't yet tightly integrated with ASP.NET Core, but it does support more flexible custom filters. 

It provides more usage scenarios with FeatBit's Feature Flagging Service Centre. In addition to what I mentioned in the "Using the library with Feature Flagging Service Centre" section, FeatBit's .NET SDK can track feature usage insights and custom events. You can export this data to a 3rd party data analysis platform or run the experiments directly in FeatBit.


## Conclusion

We've release our first version of .NET feature flags library, we will continuously support more functionnalities and to make it more friendly to C#, .NET, and asp.net core developers.

