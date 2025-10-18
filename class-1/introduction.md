## Quick guide to the CSS in `style.css`

This short guide explains what each rule in `style.css` does, why it's useful for a short 1-hour class page, and several simple ways to attach styles to HTML.

### Root variables
- `:root{ --max-width:800px; --accent:#2563eb; --muted:#6b7280; }`
	- Defines custom properties (variables) you can reuse throughout the stylesheet. They make it easy to change the accent color or maximum content width in one place.

### Global box sizing
- `*{box-sizing:border-box}`
	- Makes width and height calculations include padding and border. This avoids surprises when sizing elements.

### Body
- `body{ font-family:..., line-height:1.5; margin:0; color:#111 }`
	- Sets a readable font stack, comfortable line-height, removes default page margin, and sets a base text color.

### Container
- `.container{ max-width:var(--max-width); margin:0 auto; padding:1rem }`
	- Centers content and limits the maximum width for better line length and readability. `margin:0 auto` centers a fixed-width box.

### Header
- `header{ background:#f8fafc; border-bottom:1px solid #e6edf8; padding:1rem 0 }`
	- Gives the page header a light background, a subtle separating border, and vertical spacing.

- `header h1{ margin:0; font-size:1.25rem }`
	- Removes default top/bottom margins from the heading and sets a compact size appropriate for this page.

### Subheading style
- `.sub{ color:var(--muted); font-size:0.9rem }`
	- A utility class for smaller, muted explanatory text beneath the main title.

### Main and headings
- `main{ padding:1rem 0 }` and `h2{ color:var(--accent); margin-top:0 }`
	- `main` separates page content from the header/footer. `h2` uses the accent color to visually separate sections and removes default top margin for a tighter layout.

### Form layout
- `form{ display:grid; gap:0.5rem; max-width:480px }`
	- Uses CSS Grid to stack form controls with even gaps. Limits form width so inputs don't stretch too wide.

- `label{ font-weight:600; font-size:0.9rem }`
	- Makes labels slightly bolder and smaller to match the compact form look.

- `input,textarea{ padding:0.5rem; border:1px solid #d1d5db; border-radius:4px }`
	- A basic, consistent control style with padding and a soft border.

- `.form-actions{ display:flex; gap:0.5rem }`
	- Lays out buttons horizontally with a small gap.

- `button{ background:var(--accent); color:#fff; border:none; padding:0.5rem 0.75rem; border-radius:4px; cursor:pointer }`
	- Primary button appearance; the reset button uses its own override below.

- `button[type="reset"]{ background:#9ca3af }`
	- Gives the reset button a muted look so it doesn't compete with the submit action.

### Table styles
- `table{ width:100%; border-collapse:collapse; margin-top:0.5rem }`
	- Full-width table that collapses borders for a clean grid look.

- `th,td{ padding:0.5rem; border:1px solid #e5e7eb; text-align:left }`
	- Adds comfortable cell padding and light borders.

- `thead th{ background:#f1f5f9 }` (the stylesheet sets this, if you use a `<thead>`)
	- A slightly shaded background for table headers for better contrast.

### Footer
- `footer{ border-top:1px solid #e6edf8; padding:0.75rem 0; color:var(--muted); font-size:0.9rem }`
	- Subtle separator and muted small text for the footer.


## Ways to link or include CSS (short overview)

1. External stylesheet (recommended for most cases)

	 In the HTML head:

	 ```html
	 <link rel="stylesheet" href="style.css">
	 ```

	 - Pros: cached by browser, keeps HTML clean, easy to reuse across pages.
	 - Cons: one extra request (usually fine). For this project, `lesson.html` uses this method.

2. Internal stylesheet (a `<style>` tag in the HTML)

	 Place inside `<head>`:

	 ```html
	 <style>
	 /* small page-specific overrides */
	 .container { padding-bottom: 2rem; }
	 </style>
	 ```

	 - Pros: useful for page-specific tweaks without creating a new file.
	 - Cons: not cached separately, mixes CSS into the HTML.

3. Inline styles (the `style` attribute on elements)

	 ```html
	 <p style="color: red;">Important</p>
	 ```

	 - Pros: quick, targeted.
	 - Cons: makes markup messy and is hard to maintain; avoid for general styling.

4. `@import` inside a CSS file

	 ```css
	 /* style.css */
	 @import url('more-styles.css');
	 ```

	 - Pros: can split styles into modules.
	 - Cons: can delay CSS loading compared to `<link>`; generally use `<link>` unless you need this pattern.


## Example: small `<style>` tag you can paste in `lesson.html`

If you want a tiny override inside the page instead of editing `style.css`, add this to the `<head>` of `lesson.html`:

```html
<style>
	/* page-specific tweak: make section headings a little larger */
	h2 { font-size: 1.15rem; }
</style>
```


## Quick tips for teaching this in 1 hour
- Show how variables make color changes simple: change `--accent` and the page updates.
- Demonstrate the three linking methods (external, internal, inline) and explain when to use each.
- Let students tweak padding or colors and refresh to see changes.

---

Files touched for this lesson: `lesson.html`, `style.css`, and this `introduction.md` (all under `class-1`).

