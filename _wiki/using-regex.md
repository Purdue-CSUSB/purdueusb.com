---
title:  "Learning Regex"
description: "Utilize pattern matching to comb through texts"
author: Shriansh Chari
date:   2021-12-25
categories: technical
---

### What is Regex?

Regex (short for **regular expressions**) are a sequence of characters that represent a search pattern to search in a text. At first, regex can look intimidating with its obtuse syntax, but once you learn to break them down, they are a valuable tool for working with the terminal or for verifying user input.

### Basic Regex Patterns

| Pattern      | Will match                                                   |
| ------------ | ------------------------------------------------------------ |
| `.`          | Any **single** character                                     |
| `*`          | Preceding range will be matched 0 or more times.             |
| `+`          | Preceding range will be matched 1 or more times.             |
| `{N}`        | Preceding range will be matched exactly `N` consecutive times. |
| `[<range>]`  | Square brackets define a character set, will match any character included in the set. Examples: `[A-Za-z0-9]` matches any uppercase or lowercase letter, and any number, and `[aeiou]` matches exactly the characters `a`, `e`, `i`, `o`, and `u`. |
| `[^<range>]` | The `^` symbol indicates that the range matches to the characters **not** in the set. Example: `[^aeiou]` matches any character except `a`, `e`, `i`, `o`, and `u`. |

### Example Usage:

Suppose you had a file (`numbers.txt`) with some phone numbers:

```
Phone numbers:
09-912-12921
011-011-0011
430-129-1293
238-12-12321
721-1432-234
431-123-0941
```

If you notice, some of these phone numbers aren't in the correct format. We can filter out the good phone numbers with the regular expression:

`[0-9]{3}-[0-9]{3}-[0-9]{4}`

where `[0-9]{3}` indicates 3 consecutive numbers, `[0-9]{4}` indicates 4 consecutive numbers, and the `-` indicates dashes in between each series of numbers.

#### Executing Regex in the Terminal

We can actually use the regular expression to match good phone numbers from the file. In the terminal, using the command format

```bash
egrep 'regex' file
```

we can execute the command

```bash
egrep '[0-9]{3}-[0-9]{3}-[0-9]{4}' numbers.txt
```

and it outputs the phone numbers that are in the correct format:

```
011-011-0011
430-129-1293
431-123-0941
```

### Practicing Regex

Want to practice regular expressions? Go to these websites to practice making them yourself:

- https://regexr.com/
- https://regex101.com/

