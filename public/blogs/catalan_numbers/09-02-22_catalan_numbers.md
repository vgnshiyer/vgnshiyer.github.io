---
title: What are Catalan Numbers?
subtitle: Applications of Catalan Numbers in Computer Science.
date: Sep 2, 2022
cover: /blogs/catalan_numbers/images/cover.png
tags:
  - software engineering
  - data structures
  - algorithms
---

The Catalan Numbers are a sequence of positive integers which can be used in a wide array of problems that appear in Computer Science. They fall under the realm of Combinatorics, following a fundamental recurrence relation just like the Fibonacci Sequence. They also fit nicely in the method of Dynamic Programming.

This article will be exploring the topic in detail and apply it to some of the popular CS problems. Just like the Fibonacci Sequence, Catalan numbers also follow a pattern. The first few numbers in the sequence are listed below.

`1, 1, 2, 5, 14, 42, 132, …`

The recurrence relation goes something like:

`C3 = C0 * C2 + C1 * C1 + C2 * C0`

This can be solved recursively for smaller sub problems starting from n = 2 with base case (C0 = C1 = 1), working our way to the final problem n. As we can see, similar to the Fibonacci sequence, this also contains overlapping subproblems, which allows us to memoize the answer for our subproblems to avoid repeated computation. Below code uses recursion and memoization to return the nth Catalan Number.

```
int catalan_number(int n){
  if(n <= 1) return 1;
  
  int &ans = dp[n];
  if(ans != -1) return ans;
  
  int res = 0;
  for(int i = 0; i < n; i++)
    res += catalan_number(i)*catalan_number(n - 1 - i);
  return ans = res;
}
```

Below are some problems which can be solved using the above code:

1. No. of Binary Search trees possible with n nodes
2. No. of valid Parenthesis.
3. No. of Full Binary Trees (with some modification of the recurrence relation)
4. No. of Full Binary Trees with height h
5. Let’s see in detail how we can relate the above problems to the Catalan sequence to understand their usage better.

**Problem 1:** Given the value n, return the number of ways to construct a binary search trees with n nodes.

**Approach:**
1. We select one node to be our root node.
2. We traverse through the combination of nodes that can be formed in the left subtree and our right subtree.
3. We add these possible combinations which gives our final answer.

**Recurrence relation:**

NWays(n) = NWays(0)*NWays(n-1-0) + NWays(1)*NWays(n-1-1) + ....NWays(n-1)*NWays(0)

```
For a problem n = 3,
  1       1       1
 / \     / \     / \
(0)(2) (1) (1) (2) (0)   5 ways to construct a BST with 3 nodes (1 node as the root node)
Below are the 5 ways:
x       x       x       x       x
 \       \     / \     /       /
  x       x   x   x   x       x
   \     /             \     /
    x   x               x   x
  (1)   (2)     (3)    (4)   (5)
```

**Problem 2:** Given a value n, find the number of possible combinations of valid parenthesis with n pairs.

```
Approach:
1. Just like the above problem, we select 1 pair of brackets which will be our default.
2. Around our default pair, we will be calculating all possible combinations of brackets.
Recurrence relation: Same as above
For a problem n = 3,
  ( . ) 2 + ( 1 ) 1 + ( 2 ) .  total 5 ways to construct valid parenthesis.
Below are the 5 ways:
( )()(), ( )(()), (())(), ((())) , (()()) 
brackets in bold are the default brackets.
```

**Problem 3:** Given a value n, find the number of possible full binary trees that can be constructed with n nodes.

```
Approach:
1. Unlike the BST problem, we cannot directly take all combinations of nodes in our left and right subtrees. They also need to satisfy the conditions for a full binary tree. (a tree with either 0 or exactly 2 children for every node).
2. According to the definition, it must be clear that, it is impossible to construct an FBT with even number of nodes. 
3. Therefore, we need to change our recurrence relation in the first problem.
4. Here, we will traverse all the valid combinations of FBT's in our left and right subtrees that can be constructed.
Recurrence relation: 
if(n is even) NWays(n)= 0
NWays(n) = NWays(1)*NWays(n-1-1) + NWays(3)*NWays(n-1-3) + ....NWays(n-1-1)*NWays(1)
Notice that we are taking only odd number of nodes in our left and right subtrees.
For a problem n = 5,
  1       1  
 / \     / \ 
(1)(3) (3) (1)  2 ways
Below are the 2 ways:
  x           x
 / \         / \
x   x       x   x
   / \     / \
  x   x   x   x
  (1)       (2)
```

**Problem 4:** Given a value n and value h, return the number of ways to construct a full binary tree with height h.

```
Approach:
1. In this problem we add one more parameter to our state in the 3rd problem.
2. This parameter represents the height of the tree constructed.
Recurrence relation:
if(n is even) NWays(n, h)= 0
NWays(n, h) = NWays(1, h-1)*NWays(n-1-1, h-1) + NWays(3, h-1)*NWays(n-1-3, h-1) + ....NWays(n-1-1, h-1)*NWays(1, h-1)
(h-1 because we are excluding our root node from the height)
where h ranges from 1 to h.
NWays(n,h) - NWays(n, h-1) will give us the number of ways to construct an FBT with height h.
The base case for all above problems are 
NWays(0) = NWays(1) = NWays(1, any_height) = 1
```

Code them yourself 🙂. Here is my [Github](https://github.com/VigneshIyer25/My-Coding-Library/tree/main/Algorithms/Dynamic%20Programming/Catalan%20Numbers) for some reference.

Hope this was a good enough description of Catalan Numbers and its applications in Computer Science. Thanks!