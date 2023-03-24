---
title: '5 concepts of A/B testing you should know'
description: "In this blog we are gonna talk about five data science concepts that you should probably know: AB Testing, SUTVA, Sampling, Hypothesis Testing, Bayesian testing"
publishedDate: '2023-03-25'
modifiedDate: '2023-03-25'
cover: '/images/blogs/5-ab-testing-to-know/front-pic-1.png'
tags: [ 'AB Testing', 'Conception' ]
authors: ['HU Beau']
url: 'Conception-of-AB-testing-You-Should-know'
---

This article is a transcript of youtube video **[5 concepts of A/B testing you should know as a Data Scientist](https://www.youtube.com/watch?v=0cyRCcCNVbs)**. You can watch the video to get a better experience.

----------------

In this blog we are gonna talk about five data science concepts that you should probably know before we get started.


## AB Testing

Starting hot at concept number one is A/B testing itself. I think the best way to explain AB testing is to actually start with an example so let's say that you're running an e-commerce platform and business looks pretty good, you get a lot of purchases on your site which is amazing. But then you start you know doing some data analysis and you see that a lot of the time people add to a cart but they don't actually complete the purchase. You think there's a lot of money that is probably just going out the window, because of this  you would be right in thinking so.

But how do we actually solve this problem, so one of your buddies one of your co-workers over there just says hey: why don't we just send emails out to people who have added to their card and just not completed their purchases. Maybe we can give them like a lead time of like three days so if they haven't completed a purchase in three days, then we'll be sending them emails saying hey "you have something in your cart, why don't you like finish that transaction? Because I think you need this product"

They put in a car and they just forgot it or they might just genuinely have lost interest in the product itself. But you don't know, and that's why we are conducting a test here as for particulars on how you would kind of conduct this test.

At a very high level is you have let's say millions of users or something, and then you'll only take a subset of these users and use them for the test. So you take these users split them into two groups: one group that gets no email at all; the other group that actually does get the emails and then we start sending the emails out to this one grou. Then we compare their purchase conversions over time.

<img style="max-width:800px;width: 100%;" src="/images/blogs/5-ab-testing-to-know/pic1.png" />
<br/>

If purchase conversion of the group that receives email is indeed greater than that that doesn't receive emails. Well you know you kind of have your win there and so you're able to close in an opportunity by probably just sending out emails. Maybe you know periodically or just you know a couple of days after a person has added to card and maybe just left it there. 

This kind of AB test is actually known as a holdout test and it is super common in ecommerce platforms and is also pretty widely successful too. It's a holdout test because we are holding out from sending emails to a group of users. Because one of these groups actually doesn't even receive emails. It's a very common test pretty easy to conduct and also can drive very high value to your company.


## SUTVA

This is now a good segue for concept number two sutva. Now sutfa stands for stable unit treatment value assumption. It's basically the fundamental assumption that needs to hold true when you are conducting an AB test. Reading off the wikipedia page here it states that the potential outcome or observation on one unit should be unaffected by the particular assignment of treatments to the other units.

What this is essentially saying is that let's say for example I'm a user in an AB test and then i have a buddy Sam who is also a user in an AB test and both of us receive emails. My probability of actually making a purchase should be completely independent of whether or not Sam decides to also make a purchase in email campaigns. 

Where users are typically just randomly selected in a holdout test, this is typically not of concern too much. Because it generally is just assumed to
be true, but depending on your problem the situation can be different. You might want to make sure that this assumption does hold true, if it doesn't hold true. That means that the output of your test just may be biased either in favor of one group or the other. And if it's biased that means the results might be inaccurate or just like not predictable. 

So you want to make sure that this assumption is true before conducting your test let's go into some more details. 


## Sampling
On topic number three which is sampling and distributions. A question that you might ask here is why didn't we just send the email to all of our users and why are we only sending it to us few sub samples of them. Well let's say that we have like millions of users on our platform, and let's say we do send an email. What if that email just has no effect or even worse. What if the email had a negative effect on users if we were to send it to such a large scale of users then that means we would observe that negative effect like many times over which is catastrophic in some cases.

Depending on the situation and the problem, so what we would do is we would try to get a subset of the total number of users that is representative of all users and this subset is what we call a sample, and the total users is the population. So essentially we are trying to get a good sample that represents the population. 


<img style="max-width:800px;width: 100%;" src="/images/blogs/5-ab-testing-to-know/sampling.png" />
<br/>

Another term that we've thrown around is the term distribution which is essentially a curve of probabilities of these users or of these samples. So sometimes data can be modeled as a normal distribution or a log normal distribution or some other many types of distributions that are out there. Since the population is typically large we don't know its distribution, so we would take a subset of users and analyze their distribution. 

So that's the sample's distribution and using the samples distribution we would conduct experiments make verdicts make decisions. The idea here is that the samples distribution is representative of the total population's distribution. So we're able to make appropriate decisions that are representative of the millions of users on your platform. It's typically these samples and sampling distributions that are used in AB tests coming on to our next topic of interest.


## Hypothesis Testing

Which is concept number four and that is hypothesis testing. Hypothesis testing is essentially a framework of implementing an AB test. It's a type of AB test where we have a hypothesis and we try to prove it with sampling data in our current e-commerce. 

Setup our hypothesis would be something like sending emails does not affect purchase conversion. The way that we would typically implement this is we would now take a sub-sample of our population which is a small group we split into two groups, then we now have a control group which does not receive any emails, and then we have a test group which actually does receive those emails. So when we conduct an experiment and try to monitor purchase conversion for these two groups,  we want to see we want to actually prove or disprove the initial hypothesis in the end. We want to make a verdict to see how ridiculous or plausible our initial hypothesis was. 

When we make that verdict that leads to an actionable decision, a lot of the interview questions i see typically revolve around hypothesis testing. So i do think it's super important and super useful to know coming on to topic number five.

## Bayesian testing

This our final topic here and it is bayesian testing. Like hypothesis testing, bayesian testing is another framework of implementing an AB test. Bayesian testing relies on the famous bayes rule. Let's say in this formulation, `p` is a probability distribution, `a` is purchase conversion and `b` is just the sampled and observed data that we're seeing when conducting the experiment of comparing users with who receive emails and users who don't receive emails.

So the way that you would kind of break this formulation down is that we have some prior knowledge of how purchase conversion is for users who don't receive emails. We then conduct the experiment and then update our beliefs on how users behave. If they were to receive emails and so we have a prior and a posterior. Posterior meaning after having some knowledge or after seeing the data, prior is before seeing the data.


<img style="max-width:800px;width: 100%;" src="/images/blogs/5-ab-testing-to-know/bayesian.png" />
<br/>

If you kind of understand these symbols in their inherent meaning and how they're actually used as like prior and posterior. I think it becomes easier to memorize this formulation and you don't have to spend too much time on it. 

Bayesian testing is something I increasingly use in my work and it is super fun to know and also very useful. Although I do expect only like fundamental questions and foundational questions to be asked during an actual interview. A lot of the interview questions are typically hinged on hypothesis testing since that's more widely adopted in academia. I guess that's what students learn in general to begin with.