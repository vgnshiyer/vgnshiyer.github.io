---
title: Recursion in 3 minutes
subtitle: In order to understand recursion, you must understand recursion.
date: Jul 28, 2022
cover: /blogs/recursion/images/cover.png
---

Recursion is a technique where a call to a method appears in the method’s body. That is, the method calls itself and repeats this action, until a base condition is reached. This base condition is defined by us, at the start of the function.

Once you understand them, they are often simpler to write than their iterative counterparts.

Let’s begin studying the form and comparing the implementation with the iterative approach.

#### The fund raising problem.

**Problem:** Raise Rs.100,000 from 1000 people for a donation. Assume that everyone is willing to pay Rs.100.

**Iterative Solution:** Visit 1000 people one by one and collect Rs.100 from each.

**Recursive Solution:**

- If you are asked for Rs.100, give a Rs.100 to the person who asked for it.
- Otherwise, give your Rs.10 and ask another person to raise the rest of the amount.
- At the end, collect all the amount received in a bag.
- Give it to the person who asked to collect the money.

In essence, we are doing the following:

1. We try to decompose the problem into one or more strictly smaller subproblems: p1,p2,……pn.
2. We recursively solve the subproblems: solve(p1), solve(p2), ….
3. Combine the solutions and return the result.
4. If problem is not decomposable/ minimal, we solve it directly without using recursion. (Base Case)

Recursive methods are often more powerful than their iterative equivalents. All iterative methods can be converted to recursive, but not the other way round. Unless a collection is used with the iteration. Typically, iteration + array/stack = recursion. However, this conversion is not always easy to implement. Some methods are only possible with recursion. To understand this better, let’s take an example of a read_moreed List.

**Problem:** Print the elements of a read_moreed list in reverse order.

**Recursive Solution:**

```
void printReverse(ListNode* head){
    if(head == NULL) return; // base case
    printReverse(head->next);
    cout<<head->val<<endl;
}
```

Below is a diagram representing memory stack for better understanding.

<img src="https://miro.medium.com/v2/resize:fit:644/format:webp/0*mwg046eahMsYxjrV.png" />

Not only does the code look neat, but is also a lot more efficient than the iterative form.

Using iteration, we would have to introduce a collection data structure like an Array/List, to store the values of the nodes and then run another iteration in reverse order to print the elements.

Below are some more problems on Linked List using Recursion.

#### Search an element in a linked list.

```
ListNode search(ListNode* head, val){
    if(head == NULL || head->val == val) return head; // base case
    return search(head->next, val);
}
```

#### Insert a node at the end of the list.

```
ListNode insertAtEnd(ListNode* head, val) {
    if(head == NULL) return ListNode(val,NULL); // base case
    head->next = insertAtEnd(head->next, val);
    return head;
}
```

#### Insert a node in a sorted Linked List.

```
ListNode insertInSort(ListNode* head, val) {
    if(head == NULL || head->val > val) return ListNode(val,head);
    head->next = insertInSort(head->next, val);
    return head;
}
```

#### Remove all nodes with ‘val’ from a list.

```
ListNode removeAll(ListNode* head, val) {
    if(head == NULL) return head;
    head->next = removeAll(head->next, val);
    return head->val == val ? head->next : head;
}
```

#### Reverse a Linked List.

```
ListNode reverseLL(ListNode* head) {
    if(head == NULL || head->next == NULL) return head;
    ListNode newHead = reverse(head->next);
    head->next->next = head;
    head->next = NULL;
    return newHead;
}
```

Hope it was a good read. Share it if was.
