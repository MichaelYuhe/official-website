---
title: 'Open source feature flag service (written in C#) performance tested on AWS free tier EC2'
description: 'Open source feature flag service (written in C#, DotNet, Csharp, .NET) performance tested on AWS free tier EC2'
publishedDate: '2023-02-28'
modifiedDate: '2023-02-28'
cover: '/images/blogs/benchmark/front-pic-1.png'
tags: ['open source', 'feature flags', 'free']
authors: ['HU Beau']
url: 'Free-and-open-source-feature-flag-service-benchmark-I'
---

-----------------------

## Overview

FeatBit's Evaluation Server is a real-time feature flag management service designed to be scalable and fast. To ensure that the Evaluation Server can handle concurrent users effectively, it is necessary to conduct performance tests to determine its capacity to handle new evaluation connections per second. This article presents the results of such tests performed on the Evaluation Server in an isolated minimum environment.

The Evaluation Server was expected to handle more than 1000 new evaluation connections per second with an acceptable error rate of less than 1%. The 99th percentile (P99) response time was expected to be less than 200 milliseconds. These requirements were set to ensure that the Evaluation Server could provide a high level of service to users and maintain its scalability.

## General Test Conditions

The tests were designed to simulate real-life usage scenarios. The following test conditions were considered:

- Number of new WebSocket connections established (including data-sync **(1)**) per second
- The average P99 response time **(2)**
- User actions: make a data synchronisation request after the connection is established

**(1)** data-sync (data synchronisation): the process by which the evaluation server evaluates all of the user's feature flags and returns variation results to the user via the WebSocket.

**(2)** response time: the time passed before data synchronisation request sent and after the response is received.



## Environment

For the tests, a commonly available AWS EC2 service was used to host the Evaluation Server service. The instance type selected was **t2.micro with 1 vCPU and 1 GiB RAM**, which is **free tier** eligible. Using an EC2 instance minimized the impact of network latency on the results.

## Tests Performed

- **Test duration**: 180 seconds
- **Load type**: ramp-up from 0 to 1000, 1100, 1200 new connections per second
- **Number of test**: 10 for each of the 1000, 1100 and 1200 per second use case

## Test Results

The results of the tests showed that the Evaluation Server met the desired quality of service only up to a certain limit load. The service was able to handle up to 1100 new connections per second before errors began to occur. Beyond that point, some errors were observed.

**The response time**

| Number of new connections per second | Avg (ms) |	P95 (ms) | P99 (ms) |
| --- | --- | --- | --- |
| 1000 | 5.42 | 24.7 | 96.70 |
| 1100 | 9.98 | 55.51 | 170.30 |
| 1200 | 34.17 | 147.91 | 254.60 |


**Peak CPU Utilization %**

| Number of new connections per second | Ramp-up stage | Stable stage | 
| --- | --- | --- |
| 1000 | 82 | 26
| 1100 | 88 | 29
| 1200 | 91 | 31

**Peak Memory Utilization %**

Number of new connections per second | Ramp-up stage | Stable stage | 
| --- | --- | --- |
| 1000 | 55 | 38 |
| 1100 | 58 | 42 |
| 1200 | 61 | 45 |

## Conclusion

The Evaluation Server was found to be capable of providing a reliable service for up to 1100 new connections per second using a minimum hardware setting: **AWS EC2 t2.micro (1 vCPU + 1 G RAM)**. The maximum number of connections held for a given time was 22000, but this is not the limit.

We believe the reported performance is sufficient for small businesses at negligible cost (**free tier**). Capacity can easily be multiplied by horizontally scaling the service as the business grows. 


You can visit our documentation page and GitHub repo for more information:

- Data set used for the tests can be found in [documentation benchmark page](https://featbit.gitbook.io/docs/tech-stack/benchmark).
- See the [GitHub benchmark readme](https://github.com/featbit/featbit/) for documentation on how to run the load test.
- Documentation of how to run the load test can be found on [GitHub benchmark readme](https://github.com/featbit/featbit/blob/main/benchmark/README.md).



-----------------------