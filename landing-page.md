# Repast — landing page specification

Everything needed to build `repast.app`: the job, the argument, the design tokens, the
real feature inventory, and the things we must not claim.

**One goal.** Move a visitor to the App Store. Not a newsletter, not a demo, not a waitlist.
Every section either advances that or is cut. The only number worth tracking is
_App Store link clicks ÷ unique visitors_.

There is one unavoidable second job: `repast.app/privacy` **must exist and resolve**, because
that exact URL is hardcoded in the app and App Review opens it. See §9.

---

## 1. What Repast actually is

A keto-first meal planner that produces a week of meals and one shopping list from your
own numbers, and holds you to a hard daily carb ceiling while doing it.

**Who it is for.** Someone who has decided to eat keto or low-carb and is tired of deciding
what to cook every day. They can already cook. They do not want a coach, a community, a
streak, or a food diary — they want the week decided.

**Who it is not for.** People looking for calorie tracking, barcode scanning, recipe
discovery, or a social feed. We have none of that and should not imply we do.

### The honest differentiators

These are real, verifiable in the code, and nobody else leads with them:

1. **The carb cap is a constraint, not a report.** Most apps let you log 60g of carbs and
   colour the number red. Repast will not generate a day that exceeds your ceiling. Across
   16,933 simulated days the overage is 0g. That is the product.
2. **It refuses rather than fudges.** If your constraints cannot be satisfied — 15-minute
   meals, pescatarian, no eggs — it says exactly which one is responsible and how much
   loosening it would unlock, instead of quietly serving you something that breaks a rule
   you set.
3. **Nutrition with receipts.** 155 of 174 ingredients carry a USDA FoodData Central id.
   The other 19 are declared unverified with a written reason. Nobody publishes that.
4. **Nothing leaves the phone.** No account, no sign-up, no server, no analytics transport.
   The app cannot send your weight anywhere because there is nowhere for it to send it.
5. **The shopping list understands leftovers.** It counts whole cooks, not sittings — a
   4-serving recipe eaten twice is one cook. For a household of four this cut a test basket
   from 67.6kg to 34.8kg.

Lead with 1 and 4. They are the two a stranger understands in three seconds.

---

## 2. Voice

Match the app or the page will feel like a different product. The app's copy is plain,
specific, and never sells. Actual strings from it:

> "Your plan ends today. The next week starts from tomorrow's shop."
> "Only meals you ticked are counted."
> "Not enough lunch + dinner options: 4 available, 6 needed."

**Rules.** No exclamation marks. No "effortless", "revolutionary", "game-changing",
"powered by AI", "smart". No emoji. Numbers instead of adjectives — "20g" beats "strict",
"131 recipes" beats "a huge library". Say the limitation before the visitor finds it.

Sentence case for everything except `CAP` labels. British-neutral spelling is fine; be
consistent.

---

## 3. Page structure

A single scrolling page. Roughly 6 screens on mobile. **Design mobile-first** — the traffic
is people on a phone who will install immediately or never.

### 3.1 Hero

- **Headline** (serif display, 52–72px): the strongest is a promise plus a constraint.
  Candidates, best first:
  - _"A week of keto, decided."_
  - _"Seven days of meals. One shopping list. Under 20g."_
  - _"The carb cap isn't a warning. It's a constraint."_
- **Subhead** (body, 2 lines max): "Repast builds your week from your own numbers and
  refuses to hand you a day that breaks your carb ceiling. No account. Nothing leaves your
  phone."
- **Primary CTA**: Apple's official _Download on the App Store_ badge. Nothing else
  competing above the fold.
- **Visual**: a phone frame showing the Today screen. Until photography exists, see §7.

### 3.2 The one-screen proof

A single annotated screenshot of Today, with 3 callouts: the day's carb gauge, the meal
list with tick states, the "next up" hero card. This does more than three paragraphs.

### 3.3 How it works — three steps

1. **Answer 18 questions.** Diet, body, goal, what you won't eat, how long you'll cook.
   Two minutes. (16 if you are maintaining and not counting grams — two of them only apply
   conditionally. Be specific about the number: people respect it, and the onboarding is
   genuinely good, so there is nothing to hide.)
2. **Get the week.** Seven days, every meal inside your ceiling, one shopping list grouped
   by aisle.
