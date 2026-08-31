# HTML to Next.js Conversion Instructions (LITE)

**Simplified workflow: Clear steps, practical examples, maximum clarity.**

---

## ⚠️ OUTPUT REQUIREMENTS - READ FIRST

**Deliver ONLY:**
1. Complete page.tsx code
2. List of assets to migrate (if any)
3. Notes on deferred content (if any)

**DO NOT:**
- ❌ Ask "Would you like me to..."
- ❌ Suggest next steps
- ❌ Offer project setup help
- ❌ Provide tailwind.config or globals.css unless explicitly requested
- ❌ Give deployment advice

**Format:**
- Code in markdown blocks
- Brief asset list
- End response after delivering code

---

## ⚠️ SCOPE: SINGLE PAGE ONLY

**DO NOT search, fetch, or analyze ANY URLs except the one provided.**

When you see `<a href="/about">` or `<a href="/contact">`:
- Keep the link in output (preserve href)
- DO NOT fetch or analyze the target page
- DO NOT search for linked pages
- Each page is a separate conversion task

---

## CRITICAL RULES - TRANSFORMATION REFERENCE

### HTML → JSX Transformations (Apply to EVERY line)

| Find | Replace | Example |
|------|---------|---------|
| `class="` | `className="` | `<div className="container">` |
| `<img>` | `<img />` | `<img src="logo.png" />` |
| `<br>` | `<br />` | `<br />` |
| `<input>` | `<input />` | `<input type="text" />` |
| `onclick="` | `onClick={` | `onClick={handleClick}` |
| `onchange="` | `onChange={` | `onChange={handleChange}` |
| `for="` | `htmlFor="` | `<label htmlFor="email">` |
| `style="margin: 20px"` | `className="m-5"` | Convert ALL inline styles |

### CSS → Tailwind (Common Patterns)

| CSS | Tailwind | Notes |
|-----|----------|-------|
| `margin: 20px` | `m-5` | 4px per unit |
| `padding: 16px` | `p-4` | |
| `color: #333` | `text-gray-800` | |
| `background: #f5f5f5` | `bg-gray-100` | |
| `font-size: 16px` | `text-base` | |
| `font-weight: bold` | `font-bold` | |
| `display: flex` | `flex` | |
| `width: 100%` | `w-full` | |
| `border-radius: 8px` | `rounded-lg` | |

### Asset Paths

| Old | New |
|-----|-----|
| `images/logo.png` | `/images/logo.png` |
| `../assets/icon.svg` | `/icons/icon.svg` |
| `style.css` | Remove (use Tailwind) |

---

## CONVERSION WORKFLOW

**CRITICAL: Work in current directory. Do NOT create subfolders for the Next.js project.**

### PROJECT SETUP (One-time only)

**If Next.js project doesn't exist yet:**
```bash
# Create in current folder (use . not a project name)
npx create-next-app@latest . --typescript --tailwind --app
```

**This creates:**
```
. (current directory)
├── app/           ← Convert pages here
├── public/        ← Put images/fonts here
├── package.json
└── next.config.js
```

**DO NOT create:** `project-name/app/` or `hocg-app/app/`  
**Correct path:** `app/page.tsx` (in current directory)

---

### STEP 1: Get HTML Source

**Get HTML for CURRENT PAGE ONLY. Do not fetch other pages.**

**Do this:**
```bash
# Option A: From URL (single page)
curl https://example.com/page.html > source.html

# Option B: Browser (single page)
# Right-click → View Page Source → Copy all
```

**Output:** HTML file ready to convert

**Remember:** You are converting ONE page. Links to other pages will be preserved but not converted.

---

### STEP 2: Identify Page Type

**Check for these:**

| Type | Signs | Action |
|------|-------|--------|
| Static | No forms, no JavaScript | Go to STEP 3 |
| Has Form | `<form>` tag present | Go to STEP 3, add `'use client'` later |
| Has JavaScript | `onclick`, `onchange` events | Go to STEP 3, add `'use client'` later |

---

### STEP 3: Create Next.js File

**Do this:**
```bash
# Create directory in current folder
mkdir -p app/about

# Create file in current folder
touch app/about/page.tsx
```

**CRITICAL: Paths are relative to current directory, NOT a subfolder.**

**File structure:**
```
. (current directory - where you are now)
├── app/
│   └── about/
│       └── page.tsx  ← You create this
├── public/
└── package.json
```

