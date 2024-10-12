---
title: From Dread to Discipline
subtitle: A minimalist guide to Unit Testing
date: Oct 11, 2024
cover: /blogs/unit_testing/images/cover.png
tags:
  - software_engineering
  - unit_testing
---

### The Big Picture

#### What?

A Unit Test is a test that:

1. Verifies a piece of code (A unit).
2. Provides quick feedback.
3. Does it in an isolated manner.

#### Why?

Over the past few decades, the question has shifted from "Should we even write Unit Tests?" to "Why should we write Unit Tests?" Having unit tests ensures sustainable project growth. When you start a new project, everything runs smoothly, and the project maintains a good pace initially. However, as more code is added, it becomes harder to maintain. Soon, you realize you're putting in more and more hours without gaining much value from the effort.

<img src="/blogs/unit_testing/images/sustainable.png" alt="Sustainable Growth" style="width: 500px; border-radius: 5px;"/>

Unit tests protect your code from regressions caused by new features being added to the application. In a growing project, where new features are introduced frequently, it's inevitable that something working in the application may break. A test suite helps you catch these regressions. It also helps you identify the important parts of your application. If part of your tests is failing, it signals that the relevant code is critical. Additionally, unit tests complement the code review process.

#### How?

I follow a simple AAA (Arrange, Act and Assert) pattern that is easy to maintain and understand. 

```python
class MathTest:
    def test_addition(self):
        a = 2  # Arrange
        b = 3

        result = add(a, b)  # Act

        self.assertEqual(result, 5) # Assert
```

### What makes a successful test suite?

#### Three traits

A successful test suite:

1. **Integrates into the development lifecycle.** It shouldn’t require extra effort from developers (other than writing the tests) to run them. Ideally, as soon as your code is pushed to source control, your CI/CD workflow should run the tests, generate a report, and present it during the code review process.

2. **Targets important parts of the application.** When writing tests, focus on critical parts of the application, such as business logic or any core components. A sad truth about programming is that code is a liability, not an asset. Always aim to solve problems with as little code as possible.

3. **Provides maximum value with minimal effort.** While writing many tests can ensure comprehensive coverage, constantly having to maintain tests along with your application suggests you've written too many.

<img src="/blogs/unit_testing/images/maxval.png" alt="Maximum Value" style="width: 400px; border-radius: 5px;"/>

Staying within the optimal range of tests will give you the most value.

### Making your tests work for you

#### Example

<img src="/blogs/unit_testing/images/example.png" alt="Example" style="width: 100%; border-radius: 5px;"/>

Notice that the test cases do not target individual units of code but instead focus on the application’s use cases.

#### External dependencies

When your application depends on external systems outside its control, your tests go beyond unit testing because they violate the principle of quick feedback. In such cases, you can use mocking to spoof the external calls. However, this concept does not apply to internal dependencies, such as other classes or your database.

<img src="/blogs/unit_testing/images/mocking.png" alt="Mocking Example" style="width: 100%; border-radius: 5px;"/>

### Avoiding pitfalls

#### Chasing a coverage goal

When writing unit tests, don’t treat code coverage as a goal. Code coverage is just an indicator, not a goal. It only tells you which part of the code was executed during a test, not whether that code was verified.
An extreme example of coverage misuse is "assert-less testing":

```python
def test():
    _ = add(1, 2)
```

This test technically adds to the coverage but doesn't verify anything, making the coverage metric misleading. This issue often arises when organizations impose strict coverage goals, leading developers to write poor tests.

The trick with code coverage is that it’s a good negative indicator. If coverage is low, there's likely risk in your code. Unfortunately, it’s a poor positive indicator — high coverage doesn’t guarantee quality.

#### Getting too granular

It’s tempting to write tests for every single operation, but this is an anti-pattern. Consider this example:

<span style="color: lightgreen;">*When I call my cat, it must come to me.*</span>

versus

<span style="color: lightyellow;">*When I call my cat, first it lifts its left leg, then its right leg, ...*</span>

I don’t care if the cat lifts its left leg or right leg first — I only care that it comes to me. Similarly, unit tests should focus on the behavior that users will experience, not the internal details of how it's implemented. Unit tests don't require a 1:1 relationship between functions and test cases but between use cases and test cases.

#### Using cryptic names

Although unit tests are primarily for developers, it’s better to use clear, descriptive names to make them easier to understand and maintain. Spare your teammates the extra mental effort.

<span style="color: lightgreen;">*Write your code as if a novice were to maintain it someday.*</span>

### References

- Unit testing Principles - *By Vladimir Khorikov*
