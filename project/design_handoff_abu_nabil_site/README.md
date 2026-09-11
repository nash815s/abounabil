# Handoff: Abu Nabil site (الحاج أبو نبيل)

## Overview
A small single-page Arabic (RTL) site for a satirical LinkedIn/Instagram carousel series about workplace culture, built around a fictional boss archetype, "الحاج أبو نبيل". The page explains the premise, previews episodes, links to Instagram and LinkedIn, and collects reader-submitted stories.

Target environment: an existing **GitHub Pages** repository currently holding `index.html` and `style.css` on the same palette. This should merge into that as plain static HTML/CSS.

## About the Design Files
`Abu Nabil Site.dc.html` in this bundle is a **design reference created in HTML** — a prototype showing intended look and behavior, not production code to copy directly. It renders through a component runtime and uses inline styles throughout, so it is not a drop-in file.

The task is to **recreate this design in the target repository's environment**: semantic `index.html` plus rules in `style.css`, matching the values documented below exactly. Move the inline styles into CSS classes; do not carry over the runtime, the `<x-dc>` wrapper, or `sc-if`/`sc-for` tags.

## Fidelity
**High-fidelity.** Colors, typography, spacing, border treatments and copy are final unless noted as placeholder. Recreate pixel-for-pixel. The two backstory paragraphs, the four episode titles, and the episode links are placeholders to be replaced with real content.

## Screens / Views

One scrolling page. `dir="rtl"`, `lang="ar"`.

**Page shell**
- `html, body`: margin/padding 0, background `#f4e8d0`.
- Root: background `#f4e8d0`, color `#3b2f22`, font `'Markazi Text', serif`, 21px, line-height 1.75, min-height 100vh.
- Content column: `max-width: 860px; margin: 0 auto; padding: 0 22px`.
- Optional grain overlay: `position: fixed; inset: 0; pointer-events: none; opacity: .5; background-image: radial-gradient(rgba(59,47,34,.10) 1px, transparent 1px); background-size: 4px 4px`.

### 1. Hero
Purpose: name the series and set tone.
- Section: `padding: 68px 0 44px`, flex column, gap 26px.
- Eyebrow: `LINKEDIN · INSTAGRAM` — IBM Plex Mono 12px, letter-spacing .16em, color `#a85a3d`, `direction: ltr; text-align: right`.
- H1 `الحاج أبو نبيل` — Aref Ruqaa 700, `clamp(40px, 10vw, 72px)`, line-height 1.28, color `#2f5e5a`.
- Tagline `مشاهد من مكتبٍ لا يشبه أحدًا، ويشبه الجميع.` — `clamp(21px, 4.5vw, 27px)`, max-width 30ch, color `#3b2f22`.
- Cover frame (see **Hand-drawn frame** below): `max-width: 420px; width: 100%`. Inner holds the hero illustration, `aspect-ratio: 4/5`, `object-fit: cover`, `overflow: hidden` on the inner frame. Alt: `الحاج أبو نبيل جالسًا إلى مكتبه`.
- Intro paragraph `سلسلة قصيرة عن ثقافة العمل. كل حلقة تبدأ بموقف، ثم تتوقف عند كلمة «جديًا» لتقرأ الموقف من الداخل.` — max-width 46ch.
- Followed by a 1px rule: `background: #a85a3d; opacity: .5; margin: 0 0 44px`.

### 2. Backstory
- Section: `padding: 0 0 60px`, flex column, gap 16px.
- H2 `كيف بدأت الحكاية` — Aref Ruqaa, `clamp(28px, 6vw, 38px)`, line-height 1.4, color `#2f5e5a`.
- Two paragraphs, max-width 58ch (placeholder copy in the prototype, prefixed "نص مؤقت").

