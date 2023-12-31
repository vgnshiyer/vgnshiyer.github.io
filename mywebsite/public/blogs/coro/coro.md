---
title: Python coroutines
subtitle: A blog about the most bizarre python syntaxes.
date: Oct 12, 2022
cover: /blogs/coro/images/coro.png
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