# HTML to Next.js + Tailwind Conversion Instructions

## Project Context
Convert any HTML-based website to Next.js 14+ with Tailwind CSS for CDN deployment. Target: 90% visual resemblance, page-by-page incremental migration.

**Source compatibility:** PHP, WordPress, Django, Rails, static HTML, Jekyll, Hugo, Webflow exports, or any server-rendered HTML.

**AI assistant context:** This document guides AI coding assistants (Roocode, Cursor, Claude API) to perform accurate conversions. All instructions are written for AI execution, not manual coding.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v3+
- **AI Tools**: Roocode, Cursor, Claude API, or compatible assistants
- **Deployment**: CDN (Vercel/Cloudflare Pages)

## Conversion Workflow

### Phase 1: Pre-Conversion Setup

**One-time project initialization:**

1. **Create Next.js project IN CURRENT DIRECTORY**:
   ```bash
   # If starting fresh in empty folder
   npx create-next-app@latest . --typescript --tailwind --app
   
   # This creates files in current folder, NOT a subfolder
   # Result: app/, public/, package.json in current directory
   ```

2. **Verify Tailwind config**: Check `tailwind.config.ts` includes `./app/**/*.{js,ts,jsx,tsx}`

3. **Verify directory structure**:
   ```
   . (current folder)
   ├── app/
   ├── public/
   │   ├── images/
   │   ├── fonts/
   │   └── icons/
   ├── package.json
   ├── next.config.js
   ├── README.md (project docs)
   ├── CONVERSION_INSTRUCTION.md (this file)
   └── CONVERSION_INSTRUCTION_LITE.md
   ```

4. **Route mapping reference** (for planning):
   ```
   Source                    → Next.js Route
   -----------------------------------------------
   index.html / index.php    → app/page.tsx
   about.html / about.php    → app/about/page.tsx
   services/index.jsp        → app/services/page.tsx
   blog/post.aspx           → app/blog/post/page.tsx
   products.cfm             → app/products/page.tsx
   ```
   
   **Pattern**: File extension doesn't matter - focus on URL path structure.

**CRITICAL: Do NOT create project subfolders like `project-name/`. Work in current directory.**

**Do this once, then proceed to Phase 2 for each page.**

### Phase 2: Per-Page Conversion Process

**⚠️ CRITICAL: SINGLE PAGE SCOPE ENFORCEMENT**

You are converting EXACTLY ONE PAGE. Do not deviate from this scope.

**PROHIBITED ACTIONS:**
- ❌ Searching for or fetching linked URLs
- ❌ Analyzing navigation target pages
- ❌ Following href attributes to other pages
- ❌ Attempting to understand site structure beyond current page
- ❌ Recursively exploring the website

**ALLOWED ACTIONS:**
- ✅ Convert the provided HTML for current page only
- ✅ Preserve all `<a href="...">` links exactly as-is
- ✅ Note which assets (images/fonts) need migration
- ✅ Transform HTML → JSX and CSS → Tailwind for this page

**Example:**
```html
<!-- You see this link in the HTML -->
<a href="/about">About</a>

<!-- Action: Preserve it in output, DO NOT fetch /about -->
<a href="/about">About</a>
```

Each page conversion is an isolated task. Linked pages will be converted separately.

---

**IMPORTANT: Convert ONE page at a time. Do NOT attempt to convert linked pages.**

When you see links like `<a href="/about">About</a>` or `<a href="/contact.php">Contact</a>`:
- Preserve the link exactly as-is (just update to JSX syntax)
- Do NOT fetch or convert the linked page
- Each page conversion is a separate task

This phase converts a SINGLE page's HTML and styling.

#### Step 1: Extract Source HTML

**AI needs rendered HTML output, not backend source code.**

**What to extract:**
- ✅ The HTML the browser receives (View Source)
- ❌ PHP/Python/Ruby source code files

**Why**: A PHP file, Django template, Rails view, or ASP.NET page all produce HTML. We convert the HTML output, not the backend language.

**Choose method based on source:**

**Method A: Live URL (preferred)**
- Provide URL directly: `https://example.com/about`
- AI can fetch and analyze automatically

