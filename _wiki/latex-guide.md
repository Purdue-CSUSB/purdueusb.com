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

## Title
* `\maketitle` creates a title for document with the project title, author name, and date.

## Sections
There are several types of section headers to choose from.  Replace the "..." with your desired section title.

* `\section{...}`
* `\subsection{...}`
* `\subsubsection{...}`
* `\paragraph{...}`
* `\subparagraph{...}`
<img src="https://user-images.githubusercontent.com/25762130/55272391-52d67500-5292-11e9-8417-0283b656a58f.png" alt="Section Types">

## Font Effects

Effect | Command
--------- | ---------
*italics* | `\textit{...}`
**bold**  | `\textbf{...}`
underline | `\underline{...}`

## Font Size

**The font size applies to  all the text that follows the command, until another font size command is called**

Size | Command
----- | -----
5     | `\tiny ...`
7     | `\scriptsize ...`
8     | `\footnotesize ...`
9     | `\small ...`
10    | `\normalsize ...`
12    | `\large ...`
14.4  | `\Large ...`
17.28 | `\LARGE ...`
20.74 | `\huge ...`
24.88 | `\Huge ...`

## Alignment

Alignment | Command
------------ | -------------
Left | `\begin{flushleft}...\end{flushleft}`
Center | `\begin{center}...\end{center}`
Right | `\begin{flushright}...\end{flushright}`
