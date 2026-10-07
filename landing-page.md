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
streak, or a food diary — they want the we# Repast — landing page specification

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

## 5. Complete feature inventory

Everything the app does, grouped by what it is for. **Every item is built and working** —
audited against `src/store/useAppStore.ts`, `src/core/*` and the 35 screens. Anything
specced but not built is in §5.9, and anything we must not claim is in §5.10.

Use §5.1 for the feature grid. Use the rest for a features page, App Store copy, and
answering "but does it…" questions.

### 5.1 The six to lead with

| Feature                | The sentence for the page                                                          |
| ---------------------- | ---------------------------------------------------------------------------------- |
| **Hard carb ceiling**  | Days are generated _under_ your cap, not scored against it afterwards.             |
| **On-device only**     | No account, no server, no analytics. There is nothing to leak.                     |
| **Verified nutrition** | 155 of 174 ingredients carry a USDA FoodData Central id you can look up yourself.  |
| **One shopping list**  | Aisle-grouped, in the units you actually buy, leftovers already accounted for.     |
| **Honest refusal**     | When your constraints can't be met it names the single one to loosen.              |
| **Adaptive targets**   | Learns your real maintenance calories from what you logged and what the scale did. |

---

### 5.2 Planning and the generator

- **Seven-day plans** built from a seeded generator — the same profile and week produce the
  same plan, so the app is never inconsistent with itself between launches.
- **Hard carb ceiling per day.** Keto defaults to **20g net**, low-carb to **75g net**.
  Percentage-of-calorie carb budgets for the three non-cap diets.
- **Net or total carbs** — your choice, and it changes the arithmetic rather than the
  label. Under net counting, fibre is deducted; the total cap is derived from the net one
  plus a per-dietary-rule fibre allowance, so the two can never disagree.
- **Five diets:** keto, low-carb, high-protein, paleo, Mediterranean.
- **Three meal structures:** 2 meals, 3 meals, or 3 meals + 2 snacks.
- **Per-slot calorie budgeting** — breakfast, lunch, dinner and snacks each get a share of
  the day, so you don't get a 900-calorie breakfast and a 200-calorie dinner.
- **Portion scaling** in six steps from 0.75× to 2×, so a plan hits your calorie target
  without needing a recipe that happens to be exactly the right size.
- **Variety rules** — no three chicken dinners in a row, no repeat of the same dish inside
  a day, and a recency penalty on signature ingredients across the week.
- **Feasibility check before generating.** If your constraints cannot produce a valid week,
  the app says so up front instead of producing something that quietly breaks a rule.
- **Named relaxations.** A blocked plan comes with the one constraint responsible, how many
  more options loosening it would unlock, and a one-tap button to do it. Five kinds:
  drop an allergen exclusion, allow longer cooking, add equipment, allow harder recipes,
  or un-dislike an ingredient.
- **Cuisine preferences** across seven cuisines — American, Mediterranean, Italian, Mexican,
  Indian, Asian, and unspecified.
- **Difficulty ceiling** and **cook-time ceiling** (under 15 min / around 30 / 45+).
- **Equipment filtering.** Recipes declare what they need and the pool is filtered to what
  you own. In practice the library uses four: stovetop (72 recipes), oven (43), blender (3)
  and grill (2). Air fryer and slow cooker are offered in the question but **no recipe
  requires either**, so do not name them on the page as though they unlock anything.
- **Batch-cooking mode** for people who cook once and eat the same thing repeatedly.
- **Household scaling** — quantities multiply for the number of people eating.

### 5.3 Living with the plan day to day

- **Today screen** with the next meal as a hero card, the day's macros, and a carb gauge
  that stays visually calm until you approach the cap and only then changes colour.
- **Tick meals off** as eaten, or **skip** them with alternatives offered.
- **A three-hour undo window** on a tick. Logging late is normal — a dinner cooked at
  eleven gets ticked at half past midnight — but un-ticking breakfast at nine in the evening
  is rewriting history, so the window runs from the moment of the tick.
- **The past is immutable.** Days that have been and gone cannot be edited, swapped or
  regenerated. Anything already eaten today is pinned too.