### 3. Episode preview
- Section: `padding: 0 0 60px`, flex column, gap 26px. H2 `من الحلقات` (same H2 spec).
- Grid: `grid-template-columns: repeat(auto-fit, minmax(min(100%, 190px), 1fr)); gap: 22px` — 4 cards, collapses to one column on narrow phones.
- Each card is an `<a>` (flex column, gap 12px, `text-decoration: none`, color `#3b2f22`) containing:
  - Hand-drawn frame with `padding: 6px`; inner is a 4:5 image slot. Hover: outer frame `border-color: #1f403d`.
  - Episode number — IBM Plex Mono 11px, letter-spacing .12em, color `#a85a3d`, `direction: ltr; text-align: right` (`01`–`04`).
  - Title — Aref Ruqaa 20px, line-height 1.5, color `#2f5e5a`.
- Placeholder titles: `باب المكتب`, `الاجتماع الطويل`, `ورقة لا يقرأها أحد`, `الترقية`. Links currently `#`; they should point at the original posts and open externally.

### 4. Follow links
- Section: `padding: 0 0 60px`, flex column, gap 20px. H2 `تابع السلسلة`.
- Row: `display: flex; flex-wrap: wrap; gap: 14px`. Two buttons, each `flex: 1 1 190px`, centered text, `padding: 14px 22px`, font-size 23px, `border: 1.5px solid #2f5e5a`, color `#2f5e5a`, no underline.
  - Instagram radius: `14px 20px 12px 22px / 20px 13px 22px 14px`
  - LinkedIn radius: `20px 13px 22px 14px / 13px 22px 14px 20px` (deliberately different so the pair looks hand-drawn)
  - Hover both: `background: #2f5e5a; color: #f4e8d0`.
- Labels: `إنستغرام`, `لينكدإن`. URLs are placeholders (`https://instagram.com`, `https://linkedin.com`).

### 5. Share your story
- Outer hand-drawn frame: outer radius `18px 24px 16px 26px / 26px 16px 26px 18px`, `padding: 8px`; inner radius `14px 20px 12px 22px / 22px 13px 22px 15px`, `border: 1px solid rgba(47,94,90,.35)`, `padding: clamp(22px, 5vw, 34px)`, flex column gap 18px.
- H2 `شاركنا حكايتك` — Aref Ruqaa `clamp(26px, 5.5vw, 34px)`.
- Sub-line `إن كان لديك موقف من مكتبك، اكتبه هنا. لا حاجة لذكر الأسماء.` — max-width 46ch.
- Form (flex column, gap 16px):
  - Label `الحكاية` (18px) + `<textarea rows="6">`, placeholder `اكتب ما حدث...`, `width: 100%; box-sizing: border-box; resize: vertical; background: #f9f1e0; border: 1px solid rgba(47,94,90,.5); border-radius: 10px 14px 9px 16px / 14px 9px 16px 11px; padding: 12px 14px; font-size: 20px; line-height: 1.7`. Focus: `border-color: #2f5e5a` (no glow ring).
  - Label `بريدك الإلكتروني (اختياري)` + `<input type="email">`, placeholder `name@example.com`, same field styling plus `direction: ltr; text-align: right`.
  - Submit `أرسل` — `align-self: flex-start; min-height: 48px; padding: 10px 34px; background: #2f5e5a; color: #f4e8d0; border: 1.5px solid #2f5e5a; border-radius: 14px 20px 12px 22px / 20px 13px 22px 14px`, Aref Ruqaa 21px, `cursor: pointer`. Hover: `#1f403d` background and border.

### 6. Footer
- `border-top: 1px solid rgba(47,94,90,.3); padding-top: 24px; padding-bottom: 54px`, flex row, `flex-wrap: wrap`, `justify-content: space-between`, `align-items: baseline`, gap 10px.
- Right (RTL start): `الحاج أبو نبيل` — Aref Ruqaa 19px, color `#2f5e5a`. Left: `سلسلة مستقلة · ٢٠٢٦` — 18px, color `#3b2f22`, opacity .8.

## Hand-drawn frame (shared pattern)
Two nested borders with intentionally uneven elliptical radii, no shadows:
```css
.frame {                 /* outer */
  border: 1.5px solid #2f5e5a;
  border-radius: 16px 22px 14px 26px / 24px 14px 26px 16px;
  padding: 7px;          /* 6px on episode cards, 8px on the form */
}
.frame > * {             /* inner */
  border: 1px solid rgba(47,94,90,.4);
  border-radius: 12px 18px 10px 22px / 20px 11px 22px 13px;
}
```
Vary the radius values slightly per instance — the unevenness is the point. Never add `box-shadow` or gradients.