**Method B: Browser extraction**
- Open page in browser
- Right-click → "View Page Source" (Ctrl+U / Cmd+U)
- Copy entire HTML or specific sections
- Alternative: Inspect → Right-click element → Copy → Copy outerHTML

**Method C: Save complete page**
- Browser → File → Save Page As → "Webpage, Complete"
- Provides HTML + linked assets

**Method D: Command line**
```bash
curl https://example.com/page.html > page.html
# or with assets
wget -p -k https://example.com/page.html
```

**Output**: HTML ready for conversion (either URL or pasted content)

#### Step 2: Classify Page Complexity

**Analyze HTML to determine conversion approach:**

| Type | Indicators | Action |
|------|-----------|--------|
| **Static** | No server variables, no forms, no JS interactions | Convert immediately |
| **Semi-dynamic** | Has forms or client-side JS only | Add `'use client'` directive |
| **Server-dynamic** | Server variables, database content, authentication | Hardcode data temporarily, revisit later |
| **Component-heavy** | Repeated headers/footers/navigation | Mark for extraction after 2-3 pages |

**AI instruction**: Identify page type in analysis, proceed with appropriate approach.

#### Step 3: Create Next.js Page File
```
app/
  pagename/
    page.tsx  ← Create this
```

#### Step 4: HTML → JSX Transformation Rules

**CRITICAL: AI must apply ALL these transformations:**

| HTML | JSX | Example |
|------|-----|---------|
| `class="..."` | `className="..."` | `<div className="container">` |
| `<img>`, `<br>`, `<hr>`, `<input>` | Self-close with `/` | `<img src="..." />` |
| `onclick="..."` | `onClick={...}` | `onClick={handleClick}` |
| `onchange="..."` | `onChange={...}` | `onChange={handleChange}` |
| `for="..."` | `htmlFor="..."` | `<label htmlFor="email">` |
| `style="margin: 20px"` | `style={{ margin: '20px' }}` | Inline object syntax |
| `<!-- comment -->` | `{/* comment */}` | JSX comment syntax |
| `<div></div>` | `<div />` (if empty) | Self-close empty tags |

**CRITICAL: Links and Navigation**
- **DO NOT convert linked pages** - Only convert the current page
- **PRESERVE all `<a>` tags** with their original `href` values
- **Keep navigation links working** - Just update syntax to JSX
- Example: `<a href="/about.php">About</a>` → `<a href="/about.php">About</a>` (href stays the same)
- Converting the target page is a separate task

**Additional transformations:**
- Remove server-side tags: `<?php ?>` (PHP), `{{ }}` (Django/Jinja), `<%= %>` (Rails/EJS), `<% %>` (ASP), `@` (Razor)
- Convert HTML entities: `&nbsp;` → `{'\u00A0'}` or keep as-is
- Wrap text in expressions if mixed with components: `<div>Hello {name}</div>`
- Remove deprecated HTML: `<center>`, `<font>`, `<marquee>`

**AI output format**: Clean TypeScript JSX, no backend template artifacts.

#### Step 5: CSS → Tailwind Conversion

**Priority: Convert ALL styling to Tailwind utilities. Minimize custom CSS.**

**Common conversions:**

| CSS Property | Tailwind Class | Notes |
|-------------|---------------|-------|
| `margin: 20px` | `m-5` | 1 unit = 0.25rem (4px) |
| `margin-top: 10px` | `mt-2.5` | Use arbitrary values if needed: `mt-[10px]` |
| `padding: 16px` | `p-4` | |
| `color: #333` | `text-gray-800` | Match closest Tailwind color |
| `background: #f5f5f5` | `bg-gray-100` | |
| `font-size: 16px` | `text-base` | sm, base, lg, xl, 2xl... |
| `font-weight: bold` | `font-bold` | thin, normal, medium, semibold, bold, extrabold |
| `display: flex` | `flex` | |
| `justify-content: center` | `justify-center` | |
| `align-items: center` | `items-center` | |
| `width: 100%` | `w-full` | or `w-1/2`, `w-1/3`, etc. |
| `max-width: 1200px` | `max-w-6xl` | or arbitrary: `max-w-[1200px]` |
| `border-radius: 8px` | `rounded-lg` | sm, md, lg, xl, 2xl, full |
| `box-shadow: ...` | `shadow-md` | sm, md, lg, xl, 2xl |

