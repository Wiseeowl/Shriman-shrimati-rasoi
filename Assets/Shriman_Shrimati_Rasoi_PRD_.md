
## 1. Product Overview

Shriman Shrimati Rasoi is a Rajasthani-cuisine restaurant and cloud kitchen in Deoghar. The site has three jobs:
1. **Brand presence** — premium, cultural, liquid-glass visual identity built on "generations of Rajasthani heritage."
2. **Direct ordering** — two independent, locally-scoped commerce flows: hot food (Order Now) and bulk packaged goods like achar/chutney/masala (Delivery) — **both serve Deoghar only**.
3. **Trust-building for first-time visitors** — since this is your first restaurant site, the structure leans on social proof (gallery, testimonials, FAQ) to do the convincing that an established brand wouldn't need.

## 2. Goals & Success Metrics

| Goal | Metric |
|---|---|
| Drive direct online orders | # orders/month via site (not Swiggy/Zomato) |
| Reduce phone-order load on staff | % of total orders coming through site after launch |
| Convert AIIMS Deoghar / pilgrim foot-traffic into site visits | Session duration, bounce rate on Home |
| Bulk goods (achar/masala) as a side revenue line | # Delivery-page orders, avg order value |
| Land catering/event orders | # catering inquiry submissions/month |
| Premium feel despite heavy video/animation | LCP < 2.5s on 4G, hero video < 8MB compressed |

## 3. Target Users

- **Local diners** in Deoghar ordering for pickup or local delivery.
- **AIIMS Deoghar visitors** (patients' families, staff) wanting reliable home-style Rajasthani thali nearby.
- **Pilgrims/tourists** (Deoghar is a Baidyanath temple town) discovering the restaurant via search/social.
- **Local bulk buyers** of the achar/chutney/masala line (Deoghar delivery only — not a national e-commerce line).
- **Event/function hosts** in Deoghar wanting bulk Rajasthani catering.

## 4. Brand & Design System

### 4.1 Identity
- Two logo files: transparent-bg (default — used everywhere on the video/dark/glass surfaces) and white-bg (reserved for favicon source, social-share fallback, print/email — not used as a visible site element).

### 4.2 Color System — **locked**

| Token | Hex | Role |
|---|---|---|
| `--color-base-white` | `#FFFFFF` | Page background, glass base |
| `--color-cream` | `#FFE3B3` | Section backgrounds, glass tint |
| `--color-gold` | `#FBB931` | Secondary accents, active states, borders |
| `--color-orange` | `#F88F22` | Primary CTAs, links, icons |
| `--color-deep-orange` | `#EA6113` | Hover/active states, emphasis |
| `--color-maroon` | `#7A1212` | Headline accents, festive highlights, footer band |

```ts
// tailwind.config.ts
colors: {
  base: { white: '#FFFFFF', cream: '#FFE3B3' },
  brand: { gold: '#FBB931', orange: '#F88F22', deepOrange: '#EA6113', maroon: '#7A1212' },
},
```
Usage weight stays white > cream > gold > orange > deep-orange > maroon, exactly the descending order you specified — maroon is the rarest, highest-impact color (headline word accents, FSSAI/trust badge band, footer top border).

### 4.3 Typography
- **Display/body:** Poppins, 500 weight for headings.
- **Serif accent:** Source Serif 4 — italic/emphasis only inside h1–h3.
- Inter/Playfair from the borrowed cursor-tracking template are **not used anywhere** — confirmed dropped.

### 4.4 Liquid Glass Tokens (`@layer components` in `index.css`) — unchanged from v1, verbatim:

```css
:root { --radius: 1rem; }

.liquid-glass {
  background: rgba(255,255,255,0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 1.4px;
  border-radius: inherit;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    transparent 40%, transparent 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.liquid-glass-strong {
  background: rgba(255,255,255,0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(50px);
  border: none;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15);
  position: relative;
  overflow: hidden;
}
.liquid-glass-strong::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 1.4px;
  border-radius: inherit;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 20%,
    transparent 40%, transparent 60%,
    rgba(255,255,255,0.2) 80%, rgba(255,255,255,0.5) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
```
**Design-system rule (important for Antigravity):** Heavy glass (`.liquid-glass-strong`) is reserved for the **Hero panel(s)**, the **Menu Preview frame**, and the **Order/Delivery toggle + cards**. Informational sections (Why Us, Gallery, Testimonials, FAQ, About, Contact) use plain white/cream backgrounds with minimal or no glass — this keeps "white" genuinely dominant instead of glass-morphism overused everywhere, matching your descending color-weight intent.

### 4.5 Motion System — unchanged from v1:
```css
@keyframes heroReveal { 0%{opacity:0;transform:translateY(28px);filter:blur(12px)} 100%{opacity:1;transform:translateY(0);filter:blur(0)} }
@keyframes heroFadeUp { 0%{opacity:0;transform:translateY(20px)} 100%{opacity:1;transform:translateY(0)} }
.hero-anim { opacity:0; animation-fill-mode:forwards; animation-timing-function:cubic-bezier(0.16,1,0.3,1); }
.hero-reveal { animation-name:heroReveal; animation-duration:1.1s; }
.hero-fade { animation-name:heroFadeUp; animation-duration:1s; }
@media (prefers-reduced-motion: reduce){ .hero-anim{ animation:none; opacity:1; } }
```
(`heroZoom`/`.hero-zoom` dropped — that was a Ken Burns effect for a static image; not needed over a video background.)

---

## 5. Information Architecture

| Header label | Behavior |
|---|---|
| Home | `/` top |
| Menu | Anchor-scroll to `#menu` on Home |
| Order | Routes to `/order` (defaults to Order Now; Delivery reachable via in-page toggle) |
| About Us | Anchor-scroll to `#about` on Home |
| Contact | Anchor-scroll to `#contact` on Home |
| Login / Sign Up | Auth modal (UI only until Firebase, Phase 5) |

### Site Map
```
/            → Home: Header, Hero (+ optional Today's Special panel), Why Us, Menu Preview (#menu),
               Gallery, Testimonials, Catering/Bulk Event Inquiry, FAQ, About (#about),
               Contact (#contact), Footer
/order       → Order Now page (hot food, Deoghar pickup/local delivery) — has the Order/Delivery toggle
/delivery    → Delivery page (achar/chutney/masala, Deoghar local delivery only) — has the same toggle
```
**Locked decision:** `/order` and `/delivery` are **two separate page components/routes**, not two tabs sharing one page's state. A shared `OrderDeliveryToggle` component sits at the top of both pages — clicking the inactive side **navigates** to the other route (it's a router switch styled as a toggle, not a content swap within one page). Both pages serve **Deoghar local orders only** — there is no pan-India shipping anywhere on this site.