Image placeholder fill used before real art arrives:
`background-image: repeating-linear-gradient(135deg, rgba(47,94,90,.08) 0 7px, rgba(47,94,90,0) 7px 15px)` with an IBM Plex Mono 10–11px `cover 4:5` label in `#2f5e5a`.

## Interactions & Behavior
- Hover only, no tap-dependent behavior. Cards: outer border → `#1f403d`. Follow buttons: fill teal, text cream. Submit: darker teal.
- Links: `a { color: #2f5e5a; text-decoration-thickness: 1px; text-underline-offset: 4px }`, `a:hover { color: #1f403d }`. `::selection { background: #2f5e5a; color: #f4e8d0 }`.
- Form submit in the prototype is intercepted (`preventDefault`) and replaces the form with `وصلت الحكاية. شكرًا لك.` in Aref Ruqaa 22px, color `#a85a3d`. **No backend exists** — wire to a static-friendly endpoint (Formspree, Netlify Forms, Google Form) and keep the same inline success message rather than a page navigation. Validation: story required, email optional and `type="email"`.
- No animations or transitions specified beyond default color changes on hover; keep transitions ≤150ms if added.
- Responsive: single column throughout; the episode grid is the only multi-column area and auto-collapses. All type uses `clamp()`, so no breakpoints are required. Tap targets ≥48px.
- Three prototype toggles are authoring conveniences, not product features: grain overlay, the brick rule under the hero, and episode numbers. Ship all three on.

## State Management
Only one piece of state: `submitted: boolean`, flipped on successful form submission to swap form → thank-you message. Nothing else is dynamic; episode data can be hard-coded markup.

## Design Tokens
Colors
- `#f4e8d0` page background (warm cream)
- `#2f5e5a` primary teal — headings, borders, buttons, links
- `#1f403d` darker teal — hover only
- `#3b2f22` body ink (warm dark brown)
- `#a85a3d` faded brick — eyebrow, episode numbers, hero rule, success message only
- `#f9f1e0` form field background
- `rgba(47,94,90,.5 / .4 / .38 / .35 / .3)` inner-border and rule tints
- `rgba(59,47,34,.10)` grain dot

Typography
- Headings: `'Aref Ruqaa', serif` (400/700) — H1 `clamp(40px,10vw,72px)`, H2 `clamp(28px,6vw,38px)`, card title 20px, footer mark 19px, button 21px
- Body: `'Markazi Text', serif` (400/500/600) — base 21px / line-height 1.75, tagline `clamp(21px,4.5vw,27px)`, fields 20px, labels 18px
- Mono: `'IBM Plex Mono', monospace` 10–12px, letter-spacing .08–.16em, always `direction: ltr`
- Google Fonts: `Aref+Ruqaa:wght@400;700&family=Markazi+Text:wght@400;500;600&family=IBM+Plex+Mono:wght@400&display=swap`

Spacing: 2, 6, 7, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 34, 44, 54, 60, 68 px. Section rhythm is `padding-bottom: 60px`; hero `68px` top.

Radii: no uniform scale — elliptical two-value radii per the frame pattern; fields use `10px 14px 9px 16px / 14px 9px 16px 11px`.

Shadows: none anywhere.

Measure caps: 30ch tagline, 46ch intro/sub-line, 58ch backstory.

## Assets
- `assets/ABU_NABIL_MASTER_V01.png` — hero illustration, 4:5 watercolour portrait supplied by the author (Midjourney/Canva). Included in this bundle. Place it at a sensible path in the repo and update the `src`.
- Four episode cover images (4:5) do not exist yet — keep the striped placeholder fill until supplied.
- No icons. The Instagram/LinkedIn buttons are text only; if icons are added later, use outline style at the teal, not brand-colour glyphs.

## Files
- `Abu Nabil Site.dc.html` — the design reference (component-runtime HTML, inline styles).
- `assets/ABU_NABIL_MASTER_V01.png` — hero artwork.