**Responsive breakpoints:**
```tsx
// Mobile-first approach
className="text-sm md:text-base lg:text-lg"
//         mobile    tablet       desktop
```

**Handling complex CSS:**
1. **Try Tailwind first**: Most CSS can be replicated
2. **Use arbitrary values**: `w-[347px]`, `bg-[#ff6b6b]`
3. **Last resort**: Add to `globals.css` with comment explaining why

**Color matching:**
- `#000` → `text-black` or `bg-black`
- `#fff` → `text-white` or `bg-white`
- `#333` → `text-gray-800`
- `#666` → `text-gray-600`
- `#f5f5f5` → `bg-gray-100`
- Custom brand colors → Use arbitrary: `bg-[#ff6b6b]`

**AI instruction**: Convert 95%+ of styles to Tailwind. Document any globals.css additions.

#### Step 6: Asset Migration & Path Correction

**CRITICAL: Broken asset paths are the #1 cause of visual mismatches.**

**Asset organization:**
```
public/
  images/          ← All images (.jpg, .png, .svg, .webp)
  fonts/           ← Font files (.woff, .woff2, .ttf)
  icons/           ← Icon files (.svg, .ico)
  documents/       ← PDFs, downloads
```

**Path transformation rules:**

| Original Path | Next.js Path | Notes |
|--------------|-------------|-------|
| `images/logo.png` | `/images/logo.png` | Leading slash required |
| `../assets/icon.svg` | `/icons/icon.svg` | Flatten relative paths |
| `/uploads/photo.jpg` | `/images/photo.jpg` | Organize logically |
| `http://oldsite.com/img/x.png` | `/images/x.png` | Download and host locally |

**Next.js Image component (recommended):**
```tsx
// Instead of:
<img src="/images/hero.jpg" alt="Hero" />

// Use:
import Image from 'next/image'
<Image src="/images/hero.jpg" alt="Hero" width={800} height={600} />
```

**AI checklist per conversion:**
- [ ] List all image/font/icon assets found
- [ ] Provide migration commands (which files to move where)
- [ ] Update all `src`, `href`, and `url()` references
- [ ] Verify external URLs (CDNs are OK, but note them)
- [ ] Convert to Next.js `<Image>` if dimensions are known

#### Step 7: Component Extraction (After Converting 2-3 Pages)

**TIMING: Do NOT extract components on first page. Wait until patterns emerge.**

**When to extract:**
- Element appears on 3+ pages verbatim
- Navigation/header/footer are identical across pages
- Card layouts, buttons, or form inputs repeat exactly

**Component structure:**
```tsx
// components/Header.tsx
export default function Header() {
  return (
    <header className="...">
      {/* Extracted header content */}
    </header>
  )
}

// Usage in app/page.tsx
import Header from '@/components/Header'

export default function Page() {
  return (
    <>
      <Header />
      {/* Page content */}
    </>
  )
}
```

**Common components to extract:**
1. **Header** (`components/Header.tsx`) - Logo, navigation, menu
2. **Footer** (`components/Footer.tsx`) - Links, copyright, social icons
3. **Navigation** (`components/Nav.tsx`) - If separate from header
4. **Buttons** (`components/Button.tsx`) - If consistent styling
5. **Cards** (`components/Card.tsx`) - For repeated content blocks

**AI instruction**: 
- On pages 1-2: Note potential components in comments
- After page 3: Suggest extraction with specific file paths
- Provide updated page files importing components

### Phase 3: Dynamic Content Handling

**Strategy: Convert static HTML first, add dynamic features incrementally.**

#### Server-Side Variables

**Original examples (any backend):**

```php
<!-- PHP -->
<?php $title = "Welcome"; ?>
<h1><?php echo $title; ?></h1>
```

```python
<!-- Django Template -->
<h1>{{ title }}</h1>
<p>Hello, {{ user.username }}</p>
```

