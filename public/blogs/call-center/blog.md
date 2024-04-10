---
title: Designing an asynchronous call center in python.
subtitle: Using python generators, asyncio libraries to design a call center.
date: Apr 10, 2024
cover: /blogs/call-center/images/cover.png
tags:
  - software_engineering
  - programming
  - low_level_design
  - system_design
---

Requirements for a call center:
1. Each call has a severity level [LOW, MEDIUM, HIGH]
2. Call center has employees.
3. Employees have classes [Operator(lowest), Supervisor, Director]
4. Director: can resolve all calls, Supervisor: can resolve LOW and MEDIUM severity calls, Operator: can resolve LOW priority calls