3. **Tick meals off.** The plan learns your actual maintenance calories from what you log
   and what the scale does, and adjusts.

### 3.4 Feature grid

Six cards, from the "lead with" list in §5. Icon, three-word title, one sentence.

### 3.5 The refusal section

This is the section that will convert the sceptic, so give it room. Show the real blocked
screen: _"Not enough lunch + dinner options: 4 available, 6 needed"_ with the
_Adjust — allow 45-minute meals_ button. Headline: **"It tells you when it can't."**
Body: an app that always returns a plan is either ignoring your constraints or padding with
food you said no to.

### 3.6 Privacy

Short, blunt, its own section. "No account. No server. No analytics. Your weight, your
meals and your measurements are on your phone and nowhere else." Link to the policy.

### 3.7 Pricing

See §8. Show both plans, the trial rule, and the renewal terms.

### 3.8 Footer

Privacy, Terms, support email, copyright. The privacy link is load-bearing (§9).

---

## 4. Design tokens

Lifted from `src/constants/theme.ts`. Use these exactly — a landing page half a shade off
reads as a different company.

```css
:root {
  /* Warm paper. Never #fff — food dies on white. */
  --bg: #f7f4ee;
  --bg-element: #ffffff;
  --bg-selected: #fdf6f1;
  --bg-sunken: #f0ebe2;

  --text: #221d19;
  --text-secondary: #6e655c;
  --text-tertiary: #a39a90;
  --text-quaternary: #c5bcb0;

  --hairline: #e6dfd5;
  --hairline-soft: #ede6dc;

  /* Terracotta. Selection and primary action. */
  --accent: #c05621;
  --accent-pressed: #98421a;
  --accent-on: #fff8ee;
  --accent-wash: #f0e4d8;

  /* Immersive ground — dark sections land as events, not more page. */
  --deep: #221d19;
  --deep-on: #fff8ee;

  /* Macro colours. Carbs are a CAP: unremarkable until they matter. */
  --protein: #2e6e7e;
  --fat: #c99a2e;
  --carb-calm: #6e655c;
  --carb-warn: #c2402f;
  --carb-over: #8f2a1e;

  --radius-thumb: 15px;
  --radius-card: 20px;
  --radius-hero: 24px;
  --radius-pill: 999px;

  /* Elevation, not outlines. */
  --shadow-card: 0 8px 18px rgba(34, 29, 25, 0.07);
  --shadow-hero: 0 16px 30px rgba(34, 29, 25, 0.16);
  --shadow-action: 0 10px 22px rgba(192, 86, 33, 0.4);
}
```

**Light mode only.** The app is `userInterfaceStyle: "light"`. Do not build a dark landing
page for a light app — and do not add a theme toggle the product does not have.

### Spacing scale

`2 · 4 · 8 · 16 · 24 · 32 · 64`. Nothing between. Section padding is 64.

### Type ramp

The wide gap between display and caption is the whole design. Do not compress it.

| Role        | Size / line-height / tracking | Weight   |
| ----------- | ----------------------------- | -------- |
| `hero`      | 84 / 88 / −1.6                | serif    |
| `metric`    | 72 / 76 / −1.4                | serif    |
| `display`   | 52 / 54 / −1.3                | serif    |
| `title`     | 40 / 43 / −0.9                | serif    |
| `heading`   | 27 / 29 / −0.3                | serif    |
| `cardTitle` | 18 / 23 / −0.2                | 700 sans |
| `body`      | 15 / 22                       | 400 sans |
| `detail`    | 13 / 18                       | 500 sans |
| `cap`       | 10 / 13 / **+1.4**, uppercase | 700 sans |

Scale the display sizes up ~1.4× on desktop; keep the body at 15–17px.

**Fonts.** The app uses `ui-serif` (New York on Apple platforms) because it is free, loads
instantly and is Dynamic-Type aware. `theme.ts` records that the original mockup used
**Instrument Serif** for more character. On the web that trade-off flips — a marketing page
can afford one webfont — so **use Instrument Serif for display and system sans for
everything else.** It is the original intent, and it distinguishes the page from the app
without contradicting it.

```css
--font-serif: "Instrument Serif", ui-serif, Georgia, serif;
--font-sans: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
```

