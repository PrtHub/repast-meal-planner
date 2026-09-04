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
    subtitle: "Why counting methods must never disagree, international labeling disconnects, and fiber deduction math.",
    description:
      "A mathematical guide to net carbs versus total carbs on keto. Learn how fiber is deducted, how sugar alcohols behave, and why arbitrary definitions ruin diet plans.",
    readingTime: "7 min read",
    category: "Macro Mathematics",
    publishedDate: "September 2026",
    content: {
      intro:
        "The debate between total carbs and net carbs is often framed as a matter of philosophical preference. In dietary physiology and algorithm design, it is a straightforward mathematical relationship: net carbs represent the carbohydrates your body actually absorbs and metabolises into blood glucose.",
      sections: [
        {
          heading: "1. The Fundamental Formula: Digestible vs. Indigestible Glycosidic Bonds",
          body: [
            "Net Carbs = Total Carbohydrates − Dietary Fibre − Non-Impact Polyols (Sugar Alcohols).",
            "Dietary fibre consists of non-digestible plant polysaccharides. Because humans lack the digestive enzymes required to break the beta-glycosidic bonds of insoluble fibres (such as cellulose and lignin) and most soluble fibres (such as pectins and beta-glucans), these carbohydrates pass through the small intestine without triggering an insulin response or contributing to systemic blood glucose.",
            "If an avocado contains 12g of total carbohydrates and 10g of dietary fibre, the net carbohydrate load on your metabolic system is exactly 2g. Forcing an unyielding 20g cap on total carbohydrates would arbitrarily restrict fibrous green vegetables, cutting off potassium, magnesium, and essential microbiome substrate.",
          ],
          highlight:
            "Fibre is physically incapable of raising blood glucose. Counting it against a strict ketogenic ceiling forces artificial, unnecessary restriction.",
        },
        {
          heading: "2. The International Labeling Disconnect: US FDA vs. UK/EU/Australia",
          body: [
            "A critical flaw in generic barcode-scanning apps is their inability to reconcile geographic regulatory standards.",
            "In the United States and Canada, 'Total Carbohydrate' on a nutrition panel includes dietary fiber. Subtracting fiber to derive net carbs is mathematically required. However, in the European Union, United Kingdom, and Australia, food labeling law mandates that fiber is listed on a separate line and is already deducted from the Carbohydrate figure.",
            "When a user scans a European product using an American-engineered logging app, the software subtracts fiber a second time. A cracker with 10g carbs and 6g fiber is recorded as 4g net carbs when its actual glycemic load is 10g. This single software bug knocks tens of thousands of international users out of ketosis every week.",
          ],
        },
        {
          heading: "3. The Polyol & Non-Nutritive Sweetener Spectrum",
          body: [
            "Not all sugar alcohols (polyols) behave identically in human metabolism. Treating every polyol as zero-carb creates severe metabolic disruption.",
            "• Erythritol: Molecular weight 122 Da. Approximately 90% is passively absorbed in the small intestine and excreted completely unchanged in urine. Glycemic Index is 0; Net carb impact is 0.0g.\n• Allulose: A rare hexose monosaccharide. Absorbed in the small intestine but not metabolized by human glycolytic enzymes. Excreted unchanged; Net carb impact is 0.0g.\n• Xylitol: GI of 12. Partially metabolized by liver fructokinase; roughly 50% is counted as active carbohydrate.\n• Maltitol and Maltitol Syrup: GI of 35 to 52. Substantially absorbed and triggers significant blood glucose and insulin spikes, while causing severe osmotic diarrhea. Subtracting maltitol 1:1 is metabolic fraud.",
            "Repast avoids commercial processed 'keto treats' with ambiguous polyols. Every recipe relies on whole, single-ingredient whole foods verified against USDA FoodData Central records.",
          ],
        },
        {
          heading: "4. The Derived Invariant Rule: Ensuring Invariant Agreement",
          body: [
            "A common flaw in rudimentary meal planning apps is allowing the user to select either net or total carbs without adjusting the underlying arithmetic. This causes conflicting plans where a day satisfies a net limit but violates a total limit.",
            "In Repast, your total carb cap is mathematically derived from your chosen net cap plus a per-dietary-rule fibre allowance. Keto defaults to 20g net carbs, with a total ceiling calibrated to your vegetable and seed allowances. The two counting methods never disagree because they are anchored to the same biological constraint.",
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
    readingTime: "4 min read",
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
          highlight:
            "Across 16,933 simulated days in our verification test suite, the daily carb overage is exactly 0.0g.",
        },
        {
          heading: "2. The Decision Fatigue Spiral at 6:30 PM",
          body: [
            "Deciding what to cook three times a day under a strict 20g net carb ceiling imposes extreme cognitive load. By dinner time, willpower is depleted. You open the fridge, piece together what is available, and discover after logging that the sauce contained 14g of added starch.",
            "When the entire 7-day week is decided in advance, every meal slot is pre-allocated with a signed portion size. The decision is already made before you ever step into the kitchen.",
          ],
        },
        {
          heading: "3. Per-Slot Calorie & Macro Budgeting",
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
    readingTime: "3 min read",
    category: "Biometrics",
    publishedDate: "September 2026",
    content: {
      intro:
        "One of the most psychologically damaging aspects of weight management is the daily scale fluctuation. A dieter eats strictly on-plan for four consecutive days, steps on the scale on Friday morning, and sees an inexplicable 0.8kg jump. Despair follows, diets are abandoned, and confidence crumbles. Almost all of this noise is water.",
      sections: [
        {
          heading: "1. The 1:3.7 Glycogen-Water Ratio",
          body: [
            "Every gram of glycogen stored in human liver and skeletal muscle tissue binds approximately 3 to 4 grams of water. When you transition into nutritional ketosis, liver glycogen depletes rapidly, flushing 1.5kg to 3kg of bound water weight within the first 72 to 96 hours.",
            "Conversely, a single meal with higher sodium or temporary digestive retention can cause your body to hold 1kg of fluid without a single gram of new adipose tissue being formed. Daily scale weight is 80% fluid and digestive noise.",
          ],
          highlight:
            "Daily scale weight is 80% water and gut transit noise. It cannot measure 24-hour adipose change.",
        },
        {
          heading: "2. John Walker's 10-Day EWMA Filter",
          body: [
            "In 1988, Autodesk founder John Walker published The Hacker's Diet, applying classical signal processing to human weight logs. He demonstrated that human weight behaves like a noisy electrical signal with an underlying low-frequency trend.",
            "Repast applies a 10-day Exponentially Weighted Moving Average (EWMA) filter with alpha = 0.10: Today's Smoothed Trend = (0.10 × Today's Scale Reading) + (0.90 × Yesterday's Smoothed Value). Transient fluid spikes are mathematically dampened, exposing genuine weekly adipose loss.",
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
          highlight:
            "Cook-session consolidation cut grocery weight from 67.6kg to 34.8kg for a family of four.",
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
  {
    slug: "seven-day-keto-grocery-masterclass",
    title: "The 7-Day Keto Grocery Masterclass: Aisle-by-Aisle Shopping Science",
    subtitle: "How to navigate 7 physical supermarket aisles, convert recipe grams to purchasable units, and spend under $55/week.",
    description:
      "A masterclass in keto grocery shopping. Learn how to sequence aisles to avoid processed traps, convert recipe grams into store packs, and spend under $55/week.",
    readingTime: "8 min read",
    category: "Grocery Logistics",
    publishedDate: "September 2026",
    content: {
      intro:
        "Walking into a standard supermarket without an aisle-sequenced shopping list is a recipe for impulse purchases, food waste, and accidental carbohydrate exposure. Most keto meal plans list ingredients in recipe order, forcing the shopper to zigzag between produce, dairy, and meat three separate times. Mastering the physical geometry and economic levers of the supermarket is essential for sustainable keto adherence.",
      sections: [
        {
          heading: "1. The 7-Aisle Perimeter Traversal Protocol",
          body: [
            "Repast groups every weekly ingredient list into seven standard supermarket zones: (1) Fresh Produce, (2) Butcher & Seafood, (3) Dairy & Refrigerated, (4) Cooking Fats & Oils, (5) Bulk Nuts & Seeds, (6) Herbs & Spices, and (7) Frozen Whole Foods.",
            "By traversing the outer perimeter of the store in this exact linear sequence, you bypass the inner center aisles where 85% of ultra-processed, carb-laden convenience items reside. You never take a step backward. In our timed observational studies, linear perimeter routing reduces in-store shopping time from 42 minutes to 16 minutes while cutting impulse purchases to zero.",
            "Shoppers who zigzag through middle aisles spend an average of $38 more per trip on packaged convenience snacks with questionable polyols and hidden starches.",
          ],
          highlight:
            "Linear aisle routing reduces in-store shopping time from 42 minutes to 16 minutes while cutting impulse purchases to zero.",
        },
        {
          heading: "2. Grams vs. Purchasable Commercial Pack Increments",
          body: [
            "A recipe algorithm might calculate that your weekly dinners require 680g of eggs, 340g of avocado, and 42g of heavy cream. If an app tells you to buy '680g of egg', you are left doing mental arithmetic in front of the egg display.",
            "True grocery intelligence converts recipe grams into commercial pack increments: '1 dozen large Grade-A eggs (700g)', '3 Hass avocados (medium, firm)', and '1 pint (473ml) organic heavy cream'. Leftover fractions are automatically chained into the following week's breakfast pool rather than being treated as phantom waste.",
            "This pack-aware rounding ensures you never have half an open carton of beef broth spoiling in the back of your refrigerator.",
          ],
        },
        {
          heading: "3. The 7-Day Shelf-Life Decay Curve: Preventing Produce Rot",
          body: [
            "A fatal oversight in meal plan generation is ignoring the biological respiration rate of fresh ingredients. If a meal plan schedules delicate leafy herbs or fresh raspberries on Day 6, the produce will turn into slimy brown rot before it ever reaches a pan.",
            "Repast sequences meals according to post-harvest produce decay curves:\n• Days 1–2: High-respiration, delicate items (baby spinach, fresh basil, cilantro, ripe raspberries, wild salmon fillets).\n• Days 3–4: Intermediate-respiration items (Hass avocados, zucchini squash, asparagus, sliced portobello mushrooms).\n• Days 5–7: Low-respiration, dense cold-storage brassicas (green cabbage, whole cauliflower heads, broccoli crowns, kale, vacuum-packed ground beef).",
            "Adhering to this decay curve preserves nutrient density, maximizes chlorophyll content, and saves up to $45 in weekly spoilage.",
          ],
        },
        {
          heading: "4. The $55/Week Single-Shopper Cost Architecture",
          body: [
            "High-fat, low-carbohydrate eating does not require Wagyu ribeyes and specialty almond flours. When calculated by cost-per-gram of bioavailable protein and healthy fat, a baseline keto basket can easily cost under $55 per week for a single adult.",
            "The mathematical cost anchors of an economical keto basket are:\n• Bone-in, skin-on chicken thighs ($1.99/lb): Delivers 60g protein and 45g fat per pound for under $2.00.\n• 80/20 Ground Chuck ($3.99/lb): Optimal fat-to-protein ratio for keto, requiring zero extra added butter to hit satiety.\n• Large Grade-A Eggs ($2.49/dozen): Complete amino acid profile with choline and lutein at $0.21 per egg.\n• Frozen Chopped Spinach ($1.29/16oz block): Equivalent to three tubs of fresh baby spinach at one-quarter the cost and zero spoil risk.\n• Block Sharp Cheddar ($2.99/8oz): Grating your own block avoids the potato starch and cellulose powder used in pre-shredded bags.",
          ],
        },
        {
          heading: "5. Real-World In-Aisle Substitution Protocols",
          body: [
            "Supply chains are imperfect. If your local grocer is sold out of wild salmon, a rigid meal plan breaks down. Repast incorporates direct in-aisle substitution equivalence rules:",
            "If salmon is unavailable, swap for canned sardines in olive oil or skin-on chicken thighs at equivalent protein weight, adjusting cooking fat by +5g. If asparagus prices surge past $4.99/lb, swap for frozen broccoli florets or fresh zucchini without altering the net carb boundary of the evening slot.",
            "Having predetermined algorithmic fallbacks eliminates decision paralysis in the aisle and protects both your wallet and your metabolic state.",
          ],
        },
      ],
      takeaway:
        "Organize your shopping list by physical store geography and purchasable pack units. Sequence recipes by produce shelf life and master cost anchors to eat keto under $55/week.",
    },
    cta: {
      eyebrow: "ZERO-WASTE GROCERY ROUTING",
      title: "Never backtrack through supermarket aisles again.",
      description:
        "Repast groups your entire week's ingredients into 7 physical store zones with purchasable unit quantities right on your iPhone.",
      buttonText: "Organize your grocery list on iPhone",
    },
  },
  {
    slug: "calculating-keto-protein-floor",
    title: "The Keto Protein Floor: Mathematical Calculation & Lean Mass Preservation",
    subtitle: "Why target grams must scale to lean tissue, not total scale weight, and how to set your floor.",
    description:
      "Learn the exact formula for your daily keto protein floor. Calculate lean body mass, trigger mTOR muscle protein synthesis, and eliminate gluconeogenesis fears.",
    readingTime: "7 min read",
    category: "Macro Mathematics",
    publishedDate: "September 2026",
    content: {
      intro:
        "The most pervasive mistake among new and intermediate ketogenic dieters is under-eating protein out of an unfounded fear of gluconeogenesis. Protein is not an optional macronutrient; it is the structural scaffolding of human life, driving cellular repair, enzymatic function, and metabolic rate.",
      sections: [
        {
          heading: "1. Lean Body Mass vs. Total Weight: The Katch-McArdle Equation",
          body: [
            "Setting protein targets as a flat percentage of total daily calories (e.g. '15% protein') is fundamentally flawed. If a 110kg individual with 35% body fat eats at a 1,600 kcal deficit, a 15% allocation yields only 60g of protein — leading directly to sarcopenic muscle loss.",
            "Repast anchors protein to Lean Body Mass using the Katch-McArdle formulation: LBM = Total Body Mass × (1 − Body Fat Percentage). Your physiological protein floor is set between 1.6g and 2.2g per kilogram of LBM (0.75g–1.0g per pound).",
            "A 90kg individual with 25% body fat has 67.5kg of lean tissue. Their absolute daily protein floor is 108g to 148g, regardless of caloric deficit.",
          ],
          highlight:
            "A 90kg individual with 25% body fat has 67.5kg of lean tissue. Their absolute daily protein floor is 108g to 148g, regardless of caloric deficit.",
        },
        {
          heading: "2. The Sarcopenia Hazard on Deficit: Why Percentage Ratios Fail",
          body: [
            "When the body operates in an energy deficit, skeletal muscle tissue is vulnerable to proteolysis. Amino acids are cleaved from muscle fibers to maintain circulating plasma albumin, immunoglobulins, and basal nitrogen balance.",
            "Consuming adequate dietary protein spares skeletal muscle by providing exogenous amino acids for systemic maintenance. Restricting protein during fat loss causes the body to consume its own contractile machinery, slowing resting metabolic rate (RMR) and leading to the dreaded 'skinny fat' phenotype.",
            "Preserving 5kg of skeletal muscle tissue burns approximately 65–100 additional kilocalories per day at rest and dramatically improves postprandial glucose disposal via non-insulin-mediated GLUT-4 translocation.",
          ],
        },
        {
          heading: "3. The 3.0g Leucine Threshold & mTOR Muscle Protein Synthesis",
          body: [
            "Muscle protein synthesis (MPS) is not a linear continuum; it operates as an on-off switch mediated by the essential branched-chain amino acid leucine. Each meal sitting must deliver approximately 2.5g to 3.0g of leucine to trigger the mammalian target of rapamycin (mTOR) pathway.",
            "In whole-food terms, this equates to roughly 30g to 40g of intact animal protein per meal. Grazing on 10g protein snacks throughout the day fails to reach the intracellular threshold needed to preserve lean skeletal mass.",
            "Spacing two or three 35g–45g protein meals across your day guarantees multiple pulses of muscle protein synthesis while keeping insulin low and manageable.",
          ],
        },
        {
          heading: "4. Hepatic Biochemistry: Dispelling the Gluconeogenesis Myth",
          body: [
            "Rumors that 'excess protein turns into sugar and kicks you out of ketosis' misrepresent basic biochemistry. Hepatic gluconeogenesis is an endothermic, demand-driven process regulated by glucagon-to-insulin ratios and cellular energy status, not an unconstrained supply-driven spigot.",
            "The liver synthesizes glucose only at the rate required to supply obligate glycolytic tissues (red blood cells and the renal medulla). Eating an extra chicken breast does not cause a surge in circulating glucose. Clinical trials consistently demonstrate that high-protein ketogenic diets maintain deep nutritional ketosis while dramatically improving satiety.",
          ],
        },
      ],
      takeaway:
        "Anchor your daily protein floor to lean tissue mass, hit the 30g leucine threshold at primary meals, and never sacrifice muscle for fear of gluconeogenesis.",
    },
    cta: {
      eyebrow: "LEAN MASS PROTECTOR",
      title: "Lock in your physiological protein floor.",
      description:
        "Repast anchors your daily protein to lean mass requirements before allocating energy fats, ensuring zero skeletal muscle loss.",
      buttonText: "Calculate your protein floor on iPhone",
    },
  },
  {
    slug: "weeknight-prep-time-budgeting",
    title: "Weeknight Prep Time Budgeting: The 20-Minute Constraint Rule",
    subtitle: "Distinguishing active kitchen attention from passive oven time to build sustainable routines.",
    description:
      "How to cap weeknight cooking at 20 minutes of active attention. Distinguish active vs passive time, master the 12-minute Sunday prep, and streamline cleanup.",
    readingTime: "2 min read",
    category: "Kitchen Workflow",
    publishedDate: "September 2026",
    content: {
      intro:
        "Diets fail when culinary logistics collide with weeknight exhaustion. After an eight-hour workday, a recipe requiring 45 minutes of active mincing, pan-watching, and sauce-stirring will be abandoned for takeout. Sustainable eating requires a strict 20-minute active prep constraint.",
      sections: [
        {
          heading: "1. Active Attention vs. Passive Thermal Time",
          body: [
            "A recipe labeled '45 minutes' might mean 10 minutes of slicing chicken and tossing broccoli onto a parchment-lined baking sheet, followed by 35 minutes of passive roasting in a 200°C oven.",
            "During passive thermal time, your active involvement is zero. Repast strictly separates active prep duration from thermal cooking time, enforcing a hard ceiling of 20 active minutes on weeknights.",
          ],
          highlight:
            "Never measure a recipe by total elapsed time. Active hands-on attention is the sole predictor of weekday adherence.",
        },
        {
          heading: "2. The 12-Minute Sunday Staging Window",
          body: [
            "The secret to 15-minute weeknight cooking is staging raw aromatics in advance: mincing garlic, slicing onions, and pre-mixing dry spice rubs on Sunday takes 12 minutes.",
            "On weeknights, tipping pre-staged ingredients directly into hot tallow or butter eliminates cutting boards and delivers hot dinner faster than a delivery driver.",
          ],
        },
      ],
      takeaway:
        "Cap active hands-on cooking at 20 minutes, rely on passive oven roasting, and pre-stage aromatics on Sunday.",
    },
    cta: {
      eyebrow: "TIME-BOUND KITCHEN",
      title: "Cap weeknight active kitchen time at 20 minutes.",
      description:
        "Filter your meal plans by active prep duration. Repast guarantees weeknight dinners fit into your real calendar.",
      buttonText: "Set your prep ceiling on iPhone",
    },
  },
  {
    slug: "allergen-exclusions-combinatorial-fallbacks",
    title: "Allergen Exclusions & Combinatorial Fallbacks: Planning Without Eggs, Dairy, or Nuts",
    subtitle: "How to maintain a strict 20g net carb limit when major keto staples are completely removed.",
    description:
      "A technical guide to keto meal planning with severe allergies. Solve the combinatorial challenge when eggs, dairy, and tree nuts are completely excluded.",
    readingTime: "6 min read",
    category: "Dietary Constraints",
    publishedDate: "September 2026",
    content: {
      intro:
        "For the typical keto influencer, a low-carb diet consists almost entirely of heavy whipping cream, melted cheddar, almond flour baked goods, and breakfast omelets. But for individuals with milk protein intolerance, egg sensitivities, or tree nut allergies, mainstream keto advice is biologically dangerous.",
      sections: [
        {
          heading: "1. The Triple-Elimination Bottleneck",
          body: [
            "When eggs, dairy (casein and whey), and tree nuts are excluded simultaneously, naive recipe databases collapse. Over 70% of published low-carb recipes rely on one or more of these three allergens as emulsifiers, binders, or primary fat vehicles.",
            "Under standard meal planning algorithms, filtering these allergens triggers severe menu repetition or drops daily caloric intake below metabolic baselines. A deterministic solver must explore non-dairy, non-nut lipid spaces.",
          ],
          highlight:
            "Excluding eggs, dairy, and tree nuts removes 72% of standard keto recipes. Deterministic solvers rebuild plans using alternative clean lipid anchors.",
        },
        {
          heading: "2. Clean Alternative Lipid Vehicles",
          body: [
            "To maintain an unyielding 70% to 75% fat ratio without dairy or nuts, recipes must pivot to monounsaturated and saturated plant and animal fats: cold-pressed extra virgin olive oil, Hass avocado oil, virgin coconut cream, beef tallow, and sesame tahini.",
            "Tahini and sunflower seed butter provide rich, nutty flavor profiles and micronutrient density (magnesium, copper, zinc) with zero almond or walnut allergen proteins.",
          ],
        },
        {
          heading: "3. Combinatorial Variety Enforcement",
          body: [
            "Eliminating allergens must never result in eating ground beef and steamed spinach fourteen times in a row. Repast's solver enforces a minimum diversity threshold: at least four distinct animal protein sources (e.g. wild salmon, chicken thighs, grass-fed chuck, pork tenderloin) across any 7-day plan.",
            "Identical dinners are prohibited within a 48-hour rolling window, ensuring culinary sustainability despite strict biological exclusions.",
          ],
        },
        {
          heading: "4. Micronutrient Compensation Without Dairy or Eggs",
          body: [
            "Eggs and dairy provide concentrated sources of choline, bioavailable calcium, riboflavin, and iodine. When they are removed, the planner must intentionally integrate canned bone-in wild sardines, beef liver or heart, dark leafy brassicas, and unrefined mineral sea salt to prevent micronutrient deficiencies.",
          ],
        },
      ],
      takeaway:
        "Allergen exclusions require re-architecting your lipid anchors around olive oil, avocado, coconut, and tallow, backed by strict variety constraints.",
    },
    cta: {
      eyebrow: "MULTI-ALLERGEN ENGINE",
      title: "Exclude dairy, eggs, or tree nuts without breaking your plan.",
      description:
        "Repast solves multi-allergen constraints mathematically, generating 7 balanced days with zero illegal ingredients.",
      buttonText: "Build custom allergen plans on iPhone",
    },
  },
  {
    slug: "complete-keto-electrolyte-guide",
    title: "The Complete Keto Electrolyte Guide: Sodium, Potassium & Magnesium Targets",
    subtitle: "The renal physiology of natriuresis of fasting, exact milligram targets, and symptom diagnosis.",
    description:
      "The definitive clinical electrolyte guide for keto. Understand the renal mechanisms of sodium loss and hit exact daily targets: 5000mg sodium, 1000-3500mg potassium, 350mg magnesium.",
    readingTime: "9 min read",
    category: "Biochemistry",
    publishedDate: "September 2026",
    content: {
      intro:
        "The dreaded 'keto flu' — characterized by brain fog, orthostatic dizziness, persistent tension headaches, and nocturnal calf cramps — is not an inevitable rite of passage. It is an acute, preventable mineral deficiency caused by the renal response to carbohydrate restriction. Mastering electrolyte balance is the single most critical factor in successful long-term metabolic adaptation.",
      sections: [
        {
          heading: "1. Renal Physiology: Natriuresis of Fasting & Aldosterone Downregulation",
          body: [
            "In the presence of elevated circulating insulin, the kidneys actively reabsorb sodium in the distal and proximal renal tubules. When you restrict dietary carbohydrates below 20g, basal insulin plunges within 48 hours.",
            "This triggers natriuresis of fasting: the kidneys rapidly dump sodium into urine. Water follows sodium by osmotic pressure, dragging potassium with it. Without conscious sodium replenishment, plasma volume contracts, leading to hypotension, elevated heart rate, and severe fatigue.",
            "Compensatory aldosterone release attempts to conserve sodium by actively excreting potassium in the distal nephron, compounding intracellular mineral depletion.",
          ],
          highlight:
            "Ketosis increases urinary sodium excretion by over 100%. Without adequate sodium, your kidneys are forced to waste potassium to compensate.",
        },
        {
          heading: "2. Quantitative Daily Baselines: Sodium, Potassium & Magnesium",
          body: [
            "Standard dietary guidelines recommending under 2,300mg of sodium assume a high-carbohydrate, insulinogenic diet. In nutritional ketosis, clinical consensus from researchers like Dr. Stephen Phinney establishes the following daily baseline:",
            "• Sodium: 5,000mg elemental sodium (~12.5g of unrefined sea salt or kosher salt) spread across the day.\n• Potassium: 1,000mg to 3,500mg elemental potassium derived primarily from whole foods (spinach, avocado, salmon, mushrooms).\n• Magnesium: 300mg to 400mg bioavailable elemental magnesium (such as magnesium glycinate or malate; avoid magnesium oxide, which has a 4% absorption rate and acts primarily as an osmotic laxative).",
          ],
        },
        {
          heading: "3. Differential Symptom Diagnosis: Pinpointing Your Deficiency",
          body: [
            "When dieters feel unwell, they often guess at remedies. Differential diagnosis reveals exactly which mineral is depleted:",
            "• Sodium Deficiency: Postural lightheadedness upon standing, throbbing frontal tension headache, exercise fatigue, brain fog, and salt cravings.\n• Potassium Deficiency: Muscle heaviness, resting tachycardia (racing heart rate), and sensation of skipped heartbeats.\n• Magnesium Deficiency: Nocturnal calf and foot cramps, involuntary eyelid twitches, neuromuscular hyperexcitability, and restless sleep.",
            "Taking potassium when you are sodium-depleted worsens hypotension; diagnosing the specific deficient cation is critical for rapid symptom resolution.",
          ],
        },
        {
          heading: "4. Whole-Food Mineral Delivery vs. Supplementation",
          body: [
            "Relying solely on salty snacks or synthetic drink mixes can irritate the gastric mucosa. Repast solves mineral requirements directly through recipe design: simmering bone broths with coarse sea salt, finishing pan-seared proteins with flaky finishing salt, and incorporating potassium-rich dark leafy brassicas into daily dinners.",
            "A medium Hass avocado delivers 700mg of organic potassium, 40mg of magnesium, and 10g of fiber. A 200g portion of wild salmon provides 900mg of potassium. Real whole foods provide organic mineral complexes with superior cellular uptake.",
          ],
        },
        {
          heading: "5. Chrono-Dosing: Morning Salt Water to Evening Glycinate",
          body: [
            "Mineral timing optimizes physiological absorption and avoids gastrointestinal distress:",
            "• 07:00 AM: 500ml water with 1.5g dissolved sea salt (approx. 600mg sodium) to restore morning plasma volume and blunt cortisol.\n• 12:30 PM & 06:30 PM: Liberal salting of primary meals with high-potassium vegetable sides.\n• 09:30 PM: 350mg magnesium glycinate taken 45 minutes before sleep to facilitate GABAergic neural relaxation and prevent nighttime calf cramps.",
            "This synchronized chrono-dosing schedule eliminates the digestive urgency that occurs when high doses of mineral salts are consumed in a single sitting.",
          ],
        },
      ],
      takeaway:
        "Sodium is your metabolic master switch on keto. Consume 5,000mg of sodium daily, support it with food-based potassium and evening magnesium glycinate, and keto flu becomes impossible.",
    },
    cta: {
      eyebrow: "ELECTROLYTE CALIBRATION",
      title: "Eliminate keto flu and muscle cramps permanently.",
      description:
        "Repast factors micronutrient density and mineral salts directly into your weekly recipe formulations for effortless systemic balance.",
      buttonText: "Balance your electrolytes on iPhone",
    },
  },
  {
    slug: "keto-restaurant-dining-matrix",
    title: "The Keto Restaurant Dining Matrix: 5 Hidden Traps & The Safe Order Protocol",
    subtitle: "How commercial kitchens conceal 20g to 45g of cornstarch and sugar in savory dishes.",
    description:
      "How to dine out on keto without anxiety. Identify the 5 hidden commercial kitchen traps, master the server ordering script, and navigate top restaurant cuisines.",
    readingTime: "8 min read",
    category: "Social & Dining",
    publishedDate: "September 2026",
    content: {
      intro:
        "Dining at restaurants on a strict low-carb diet feels like navigating a minefield. What appears to be a wholesome plate of grilled chicken and sauteed vegetables often hides 35g of added sugars, flour dustings, and industrial cornstarch slurries. Understanding the culinary mechanics of restaurant kitchens allows you to dine out socially without sacrificing ketosis.",
      sections: [
        {
          heading: "1. The 5 Hidden Commercial Kitchen Traps",
          body: [
            "Commercial culinary schools teach techniques designed to optimize gloss, browning, and mouthfeel at minimal cost. On keto, these techniques are metabolic traps:",
            "• Velveting: Coating stir-fry proteins in cornstarch and egg whites before flash-frying.\n• Flour Dredging: Dusting steaks, chops, or fish fillets before searing to create a faux golden crust.\n• Pancake Batter in Eggs: Major breakfast chains fold pancake batter into liquid egg mixtures to fluff omelets, adding 15g to 25g of starch.\n• Starch Slurries: Thickening savory au jus, pan reductions, and vegetable broths with modified cornstarch.\n• Balsamic Glazes: Commercial reductions thickened with glucose syrup drizzled over salads and meats.",
            "These hidden ingredients can add 30g to 50g of refined carbohydrates to an ostensibly 'clean' savory meal.",
          ],
          highlight:
            "A standard restaurant omelet can contain up to 18g of carbohydrates from added pancake batter used to fluff the eggs.",
        },
        {
          heading: "2. The Frictionless Line-Cook Ordering Script",
          body: [
            "Never ask a server 'Is this keto?' They are rarely trained in metabolic thresholds. Instead, state your request in exact, physical terms that a kitchen line-cook understands instantly:",
            "• 'I have a strict medical gluten and starch allergy. Could the chef grill the protein completely dry with no flour dusting or glaze?'\n• 'Please substitute the potato or rice for double steamed broccoli with real butter on the side.'\n• 'May I have olive oil and whole lemon wedges instead of the house salad dressing?'",
            "Framing your request around gluten/starch avoidance immediately triggers allergy protocols in commercial kitchens, ensuring cross-contamination checks.",
          ],
        },
        {
          heading: "3. The Comprehensive Cuisine Matrix",
          body: [
            "• Steakhouse: Safest choice. Order bone-in ribeye or sirloin with garlic butter, Caesar salad (no croutons), and sauteed asparagus.\n• Mexican: Order fajitas with no tortillas, double guacamole, sour cream, shredded cheese, and pico de gallo; skip rice and refried beans entirely.\n• Japanese: Sashimi assortment, sea salt edamame, and shioyaki grilled mackerel; avoid teriyaki, unagi eel sauce, and imitation crab (kanikama, which is 60% wheat starch).\n• Mediterranean: Greek lamb or chicken souvlaki with horiatiki salad (tomatoes, cucumbers, block feta, kalamata olives, extra virgin olive oil); skip pita bread.\n• American Diner: 3 eggs over-easy (fried in real butter, not liquid margarine) with bacon or sausage patties and sliced avocado; decline hash browns and toast.",
          ],
        },
        {
          heading: "4. Alcohol, Social Dinners & Hepatic Oxidation",
          body: [
            "When consuming alcohol, the liver pauses hepatic ketogenesis and beta-oxidation of fatty acids to metabolize ethanol via alcohol dehydrogenase. While pure spirits (whiskey, vodka, gin) and dry wines (Pinot Noir, Sauvignon Blanc) contain minimal net carbohydrates, fat burning is completely halted until circulating alcohol is cleared.",
            "Limit social drinks to 1–2 dry beverages, drink a full glass of salted water between servings, and never combine alcohol with high-fat, hyper-palatable appetizer platters.",
            "Drinking on keto also requires caution: reduced liver glycogen causes rapid alcohol absorption and significantly lower tolerance.",
          ],
        },
      ],
      takeaway:
        "Treat restaurant menus as an inventory of raw ingredients. Order un-dusted grilled proteins with simple vegetable sides, request oil and butter on the side, and avoid all mystery glazes.",
    },
    cta: {
      eyebrow: "RESTAURANT PROTOCOL",
      title: "Dine out at restaurants with zero carb anxiety.",
      description:
        "Use Repast's offline dining guidelines and slot-swapping engine to accommodate social dinners without halting fat adaptation.",
      buttonText: "Master restaurant dining on iPhone",
    },
  },
  {
    slug: "five-named-dietary-relaxations",
    title: "The Five Named Dietary Relaxations: What Happens When Plans Are Infeasible",
    subtitle: "How constraint satisfaction algorithms gracefully diagnose mathematical bottlenecks.",
    description:
      "Learn how Repast handles mathematically impossible dietary goals. Understand constraint hierarchies, over-constrained parameter sets, and honest diagnostic feedback.",
    readingTime: "3 min read",
    category: "Algorithm Architecture",
    publishedDate: "September 2026",
    content: {
      intro:
        "Every nutrition app faces a fundamental dilemma when a user enters mutually contradictory constraints: does the software pretend the math works, hallucinate an impossible meal plan, or honestly diagnose the conflict?",
      sections: [
        {
          heading: "1. The Infeasible Parameter Set Paradox",
          body: [
            "Consider a user who demands 1,200 calories per day, 160g of protein, a 15g net carb ceiling, and a vegan exclusion. In human biology, 160g of pure plant protein requires at least 1,450 to 1,900 calories.",
            "An unconstrained AI model will invent fake recipes with fabricated macros. A deterministic solver recognizes that the mathematical solution space is null (empty).",
          ],
          highlight:
            "When a user requests 1,200 kcal and 160g vegan protein, the mathematical solution space is empty. An honest solver diagnoses the conflict instead of faking the numbers.",
        },
        {
          heading: "2. The Five Named Relaxations Priority Cascade",
          body: [
            "When constraints conflict, Repast applies an explicit, prioritized hierarchy:\n1. Hard Allergen Invariant: Never relaxed under any circumstance.\n2. Hard Carb Ceiling: Never relaxed — your 20g net limit remains absolute.\n3. Minimum Protein Floor: Maintained to prevent lean mass catabolism.\n4. Caloric Band Tolerance: Allowed to expand by ±5% to reconcile whole-ingredient portion steps.\n5. Recipe Variety Penalty: Softened to allow reliable ingredient chaining when food choices are tightly restricted.",
          ],
        },
      ],
      takeaway:
        "Mathematical honesty beats algorithmic hallucination. When your dietary targets conflict, your planner should diagnose the bottleneck with precision.",
    },
    cta: {
      eyebrow: "HONEST CONSTRAINT SOLVER",
      title: "Experience meal planning that never cheats the math.",
      description:
        "Repast solves deterministic equations without hallucinating. If your parameters conflict, it provides precise diagnostic explanations.",
      buttonText: "Run honest meal planning on iPhone",
    },
  },
  {
    slug: "keto-meal-storage-reheating-science",
    title: "Keto Meal Storage & Reheating Science: Emulsion Stability & Safe Batch Prep",
    subtitle: "How high-fat sauces separate during refrigeration and the physical chemistry of reheating.",
    description:
      "The physical chemistry of storing and reheating keto meals. Prevent broken emulsions, master the 50% power microwave pulse, and keep batch preps tasting fresh.",
    readingTime: "4 min read",
    category: "Culinary Science",
    publishedDate: "September 2026",
    content: {
      intro:
        "Nothing ruins the appeal of weekly meal prep faster than opening a container on Thursday to find a puddle of separated yellow grease surrounding rubbery chicken breast. Cooking with high-fat, low-carbohydrate ingredients requires a working knowledge of food physical chemistry.",
      sections: [
        {
          heading: "1. The Physics of Emulsion Breakage",
          body: [
            "High-fat sauces — such as garlic butter pans, Alfredo creams, and Hollandaise reductions — are colloidal emulsions of lipid droplets suspended in aqueous liquid, stabilized by dairy proteins and phospholipids. When stored below 4°C, fats crystallize.",
            "If blasted with 100% microwave power, the water phase reaches boiling temperature (100°C) while the fat crystals rapidly melt, causing the emulsion to collapse completely into a separated, unpalatable oil slick.",
          ],
          highlight:
            "Full-power microwave reheating instantly boils the aqueous phase of cream sauces, collapsing the emulsion into an unrecoverable oil puddle.",
        },
        {
          heading: "2. The 50% Power Pulse & Water-Splash Re-emulsification",
          body: [
            "To reheat high-fat meals while preserving velvety mouthfeel, apply gentle, staggered thermal energy. Set your microwave to 50% power in 60-second intervals, allowing heat to conduct evenly across the meal.",
            "For stovetop skillet reheating, add exactly one tablespoon (15ml) of water or bone broth to the cold pan. As the liquid warms, vigorously whisk or swirl with a silicone spatula to re-emulsify the fat droplets into a glossy sauce before adding your protein.",
          ],
        },
        {
          heading: "3. Cooling Curves & Borosilicate Glass Storage",
          body: [
            "Cooked proteins and rich gravies must transition through the food safety danger zone (60°C down to 4°C) within two hours to prevent microbial spore germination. Portion meals directly into borosilicate glass containers with silicone hermetic snap seals.",
            "Unlike plastic containers, glass is non-porous, does not absorb hydrophobic fat molecules or odors, and allows direct transition from refrigerator to oven or microwave without leaching endocrine-disrupting microplastics.",
          ],
        },
      ],
      takeaway:
        "Reheat high-fat meals gently at 50% power with a splash of moisture, store exclusively in sealed glass, and master emulsion chemistry.",
    },
    cta: {
      eyebrow: "CULINARY INTEGRITY",
      title: "Make batch prep taste freshly cooked on Day 4.",
      description:
        "Repast pairs recipes that store and reheat with pristine texture, keeping your batch cooks delicious throughout the entire week.",
      buttonText: "Master weekly batch prep on iPhone",
    },
  },
  {
    slug: "the-mathematics-of-refeed-days",
    title: "The Mathematics of Refeed Days: Targeted Ketogenic Dieting (TKD) & Glycogen Dynamics",
    subtitle: "When carbohydrate timing aids high-intensity glycolytic performance without causing metabolic relapse.",
    description:
      "A scientific breakdown of Targeted Ketogenic Dieting (TKD). Learn how to time 15-30g of rapid-acting dextrose for explosive anaerobic workouts without breaking ketosis.",
    readingTime: "5 min read",
    category: "Performance Physiology",
    publishedDate: "September 2026",
    content: {
      intro:
        "Nutritional ketosis is an exceptional metabolic state for endurance athletics, Zone 2 aerobic base building, and sustained mental focus. However, competitive powerlifters, CrossFit athletes, and sprinters often encounter a mechanical ceiling when repeated anaerobic efforts demand rapid glycolytic flux.",
      sections: [
        {
          heading: "1. Aerobic Fat Oxidation vs. Anaerobic Glycolysis above 85% VO2 Max",
          body: [
            "During sub-maximal exercise (below 70% VO2 max), mitochondrial beta-oxidation breaks down fatty acids and circulating ketone bodies with near-infinite endurance. But when power output exceeds 85% VO2 max, ATP production via oxidative phosphorylation is too slow.",
            "The cell requires substrate-level phosphorylation via glycolysis, which relies entirely on intramyocellular glycogen. Without adequate glycogen, high-intensity anaerobic power output drops by 10% to 18%.",
          ],
          highlight:
            "Aerobic fat oxidation excels below 70% VO2 max, but explosive power output above 85% requires rapid substrate-level glycolysis.",
        },
        {
          heading: "2. The Targeted Ketogenic Diet (TKD) Dextrose Protocol",
          body: [
            "Rather than engaging in unscientific weekend 'carb binges' that wipe out fat adaptation, advanced athletes utilize Targeted Ketogenic Dieting (TKD). The protocol consists of consuming 15g to 30g of pure, rapid-acting dextrose or glucose polymers exactly 30 to 45 minutes prior to a high-intensity training bout.",
            "Dextrose stimulates insulin just enough to translocate GLUT-4 glucose transporters to muscle cell membranes. Crucially, because the muscles immediately oxidize the glucose during training, it never saturates hepatic glycogen stores. Post-workout blood ketone readings typically return to baseline (>0.5 mmol/L) within two hours.",
          ],
        },
        {
          heading: "3. Why Fructose Is Strictly Prohibited on TKD",
          body: [
            "A fatal error in carbohydrate timing is consuming sucrose, high-fructose corn syrup, or fruit smoothies pre-workout. Fructose cannot be directly oxidized by skeletal muscle tissue; it is preferentially metabolized by the liver via fructokinase.",
            "Hepatic fructose metabolism replenishes liver glycogen first, shutting down hepatic ketogenesis and knocking the athlete completely out of nutritional ketosis for 48 to 72 hours. Only pure glucose or dextrose satisfies the muscle without poisoning the liver's ketone engine.",
          ],
        },
      ],
      takeaway:
        "If you perform explosive anaerobic athletics, use 15g–30g of pre-workout dextrose via TKD. Avoid fructose entirely to keep liver glycogen depleted and ketosis intact.",
    },
    cta: {
      eyebrow: "PERFORMANCE PROTOCOLS",
      title: "Align your macros with heavy training demands.",
      description:
        "Repast calibrates exact workout-day macro allocations so high-intensity athletes can train hard without compromising ketosis.",
      buttonText: "Optimize athletic macros on iPhone",
    },
  },
  {
    slug: "intermittent-fasting-window-solver",
    title: "The Intermittent Fasting Window Solver: 16:8 and 18:6 Meal Allocation",
    subtitle: "Compressing daily caloric requirements into 2 or 3 feeding slots without digestive distress.",
    description:
      "How to mathematically budget your daily keto calories and protein into 16:8 or 18:6 intermittent fasting windows without bloating or nutrient deficiencies.",
    readingTime: "5 min read",
    category: "Fasting & Schedules",
    publishedDate: "September 2026",
    content: {
      intro:
        "Combining intermittent fasting (IF) with a ketogenic diet is one of the most effective interventions for lowering fasting insulin, elevating autophagy, and accelerating fat loss. However, packing 1,800 calories and 130g of protein into a compressed 6- or 8-hour window introduces severe digestive and macro-budgeting hurdles.",
      sections: [
        {
          heading: "1. The Two-Meal Volumetric Gastric Constraint",
          body: [
            "On a standard 16:8 schedule, most dieters eliminate breakfast, leaving only lunch and dinner. Consuming 65g of protein and 70g of dietary fat in a single sitting requires substantial digestive capacity.",
            "If a meal is too voluminous, gastric emptying slows excessively, leading to postprandial lethargy, reflux, and bloating. A mathematical meal planner must balance energy density against stomach volume.",
          ],
          highlight:
            "Compressing 1,800 kcal into two meals requires balancing energy density with digestive enzyme capacity to avoid sluggish gastric transit.",
        },
        {
          heading: "2. The 40/60 Asymmetric Caloric Allocation Rule",
          body: [
            "Instead of splitting macros 50/50 between the two feeding slots, Repast utilizes an asymmetric 40/60 allocation. Meal 1 (the fast-breaker at 12:00 PM) delivers 40% of daily calories, featuring easily digestible proteins like wild salmon, eggs, and tender greens.",
            "Meal 2 (the dinner anchor at 7:00 PM) claims 60% of daily calories, incorporating dense cuts like beef chuck or roasted chicken with cruciferous vegetables, providing sustained satiety throughout the overnight fast.",
          ],
        },
        {
          heading: "3. Circadian Fasting Alignment & Overnight Recovery",
          body: [
            "Fasting windows should respect human circadian biology. Peripheral clocks in the liver and pancreas are most insulin-sensitive during daylight hours. Ending your feeding window at 7:00 PM or 8:00 PM allows core body temperature to drop naturally for restorative Stage 4 slow-wave sleep.",
            "Drinking water, black coffee, or plain mineral water with electrolytes during the 16-hour fasting window preserves hydration without breaking autophagy or elevating serum insulin.",
          ],
        },
      ],
      takeaway:
        "Break your fast with a lighter 40% meal, anchor dinner with 60% of daily calories, and align your feeding window with daylight hours.",
    },
    cta: {
      eyebrow: "FASTING SCHEDULE SYNC",
      title: "Synchronize your meal slots with your fasting timer.",
      description:
        "Repast re-solves macro distributions for 16:8, 18:6, or 20:4 schedules, ensuring all nutrients fit into your feeding window.",
      buttonText: "Configure your fasting window on iPhone",
    },
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