- **Swap any meal** for a ranked list of alternatives, scored by the generator's own
  criteria and filtered to what still fits the day's remaining carb budget.
- **Lock a meal** so a rebuild reproduces it exactly, portion size included.
- **Ban a recipe** you never want to see again.
- **Rebuild the days ahead** without touching what you have already eaten.
- **Start next week** when the current plan runs out.
- **Regenerate a single day** rather than the whole week.
- **Stale-plan detection** — change an answer that moves your targets and the app tells you
  the plan no longer matches, rather than silently continuing.

### 5.4 Recipes

- **131 recipes**, every one with ingredients in grams, purchasable units, numbered steps,
  prep and cook time, difficulty, servings, equipment and cost tier.
- **Full macro breakdown** per recipe, scaled to your actual portion.
- **Ingredient substitutions** with the **signed carb delta** — swap avocado for olive oil
  and see exactly what it does to the day. Covers about 90% of recipe lines.
- **Automatic dietary classification.** Whether a recipe is vegetarian, pescatarian or
  red-meat-free is derived from its ingredients, never hand-tagged, so it cannot be wrong
  in the way a forgotten label is wrong.
- **10 allergen exclusions:** dairy, nuts, peanuts, gluten, eggs, soy, shellfish, fish,
  pork, beef.
- **13 divisive-ingredient opt-outs** for things people genuinely hate — mushrooms, olives,
  avocado, coriander, coconut, aubergine, sauerkraut, Brussels sprouts, blue cheese, feta,
  anchovies, liver, pork belly.
- **Coverage guarantee:** 108 of 108 meal-slot × diet combinations have at least one
  servable recipe.
- **Recipe drops** — a version-stamped mechanism for adding recipes later and showing you
  only what is new since you last looked.

### 5.5 Shopping

- **One list for the week**, grouped into seven aisles: produce, meat, seafood, dairy,
  pantry, frozen, spices.
- **Cook-session aware quantities.** The list counts whole cooks, not sittings — a
  4-serving recipe eaten twice is one cook. In testing this cut a household-of-four basket
  from 67.6kg to 34.8kg.
- **Purchasable units, not grams.** "2 packs of 4" and "7 medium avocados" rather than
  "1400g of egg".
- **Pantry staples** you already own can be marked and left off the list permanently.
- **Tick items as you shop**, with an uncheck-everything reset.
- **Share the list** as plain text to Notes, Messages, or anything else.
- **Leftover chains** — the plan tells you when today's dinner is tomorrow's lunch.

### 5.6 Weight and progress

- **Weight log** with a slider tuned to ±3kg around your last reading, so a 0.1kg step is
  actually hittable with a thumb.