**Wrong:** `hocg-app/app/about/page.tsx`  
**Correct:** `app/about/page.tsx`

---

### STEP 4: Convert HTML to JSX

**COPY HTML → PASTE → APPLY ALL RULES FROM TABLE AT TOP**

**IMPORTANT: Keep all links working, don't convert linked pages**

**Before:**
```html
<div class="header">
  <img src="logo.png">
  <nav>
    <a href="/about.php">About</a>
    <a href="/contact">Contact</a>
  </nav>
  <a href="#" onclick="handleClick()">Click</a>
</div>
```

**After:**
```tsx
<div className="header">
  <img src="/images/logo.png" />
  <nav>
    <a href="/about.php">About</a>
    <a href="/contact">Contact</a>
  </nav>
  <a href="#" onClick={handleClick}>Click</a>
</div>
```

**Note:** The `href="/about.php"` stays the same - we're NOT converting that page right now.

**Checklist:**
- [ ] All `class=` changed to `className=`
- [ ] All `<img>`, `<br>`, `<input>` self-closed with `/>`
- [ ] All `onclick` changed to `onClick`
- [ ] All server tags removed (`<?php`, `{{`, `<%`, etc.)
- [ ] All `<a href="...">` links preserved (hrefs unchanged)

---

### STEP 5: Convert CSS to Tailwind

**REMOVE all `style="..."` → ADD `className="..."`**

**Before:**
```html
<div style="margin: 20px; padding: 10px; color: #333; background: #f5f5f5;">
```

**After:**
```tsx
<div className="m-5 p-2.5 text-gray-800 bg-gray-100">
```

**Conversion table:**
- `margin: 20px` → `m-5`
- `padding: 10px` → `p-2.5`
- `color: #333` → `text-gray-800`
- `background: #f5f5f5` → `bg-gray-100`

**Checklist:**
- [ ] Zero `style=` attributes remain
- [ ] All converted to `className=`
- [ ] Use table at top of document for conversions

---

### STEP 6: Fix Asset Paths

**ADD leading slash to ALL image/font paths**

**Before:**
```tsx
<img src="images/logo.png" />
<img src="../assets/icon.svg" />
```

**After:**
```tsx
<img src="/images/logo.png" />
<img src="/icons/icon.svg" />
```

**Checklist:**
- [ ] All paths start with `/`
- [ ] All images in `/public/images/`
- [ ] All fonts in `/public/fonts/`

---

### STEP 7: Wrap in Component

**ALWAYS use this exact template:**

```tsx
export default function PageName() {
  return (
    <>
      {/* Your converted HTML here */}
    </>
  )
}
```

**Example:**
```tsx
export default function About() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">About Us</h1>
        <p className="text-gray-600">Welcome to our site</p>
      </div>
    </>
  )
}
```

**Checklist:**
- [ ] File starts with `export default function`
- [ ] Function name matches page (About, Contact, etc.)
- [ ] Content wrapped in `<> </>`
- [ ] No `<html>`, `<head>`, `<body>` tags

---

### STEP 8: Handle Forms (If Applicable)

**IF page has `<form>` tag:**

**Add this line at TOP of file:**
```tsx
'use client'
```

**Full example:**
```tsx
'use client'

import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, email })
    // TODO: Send to API
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Submit
      </button>
    </form>
  )
}
```

**Checklist:**
- [ ] `'use client'` at line 1
- [ ] `import { useState } from 'react'`
- [ ] Each input has `value=` and `onChange=`
- [ ] Form has `onSubmit=` handler

---

## OUTPUT CHECKLIST

**Before submitting code, verify ALL items:**

### Code Quality
- [ ] File is valid TypeScript (no syntax errors)
- [ ] All HTML converted to JSX (className, self-closing tags)
- [ ] All CSS converted to Tailwind classes
- [ ] All asset paths start with `/`
- [ ] Component exported with `export default`

### Completeness
- [ ] No `style=` attributes (all converted to className)
- [ ] No server-side tags (`<?php`, `{{`, `<%`)
- [ ] No `class=` (all converted to className)
- [ ] No unclosed tags (`<img>` → `<img />`)

### Forms (if applicable)
- [ ] `'use client'` directive present
- [ ] React imports added
- [ ] State variables declared
- [ ] Event handlers implemented

---

## TEMPLATE: Simple Page