---

## 6. Project Structure (for Antigravity to scaffold)

```
src/
  assets/
    logo-transparent.png
    logo-white-bg.png
    hero-video.mp4
    menu/        (placeholder images until real menu photos supplied)
    gallery/     (placeholder images until real ambience/food photos supplied)
  config/
    featureFlags.ts        → { SHOW_TODAYS_SPECIAL: boolean }
  components/
    layout/
      Header.tsx
      Footer.tsx
      AuthModal.tsx
    home/
      HeroSection.tsx
      HeroVideoBackground.tsx
      CursorRippleLayer.tsx
      TodaysSpecialPanel.tsx
      WhyUsSection.tsx
      MenuPreviewCarousel.tsx
      MenuItemCard.tsx
      GallerySection.tsx
      TestimonialsSection.tsx
      CateringSection.tsx
      FAQSection.tsx
      AboutSection.tsx
      ContactSection.tsx
    order/
      OrderDeliveryToggle.tsx
      OrderNowGrid.tsx
      DeliveryGrid.tsx
      CartDrawer.tsx
      BillingForm.tsx
      UpiPaymentButton.tsx
    common/
      LiquidGlassPanel.tsx
      Button.tsx
      Pill.tsx
      Accordion.tsx
  context/
    CartContext.tsx
    AuthContext.tsx
  data/
    menuItems.ts
    deliveryItems.ts
    testimonials.ts
    galleryImages.ts
  hooks/
    useCursorRipple.ts
  pages/
    Home.tsx
    OrderPage.tsx
    DeliveryPage.tsx
  styles/
    index.css
  App.tsx
  main.tsx
```

---

## 7. Functional Spec by Section

### 7.1 Header (global)
- Fixed, `z-[100]`. **Over the hero:** fully transparent, white text/icons, logo (transparent version) + wordmark on left, nav pill (`.liquid-glass`) center/right, Login/Sign Up pill far right.
- **Past the hero (confirmed):** on scroll, header switches to a light `.liquid-glass` chip — white/cream translucent background, dark maroon/charcoal text and logo treatment, same layout, so it stays legible over the white sections. Implement via scroll-position check (e.g., `IntersectionObserver` on the hero, or `window.scrollY > heroHeight`).

### 7.2 Hero Section

**Background:** full-viewport `<video>` — autoplay, loop, muted, `playsInline`, `object-cover`, `z-0`. All content at `z-10`.

