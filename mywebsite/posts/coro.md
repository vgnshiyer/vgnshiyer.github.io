---
title: Python coroutines
author: Vignesh Iyer
date: 2023-12-24
---

This is a coroutine.


```
from functools import wraps

@lambda coro: wraps(coro)(lambda *a, **kw: [ci := coro(*a, **kw), next(ci)][0])
def coro():
    while True:
        t = (yield)
        print(t)
```