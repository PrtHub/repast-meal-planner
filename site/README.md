# repast.app landing page

A single static page: `index.html` plus `assets/`. No build step, no framework, no
tracking. Everything on it comes from the app itself: the phone screens are
rendered from the real components, the recipe photos and their carbs and times
come from `src/data/recipes.ts`, and the week in the carb-cap chart is a real
generated plan.

## Before it goes live

1. **App Store link.** In `index.html`, near the bottom, set
   `var APP_STORE_ID = '';` to the app's **Apple ID** from App Store Connect →
   App Information (a number like `6741234567`). Every badge and the QR code use it.
   Until it is set, the badges scroll to the download section instead.
2. **Smart App Banner.** In the `<head>`, uncomment the `apple-itunes-app` meta tag
   and put the same id in it. Safari on iPhone then shows Apple's own install bar.
3. **Prices.** The pricing section quotes $49.99/year with a 3-day trial and
   $12.99/month. If App Store Connect differs, change both here and in
   `src/constants/pricing.ts`.

## Deploying on the existing Next.js site (Vercel)

repast.app is a Next.js app. The simplest way to serve this page at `/` without
porting it:

1. Copy `index.html` to the Next.js project as `public/landing.html`, and copy
   `assets/` to `public/assets/` (check nothing else already uses `/assets`).
2. In `next.config.js`, rewrite the root to it:

   ```js
   async rewrites() {
     return { beforeFiles: [{ source: '/', destination: '/landing.html' }] };
   }
   ```
3. Remove or rename the current `app/page.tsx` so it does not compete, and keep
   `/privacy` and `/terms` as they are. The page links to both.

Or host the folder anywhere static (Cloudflare Pages, Vercel static) and point
the domain at it, moving `/privacy` and `/terms` along with it.

## What is on the page, and why it is true

- **153 photographed recipes**: `RECIPE_POOL.length`, all with photos.
- **20g net carb cap on keto**: the keto preset's default.
- **The chart**: one generated week at a 20g net cap, 1,690 kcal; every day
  13.7–17.2g. The generator never plans a day past the cap.
- **Privacy section**: matches the privacy policy. What leaves the phone is
  purchases (Apple, RevenueCat), anonymous usage analytics (switch-off in
  Settings) and assistant questions.
- No ratings, reviews, user counts or weight-loss claims, on purpose.

## Updating the images

The screens and photos were exported for the web (WebP, 2x). If the app's UI
changes, the screens should be regenerated rather than left showing an old
design.