```ruby
<!-- Rails ERB -->
<h1><%= @title %></h1>
<p>Hello, <%= @user.name %></p>
```

```javascript
<!-- EJS/Handlebars -->
<h1><%= title %></h1>
<p>Hello, {{username}}</p>
```

**Next.js conversion options (all backends convert the same way):**

**Option A: Hardcode temporarily (fastest)**
```tsx
export default function Page() {
  const title = "Welcome"
  const user = "Alex" // TODO: Replace with auth
  
  return (
    <>
      <h1>{title}</h1>
      <p>Hello, {user}</p>
    </>
  )
}
```

**Option B: Server Component (production-ready)**
```tsx
async function getUser() {
  // Fetch from database or API
  return { username: "Alex" }
}

export default async function Page() {
  const user = await getUser()
  
  return <p>Hello, {user.username}</p>
}
```

**Option C: Client Component with API**
```tsx
'use client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    fetch('/api/user').then(r => r.json()).then(setUser)
  }, [])
  
  return <p>Hello, {user?.username}</p>
}
```

#### Database Queries

**Defer complex data fetching until static conversion complete.**

| Original Backend | Next.js Approach |
|-----------------|------------------|
| PHP + MySQL | API routes (`app/api/`) or Server Components with Prisma/Drizzle |
| WordPress posts | Export JSON, store in `/data`, import statically |
| Django views | Recreate as Server Components or API endpoints |
| Rails controllers | Convert to Next.js API routes |

**AI instruction for initial conversion**: Use Option A (hardcoded). Note all dynamic data in comments for future implementation.

### Phase 4: Forms & Client-Side Interactivity

**Any page with forms, buttons with logic, or JavaScript requires `'use client'` directive.**

#### Contact Form Example

**Original HTML (from any backend):**

```html
<!-- Pure HTML or from PHP/Django/Rails/etc -->
<form method="POST" action="/contact">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <textarea name="message"></textarea>
  <button type="submit">Send</button>
</form>
```

**Regardless of original backend (PHP, Django, Rails, ASP.NET), all convert to this Next.js pattern:**
```tsx
'use client' // REQUIRED for forms

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        {status === 'loading' ? 'Sending...' : 'Send'}
      </button>
      {status === 'success' && <p className="text-green-600">Message sent!</p>}
      {status === 'error' && <p className="text-red-600">Error sending message</p>}
    </form>
  )
}
```

#### API Route (Backend Handler)

**Create**: `app/api/contact/route.ts`
```tsx
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, message } = body
  
  // TODO: Send email, save to database, etc.
  // For now, just log
  console.log('Contact form:', { name, email, message })
  
  // Simulate processing
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return NextResponse.json({ success: true })
}
```

#### Other Interactive Elements

**Dropdowns, accordions, modals:**
```tsx
'use client'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index}>
          <button onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            {faq.question}
          </button>
          {openIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  )
}
```

**AI instruction**: 
- Identify all forms and interactive elements
- Add `'use client'` directive at file top
- Implement React state for form fields
- Create API route stubs for POST handlers
- Include loading and error states

### Phase 5: URL Redirects & Routing

**Preserve SEO: Redirect old URLs to new Next.js routes.**

#### Server Redirects → next.config.js

**Original configurations (any server):**

```apache
# Apache .htaccess
RewriteRule ^old-page\.php$ /new-page [R=301,L]
```

```nginx
# Nginx
rewrite ^/old-page.php$ /new-page permanent;
```

```python
# Django urls.py
path('old-page/', RedirectView.as_view(url='/new-page/'))
```

```ruby
# Rails routes.rb
get '/old-page', to: redirect('/new-page')
```

**All convert to the same Next.js pattern:**

**Create/update**: `next.config.js` or `next.config.ts`

```typescript
import type { NextConfig } from 'next'

const config: NextConfig = {
  async redirects() {
    return [
      // Simple redirect
      {
        source: '/old-page.php',
        destination: '/new-page',
        permanent: true, // 301 redirect
      },
      
      // With parameters
      {
        source: '/product.php?id=:id',
        destination: '/products/:id',
        permanent: true,
      },
      
      // Wildcard matching
      {
        source: '/blog/:slug*',
        destination: '/articles/:slug*',
        permanent: true,
      },
      
      // Remove file extensions
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      
      // Remove .php from all routes
      {
        source: '/:path*.php',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
  
  // Optional: Trailing slash behavior
  trailingSlash: false, // /about not /about/
}

export default config
```

