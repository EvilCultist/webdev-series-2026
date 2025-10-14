# Html  
  
## What is Html  
  
html is a markup language. A markup language is used to describe the structure of a webpage/document/pdf etc.  
Another example of a markup language would be markdown, or latex.  
<span style="color:red;"><strong>
HTML is a markup language, it is meant to specify structure, and semantic info, **NOT** logic, **NOT** style
</strong></span>
  
## Why Html
  
html is the defacto language of the web. It is what every server sends you when you visit a website. It descibes the structure of the webpage. let's look at an example

[What does html look like](https://health-chat-nexus.vercel.app)

### Lets get started writing html

Html is written in a text editor. Any file saved with the .html extension is considered a html page.
here is the basic structure of an html web page

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>
      tab name here
    </title>
  </head>
  <body>
    content here is shown on the page
  </body>
</html>
```

## non-replaced elements

This is a element

```html
<p>
```

Each element must have a closing element (with some exceptions that we will discuss)

```html
<p></p>
```

Whatever is between these elements is the contents of these elements

```html
<p> paragraph </p>
```

There are many different [elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)  
You can nest elements, but one must always remember, that elements work like hats, they must not intersect

```
<b> ──────────┐
  <i> ───┐    |  
        Text  |
  </i> ──┘    |
</b> ─────────┘
```

```
<b> ────────┐
  <i> ───┐  |
</b> ───────┘     ✘ Invalid! <b> closes before <i>
  </i> ──┘
```

<span style="color:red;"><strong>
**There are also, replaced elements, and void elements, we will discuss these as we come across them**
</strong></span>
  
## Now, let us understand the barebones code, line by line

### \<\!DOCTYPE html\>

this defines the document to be interpreted as a modern html5 file, removing this line will have no affect on this page, but on more complex pages, which rely on modern html elements/features it is nescessary to include this. (for more details, see [Quirks Mode](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode))

### \<html\>

The <html> element is the root element for an HTML document. It is the parent of the <head> and <body>, containing everything in the HTML document other than the doctype. If omitted it will be implied, but it is important to include it, as this is the element on which the language of the content of the document is declared.

### \<head\>

The \<head\>, or document metadata header, contains all the metadata for a site or application.  

### \<meta charset="utf-8"\>

The very first element in the <head> should be the charset character encoding declaration. It comes before the title to ensure the browser can render the characters in that title and all the characters in the rest of the document.  
The [default encoding](https://html.spec.whatwg.org/multipage/parsing.html#documentEncoding) in most browsers is windows-1252, depending on the locale. However, you should use UTF-8, as it enables the one- to four-byte encoding of all characters, even ones you didn't even know existed. Also, it's the encoding type required by HTML5.  

By declaring UTF-8 (case-insensitive), you can even include emojis in your title (but please don't).

The character encoding is inherited into everything in the document, even \<style\> and \<script\>. This little declaration means you can include emojis in class names and the selectorAPI (again, please don't). If you do [use emojis](https://readabilityguidelines.co.uk/images/emojis/), make sure to use them in a way that enhances usability without harming accessibility.

### \<Title\>

our home page and all additional pages should each have a unique title. The contents for the document title, the text between the opening and closing \<title\> tags, are displayed in the browser tab, the list of open windows, the history, search results, and, unless redefined with \<meta\> tags, in social media cards.

### \<body\>

Contains the visible page content.

## Other commonly used elements

### some accessibility stuff you should read

- [semantic html](https://web.dev/articles/use-semantic-html)  
- [on headings](https://web.dev/articles/headings-and-landmarks)  

<span style="color:red;"><strong>
NOTE: these are some of the most common tags, please remember that
</strong></span>

- \<b\> = bold

you should instead use \<strong\>

- \<i\> = italic

you should instead use \<em\>

- \<p\>
- \<h1\> \<h2\> \<h3\> ... \<h6\>
- \<br\>
- \<hr\>
- \<a\>
- \<img\>
- \<div\>
- \<ul\> \<li\>
- \<ol\>
- \<table\> \<tr\> \<th\> \<td\>

## Additional tags for seo

- \<article\>
