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

## Quotes
Quote Character       | Command
--------------------- | ------------------
Single Opening Quote  | `` ` `` (Backtick)
Single Closing Quote  | ` ' ` (Apostrophe)
Double Opening Quote  | ``` `` ``` (Two Backticks)
Double Closing Quote  | ` ' ` (Two Apostrophes)

## Ellipsis
To create an ellipsis in LaTeX, you can use the `\ldots` command.  This prints the dots closer together compared to if you were to just use three periods.  

## Reserved Characters
There are numerous reserved characters in LaTeX.  These characters are used for other functions in LaTeX, it is still possible to type them as regular characters if you type the following commands in their place.

Character | Command
------------ | -------------
\# | `\#`
$ | `\$`
% | `\%`
& | `\&`
^ | `\^{}`
_ | `\_`
{ | `\{`
} | `\}`
~ | `\~{}`
\ | `$\backslash$`

## Lists

### Bulleted Lists
```TeX
\begin{itemize}
\item One
\item[*] Two (with * bullet)
\item[-] Three (with - bullet)
\item Four
\end{itemize}
```
<img src="https://user-images.githubusercontent.com/25762130/55282664-44826a80-531f-11e9-8917-d6b21ca46794.png" alt="Bulleted List Screenshot" height="150">


### Numerical Lists
```TeX
\begin{enumerate}
\item One
\item[3.] Two (with custom number)
\item Three
\end{enumerate}
```
<img src="https://user-images.githubusercontent.com/25762130/55282678-90351400-531f-11e9-8c13-059eac117b4c.png" alt="Bulleted List Screenshot" height="150">

## Images

In order to add images to your LaTeX document, you first need to include the `graphicsx` package.  In order to do so, add the following line to the beginning of your LaTeX file.

```TeX
\usepackage{graphicx}
```

Then, you can use the `\includegraphics` command as follows:
```
\includegraphics[scale=0.7]{filepath}
```
You need to replace `filepath` with the filepath of the image you want to include.  **Keep in mind that you should *exclude* the file extension of the image.**  So if we have the image `forest.png` in the `images` folder, `images/forest` would be the filepath.  The `scale` parameter allows you to scale the image so it can fit on the page.  You can use alignment commands like `\begin{center}` in order to change the alignment of an image.

## Splitting Content Across Multiple Files
When writing code, it is important to spread your code across multiple files.  This makes your code more easily managed.  This principle also applies when writing LaTeX.

Nothing special need to take place when creating an additional file.  There is not need to have an additional preamble or anything.  You can simply continue writing LaTeX as you would in your original file.

After you created an additional file, you can use one of two commands to include it in your primary file.

* `\input{filepath}` essentially copies and pastes the specified file's content into the main file.  It is just as if the specified file's content was in the main file.

* `\include{filepath}` will do something similar as `input`, however it creates a new page before that specified file's content is displayed.  

**Note: Do not include the `.tex` file extension in the filepath.  If your file, `question_2.tex`, is in the `questions` folder, the filepath is `questions/question_2`.

## Typing Code
Typing code in LaTeX can be as simple or as complex as you want.  You can simply use *verbatim*, which will print your text in a monospace font.  This environment is built into LaTeX, so you don't need to important any packages.

```TeX
\begin{verbatim}
    print("Hello World!")
\end{verbatim}
```

