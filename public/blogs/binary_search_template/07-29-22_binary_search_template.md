---
title: The Binary Search Template
subtitle: An easier approach to using binary search algorithm
date: Jul 29, 2022
cover: /blogs/binary_search_template/images/cover.png
read_more: https://vgnshiyer.medium.com/the-binary-search-template-d5fef04586c8
---

Binary search is a very efficient way to solve the programming problem of searching an element in a sorted array. Instead of traversing the entire search space, we halve the search space on every iteration. In a problem of finding an element(say ‘k‘), we check whether k exists in the first half or the second half of the array. This simple optimization brings the time taken by a linear search algorithm to logarithmic.

However, it is often considered hard to implement by many programmers. The biggest hurdles that most face when trying to implement one are:

- What should be the exit condition of the loop. (low < high? or low <= high)
- How to initialize the boundaries low and high?
- Decide between operations low = mid or low = mid + 1?

Even if these points are figured out correctly for a problem, most likely the implementation would not be same for other problems. In essence we are trying to change our implementation of Binary Search based on the problem statement.

**But what if we rephrase the question instead?**

In that case, we will not have to change our implementation based on the problem statement. So in this way, for any question, there is exactly one answer.

Today I will be discussing a very simple, yet effective template for using the **Binary Search Algorithm.**

Let us understand it with an example.

Given an array of integers, we need to find the index of the variable ‘target’.

<img src="https://miro.medium.com/v2/resize:fit:924/format:webp/0*rqmMfG3c1Vr42rLr.png" />

What if the element does not exist? In that case we could return a bool as False, or -1. A better option is to rephrase the question in this way. We can find the index where the element ‘target’ can be inserted.

Here is the standardized **Binary Search Template** which works for most problems based on the algorithm.

```
def search(nums, target):
    low, high = 0, len(nums)
    while low < high:
       mid = (low+high)//2
       if nums[mid] < target:
           low = mid + 1
       else:
           high = mid
   return low
```

This loop runs as long as our low pointer is less than high. Notice that we have no condition for finding the target element inside the loop (**if nums[mid] == target ?**)

The idea is to let the loop run until our low and high pointers are equal. That is the index where our element exists or should be inserted.

<img src="https://miro.medium.com/v2/resize:fit:1146/format:webp/0*sWUM6CsN3G9dewpp.png" />

In essence, we are trying to find the first False in the array. Which is, at position 5. Once we find the first False, we recede the ‘high’ pointer, until both our ‘low’ and ‘high’ pointers are at position 5.

And that is our answer.