Use tabular figures wherever numbers animate or align: `font-variant-numeric: tabular-nums`.

---

## 5. Feature inventory

Only claim what exists. Everything below is built and working.

### Lead with these

| Feature            | The sentence                                                                 |
| ------------------ | ---------------------------------------------------------------------------- |
| Hard carb ceiling  | Days are generated under your cap, not scored against it afterwards.         |
| On-device only     | No account, no server, no analytics. Nothing to leak.                        |
| Verified nutrition | 155 of 174 ingredients carry a USDA FoodData Central id you can look up.     |
| One shopping list  | Aisle-grouped, quantities in what you actually buy, leftovers accounted for. |
| Honest refusal     | When your constraints can't be met it names the one to loosen.               |
| Adaptive targets   | Learns your real maintenance calories from logged meals and weight trend.    |

### Support cast

Meal swapping with ranked alternatives · per-ingredient substitutions with the carb delta ·
lockable meals · rebuild the days ahead without touching what you've eaten · cook sessions
and leftover chains · weight log with EWMA trend and projection · 30-day adherence stats ·
dietary rules (vegetarian, pescatarian, no red meat) · 11 allergen exclusions · household
scaling · batch-cooking mode · reminders.

### Numbers you may quote

- **131 recipes**, 174 ingredients
- **108/108** coverage cells (every meal-slot × diet combination is servable)
- **0g** carb overage across 16,933 simulated days
- **5 diets**: keto, low-carb, high-protein, paleo, Mediterranean

### Do NOT claim

- ❌ Any recipe photography — there is none yet (§7)
- ❌ "AI-powered" — it is a constraint solver, and saying AI invites the wrong comparison
- ❌ Weight-loss outcomes, timelines, or before/after imagery — medical claim risk and
  App Review risk
- ❌ Testimonials or ratings — there are no users yet. Fabricating them is out of the
  question, and an empty review section is worse than none.
- ❌ "Works for any diet" — 19% of simulated profiles can't be served today, almost all of
  them "under 15 minutes" plus a dietary rule. If we advertise speed we invite exactly the
  users we fail. Say "most weeknight cooking" and leave the 15-minute claim alone until the
  library has more quick mains.
- ❌ Android, iPad, or web versions

---

## 6. Conversion mechanics

- **Apple Smart App Banner** in `<head>` — the highest-converting element on an iOS
  marketing page, and it becomes an "Open" button once installed:
  ```html
  <meta name="apple-itunes-app" content="app-id=YOUR_APP_ID" />
  ```
- **App Store badge** must be Apple's official artwork, unmodified, with correct clear
  space. Anything else is a guideline violation.
- **Deep link scheme is `repast://`** — usable from the page to open the app if present.
- Detect non-iOS visitors and swap the CTA for "iPhone only for now" rather than a badge
  that leads nowhere. An Android user hitting a dead App Store link is a worse outcome than
  an honest sentence.
- One CTA repeated 3–4 times down the page. No secondary CTA competing with it.
- **No cookie banner** — do not add analytics that requires one. It would contradict §3.6
  on the same page, which is the sort of thing people notice and post about.

---

## 7. The photography problem

**There are no recipe photos yet.** Every dish in the app currently renders as a generated
three-layer radial gradient keyed to its primary protein. See `docs/recipe-photography.md`
for the 131 prompts and the pipeline.

The landing page must not show food photography the app does not have. Two honest options:

1. **Ship the page on interface, not food.** Phone frames showing real screens — Today, the
   week, the grocery list, the blocked screen. This is defensible and arguably stronger:
   the product IS the planning, not the pictures.
2. **Wait** for the first 10–15 hero dishes, then build the page around them.

Option 1 now, upgraded later, is the right call. The gradient system reproduces in CSS if
you need dish placeholders in a grid:

```css
/* chicken — see PALETTES in src/components/ui/DishImage.tsx for the others */
background:
  radial-gradient(72% 62% at 30% 24%, #e3b769 0%, transparent 100%),
  radial-gradient(60% 54% at 70% 36%, #7c9455 0%, transparent 100%),
  radial-gradient(92% 80% at 50% 98%, #33261a 0%, transparent 100%), #8a6437;
```

---

## 8. Pricing

From `src/constants/pricing.ts`:

| Plan    | Price                         | Trial               |
| ------- | ----------------------------- | ------------------- |
| Yearly  | **$49.99/year** ($4.17/month) | **3 days free**     |
| Monthly | **$12.99/month**              | none — deliberately |

⚠️ **Check this before the page goes live.** You asked for monthly at **$14.99**; the code
says **$12.99** and git history shows it has never been anything else, so that change was
never applied. Decide which is right and make the app, App Store Connect and this page agree
— three places to get wrong.

There is deliberately no third "reset pass" SKU. Do not invent one for the page.

**Legally required next to the price** (App Review 3.1.2, and the same rules make a
misleading marketing page a problem): plan name, price, billing period, that it auto-renews,
and links to Terms and Privacy. Trial framing must be exact — _"3 days free, then $49.99 per
year. Cancel any time."_

---

## 9. Legal and the blocking dependency

**`https://repast.app/privacy` is hardcoded in the app** (`src/constants/links.ts`) and is
currently a ship blocker. It must be live before submission, and it must describe what the
app actually collects — which today is **nothing**: no account, no network calls, no
analytics transport wired up.

That is an easy policy to write honestly and a very bad one to get wrong later by adding a
tracker without updating it. If you ever add analytics, this document changes first.

Terms of Use points at Apple's standard EULA, which Apple explicitly permits:
`https://www.apple.com/legal/internet-services/itunes/dev/stdeula/`

Both links must appear in the footer and next to the pricing block.

---

## 10. Metadata

```html
<title>Repast — a week of keto, decided</title>
<meta
  name="description"
  content="Repast builds a week of keto meals and one shopping list
from your own numbers, and won't hand you a day that breaks your carb ceiling. No account,
nothing leaves your phone. iPhone."
/>
```

Open Graph image: 1200×630, warm paper `#F7F4EE`, the wordmark in Instrument Serif, one
phone frame. No stock food photography.

Structured data: `SoftwareApplication` with `applicationCategory: HealthApplication`,
`operatingSystem: iOS`, and the real `offers`. Omit `aggregateRating` — there are no
ratings, and inventing them is both wrong and a manual-action risk.

---

## 11. Build notes

Static HTML + CSS. No framework needed; no framework is the point. If you want a build step,
Astro. Do not ship a React SPA to render six sections of text.

**Budget:** under 200 KB total, LCP under 1.5s on 4G. A slow page for an app about not
wasting time is an own goal.

**Accessibility.** Body text is comfortable — `#221D19` on `#F7F4EE` measures **15.2:1**.
Three pairings in the palette are not, and the page has to work around them rather than
inherit them:

| Pairing                                   | Ratio    | Verdict                    |
| ----------------------------------------- | -------- | -------------------------- |
| `#221D19` on `#F7F4EE` — body             | 15.21    | passes comfortably         |
| `#6E655C` on `#F7F4EE` — secondary        | 5.20     | passes                     |
| `#FFF8EE` on `#C05621` — **button label** | **4.33** | large/bold text only       |
| `#C05621` on `#F7F4EE` — accent as text   | 4.16     | large text only            |
| `#A39A90` on `#F7F4EE` — tertiary         | **2.52** | fails; decorative use only |

Two consequences worth designing around:

- **The primary button label must be large or bold.** The app's cream-on-terracotta is
  4.33:1, under the 4.5 needed for normal-size text. Pure `#FFFFFF` on the same terracotta
  reaches 4.57 and passes — use white on the web button, or set the label at 18px/700 and
  keep the cream. Do not put 15px cream text on a terracotta button.
- **Never set body copy in `--text-tertiary`.** At 2.52:1 it is a hairline colour that
  happens to be legible on a phone at arm's length. For captions on the web use
  `--text-secondary`.

Also: visible focus rings, alt text on every screenshot describing what the screen _shows_
(not "app screenshot"), and a page that survives 200% zoom. The app has a font-scaling gap;
do not repeat it here.

**Checklist before launch**

- [ ] `/privacy` resolves and is accurate
- [ ] Monthly price agrees across app, App Store Connect, and page
- [ ] App Store badge is unmodified official artwork
- [ ] Smart App Banner has the real app id
- [ ] Non-iOS visitors see an honest message, not a dead badge
- [ ] No testimonials, no ratings, no invented food photography
- [ ] Every claim traceable to something in §5