Alternatively, if you want to get more complex with displaying code, like syntax highlighting for specific languages, you can use the *listings*.  You can find more information on how to use this package on [Overleaf's website](https://www.overleaf.com/learn/latex/code_listing#Using_listings_to_highlight_code).

## Mathematics

**All mathematical expressions must be contained in one of two ways**
* To display an expression inline, use `\(...\)`<br>
* To display an expression on a new line, use `\[...\]`

### Fractions

`\frac{numerator}{denominator}`

Symbol | Command
----- | -----
![Fraction Screenshot](https://wikimedia.org/api/rest_v1/media/math/render/svg/015f69ffe9fff52f121f70b7afe303c84a023a81) | `\fract{\frac{1}{x}+\frac{1}{y}}{y-z}`

### Exponents
Symbol | Command
----- | -----
![Exponents Screenshot](https://user-images.githubusercontent.com/25762130/55283025-608a0a00-5327-11e9-8e3c-c73cdc4e25a4.png) | `x^{3}`

### Subscripts
Symbol | Command
----- | -----
![Subscripts Screenshot](https://user-images.githubusercontent.com/25762130/55283070-34bb5400-5328-11e9-9907-9a92ca47c21d.png) | `x_{n}`


### Square Root
`\sqrt[optional: magnitude]{expression}`

Symbol | Command
----- | -----
![Sqrt Screenshot 1](https://wikimedia.org/api/rest_v1/media/math/render/svg/aa0aee8692897b7ee635498e8c34d4531da3e346) | `\sqrt{\frac{a}{b}}`
![Sqrt Screenshot 2](https://wikimedia.org/api/rest_v1/media/math/render/svg/74a7b5d7b8b7c0651bcbbd83c02ca86dbf87789b) | `\sqrt[n]{1+x+x^2+x^3+\dots+x^n}`

### Summation
`\sum_{starting_point}^{upper_limit} expression`

Symbol | Command
----- | -----
![Summation Screenshot](https://user-images.githubusercontent.com/25762130/55283283-b19cfc80-532d-11e9-8ba5-dffb5690154d.png) | `\sum_{i=1}^{n} x_i`

### Integral
`\int_{lower_bound}^{upper_bound} expression`

Symbol | Command
----- | -----
![Integral Screenshot](https://user-images.githubusercontent.com/25762130/55283387-e5792180-532f-11e9-9ec8-ae45bc3af7cb.png) | `\int_0^\infty e^{-x} dx`

### Trigonometric Functions
Symbol | Command
----- | -----
![sin](https://wikimedia.org/api/rest_v1/media/math/render/svg/03652698dbc8bffa5752c2e78e1054442b80b6de) | `\sin`
![cos](https://wikimedia.org/api/rest_v1/media/math/render/svg/07b022074f4231110c3aa1d64298f5518da46240) | `\cos`
![tan](https://wikimedia.org/api/rest_v1/media/math/render/svg/7fd2474b1e0e660046a1ee174f9fefcdb8d992a7) | `\tan`

### Accents
Symbol | Command
----- | -----
![hat](https://wikimedia.org/api/rest_v1/media/math/render/svg/1e25029427b303a472994ca41719b5bc43255bf3) | `\hat{a}`
![bar](https://wikimedia.org/api/rest_v1/media/math/render/svg/f97909a575e8300e0a8afecfdca4d7417de9241a) | `\bar{a}`
![vec](https://wikimedia.org/api/rest_v1/media/math/render/svg/1d68eda50bd748cf4c65dacf137d34d1de6aaadd) | `\vec{a}`

### Greek Letters
Simply type the name of the Greek letter after a backslash.  If the first letter of the letter name is lowercase, then the lower case Greek letter will be shown.  Likewise, if the first letter is capital, then the capital Greek letter will be used.

Letter | Command
----- | -----
α | `\alpha`
β | `\beta`
θ | `\theta`
λ | `\gamma`
π | `\pi`
μ | `\mu`
Σ | `\Sigma`
Φ | `\Phi`

### Other Symbols
Symbol | Command
----- | -----
![times](https://wikimedia.org/api/rest_v1/media/math/render/svg/59549550bdbbf3ee3c3e699ef776a2fb75d925b2) | `\times`
![divide](https://wikimedia.org/api/rest_v1/media/math/render/svg/b6ad98d18e2bc258bfacb199b8b581546edf83a1) | `\div`
![leq](https://wikimedia.org/api/rest_v1/media/math/render/svg/7130544927940fb7475f580c467e0f64c071aa49) | `\leq`
![geq](https://wikimedia.org/api/rest_v1/media/math/render/svg/e36180c709bfc4123eb549c728c7b630d91319ce) | `\geq`
![approx](https://wikimedia.org/api/rest_v1/media/math/render/svg/c6cbeb6e40e672a6cc4d28c32daa9dac5f24656b) | `\approx`
![neq](https://wikimedia.org/api/rest_v1/media/math/render/svg/5715239a4e0ff39dee6af1078605302dda18eb93) | `\neq`
![pm](https://wikimedia.org/api/rest_v1/media/math/render/svg/869e366caf596564de4de06cb0ba124056d4064b) | `\pm`
![infty](https://wikimedia.org/api/rest_v1/media/math/render/svg/76afc937797345c78ef84bfb231b3ba7f2b3d050) | `\infty`
![subset](https://wikimedia.org/api/rest_v1/media/math/render/svg/cc3268465cc08ea27edc2bb1db33d4101f2473f4) | `\subset`
![supset](https://wikimedia.org/api/rest_v1/media/math/render/svg/382a2648ff75c99598e43a4a457332042f093ab6) | `\supset`
![in](https://wikimedia.org/api/rest_v1/media/math/render/svg/6fe4d5b0a594c1da89b5e78e7dfbeed90bdcc32f) | `\in`
![exists](https://wikimedia.org/api/rest_v1/media/math/render/svg/89f0d31065a0331813c2605e0177f68134b98341) | `\exists`
![forall](https://wikimedia.org/api/rest_v1/media/math/render/svg/c99c9e6296c64fee67e8bb654bb47c2b52b64269) | `\forall`
