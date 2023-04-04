---
title: 'Developer Tool 2.0 - LLM Powered Feature Flags & Experimentation Management Service'
description: "Explore how ChatGPT, a powerful language model, can address practical programming pain points, such as removing dead feature flags and streamlining developer tool onboarding. This article dives into real-world use cases and experiments with GPT-3.5 and GPT-4 to demonstrate the potential of these models in the software development landscape. Learn how ChatGPT's capabilities are expected to improve with more data and fine-tuning, revolutionizing the way developers and non-engineers interact with code."
publishedDate: '2023-04-03'
modifiedDate: '2023-04-03'
cover: '/images/blogs/LLM/front-pic-developer-tool.jpg'
tags: ['GPT (LLM)']
authors: ['HU Beau']
url: 'LLM-Introducing-FeatBit-ChatGPT-Powered-FeatureFlags-Service'
---


As ChatGPT (Large Language Model) has gained popularity, terms like Prompt Engineer, Prompt Ops, and LLM Ops have emerged. This got me thinking about whether this powerful model could be applied to practical programming scenarios. So, I decided to test its abilities in a couple of pain points with the Feature Flags on the FeatBit service. I found that both the GPT-3.5 API and GPT-4 Chat interfaces produced impressive results. However, despite fine-tuning the model to a certain extent, the performance of GPT-3 still fell short of my expectations. In this article, I'll describe the two scenarios I tested in more detail:

- Utilize ChatGPT for eliminating dead feature flag code
- Leverage prompts for developer tool onboarding

## Reduce Tech Debt - Remove Dead feature flags

A straightforward way to use a feature flag in a codebase is with an if/else statement, like so:

```csharp
public string UP(FbClient featureFlags)
{
    var user = FbUser.Builder("anonymous").Build();
    var ifC = featureFlags.BoolVariation("ui-c", user, defaultValue: false);

    string total = "0", num1 = "3", num2 = "12";
    if (ifC == true)
    {
        return total + num1 + num2;
    }
    return total;
}
```

Once a feature is fully implemented and delivered, or an experiment is completed and a winner is determined, one of the code paths will no longer be executed, necessitating the removal of the "dead" code. When frequently working with feature flags, you or your colleagues might inadvertently remove the incorrect code or overlook certain areas indirectly controlled by the feature flags. Although this may happen infrequently, it can still have an impact on your business and the entire development team.

### Remove dead feature flags with chatGPT3.5 & 4

I attempted to utilize ChatGPT to eliminate dead feature flags and associated code. For the initial trial, I employed [chatGPT 3.5's ChatCompletion](https://platform.openai.com/docs/guides/chat/introduction) method. I provided ChatGPT with clear instructions on what needed to be done and supplied it with "pre-training/fine-tuning" examples.

The image below presents a fine-tuning Prompt/Completion pair example. On the left side, there is code containing dead feature flags and related code. Conversely, on the right side, you can see the cleaned-up version of the code after the removal of dead feature flags.

<img style="max-width: 800px;width: 100%;" src="/images/blogs/LLM/tech-debt-fine-tune.png" />
<br/>

I provided six additional examples demonstrating the use and removal of feature flags to ChatGPT-3.5-turbo.

Next, I tested ChatGPT by giving it a code snippet along with the same instructions to see if it could accurately remove dead feature flags and their associated dead code.

<img style="max-width: 800px;width: 100%;" src="/images/blogs/LLM/tech-debt-removing.png" />
<br/>

As seen in the image above, the results are truly fascinating. This simple text demonstrates ChatGPT's potential to address a major pain point that no other solution has resolved thus far.

However, upon testing it with a wider range of scenarios, it becomes apparent that more fine-tuning examples are needed for better performance. Unfortunately, as of now, fine-tuning is not available for ChatGPT-3.5 or ChatGPT-4. But fear not, it's only a matter of time!

As time progresses, ChatGPT will likely offer more fine-tuning options to users, and other open-source large language models will gain similar capabilities. This prospect fills me with great hope.

#### text-davinci-003 & ChatGPT 3 

I attempted to fine-tune the `chatGPT-3` model using the same example data, but unfortunately, it didn't yield any useful results. I also experimented with the `text-davinci-003` model, which produced satisfactory outcomes, but at a higher cost.


## Optimal Developer Tools Onboarding Experience

Leveraging ChatGPT's code completion and code insertion capabilities, developers can effortlessly initialize FeatBit in their existing projects with just a simple prompt. Even without fine-tuning, you can utilize chat-completion to have GPT-4 read the GitHub documentation and learn how to use FeatBit's SDK.

The image below illustrates the trial steps:

1. I input the FeatBit .NET SDK documentation into ChatGPT-4.
2. I copy the code source from an ASP.NET Core 7's Program.cs file.
3. instructed GPT-4 to initialize FeatBit's .NET SDK within the code source.
4. GPT-4 returned the modified code after initialization.

<img style="max-width: 800px;width: 100%;" src="/images/blogs/LLM/onboarding.png" />
<br/>

While GPT-4 performed well, it added some unnecessary code at the top of the file:

```csharp
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
```

Although not perfect, this fascinating trial showcases a new approach to developer tool onboarding. It highlights a novel interaction method between code and developers, as well as code and non-engineers.

Copilot currently lacks this capability, but it's plausible that it will eventually offer an interface for developer tools to fine-tune and create plugins for Copilot.

## False Positive

At present, both GPT-3.5 turbo and GPT-4 have demonstrated their potential to outperform humans in certain tasks. What they currently lack in accuracy can be improved through pre-training and fine-tuning with more data and real-world use cases.

While there may be instances of false positives when addressing feature flag technical debt or initializing SDKs, the performance of these models will continue to improve as they are fed more practical use cases.

## Conclusion

ChatGPT has shown immense potential in addressing practical programming pain points, such as removing dead feature flags and enhancing developer tool onboarding. While the current performance may not be perfect, it is important to remember that we are still in the early stages of exploring the capabilities of these language models. As more data and real-world use cases become available for pre-training and fine-tuning, we can expect to see significant improvements in the accuracy and usefulness of ChatGPT in a variety of programming scenarios. This not only promises to revolutionize the way developers interact with code, but also paves the way for more accessible and efficient solutions for non-engineers. The future of ChatGPT and similar models is bright, and we eagerly anticipate the advancements they will bring to the software development landscape.

For more information, please visit [FeatBit's GitHub repository](https://github.com/featbit/featbit/tree/main/llm).


**By the way, I'm not a Python developer, it took me 30 minutes to install and grasp the basics of Python. I successfully completed my ChatGPT Python CLI program using only Copilot and ChatGPT-4.**.