**Main glass panel** (`.liquid-glass-strong`, rounded-3xl, centered):
- Logo (80×80, transparent version)
- H1 "**The Taste of Rajasthan**" — `text-6xl lg:text-7xl`, `tracking-[-0.05em]`, white; "Rajasthan" in Source Serif 4 italic, `text-white/80`
- One-line heritage sub-copy
- Two CTAs, `.liquid-glass-strong`, rounded-full, `hover:scale-105 active:scale-95`: **"Explore Menu"** (→ `#menu`) and **"Order Now"** (→ `/order`)
- Three `.liquid-glass` pills: e.g. "Pure Veg & Non-Veg", "Cloud Kitchen", "Cooked Fresh Daily"
- Bottom quote block: "OUR HERITAGE" label + one-line generational-cooking quote + family/founder attribution

**Today's Special panel (feature-flagged):**
- Controlled by a single constant: `config/featureFlags.ts → SHOW_TODAYS_SPECIAL = true | false`. When `false`, the hero renders only the centered main panel at a comfortable max-width — no layout gap, no broken spacing. When `true`, desktop (`lg:` and up) splits into a ~62/38 layout: main panel left, `TodaysSpecialPanel` right.
- `TodaysSpecialPanel` content: `.liquid-glass-strong` card — "TODAY'S SPECIAL" label (`text-xs tracking-widest uppercase text-white/60`), dish photo thumbnail, dish name, one-line description, price, small "Order Now" pill linking to `/order`.
- **Mobile behavior:** the right panel is `hidden` below `lg` (same pattern as the original two-panel spec). Instead, when the flag is `true`, render a compact `TodaysSpecialPanel` variant as a horizontal glass chip just under the CTA row on mobile, so the feature doesn't simply disappear on phones.
- Data source: a single `menuItems` entry flagged `isTodaysSpecial: true` (swap which item daily by editing the flag in `data/menuItems.ts` until Firestore is wired in Phase 5).

**Cursor liquid-ripple effect (replaces the v1 image-reveal mask):**

Concept, from your reference image: ignore the literal gold-droplet object and its lighting — keep only the **concentric-ring water-ripple pattern**, spawned at the cursor and trailing as it moves.

Mouse tracking infrastructure (same RAF-smoothing approach as before):
- Refs: `mouse` (raw `e.clientX/clientY` from a `mousemove` listener), `smooth` (eased position), `rafRef`.
- Each RAF tick: `smooth.x += (mouse.x - smooth.x) * 0.1` (same for y).

Ripple spawning & lifecycle (new):
- Maintain a mutable `ripples` ref array of `{ x, y, createdAt }` — **not React state**, to avoid re-render thrashing; the canvas is redrawn imperatively every frame.
- Track `lastSpawn = { x, y, time }`. On each tick, if the smoothed cursor has moved more than ~12px since `lastSpawn` **and** at least ~120ms have passed, push a new ripple at the current smoothed position and update `lastSpawn`. This is what makes "if it moves, the waves also move" — a continuous trail of new ripples while the cursor is in motion, and nothing new spawns once it stops.
- Cap concurrent ripples (e.g. max 6) — drop the oldest if exceeded, for performance.
- Per frame, for every ripple: `age = now - createdAt`. If `age > LIFESPAN` (≈1400ms), remove it. Otherwise `progress = age / LIFESPAN` (0→1):
  - `radius = progress * MAX_RADIUS` (`MAX_RADIUS` ≈140px)
  - Draw 2–3 concentric ring strokes per ripple at `radius`, `radius*0.7`, `radius*0.4`, each with `globalAlpha = (1 - progress) * baseAlpha` (rings fade as they expand — mirrors the real water-ripple look in your reference photo) and `lineWidth` tapering from ~2px down to ~0.5px as `progress` increases.
  - Stroke color: brand gold/cream (`rgba(251,185,49,…)` / `rgba(255,227,179,…)`) at low opacity — warm tones that already belong to the palette, not a literal recreation of the photo's dramatic lighting.
- Composite as a `<canvas>` layer, `absolute inset-0 z-20 pointer-events-none`, `mix-blend-mode: screen` (or `soft-light` — test both, pick whichever reads better against the actual video footage), sitting above the video and glass panel. This is a direct visible draw, **not** a mask-based reveal — masking would only cookie-cut a static silhouette, which doesn't read as "waves."
- `prefers-reduced-motion: reduce` → don't run the RAF loop at all; the layer simply doesn't render.

