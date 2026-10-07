<!--
BEFORE PUBLISHING (this comment does not render):
1. Fill every [bracketed] placeholder: legal name, contact email, country, date.
2. Have a lawyer review it, especially if you sell in the EU, UK or California.
3. Mixpanel: confirm IP addresses are not stored (Project settings → Data &
   Privacy). If you enabled storing them, change the Mixpanel paragraph.
4. OpenRouter: in Settings → Privacy, turn OFF prompt logging and any "allow
   training" option, and limit routing to providers that do not train on API
   data. The assistant paragraph assumes that.
5. Publish at https://getrepast.app/privacy — the app and App Store Connect both
   link there.
6. Re-read this page whenever a new service, SDK or analytics event is added.
-->

# Repast Privacy Policy

**Effective date:** [date]

Repast is a meal-planning app made by [developer or company name] ("we", "us").
This policy explains what information the app uses, what leaves your phone, who
receives it and why, and what you can do about it.

## The short version

- **There is no account.** We never ask for your name, email or phone number.
- **Your body measurements, meal plans, meal log and weight history stay on your
  phone.** We can't see them.
- **A few things do leave your phone**, each for a specific reason: buying a
  subscription (Apple and RevenueCat), anonymous usage analytics about onboarding
  (Mixpanel), questions you choose to ask the recipe assistant (our server, then
  an AI provider), and checking for app updates (Expo).
- **We don't sell your data**, show ads, or track you across other apps and
  websites.

## Information that stays on your phone

Everything below is stored only on your device, in the app's own storage:

- Your answers from setup: sex (used only for the calorie formula), age, height,
  weight, activity level, goal, diet, how you count carbs, whether you eat meat,
  allergies and foods you avoid, how long you like to cook, kitchen equipment,
  household size and meal structure.
- Your calorie and macro targets, your meal plans, the meals you tick off or skip,
  meals you log as eaten elsewhere, your grocery list and its ticks.
- Your weight entries and the trend calculated from them.
- Your settings, such as units and reminder times.

We don't receive any of it. If your phone backs up to iCloud (or another backup
service), this data is included in that backup, under your control and your
backup provider's terms. Deleting the app deletes it from the phone.

**Notifications** (meal reminders and cooking timers) are scheduled on your phone
by the app itself. No notification server is involved and no push token is
collected.

## Information that leaves your phone

### 1. Buying and managing a subscription

**Apple** handles all payments. We never see your card or billing details.

