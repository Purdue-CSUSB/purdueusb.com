---
title:  "LaTeX Guide"
description: "Learn important LaTeX commands"
author: CS193 Team
date:   2021-03-26 12:00:00 -0400
categories: technical
---

## Preamble

* `\documentclass{article}` specifies the type of document that is going to be created.  The area between the `\documentclass{...}` and the `\begin{document}` is know as the *preamble*.  In this case, it is article, which is used of scientific journals, presentations, short reports, etc.  Other document types are shown in the table below:  

Document Class | Purpose
------------ | -------------
article | Articles in scientific journals, presentations, short reports, program documentation, invitations, ...
report | Longer reports containing several chapters, small books, thesis, ...
book | Real books.
slides | Slides with big sans serif letters.
letter | Writing letters

* The *top matter* includes the title, author, and date.  These fields are used to store information about the document.  This is useful for allowing LaTeX to automatically generate a title header for your document.  

* `\begin{document}` and `\end{document}` is where all the document contents are located.  The information you type into your document will be stored between these two tags.  
