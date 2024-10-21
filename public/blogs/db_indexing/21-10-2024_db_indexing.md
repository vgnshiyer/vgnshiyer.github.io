---
title: Supercharge Database Performance with Indexing
subtitle: Maximize speed and efficiency with the right indexing techniques.
date: Oct 21, 2024
cover: /blogs/db_indexing/images/cover.png
tags:
  - software_engineering
  - software_development
  - databases
---

#### Introduction

Database management systems like MySQL, PostgreSQL are softwares that manages databases. They provide an interface for users to interact with the database, with the help of SQL queries which are a set of declarative statements telling the database what to do.

Upon receiving these queries, the query processor interprets the request, and then the query optimizer generates an execution plan for the query. The execution plan is a sequence of steps that the execution engine will follow to produce the output. The storage engine is responsible for reading and writing data to the disk. It performs a set of operations like reading data from the disk, writing data to the disk, and other low-level operations like locking, transactions and buffer management.

An understanding of some of these components will help you write better applications leveraging some of these capabilities of the database.

This blog aims to provide a indepth understanding of indexing, how it works, and how it can be used to perform better database queries.

#### Data organization in databases

A database organizes data in files. There are two types of files that a database uses to store data: data files and index files.
* **Data files** are where the actual data is stored.
* **Index files** are where the indexes are stored.

Indexes are data structures that help the database management system to quickly locate the data in disks.

There are two types of indexes: primary index and secondary index.

* **Primary indexes** are clustered indexes that are created automatically on most databases. Clustered indexes are indexes that store the data in the order of the index. 

* **Secondary indexes** are non-clustered indexes that are created manually. Non-clustered indexes are indexes that store the data in a separate file.

Primary index is the index on the primary key. Based on the database management system, the secondary index can either point directly to the data or point to the primary index.

#### B-Trees
Indexes are implemented using different data structures. One of the most common data structures used to implement indexes is the B tree. B trees are balanced trees that are used to store indexes. They are efficient in terms of search time.

While considering implementing Indexing with a tree data structure, there are two main factors to consider: Fanout and Height of the tree.

* **Fanout** determines the number of children a node can have. Higher the fanout, higher the locality of data. Since B-Trees are a disk based data structure, it is important to consider factors like data locality. With a high fanout tree, the data is stored close to each other in order on the disk. Additionally, higher fanout requires lesser maintenance by rebalancing, updating pointers and relocating data.

* **Height of the tree** determines the number of disk seeks required to find the data. Lower the height of the tree, lower the number of disk seeks required to find the data.

<img src="/blogs/db_indexing/images/btree.png" alt="B-Tree" style="width: 500px; border-radius: 5px;" />

The fanout and the height of the tree are inversely proportional. If the fanout is high, the height of the tree is low. If the fanout is low, the height of the tree is high.

#### Working with an example

While adding indexes to columns, it is important to consider the cardinality of the column.

Cardinality is the number of unique values in a column. If the cardinality is low, then the index is not very useful.

For example, a column `active` which is a boolean column, has a low cardinality. It has only 2 values, `true` and `false`. So, creating an index is often worse than useless. Because, the database will have to spend extra capacity to maintain the index, slowing down the write operations.

Therefore, selecting the right columns to index is important and requires adequate knowledge of the data model. Understanding the use cases of your application and anticipating the queries that will be run on the database will help you decide which columns to index.

Below example should give you an idea of how to decide which columns to index.

Consider an e-commerce application with a Customer table and an Order table. The Customer table has a primary key `customer_id` and a column `email`. The Order table has a primary key `order_id` and a foreign key `customer_id`, denoting a many-to-one relationship between the Customer and Order tables.

```txt
   Customer Table
   +------------+-----------------+
   | customer_id| email           |
   +------------+-----------------+
   | 1          | bob@email.com   |
   | 2          | alice@email.com |
   | 3          | tom@email.com   |
   +------------+-----------------+
   
   Order Table
   +------------+------------+------------+
   | order_id   | customer_id| order_type |
   +------------+------------+------------+
   | 1          | 1          | in-store   |
   | 2          | 1          | online     |
   | 2          | 2          | online     |
   | 3          | 3          | in-store   |
   +------------+------------+------------+
```

Like most databases, the primary keys (customer_id, order_id) are indexed when the tables are created.

Now, let's consider the following queries:

**Finding an order by customer_id.**

```sql
EXPLAIN ANALYZE SELECT * FROM Customer WHERE customer_id = 1;

-> Rows fetched before execution  (cost=0..0 rows=1) (actual time=125e-6..166e-6 rows=1 loops=1)
```