**RevenueCat** ([privacy policy](https://www.revenuecat.com/privacy)) manages
subscriptions for us. The app gives each install a random, anonymous ID (for
example `$RCAnonymousID:3f2a…`), and RevenueCat receives that ID together with
your purchase and subscription history from Apple, so the app knows whether you
are subscribed. RevenueCat also receives basic technical information needed to
process purchases, such as the app version, the device platform, and the country
of your App Store account.

### 2. Usage analytics (Mixpanel)

We use **Mixpanel** ([privacy policy](https://mixpanel.com/legal/privacy-policy))
to understand how people move through setup and whether the subscription offer
works, so we can improve them. Mixpanel receives:

- **Which setup screens you view and complete**, and how long each takes.
- **Plan events**: that a plan was built and how long it took, or that one could
  not be built, with a short reason. The reason may mention a dietary
  restriction you chose, such as an allergy.
- **Subscription screen events**: that it was shown, which plan you selected,
  and whether a purchase started, was cancelled, failed or was restored.
- **How you heard about Repast**, if you answered that question, including
  anything you typed under "Other".

Each install has a random analytics ID that is not linked to your name, email or
Apple ID. Mixpanel also receives standard technical details such as the app
version, operating system and device type, and uses your IP address to estimate
an approximate location (country and city).

Analytics **never** includes your body measurements, weight entries, calorie
targets, meal plans, meal log, or anything you ask the recipe assistant.

### 3. The recipe assistant (only if you use it)

The assistant answers questions about a recipe. It's optional, and nothing is
sent unless you ask a question. When you do, the app sends:

- your question and the last few messages of that conversation;
- the recipe you're looking at, with its ingredients, steps and nutrition;
- how you count carbs, your daily carb limit and how much of it is left today;
- whether you eat meat, and the allergies and foods you've chosen to exclude, so
  the answer doesn't suggest them;
- your anonymous purchase ID (described above).

This goes first to **our own server**, which runs on **Cloudflare**
([privacy policy](https://www.cloudflare.com/privacypolicy/)). Our server uses the
anonymous ID to ask RevenueCat whether you're subscribed, and to count how many
questions you've asked today. It then sends the conversation, **without** that
ID, to **OpenRouter** ([privacy policy](https://openrouter.ai/privacy)), which
passes it to the AI model provider (currently Google's Gemini) to write the
answer. Those companies process it under their own policies.

Our server doesn't store your questions or the answers. It keeps:

- a daily question count for your anonymous ID, deleted after 2 days;
- a note of whether that ID is subscribed, kept for no more than 10 minutes;
- standard request logs kept by Cloudflare for a few days, such as the time and
  your IP address, used to keep the service working and to stop abuse.

Please don't type personal information, such as your name or health conditions,
into the assistant.

### 4. App updates (Expo)

The app checks **Expo**'s servers ([privacy policy](https://expo.dev/privacy))
for updates to its content and fixes. Those requests include technical
information such as the app version, platform and a random install ID, and, like
any internet request, your IP address.

## What we don't do

- We don't create accounts or collect your name, email, phone number or address.
- We don't access your contacts, location, photos, camera, microphone or Apple
  Health.
- We don't use the advertising identifier, show ads, or track you across other
  companies' apps and websites.
- We don't sell or rent your personal information, or share it for advertising.

## How long information is kept

- **On your phone:** until you erase it (Profile → Start over) or delete the app.
- **Our server:** as described above, at most 2 days, and nothing about the
  content of your questions.
- **Mixpanel:** analytics events are kept for up to [24 months], then deleted.
- **RevenueCat and Apple:** purchase records are kept as long as needed for your
  subscription and for legal, tax and accounting purposes.

## Your choices and rights

- **Erase your data on the phone:** Profile → Start over, or delete the app.
  Starting over doesn't cancel a subscription; that's managed by Apple.
- **Turn off reminders:** Profile, or your phone's notification settings.
- **Don't use the recipe assistant:** nothing is sent unless you ask a question.
- **Manage or cancel your subscription:** Profile → Manage subscription, or your
  Apple ID settings.

Depending on where you live, including the EU, UK and California, you may have
the right to access, correct or delete personal information about you, to object
to or restrict how it is used, and to complain to your local data protection
authority. Because we don't know who you are, we can only act on records we can
link to you, so tell us which device and roughly when you used the app. To make a
request, email [contact email]. We'll answer within 30 days.

**California residents:** we don't sell or share personal information as those
terms are defined in the CCPA, and we don't use sensitive personal information to
infer characteristics about you.

## Legal bases (EU and UK)

- **Providing the service you asked for** (contract): purchases, the subscription
  check, and answering assistant questions you send.
- **Legitimate interests**: anonymous usage analytics to improve setup and the app,
  keeping the service secure, and preventing abuse of the assistant.
- **Consent**: notifications, which you turn on yourself.

## Where information is processed

The services above are based in, or process data in, the United States and other
countries. Where personal data is transferred out of the EU or UK, those providers
rely on recognised safeguards such as the EU Standard Contractual Clauses or the
EU–US Data Privacy Framework.

## Children

Repast is for adults. It is not directed at children under 13 (16 in some
countries), and we don't knowingly collect their information. If you believe a
child has used the app and want data removed, contact us.

## Security

The information that leaves your phone is sent over encrypted connections (HTTPS),
and the keys our server uses to reach other services are stored as secrets, never
in the app. No system is perfectly secure, but keeping your personal data on your
own device is the main way we protect it.

## Changes to this policy

If we change what the app collects or who receives it, we'll update this page and
the date at the top before the change reaches you, and for significant changes
we'll tell you in the app.

## Contact

[Pritam Ghosh]
[Kolkata, India]
[pritamfinds@gmail.com]
