export interface Guide {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  readingTime: string;
  category: string;
  publishedDate: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      highlight?: string;
    }[];
    takeaway: string;
  };
  cta?: {
    eyebrow?: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink?: string;
  };
}

export const guides: Guide[] = [
  {
    slug: "net-vs-total-carbs",
    title: "Net Carbs vs. Total Carbs: The Complete Arithmetic Guide",
    subtitle: "Why counting methods must never disagree and how to calculate fiber deductions accurately.",
    description:
      "A mathematical guide to net carbs versus total carbs on keto. Learn how fiber is deducted, how sugar alcohols behave, and why arbitrary definitions ruin diet plans.",
    readingTime: "5 min read",
    category: "Macro Mathematics",
    publishedDate: "September 2026",
    content: {
      intro:
        "The debate between total carbs and net carbs is often framed as a matter of philosophical preference. In dietary physiology and algorithm design, it is a straightforward mathematical relationship: net carbs represent the carbohydrates your body actually absorbs and metabolises into blood glucose.",
      sections: [
        {
          heading: "1. The Fundamental Formula",
          body: [
            "Net Carbs = Total Carbohydrates − Dietary Fibre − Non-Impact Polyols (Sugar Alcohols).",
            "Dietary fibre consists of non-digestible plant polysaccharides. Because humans lack the digestive enzymes required to break the beta-glycosidic bonds of insoluble and most soluble fibres, these carbohydrates pass through the small intestine without triggering an insulin response or contributing to systemic blood glucose.",
            "If an avocado contains 12g of total carbohydrates and 10g of dietary fibre, the net carbohydrate load on your metabolic system is exactly 2g.",
          ],
          highlight: "Fibre is physically incapable of raising blood glucose. Counting it against a strict ketogenic ceiling forces artificial, unnecessary restriction.",
        },
        {
          heading: "2. The Derived Ceiling Rule",
          body: [
            "A common flaw in rudimentary meal planning apps is allowing the user to select either net or total carbs without adjusting the underlying arithmetic. This causes conflicting plans where a day satisfies a net limit but violates a total limit.",
            "In Repast, your total carb cap is mathematically derived from your chosen net cap plus a per-dietary-rule fibre allowance. Keto defaults to 20g net carbs, with a total ceiling calibrated to your vegetable and seed allowances. The two counting methods never disagree because they are anchored to the same biological constraint.",
          ],
        },
        {
          heading: "3. The Sugar Alcohol Asterisk",
          body: [
            "Not all sugar alcohols (polyols) are absorbed equally. Erythritol has a glycemic index of 0 and is excreted virtually intact in urine (0g net impact). Maltitol, by contrast, has a glycemic index of 35 to 52 and causes significant glycemic elevation.",
            "Repast avoids commercial processed 'keto treats' with ambiguous polyols. Every recipe relies on whole, single-ingredient whole foods verified against USDA FoodData Central records.",
          ],
        },
      ],
      takeaway:
        "Net carbohydrate counting is biologically sound when applied to real, whole foods. Keep your daily net limit strictly under 20g for reliable ketosis.",
    },
    cta: {
      eyebrow: "FIBER DEDUCTION ENGINE",
      title: "Calculate net carbs without guessing.",
      description:
        "Repast mathematically subtracts non-glycemic dietary fiber and zero-calorie polyols using direct USDA records on your iPhone.",
      buttonText: "Solve your net carbs on iPhone",
    },
  },
  {
    slug: "the-hard-carb-ceiling",
    title: "The Hard Carb Ceiling: Why Post-Hoc Food Logging Always Fails",
    subtitle: "The mathematical difference between warning you after the fact and generating under a hard limit.",
    description:
      "Why traditional food diary apps fail keto dieters by coloring numbers red at 10 PM, and how mathematical constraint solvers eliminate overage completely.",
    readingTime: "6 min read",
    category: "Constraint Engine",
    publishedDate: "September 2026",
    content: {
      intro:
        "Almost every health app on the App Store operates on a post-hoc logging model: you eat whatever you find, search for an approximation in an unverified crowd-sourced database, log it, and watch the app colour the number red when you breach your target at 10 PM. That is not planning; that is an autopsy.",
      sections: [
        {
          heading: "1. Constraint vs. Report",
          body: [
            "In software engineering, a constraint is an invariant condition that the system refuses to violate. A report is an audit log of what already went wrong.",
            "If you want to maintain nutritional ketosis, your daily carbohydrate limit is not an aspirational goal — it is a biochemical ceiling. Once liver glycogen replenishes beyond your threshold, ketosis halts regardless of your motivation.",
            "Repast was engineered as a constraint solver. Across 16,933 simulated days in our verification test suite, the daily carbohydrate overage is exactly 0.0g. The algorithm will not emit a day that breaks your ceiling.",
          ],
          highlight: "Across 16,933 simulated days in our verification test suite, the daily carb overage is exactly 0.0g.",
        },
        {
          heading: "2. The Decision Fatigue Spiral",
          body: [
            "Deciding what to cook three times a day under a strict 20g net carb ceiling imposes extreme cognitive load. By dinner time, willpower is depleted. You open the fridge, piece together what is available, and discover after logging that the sauce contained 14g of added starch.",
            "When the entire 7-day week is decided in advance, every meal slot is pre-allocated with a signed portion size. The decision is already made before you ever step into the kitchen.",
          ],
        },
        {
          heading: "3. Per-Slot Calorie Budgeting",
          body: [
            "Generating under a ceiling is not just about keeping the daily sum low. If breakfast claims 16g of your 20g budget, lunch and dinner are forced into unrealistic, unpalatable austerity.",
            "Repast enforces per-slot macro budgeting. Breakfast, lunch, dinner, and optional snacks each receive a balanced allocation of calories and carbs, ensuring every meal of the day is satisfying.",
          ],
        },
      ],
      takeaway:
        "A true meal planner solves the math before you buy groceries, never after you swallow dinner.",
    },
    cta: {
      eyebrow: "UNYIELDING BOUNDARIES",
      title: "Hold a 20g net carb limit with zero overage.",
      description:
        "Repast stress-tested 16,933 multi-day profiles to guarantee exactly 0.0g carb overage. Strict ketosis, solved automatically.",
      buttonText: "Lock your carb ceiling on iPhone",
    },
  },
  {
    slug: "ewma-weight-tracking",
    title: "EWMA Weight Smoothing: Overcoming Low-Carb Water Noise",
    subtitle: "How 10-day exponential smoothing from The Hacker's Diet reveals genuine fat loss.",
    description:
      "Understand why scale weight fluctuates wildly on keto due to glycogen-bound water, and how 10-day EWMA filtering reveals your true rate of fat loss.",
    readingTime: "5 min read",
    category: "Biometrics",
    publishedDate: "September 2026",
    content: {
      intro:
        "One of the most psychologically damaging aspects of weight management is the daily scale fluctuation. A dieter eats strictly on-plan for four consecutive days, steps on the scale on Friday morning, and sees an inexplicable 0.8kg jump. Despair follows, diets are abandoned, and confidence crumbles. Almost all of this noise is water.",
      sections: [
        {
          heading: "1. The Glycogen Water Ratio",
          body: [
            "Every gram of glycogen stored in human liver and skeletal muscle tissue binds approximately 3 to 4 grams of water. When you transition into nutritional ketosis, liver glycogen depletes rapidly, flushing 1.5kg to 3kg of bound water weight within the first 72 to 96 hours.",
            "Conversely, a single meal with higher sodium or temporary digestive retention can cause your body to hold 1kg of fluid without a single gram of new adipose tissue being formed. Your raw morning scale reading reflects gut transit and fluid shifts far more than fat loss.",
          ],
          highlight: "Daily scale weight is 80% water and gut transit noise. It cannot measure 24-hour adipose change.",
        },
        {
          heading: "2. The Hacker's Diet Solution: 10-Day EWMA",
          body: [
            "In 1988, Autodesk founder John Walker published The Hacker's Diet, applying classical signal processing to human weight logs. He demonstrated that human weight behaves like a noisy signal with an underlying low-frequency trend.",
            "Repast uses a 10-day Exponentially Weighted Moving Average (EWMA) filter. Instead of reacting to today's raw number, EWMA applies a decay weighting: today's smoothed trend = (10% × today's reading) + (90% × yesterday's smoothed value).",
            "This mathematically filters out transient fluid spikes while remaining responsive to sustained metabolic progress.",
          ],
        },
        {
          heading: "3. Least-Squares Rate of Change",
          body: [
            "Repast calculates your true rate of change by fitting a least-squares linear regression through your smoothed EWMA series. The initial warm-up period is mathematically trimmed so early water drop-offs do not distort your long-term fat-loss projection.",
            "You are shown whether your actual rate matches, leads, or lags your intended weekly pace with zero emotional distortion.",
          ],
        },
      ],
      takeaway:
        "Never judge dietary adherence by a single morning weigh-in. Track the 10-day EWMA trend line to see reality.",
    },
    cta: {
      eyebrow: "SMOOTHED BIOMETRICS",
      title: "Filter daily water weight noise with native EWMA.",
      description:
        "Track genuine adipose reduction with built-in exponential smoothing (alpha = 0.10). No panic, no false plateaus.",
      buttonText: "Track real trends on iPhone",
    },
  },
  {
    slug: "cook-sessions-and-leftovers",
    title: "Cook Sessions & Leftovers: Cutting Grocery Waste by 48%",
    subtitle: "Why counting cooks instead of sittings is the missing piece of meal planning.",
    description:
      "How traditional meal planners generate unrealistic grocery lists by ignoring leftover chains, and how cook-session batching cut our benchmark basket from 67.6kg to 34.8kg.",
    readingTime: "4 min read",
    category: "Grocery Intelligence",
    publishedDate: "September 2026",
    content: {
      intro:
        "Most meal planning software suffers from a fatal blind spot: it treats every meal sitting as an isolated cooking event. If a recipe serves four people and you eat it twice, naive software tells you to buy ingredients for eight portions.",
      sections: [
        {
          heading: "1. The 67.6kg vs. 34.8kg Benchmark",
          body: [
            "In our initial verification test simulating a household of four for one week, a naive sitting-by-sitting shopping list called for 67.6kg of groceries across 38 distinct ingredient lines.",
            "When we introduced cook-session intelligence — recognizing that cooking a 4-serving dish once creates two dinners and two next-day lunches — the required grocery weight collapsed to 34.8kg without reducing caloric intake or dietary variety by a single calorie.",
          ],
          highlight: "Cook-session consolidation cut grocery weight from 67.6kg to 34.8kg for a family of four.",
        },
        {
          heading: "2. Leftover Chains",
          body: [
            "Repast links dinner and lunch into explicit leftover chains. Monday night's Pan-seared Salmon or Roast Chicken automatically carries a reserved portion for Wednesday lunch.",
            "The app's shopping list aggregates by whole cook sessions, preventing duplicate purchases and eliminating the refrigerator rot that plagues ambitious weekly cooking routines.",
          ],
        },
        {
          heading: "3. Purchasable Units Over Raw Grams",
          body: [
            "Recipes require precision in grams (e.g. 180g of salmon fillet per portion), but supermarket supply chains sell in packs. Telling a shopper to buy '720g of egg' creates hesitation in the aisle.",
            "Repast converts recipe requirements into purchasable units: '1 carton of 12 large eggs', '2 packs of 4 avocados', and '500g bundle of asparagus'.",
          ],
        },
      ],
      takeaway:
        "Cook once, eat twice. Your meal planner should consolidate whole cook sessions into a single aisle-grouped grocery list.",
    },
    cta: {
      eyebrow: "LEFTOVER CHAINING",
      title: "Cook once, eat twice. Eliminate refrigerator food waste.",
      description:
        "Repast links your week's cooking sessions into seamless leftover chains and routes your shopping into 7 store aisles.",
      buttonText: "Streamline your kitchen on iPhone",
    },
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