**On-load animation:** headline lines → `hero-anim hero-reveal` staggered (`0.25s`, `0.42s`); CTA row + pills → `hero-anim hero-fade` (`0.7s`); quote block + Today's Special panel (if shown) → `hero-anim hero-fade` (`0.85s`).

**Responsive:** `100dvh`; headline `text-5xl → sm:text-7xl → lg:text-7xl`; CTAs stack below `sm`.

### 7.3 Why Us
- Light section (no heavy glass). "Our roots are from Rajasthan — we serve generational Rajasthani cuisine," expanded into a 3–4 point feature grid (recipes passed down, authentic spices, home-style cooking, hygiene/freshness).

### 7.4 Menu Preview (`#menu`)
- Outer `.liquid-glass-strong` frame, `rounded-[2.5rem]`, per your reference photo's tall glass-card-over-color-blobs look.
- Inside: continuous right-to-left marquee (pause on hover) of `MenuItemCard`s — dish photo, name, veg/non-veg tag, price, large "Order Now" button → `/order`.
- Placeholder data in `data/menuItems.ts` until real menu photography is supplied — **Antigravity should not generate new food-photo prompts here.**

### 7.5 Gallery / Ambience *(new — recommended for a first restaurant site)*
- A grid/masonry of restaurant interior, kitchen, and plated-dish photography — builds trust for visitors who've never been. Light section, no glass.
- Data source: `data/galleryImages.ts`, placeholder until you supply photos.

### 7.6 Testimonials / Reviews *(new)*
- 3–4 curated quote cards for v1 (name, one-line quote, optional star rating). Structure it so it can later be swapped for a live Google Reviews embed once you have enough reviews — don't hard-code the layout in a way that locks you into static-only.
- **Open question:** do you have existing Google Business reviews to pull from, or should I draft placeholder quote copy for now? (see Section 13)

### 7.7 Catering & Bulk Event Orders *(new)*
- Inquiry-only section (no cart/checkout) — pitches function/wedding/party catering using the same "generational Rajasthani thali" story.
- A simple form: Name, Phone, Event type, Guest count, Event date, Message → for v1, submits via a `mailto:`/WhatsApp deep link (no backend yet); Phase 5/6 swaps this for a Firebase Function that emails/stores the inquiry.

### 7.8 FAQ *(new)*
- Accordion (`components/common/Accordion.tsx`, light styling, no glass) covering: delivery area (Deoghar only, no pan-India), order hours, payment methods (UPI only at launch), minimum order value for Delivery-page bulk goods, veg/non-veg labeling, catering lead time.

### 7.9 About (`#about`)
- Deeper founder/heritage story than Why Us — history, Deoghar/AIIMS Deoghar context, restaurant/kitchen photo.

### 7.10 Contact (`#contact`)
- Address (near AIIMS Deoghar), click-to-call phone, WhatsApp link, email, embedded Google Map, hours.