#### Common Redirect Patterns

| Old Route | New Route | Config |
|-----------|-----------|--------|
| `/index.php` | `/` | `source: '/index.php', destination: '/'` |
| `/page.php?id=123` | `/page/123` | `source: '/page.php', destination: '/page/:id'` |
| `/category/subcategory/` | `/category-subcategory` | Manual mapping |
| `/old-domain.com/*` | `/new-domain.com/*` | Use domain in source |

**AI instruction**: Analyze original site structure, generate complete redirect config for SEO preservation.

## Quality Checklist (Per Page)

**Complete this verification before moving to next page:**

### Visual Accuracy
- [ ] **90%+ visual match**: Side-by-side comparison with original
- [ ] **Typography**: Fonts, sizes, weights match
- [ ] **Colors**: Background, text, borders match exactly
- [ ] **Spacing**: Margins, padding consistent
- [ ] **Layout**: Grid/flex structure identical

### Responsive Design
- [ ] **Mobile** (375px): No horizontal scroll, readable text
- [ ] **Tablet** (768px): Proper layout adaptation
- [ ] **Desktop** (1920px): Max-width constraints, centered content

### Functionality
- [ ] **Images**: All load, no 404s, correct aspect ratios
- [ ] **Links**: Internal links work, external open in new tab
- [ ] **Forms**: Submit handlers work, validation active
- [ ] **Interactive elements**: Dropdowns, modals, accordions function

### Technical
- [ ] **Console**: Zero errors (warnings OK)
- [ ] **TypeScript**: Zero type errors (`npm run build` succeeds)
- [ ] **Accessibility**: Alt text on images, semantic HTML
- [ ] **Performance**: Lighthouse score >85 (mobile)

### Deployment
- [ ] **Vercel preview**: Deployed and accessible
- [ ] **URL structure**: Matches SEO requirements
- [ ] **Assets**: All static files served from CDN

**AI instruction**: Include this checklist in every conversion deliverable.

## Deployment Strategy

**Deploy incrementally. One page at a time.**

### Per-Page Deployment Flow

1. **Convert page** → Complete Phase 2 steps
2. **Local verification** → `npm run dev`, test at `localhost:3000`
3. **Build check** → `npm run build` (must succeed, zero errors)
4. **Deploy to preview** → Push to GitHub, Vercel auto-deploys
5. **Visual comparison**:
   - Open original: `https://oldsite.com/about`
   - Open preview: `https://preview-xyz.vercel.app/about`
   - Compare side-by-side on 3 screen sizes
6. **Fix discrepancies** → Iterate until 90%+ match
7. **Mark complete** → Move to next page

### Vercel Deployment Setup

**One-time setup:**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
vercel link

