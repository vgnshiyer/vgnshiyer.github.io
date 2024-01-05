---
title: What are Catalan Numbers?
subtitle: Applications of Catalan Numbers in Computer Science.
date: Sep 2, 2022
cover: /blogs/catalan_numbers/images/cover.png
link: https://vgnshiyer.medium.com/what-are-catalan-numbers-252a40f5d915
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