### 7.11 Footer
- **Column 1 — Explore More:** Home, Menu, Order, About Us, Contact, Privacy Policy, Terms.
- **Column 2 — Contact Details:** address, phone, email.
- **Column 3 — Follow Us:** Instagram, Facebook, WhatsApp.
- **Trust badge row:** veg/non-veg icons (reuse logo's leaf/chicken marks), "100% Hygienic Kitchen," and — **explicit placeholder, leave this blank for you to fill:** `FSSAI License No.: [ _____________ ]`.
- Bottom bar: copyright + back-to-top button (bottom-left, per your reference image).

### 7.12 Order Page (`/order`) — hot food, Deoghar only
- Own page header band (light `.liquid-glass`, no video).
- `OrderDeliveryToggle` at top — "Order Now" (active) / "Delivery" — clicking "Delivery" **navigates to `/delivery`**.
- Grid of `MenuItemCard`s with quantity stepper + "Add to Cart"; persistent cart icon/badge opens `CartDrawer`.
- Fulfillment: pickup or local Deoghar delivery slot — no address-far-afield logic needed since it's local-only.

### 7.13 Delivery Page (`/delivery`) — achar/chutney/masala, Deoghar only
- Same page chrome and `OrderDeliveryToggle` (now showing "Delivery" active); clicking "Order Now" navigates back to `/order`.
- Grid of `DeliveryItemCard`s with **bulk quantity options** (e.g. 250g/500g/1kg or pack-count) instead of single-unit add-to-cart.
- Fulfillment: Deoghar-local delivery address/locality only — **no shipping/courier flow, no pan-India logistics.**

### 7.14 Cart, Billing & UPI Payment (shared component logic, used by both pages)
- `CartDrawer`: line items, qty edit, remove, subtotal.
- `BillingForm`: name, phone, email (optional), Deoghar locality/address + delivery slot OR pickup selection, order notes, subtotal/delivery-charge/total.
- `UpiPaymentButton` (v1, no backend): UPI deep link (`upi://pay?pa=<vpa>&pn=Shriman Shrimati Rasoi&am=<amount>&cu=INR`) + static QR fallback; shows "payment pending verification" — staff confirm manually via WhatsApp/call until Phase 5.
- **Phase 5:** real gateway (Razorpay/Cashfree UPI Intent) via a Firebase Cloud Function that verifies payment and writes to Firestore.

---

## 8. Data Model (Firebase-ready, wired Phase 5)

```
menuItems/{id}         → name, description, price, imageUrl, isVeg, category, isTodaysSpecial, available
deliveryItems/{id}      → name, description, basePrice, unitOptions[], imageUrl, category, available
testimonials/{id}       → name, quote, rating, source:'manual'|'google', date
galleryImages/{id}      → imageUrl, caption, category
cateringInquiries/{id}  → name, phone, eventType, guestCount, eventDate, message, createdAt, status
orders/{id}             → type:'order'|'delivery', items[], subtotal, deliveryCharge, total,
                           fulfillment:{ locality, addressLine, slot|pickup:boolean },
                           paymentStatus, paymentRef, createdAt
users/{id}              → name, phone, email, addresses[], orderHistory[]
```
v1 (pre-Firebase): `menuItems`, `deliveryItems`, `testimonials`, `galleryImages` are static TS arrays in `data/`; cart lives in `CartContext` (in-memory only); orders/catering inquiries are not persisted — they end in a "we'll confirm manually" UI state.

---

## 9. Non-Functional Requirements

- **Performance:** compress hero video (<8MB, H.264, poster-frame fallback for slow connections); lazy-load gallery/menu images below the fold; cap concurrent cursor-ripples for frame-rate stability; code-split `/order` and `/delivery` routes.
- **Accessibility:** `prefers-reduced-motion` disables hero reveal animation AND the ripple canvas entirely; visible focus states on all glass interactive elements (glass alone isn't enough for keyboard focus indication).
- **SEO:** LocalBusiness/Restaurant schema.org structured data; OpenGraph image uses the **white-bg logo** (transparent version can render invisible on some social-card backgrounds); per-page titles/meta.
- **Responsiveness:** mobile-first; 44px+ tap targets; marquee swipeable on touch.
- **Browser support:** `@supports not (backdrop-filter: blur(1px))` fallback to solid backgrounds for `.liquid-glass*` on older Android WebViews.

---

## 10. Assets Checklist

| Asset | Status |
|---|---|
| Logo — transparent bg | ✅ Provided |
| Logo — white bg | ✅ Provided |
| Hero loop video | ✅ Provided |
| Menu item photography | ⏳ You'll supply — placeholder set for now |
| Delivery item photography (achar/chutney/masala) | ⏳ Pending |
| Gallery/ambience photos | ⏳ Pending |
| About-section restaurant/kitchen photo | ⏳ Pending |
| Testimonial quotes (real or placeholder) | ⏳ See Section 13 |
| FSSAI license number | ⏳ i wll add — field is left blank in footer |

---

## 11. Build Phases

1. **Phase 1 — Foundation:** scaffold, Tailwind brand tokens, `index.css` (glass + motion), Header/Footer shells (incl. scroll-state light-chip behavior), routing (`/`, `/order`, `/delivery`).
2. **Phase 2 — Hero:** video background, main glass panel + CTAs, `TodaysSpecialPanel` behind feature flag, `useCursorRipple` hook + `CursorRippleLayer`, on-load animations.
3. **Phase 3 — Home content:** Why Us, Menu Preview marquee, Gallery, Testimonials, Catering inquiry, FAQ, About, Contact.
4. **Phase 4 — Commerce:** `/order` and `/delivery` pages, `OrderDeliveryToggle`, `CartContext`, `CartDrawer`, `BillingForm`, mock `UpiPaymentButton`.
5. **Phase 5 — Firebase wiring (separate session):** phone-OTP Auth, Firestore for all collections in Section 8, real UPI/Razorpay payment + Cloud Function verification, order history, catering-inquiry storage/notification.

---

## 12. Out of Scope (v1)

- Real payment processing (mock UPI deep link/QR until Phase 5).
- User accounts/order history (Login is UI-only).
- Admin/CMS for menu management (edit `data/*.ts` directly until Firestore).
- Pan-India shipping/logistics of any kind.
- Multi-language support.

---