# Deploy
vercel --prod
```

**Every page after:**
```bash
git add .
git commit -m "Convert: about page"
git push origin main
# Vercel auto-deploys in ~30 seconds
```

### Production Cutover (After All Pages Done)

1. **DNS preparation**: Note current A/CNAME records
2. **Final build**: `npm run build`, verify zero errors
3. **Production deploy**: `vercel --prod`
4. **Configure domain**: Add custom domain in Vercel dashboard
5. **Update DNS**: Point to Vercel nameservers
6. **Test**: Verify all routes, forms, assets
7. **Redirects**: Ensure old URLs redirect (next.config.js)
8. **Monitor**: Check analytics, error logs, performance

### WAF Migration (Separate Task)

- **CloudFlare**: Add Vercel domain to CloudFlare, enable proxy
- **AWS WAF**: Configure ALB/CloudFront for Vercel origin
- **Rate limiting**: Use Vercel's built-in or CloudFlare rules

**Do not block conversion work waiting for WAF. Deploy to preview domains first.**

## AI Assistant Instructions

**For Roocode, Cursor, Claude API, or compatible tools:**

### Critical Output Requirements

**Deliver ONLY what is requested:**
1. Complete page.tsx file code
2. Asset migration checklist (images/fonts to move)
3. Notes on deferred dynamic content (if applicable)

**File paths must be relative to current directory:**
- Use `app/page.tsx` NOT `project-name/app/page.tsx`
- Use `app/about/page.tsx` NOT `hocg-app/app/about/page.tsx`
- Assume Next.js project exists in current working directory

**DO NOT include:**
- ❌ Offers for additional help ("Would you like me to...")
- ❌ Suggestions for next steps ("I can also help with...")
- ❌ Follow-up questions ("Should I configure...")
- ❌ Project setup assistance (tailwind.config, globals.css setup)
- ❌ Deployment guidance unless explicitly requested

**Response format:**
- Provide code in markdown code blocks
- State required file operations clearly
- End response after delivering the conversion
- No conversational pleasantries or upselling

### Prompt Best Practices

**Always include:**
1. Reference this file: `Following #CONVERSION_INSTRUCTION.md`
2. Source URL or HTML content
3. Target file path: `app/[route]/page.tsx`
4. Existing context (if page 2+): "Reuse components/Header.tsx"

**Request format:**
```
Following #CONVERSION_INSTRUCTION.md, convert:
Source: https://example.com/about
Target: app/about/page.tsx

[Any specific requirements]

Provide:
1. Complete page.tsx code
2. Asset migration list
3. Component extraction suggestions (if applicable)
```

### AI Output Requirements

**Every conversion must include:**

1. **Complete TypeScript file** - No placeholders or TODOs unless explicitly for future work
2. **Asset migration checklist** - Which files go where
3. **Dependency imports** - All necessary Next.js/React imports
4. **Tailwind classes** - 95%+ of styling in className
5. **Type safety** - Proper TypeScript types for props, state
6. **Comments** - Note any deviations from original or deferred features

**Code quality standards:**
- No `any` types (use `unknown` or proper types)
- Consistent formatting (Prettier-compatible)
- Semantic HTML (`<nav>`, `<main>`, `<article>` not just `<div>`)
- Accessibility: alt text, ARIA labels where needed
- No hardcoded URLs (use environment variables for APIs)

### Multi-Turn Workflow

**Page 1:**
```
Following #CONVERSION_INSTRUCTION.md, convert https://site.com to app/page.tsx
This is the first page - establish patterns.
```

**Page 2:**
```
Following #CONVERSION_INSTRUCTION.md, convert https://site.com/about to app/about/page.tsx
Context: Header/Footer exist at components/
```

**Component extraction (after page 3):**
```
Following #CONVERSION_INSTRUCTION.md, extract repeated header from:
- app/page.tsx
- app/about/page.tsx  
- app/services/page.tsx

Into components/Header.tsx and update all pages.
```

## Deferred Tasks

**Complete after all pages converted:**

- Meta tags optimization (Next.js Metadata API)
- SEO enhancements (structured data, sitemaps)
- Performance optimization (image optimization, code splitting)
- Analytics integration (Google Analytics, Vercel Analytics)
- Complex dynamic features (authentication, real-time data)
- Accessibility audit (WCAG compliance)
- Internationalization (i18n if multi-language)

---

## Troubleshooting Guide

### Build Errors

**Error: `className` did not match**
```
Warning: Prop `className` did not match. Server: "..." Client: "..."
```
**Fix**: Check for dynamic classes or client-side only styling. Move to `'use client'` component.

**Error: Image optimization failed**
```
Error: Invalid src prop on `next/image`
```
**Fix**: Provide explicit `width` and `height` or use `fill` with parent container.

**Error: Module not found**
```
Module not found: Can't resolve '@/components/Header'
```
**Fix**: Verify file exists, check tsconfig.json has `"@/*": ["./*"]` in paths.

### Visual Issues

**Problem: Layout shifts on load**  
**Fix**: Add explicit dimensions to images, use Next.js `<Image>` with priority

**Problem: Fonts not loading**  
**Fix**: Use next/font for Google Fonts or place files in `/public/fonts` with proper CSS