- **EWMA trend line** — a 10-day smoothing that shows the signal instead of the daily
  water-weight noise. (The method is the one from _The Hacker's Diet_.)
- **Rate of change** by least squares through the smoothed series, with the warm-up period
  trimmed so early readings don't distort the slope.
- **Projection to target** week by week, from your actual measured rate rather than the
  formula's assumption.
- **Pace comparison** — whether you are ahead of, behind, or on the pace you asked for.
- **Adaptive TDEE.** After 21 days at 80%+ adherence the app inverts the energy balance to
  work out what your maintenance calories really are, and _offers_ the correction rather
  than applying it. Confidence grows to full at 42 days, and the correction is capped at
  ±20% so one bad fortnight cannot wreck your targets.
- **30-day adherence stats** — plan-followed percentage, meals ticked, days fully logged,
  highest carb day, and average calories and carbs on the days you logged.
- **Weakest-slot detection.** If you skip breakfast most days it says so, and suggests that
  fewer meals a day might suit you better than a plan you keep leaving a gap in.

### 5.7 Targets and the numbers

- **Mifflin–St Jeor BMR** with four activity multipliers (sitting, light, active, very
  active) and three goals (lose, maintain, gain).
- **Safety limits that scale with BMI.** The maximum deficit is a fraction of your TDEE
  that depends on how much you have to lose, so a lean person cannot ask the app for an
  aggressive cut.
- **Pace reduction, stated.** If you request a rate the app will not support it reduces it
  and tells you it did, rather than silently ignoring you.
- **Protein floor per kilo of bodyweight**, 1.4–2.2g depending on diet, with a 2.5g ceiling
  used to reject absurd plans.
- **Atwater validation.** Every ingredient's calories are checked against 4/4/9 and flagged
  when they disagree by more than 8%. Foods where the arithmetic legitimately fails —
  vinegar, cocoa, most spices, fermented soy — are individually exempted with a written
  reason, rather than the tolerance being widened until the check stops catching real
  errors.
- **Metric and imperial**, switchable at any time.

### 5.8 Everything else

- **Editable answers.** Every onboarding answer can be changed later from the profile
  screen; the app recomputes targets and tells you if the plan is now stale.
- **Optional reminders** — an evening nudge for tonight's meal and a shop-again nudge on
  the last day of the plan. Off by default.
- **Local notifications only**, scheduled on-device.
- **Full reset** that clears everything.
- **Self-check screen** (developer builds) that generates thousands of plans across random
  profiles and reports failures, coverage and determinism.
- **Custom tab bar** built from scratch rather than a component library.
- **18 onboarding questions** (16 if you are maintaining and not counting grams), each on
  its own screen, with two closing screens that only show you what you said.

### 5.9 Specced and NOT built — do not imply these

- No barcode scanning, no photo-based logging, no free-text food entry
- No calorie tracking outside the plan — the app only knows what you ticked off _its_ plan
- No recipe search or browsing outside the week it gave you
- No custom recipes or user-added ingredients
- No exercise tracking, no step count, no HealthKit
- No sync, no backup, no multi-device, no web app, no Android, no iPad-specific layout
- No social, no sharing of plans, no community, no coach
- No restaurant or takeaway guidance
- No one-time "30-day reset" purchase — it was specced and deliberately cut

### 5.10 Claims that would be false or risky

- ❌ **Recipe photography.** There is none yet; every dish renders as a generated gradient.
  See §7.
- ❌ **"AI-powered."** It is a constraint solver with a seeded random. Calling it AI invites
  the wrong comparison and the wrong expectations.
- ❌ **Weight-loss outcomes, timelines, or before/after imagery.** Medical-claim risk and
  App Review risk, and we have no outcome data.
- ❌ **Testimonials, ratings, or user counts.** There are no users. Fabricating social proof
  is out of the question; an empty review section is worse than none.
- ❌ **"Works with any constraints."** 19% of simulated profiles cannot be served today —
  almost all of them "under 15 minutes" combined with a dietary rule, because only 6 of 92
  mains come in under 15 minutes and the feasibility check needs 6. If we advertise speed
  we recruit exactly the users we fail at onboarding. Say "most weeknight cooking".
- ❌ **"Thousands of recipes."** It is 131. The number is a strength when stated plainly
  next to the coverage guarantee, and a liability when inflated.
- ❌ **Offline as a _feature_ claim beyond what is true.** It genuinely works with no
  network, but do not imply there is a synced online mode to fall back from.

### 5.11 Numbers you may quote

All verified against the codebase at the time of writing:

| Claim                              | Value                                                |
| ---------------------------------- | ---------------------------------------------------- |
| Recipes                            | **131**                                              |
| Ingredients                        | **174**                                              |
| Ingredients with a USDA id         | **155** (19 declared unverified, each with a reason) |
| Coverage cells                     | **108 / 108**                                        |
| Carb overage across simulated days | **0g** over 16,933 days                              |
| Plans generated in the self-check  | 2,419 from 3,000 random profiles                     |
| Diets                              | 5                                                    |
| Allergen exclusions                | 10                                                   |
| Cuisines                           | 7                                                    |
| Aisles                             | 7                                                    |
| Onboarding questions               | 18 (16 minimum)                                      |

Re-verify before publishing — `npm run check:ship` reports the ingredient counts, and the
self-check screen reports the rest.

## 6. Conversion mechanics

- **Apple Smart App Banner** in `<head>` — the highest-converting element on an iOS
  marketing page, and it becomes an "Open" button once installed:
  ```html
  <meta name="apple-itunes-app" content="app-id=6807802664" />
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
      ek decided.

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
  <meta name="apple-itunes-app" content="app-id=6807802664" />
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