```tsx
export default function PageName() {
  return (
    <>
      <header className="bg-gray-100 p-4">
        <nav className="flex justify-between items-center">
          <img src="/images/logo.png" alt="Logo" className="h-8" />
          <div className="space-x-4">
            <a href="/" className="text-blue-600 hover:underline">Home</a>
            <a href="/about" className="text-blue-600 hover:underline">About</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Page Title</h1>
        <p className="text-gray-600">Content here</p>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Company Name</p>
      </footer>
    </>
  )
}
```

---

## TEMPLATE: Form Page

```tsx
'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
```

---

## COMMON ERRORS & FIXES

### Error: "className did not match"
**Fix:** You forgot to change `class=` to `className=`

### Error: "Unexpected token <"
**Fix:** You forgot to self-close tags. Change `<img>` to `<img />`

### Error: "onclick is not defined"
**Fix:** Change `onclick` to `onClick` (capital C)

### Error: Images not loading
**Fix:** Add leading slash. Change `images/logo.png` to `/images/logo.png`

### Error: Form not working
**Fix:** Add `'use client'` at line 1 of file

---

## STEP-BY-STEP EXAMPLE

### Original HTML
```html
<html>
<head><title>About</title></head>
<body>
  <div class="header" style="background: #f5f5f5; padding: 20px;">
    <img src="images/logo.png">
    <h1 style="color: #333; font-size: 24px;">About Us</h1>
  </div>
  <div class="content">
    <p>Welcome to our company</p>
  </div>
</body>
</html>
```

### Step 1: Remove `<html>`, `<head>`, `<body>`
```html
<div class="header" style="background: #f5f5f5; padding: 20px;">
  <img src="images/logo.png">
  <h1 style="color: #333; font-size: 24px;">About Us</h1>
</div>
<div class="content">
  <p>Welcome to our company</p>
</div>
```

### Step 2: Convert `class=` to `className=`
```html
<div className="header" style="background: #f5f5f5; padding: 20px;">
  <img src="images/logo.png">
  <h1 style="color: #333; font-size: 24px;">About Us</h1>
</div>
<div className="content">
  <p>Welcome to our company</p>
</div>
```

### Step 3: Self-close `<img>`
```html
<div className="header" style="background: #f5f5f5; padding: 20px;">
  <img src="images/logo.png" />
  <h1 style="color: #333; font-size: 24px;">About Us</h1>
</div>
<div className="content">
  <p>Welcome to our company</p>
</div>
```

### Step 4: Convert `style=` to Tailwind
```html
<div className="header bg-gray-100 p-5">
  <img src="images/logo.png" />
  <h1 className="text-gray-800 text-2xl">About Us</h1>
</div>
<div className="content">
  <p>Welcome to our company</p>
</div>
```

### Step 5: Fix image path
```html
<div className="header bg-gray-100 p-5">
  <img src="/images/logo.png" />
  <h1 className="text-gray-800 text-2xl">About Us</h1>
</div>
<div className="content">
  <p>Welcome to our company</p>
</div>
```

### Step 6: Wrap in component
```tsx
export default function About() {
  return (
    <>
      <div className="header bg-gray-100 p-5">
        <img src="/images/logo.png" />
        <h1 className="text-gray-800 text-2xl">About Us</h1>
      </div>
      <div className="content">
        <p>Welcome to our company</p>
      </div>
    </>
  )
}
```

### DONE ✅

---

## FINAL REMINDER

**DO THESE IN ORDER:**
1. Get HTML source for CURRENT PAGE ONLY
2. Remove `<html>`, `<head>`, `<body>` tags
3. Change `class=` to `className=`
4. Self-close `<img>`, `<br>`, `<input>` tags
5. Convert all `style=` to Tailwind `className=`
6. Fix all asset paths (add `/` at start)
7. **Keep all `<a href="...">` links unchanged** (don't convert linked pages)
8. Wrap in `export default function` component
9. If form: add `'use client'` and state

**SCOPE REMINDER:** You're converting ONE PAGE. Links to other pages should work but stay as-is.

**OUTPUT REMINDER:** Deliver code and stop. No offers for additional help or next steps.

**CHECK BEFORE SUBMIT:**
- [ ] Zero `class=` (all `className=`)
- [ ] Zero `style=` (all Tailwind)
- [ ] All tags closed properly
- [ ] All paths start with `/`
- [ ] Valid TypeScript syntax