In the above query, the database will use the index on the primary key `customer_id` to find the row with the given customer_id. This is an efficient operation, as the database can directly look up the row using the index.

**Finding a customer by `email`.**

```sql
EXPLAIN ANALYZE SELECT * FROM Customer WHERE email = 'bob@email.com';

-> Filter: (customer.email = 'bob@email.com')  (cost=0.55 rows=1) (actual time=0.0496..0.0568 rows=1 loops=1)
    -> Table scan on Customer  (cost=0.55 rows=3) (actual time=0.0439..0.0498 rows=3 loops=1)
```

In the above query, the database will perform a full table scan on the Customer table, get all the rows in memory, and then filter out the rows with the given email. This is an expensive operation, especially if the Customer table is large.

Adding an index on the email column will speed up the query, since `email` is a column with high cardinality and is likely to be queried often.

```sql
CREATE INDEX email_index ON Customer(email);
EXPLAIN ANALYZE SELECT * FROM Customer WHERE email = 'bob@email.com';

-> Covering index lookup on Customer using email_index (email='bob@email.com')  (cost=0.35 rows=1) (actual time=0.0343..0.0387 rows=1 loops=1)
```

In the above query, the database will use the index on the email column to find the row with the given email. This is a much more efficient operation, as the database can directly look up the row using the index.

**Find all orders for a customer.**

```sql
EXPLAIN ANALYZE SELECT * FROM Order o JOIN Customer c ON o.customer_id = c.customer_id WHERE c.email = 'bob@email.com';

-> Nested loop inner join  (cost=0.817 rows=1.33) (actual time=0.062..0.064 rows=2 loops=1)
    -> Covering index lookup on c using email_index (email='bob@email.com')  (cost=0.35 rows=1) (actual time=0.0461..0.0465 rows=1 loops=1)
    -> Index lookup on o using customer_id (customer_id=c.customer_id)  (cost=0.467 rows=1.33) (actual time=0.0122..0.0135 rows=2 loops=1)
```

In the above query, the database will use the index on the email column to find the customer with the given email, and then use the index on the customer_id column in the Order table to find all the orders for that customer.

#### A Final Word

It must be evident by now that indexing is a powerful tool that can be used to speed up database queries. By having a good understanding of the data model and the queries that will be run on the database, you can make informed decisions about which columns to index.

Given a query, the query optimizer will perform the actions in the sequence of most efficient to least efficient, based on the indexes available. The actions that reduce the search space the most are likely to be performed first, followed by the other costly operations like filtering, sorting, and joining. Therefore, while designing the queries for your application, it is important to ensure that your queries are sargable, i.e., they can take advantage of the indexes available.

Below are some tips for better indexing:

1. Index columns with high cardinality and columns that are likely to be used in WHERE, JOIN, ORDER BY clauses. Avoid indexing columns with low cardinality.

For example, boolean columns, or columns with only a few distinct values. Such columns are good candidates for partitioning, rather than indexing.

2. While using wildcards in queries, ensure that the wildcard is not at the beginning of the string.

```txt
LIKE '%bob%' -> Index not used
LIKE 'bob%'  -> Index used
```

3. While filtering DateTime columns, ensure that the DateTime column is not wrapped in a function.

```txt
WHERE DATE(created_at) = '2024-10-21' -> Index not used
WHERE created_at = '2024-10-21'      -> Index used
```

This is because when a function is provided, the database has to apply it to every row in the table even if the index is available. Use direct comparisons if possible.

4. Use covering indexes to avoid additional I/O operations.

For example, select columns that are part of the index in the SELECT clause. This will enable the database to fetch the data directly from the index, without having to read the data from the table.

```sql
EXPLAIN ANALYZE SELECT email FROM Customer;

-> Covering index scan on Customer using email_index  (cost=0.55 rows=3) (actual time=0.0653..0.0714 rows=3 loops=1)
```

5. To optimize ORDER BY, use a smaller result set using filtering and limit. Avoid sorting the entire table which will overload the memory and slow down overall performance.

#### References

1. [Database Internals: A Deep Dive into How Distributed Data Systems Work](https://www.amazon.com/Database-Internals-Distributed-Systems-Work/dp/1492040347)
2. [Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321)
3. [Secret To Optimizing SQL Queries - Understand The SQL Execution Order](https://www.youtube.com/watch?v=BHwzDmr6d7s&ab_channel=ByteByteGo)
