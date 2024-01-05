---
title: Link Prediction in a Social Network
author: Vignesh Iyer
date: Apr 21, 2019
cover: /blogs/link_prediction/images/cover.png
link: https://vgnshiyer.medium.com/link-prediction-in-a-social-network-df230c3d85e6
---

## Introduction

A couple years ago, Facebook launched a link prediction contest on Kaggle, with the goal of recommending missing edges in a social network graph. Social Networks mainly focus on building social relations among users who share common interests, background, real-life connections, etc. People may or may not want to maximize their social influence. For example, business page owners on Instagram want to influence as many people as possible for their commercial advantages. However, the network is evolving over time, with new users joining, adding friends, and new connections between old users. Based on the current network, we aim to predict the upcoming changes in the network and make recommendations accordingly.

Facebook has provided a snapshot of its social network at time (say 't'), and based on it, we need to predict the future possible links. In this blog, I will be sharing my approach to solve this case study.

## Some Intriguing Insights on Social Networks

What does a social network look like? I wanted to play around with the data first just to get a rough feel of what I was working with, so I used an app called SocNetV to interact with the network.

Here’s a sample of a small network.

<img src="https://miro.medium.com/v2/resize:fit:1232/format:webp/1*N0aViOV7KYnM-XkqGDKtgg.png" alt="sample social network" />

The node in Black is the selected node from the training set connected to 3 other nodes in the network to unfold their local networks. The nodes are sized according to their number of connections.

We can see that our selected node is friends with 3 other nodes (in yellow), all having fairly large networks. Note that the edges between these nodes in this network are undirected, i.e., edge between two nodes indicates both follow each other.

Since the above image does not depict the distinction between a follower and a followee, let's take a directed graph. Here, in this example, we can see the followers and following of a particular user.

<img src="https://miro.medium.com/v2/resize:fit:754/format:webp/1*LoQSAQsszWL67JkVOarwbA.png" />

The selected user is the black node, its friends are the red nodes (users that follow and are followed back by the selected user), its followees are pink colored, and its followers are green colored.

Here’s another network.

<img src="https://miro.medium.com/v2/resize:fit:932/format:webp/1*EUf5dVsPnUqe42xpnAhODg.png" />

While the previous user had many only-followers (green nodes), this one has none. This can be considered as a node-level feature that indicates that the user is follower-hungry.

And here’s another user who has nothing but followers (maybe a celebrity).

<img src="https://miro.medium.com/v2/resize:fit:736/format:webp/1*TGMRVhHUTK-ZCVRLdv3h4A.png" />

**The Lone Wolf**

Lets take a look at another graph whose network is small.

<img src="https://miro.medium.com/v2/resize:fit:976/format:webp/1*LRx-tIPUBoQEdHT1TSIzFQ.png" />

**The Social Butterfly**

Whose network is a bit larger.

<img src="https://miro.medium.com/v2/resize:fit:1182/format:webp/1*yriHu8OTGzg6l-GtJ37NnQ.png" />

## Understanding the data

After the data gets downloaded, it reads something like this ;

```
// reading the train data
df=pd.read_csv('train.csv')
df.head()
```

<img src="https://miro.medium.com/v2/resize:fit:422/format:webp/1*Lg4ZORzcPzEgJstmaN_eZw.png" />

Checking the data for any missing rows/ duplicates, if any.
