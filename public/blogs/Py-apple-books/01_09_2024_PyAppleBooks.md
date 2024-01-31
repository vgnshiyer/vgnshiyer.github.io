---
title: Introducing PyAppleBooks!
subtitle: A Python library that makes interacting with AppleBooks data easy.
date: Jan 09, 2024
cover: /blogs/Py-apple-books/images/cover.png
tags:
  - software development
  - Python
---

Few weeks ago, I released PyAppleBooks in the official [PyPi](https://pypi.org/project/py-apple-books/) repository. It is an API build on top of Apple Books that makes it very easy to access your Apple books data. The inspiration to build package came from my intent to remember and go through all my annotations from the books I read. It was a slight discomfort going through annotations for all the books from the app and I wished to have all them to be listed as a notion document that I can access anytime.

I found a few repositories that provided a nice way to exported apple books data to notion ([1](https://github.com/subhamX/notion-easy-export), [2](https://github.com/matttrent/ibooks-highlights)). However, it gathered only a subset from the plethora of the data the apple books had. I thought it would be cool to write a package that would provide an intuitive interface.

I discovered that Apple Books uses sqlite3 files to maintain local databases for books data. It uses a [WAL](https://en.wikipedia.org/wiki/Write-ahead_logging) (Write-Ahead-Log) file which it uses to append temporary interactions which are eventually written to the main database. It later syncs with the local databases in you other devices. It is like a multi-data center replication setup where the data centers here are your Apple devices which go intermittently offline and replicate information when they are back online. Interesting analogy right?

Here is a brief about how to use the package.

### Installation

`pip install py_apple_books`

#### Using PyAppleBooks

Here are some basic examples of how to use PyAppleBooks

```python
from py_apple_books import PyAppleBooks

api = PyAppleBooks()
```

#### Get list of all books

```python
books = api.list_books()
for book in books:
    print('-'*50)
    print(f"Title: {book.title}")
    print(f"Author: {book.author}")
```

```
# Sample output
--------------------------------------------------
Title: Think & Grow Rich
Author: Napoleon Hill
--------------------------------------------------
Title: Autobiography of a Yogi (Complete Edition)
Author: Paramahansa Yogananda
--------------------------------------------------
Title: Sapiens
Author: Yuval Noah Harari
```

Checkout the project [page](https://github.com/vgnshiyer/py-apple-books) to view the source code and the comprehensive documentation.

### Found any issues?

Raise a [PR](https://github.com/vgnshiyer/py-apple-books/issues) with a terse description.

### Final thoughts

PyAppleBooks is very early stage and there are a lot of room for new additions. I encourage everyone to use the package, and report any issues/bugs or requests for new features. Any contribution is highly appreciated.