**Problem: Colors don't match**  
**Fix**: Check original hex values, use arbitrary Tailwind `bg-[#exact-color]`

**Problem: Mobile layout broken**  
**Fix**: Review responsive classes (`md:`, `lg:`), test at exact breakpoints

### Runtime Issues

**Problem: Form not submitting**  
**Fix**: Check `'use client'` directive present, API route returns proper response

**Problem: Images 404 in production**  
**Fix**: Verify files in `/public` not `/app`, use leading slash in paths

**Problem: Links reload entire page**  
**Fix**: Use `<Link>` from `next/link` not `<a>` for internal navigation

### Performance Issues

**Problem: Slow page loads**  
**Fix**: Optimize images (WebP, proper sizing), lazy load below fold content

**Problem: Large bundle size**  
**Fix**: Dynamic imports for heavy components, check for duplicate dependencies

---

---

## Summary: AI Assistant Quick Reference

**Core Principles:**
1. HTML output → JSX syntax (className, self-closing tags)
2. CSS → Tailwind utilities (95%+ coverage)
3. Assets → `/public` with leading slash paths
4. Static first → Dynamic features later
5. One page at a time → Deploy and verify

**File Structure:**
```
app/
  page.tsx              # Homepage
  [route]/page.tsx      # Other pages
  api/[endpoint]/route.ts  # API handlers
components/
  Header.tsx            # Reusable components
public/
  images/               # All static assets
```

**Decision Tree:**
- Static content? → Server Component (default)
- Forms/interactions? → Client Component (`'use client'`)
- Database data? → Hardcode temporarily OR Server Component with async fetch
- Repeated elements? → Extract after 3+ pages
- Links to other pages? → Preserve href, don't convert linked pages (one page per task)

**Quality Gate:**
Every conversion must pass:
- TypeScript builds (`npm run build`)
- Visual match 90%+
- Responsive on 3 screen sizes
- All assets load
- Zero console errors

**This document is optimized for AI-assisted conversion. Reference it in every prompt.**

### ❌ Converting All Pages Simultaneously
**Problem**: Errors compound, hard to debug, overwhelming scope  
**Solution**: One page at a time. Deploy and verify each before proceeding.

### ❌ Ignoring Asset Paths
**Problem**: Images show locally but break in production  
**Solution**: Use leading slash `/images/logo.png`, verify all assets in `/public`

### ❌ Skipping Visual Comparison
**Problem**: Small CSS errors accumulate into major visual drift  
**Solution**: Side-by-side comparison on mobile/tablet/desktop after each page

### ❌ Premature Component Extraction
**Problem**: Extracting components before patterns emerge leads to refactoring  
**Solution**: Wait until element appears identically on 3+ pages

### ❌ Fighting Tailwind
**Problem**: Spending hours converting complex CSS to Tailwind  
**Solution**: Use arbitrary values `bg-[#ff6b6b]` or add to globals.css with comment

### ❌ Copying Server Code Directly
**Problem**: Trying to convert PHP/Django logic 1:1 to Next.js  
**Solution**: Hardcode data initially, implement API routes after static conversion

### ❌ No TypeScript Errors ≠ Working Code
**Problem**: Page builds but looks wrong, missing assets, broken layout  
**Solution**: Always test in browser, not just build checks

### ❌ Forgetting 'use client' Directive
**Problem**: Forms and interactive elements fail silently  
**Solution**: Any `useState`, `useEffect`, `onClick` requires `'use client'` at top

### ❌ Relative Imports in Production
**Problem**: `import './Header.tsx'` works locally, breaks in production  
**Solution**: Use `@/components/Header` (tsconfig.json paths configured)

### ❌ Not Testing Responsive Breakpoints
**Problem**: Looks perfect on desktop, broken on mobile  
**Solution**: Test 375px, 768px, 1920px for every page

### ❌ Deploying Without Build Test
**Problem**: Preview deploys fail, blocks workflow  
**Solution**: Run `npm run build` locally before every commit

### ❌ Mixing HTML and JSX Syntax
**Problem**: `class` instead of `className`, unclosed tags  
**Solution**: Use AI assistant or HTML-to-JSX converter, review carefully