export interface UseCase {
  slug: string;
  title: string;
  targetAudience: string;
  subtitle: string;
  category: string;
  readingTime: string;
  heroMetrics: { label: string; value: string }[];
  painPoints: { title: string; description: string }[];
  theRepastSolution: { title: string; description: string }[];
  sampleMealPlan: {
    mealName: string;
    dish: string;
    macros: string;
    prepTime: string;
  }[];
  contentSections: {
    heading: string;
    body: string[];
    pullquote?: string;
  }[];
  faq: { question: string; answer: string }[];
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    buttonText: string;
  };
}

export const useCases: UseCase[] = [
  {
    "slug": "busy-professionals",
    "title": "Repast for Busy Professionals: Automated Weeknight Keto Without Food Logging",
    "targetAudience": "Founders, corporate executives, attorneys, and consultants working 50+ hours a week",
    "subtitle": "How automated constraint-based meal planning eliminates daily dinner decision fatigue in under 18 minutes a night.",
    "category": "Executive Lifestyle",
    "readingTime": "4 min read",
    "heroMetrics": [
      {
        "label": "Active Weeknight Kitchen Time",
        "value": "≤ 18 mins"
      },
      {
        "label": "Weekly Planning Time",
        "value": "90 seconds"
      },
      {
        "label": "Daily Barcodes Scanned",
        "value": "0"
      }
    ],
    "painPoints": [
      {
        "title": "The 6:30 PM Decision Paralysis",
        "description": "After ten hours of high-stakes executive decisions, opening the fridge to figure out what to cook within a 20g net carb limit causes immediate cognitive exhaustion. Takeout becomes the default escape."
      },
      {
        "title": "The Retrospective Food Logging Tax",
        "description": "Typing raw ingredients, weighing butter pats, and scanning barcodes into a food diary app feels like administrative homework after a long workday, leading to 80% abandonment within three weeks."
      }
    ],
    "theRepastSolution": [
      {
        "title": "Upfront Mathematical Constraint Solving",
        "description": "Repast models your entire week upfront. Your net carbs are locked sub-20g, your protein floor is secured, and your dinners are resolved before Monday morning starts."
      },
      {
        "title": "Aisle-by-Aisle Grocery Efficiency",
        "description": "A single consolidated grocery list organized by 7 supermarket aisles means one 25-minute trip on Sunday covers 100% of your weeknight meals with zero wasted produce."
      }
    ],
    "sampleMealPlan": [
      {
        "mealName": "Morning Anchor",
        "dish": "Cold Smoked Salmon Rollups with Herb Cream Cheese",
        "macros": "30g P · 14g F · 1.5g NC",
        "prepTime": "2 mins (0 cook)"
      },
      {
        "mealName": "Midday Fuel",
        "dish": "Pre-Portioned Lemon Herb Grilled Chicken over Baby Greens & Olive Oil",
        "macros": "42g P · 22g F · 3.5g NC",
        "prepTime": "3 mins (carryover)"
      },
      {
        "mealName": "Dinner Anchor",
        "dish": "Cast-Iron Skillet Ribeye with Garlic Herb Butter & Sautéed Asparagus",
        "macros": "48g P · 38g F · 2.5g NC",
        "prepTime": "16 mins (active)"
      }
    ],
    "contentSections": [
      {
        "heading": "Eliminating the Cognitive Overhead of Dinner",
        "body": [
          "Knowledge workers suffer from decision fatigue. Every choice made during the workday depletes executive function. When 7:00 PM arrives, asking 'What fits my macros tonight?' is a recipe for ordering high-carb Thai delivery.",
          "Repast replaces daily decisions with an automated system. On Sunday evening, the constraint solver evaluates your week, balances cook sessions against leftover carryover, and generates a verified plan.",
          "During the week, you simply execute what is on your screen. You do not weigh, scan, or guess."
        ],
        "pullquote": "Stop making dinner another executive decision. Automate your week in 90 seconds on Sunday."
      },
      {
        "heading": "The Multi-Portion Batching Engine",
        "body": [
          "Browning two pounds of ground beef takes the exact same 12 minutes as browning one pound. Roasting four chicken thighs takes the exact same 30 minutes as roasting two.",
          "Repast leverages this kitchen economy: it plans 2–3 active cook nights that yield 4–6 dinner and lunch portions, cutting your total weekly cooking time by 45% while keeping food fresh and delicious."
        ]
      }
    ],
    "faq": [
      {
        "question": "Can I adjust prep time ceilings if I have late meetings?",
        "answer": "Yes. You can set an unyielding 20-minute active prep time ceiling in Repast, which restricts recipe selections to rapid stovetop sears and zero-cook carryover lunches."
      },
      {
        "question": "What if I travel mid-week for business?",
        "answer": "Repast allows you to toggle off specific days (e.g., Wednesday through Friday dinner), recalculating grocery quantities so you buy zero perishable groceries that would spoil while you are away."
      }
    ],
    "cta": {
      "eyebrow": "EXECUTIVE PRODUCTIVITY",
      "title": "Automate your weeknight keto meals on iPhone.",
      "description": "Repast designs your entire week of sub-20g net carb meals in 90 seconds, freeing you from daily kitchen decisions and tedious food logging.",
      "buttonText": "Plan executive keto on iPhone"
    }
  },
  {
    "slug": "glp1-patients",
    "title": "Repast for GLP-1 Patients: Protecting Muscle Mass on Semaglutide & Tirzepatide",
    "targetAudience": "Individuals taking Ozempic, Wegovy, Mounjaro, or Zepbound who pair medication with keto",
    "subtitle": "The nutritional arithmetic of securing an unyielding 1.8g/kg protein floor when appetite suppression destroys your hunger signals.",
    "category": "Metabolic Pharmacology",
    "readingTime": "8 min read",
    "heroMetrics": [
      {
        "label": "Target Protein Floor",
        "value": "1.8g/kg LBM"
      },
      {
        "label": "Leucine Trigger Target",
        "value": "≥ 3.0g / meal"
      },
      {
        "label": "Daily Net Carb Guarantee",
        "value": "≤ 20g"
      }
    ],
    "painPoints": [
      {
        "title": "The Sarcopenic Muscle Wasting Trap",
        "description": "Clinical trials like STEP-1 prove that 25% to 40% of weight lost on GLP-1 agonists is lean muscle tissue, not fat. When appetite drops by 60%, patients instinctively under-eat protein."
      },
      {
        "title": "Early Satiety with High-Fat Foods",
        "description": "GLP-1 medications delay gastric emptying. Eating traditional high-fat keto foods causes premature fullness before the patient hits their vital daily protein floor."
      }
    ],
    "theRepastSolution": [
      {
        "title": "Protein-First Constraint Modeling",
        "description": "Repast inverts traditional keto planning by locking in your 1.8g/kg protein floor first, using dietary fats strictly as an adjustable lever to hit caloric targets without volume bloat."
      },
      {
        "title": "Leucine-Threshold Meal Anchoring",
        "description": "Rather than ineffective 10g protein grazing, Repast structures two dense meals delivering 35g+ bioavailable protein to breach the 3g leucine threshold and ignite muscle protein synthesis."
      }
    ],
    "sampleMealPlan": [
      {
        "mealName": "First Anabolic Anchor",
        "dish": "Pasture-Raised Egg White Omelet with Lean Turkey & Baby Spinach",
        "macros": "38g P · 8g F · 2g NC",
        "prepTime": "8 mins"
      },
      {
        "mealName": "Midday Compact Bolus",
        "dish": "Cold Flaked Wild Salmon with Avocado Oil Mayo & Cucumber Slices",
        "macros": "42g P · 16g F · 1.5g NC",
        "prepTime": "4 mins (0 cook)"
      },
      {
        "mealName": "Evening Protein Anchor",
        "dish": "Seared 93/7 Lean Ground Beef Bowl with Steamed Broccoli Florets",
        "macros": "46g P · 14g F · 3.5g NC",
        "prepTime": "12 mins"
      }
    ],
    "contentSections": [
      {
        "heading": "The Clinical Reality of GLP-1 Weight Loss",
        "body": [
          "Semaglutide and tirzepatide have revolutionized obesity medicine by mimicking incretin hormones, delaying gastric motility, and activating hypothalamic satiety centers.",
          "However, Dual-Energy X-ray Absorptiometry (DXA) sub-studies from major clinical trials reveal that up to 39% of total lost mass is fat-free skeletal muscle.",
          "Skeletal muscle is the single largest site for postprandial glucose disposal and the primary determinant of resting metabolic rate (RMR). When patients cease GLP-1 therapy after losing significant muscle, their lowered RMR virtually guarantees rapid fat rebound."
        ],
        "pullquote": "Appetite suppression without an unyielding protein floor causes up to 40% lean skeletal muscle loss."
      },
      {
        "heading": "Breaching the Leucine Threshold Twice Daily",
        "body": [
          "Muscle Protein Synthesis (MPS) is an all-or-nothing intracellular switch governed by mTORC1. To trigger MPS in human skeletal tissue, circulating levels of the essential branched-chain amino acid leucine must reach approximately 2.5g to 3.0g within a 90-minute postprandial window.",
          "A patient who grazes on four 10-gram protein snacks throughout the day never hits this threshold. MPS remains dormant while whole-body protein breakdown continues.",
          "Repast concentrates your daily protein into two structured meals providing at least 35g of complete protein each, ensuring MPS is fully ignited twice daily even in a severe caloric deficit."
        ]
      },
      {
        "heading": "Inverting the Macro Sequence for Low Hunger",
        "body": [
          "Because GLP-1 slows stomach emptying, bulky high-fat meals cause severe discomfort and sulfur burps.",
          "Repast organizes your plate in a strict physiological hierarchy: consume the lean animal protein first, non-starchy vegetables second, and dietary fats only as necessary to meet basic energy targets.",
          "This guarantees that even if early fullness strikes mid-meal, 100% of your critical amino acid floor has already been ingested."
        ]
      }
    ],
    "faq": [
      {
        "question": "How does Repast calculate my specific protein floor on GLP-1?",
        "answer": "Repast utilizes your target lean body mass (LBM) rather than total scale weight, enforcing a minimum of 1.6g to 2.2g of protein per kilogram of LBM to protect skeletal muscle."
      },
      {
        "question": "Can I use Repast if I suffer from GLP-1 medication nausea?",
        "answer": "Yes. Repast includes low-volume, easily digestible protein templates (such as cold poached poultry, flaked white fish, and egg white scrambles) that bypass nausea-inducing heavy cooking fats."
      }
    ],
    "cta": {
      "eyebrow": "LEAN MASS PRESERVATION",
      "title": "Protect your skeletal muscle while taking GLP-1s.",
      "description": "Repast locks in an unyielding 1.8g/kg protein floor on your iPhone before calculating single-digit net carbs, keeping your metabolic rate high.",
      "buttonText": "Protect muscle on iPhone"
    }
  },
  {
    "slug": "type-2-diabetes-prediabetes",
    "title": "Repast for Blood Sugar Management: Sub-20g Net Carbs for Glycemic Control",
    "targetAudience": "Adults managing type 2 diabetes, prediabetes, or severe metabolic insulin resistance",
    "subtitle": "Deterministic carbohydrate budgeting that keeps postprandial glucose excursions flat and eliminates reactive hypoglycemia.",
    "category": "Clinical Metabolic Health",
    "readingTime": "8 min read",
    "heroMetrics": [
      {
        "label": "Target Net Carb Ceiling",
        "value": "≤ 18g / day"
      },
      {
        "label": "Postprandial Glycemic Rise",
        "value": "< 15 mg/dL"
      },
      {
        "label": "Hidden Polyols & Starches",
        "value": "0g Allowed"
      }
    ],
    "painPoints": [
      {
        "title": "The Rollercoaster of Reactive Hypoglycemia",
        "description": "Carbohydrate-rich meals trigger exaggerated insulin spikes followed by rapid blood sugar crashes to 60 mg/dL, causing intense shakiness, brain fog, and panic eating."
      },
      {
        "title": "Hidden Starches in Commercial Diabetic Foods",
        "description": "Packaged diabetic snacks frequently utilize maltitol, modified starches, and tapioca fiber that cause massive CGM glucose spikes despite claiming to be sugar-free."
      }
    ],
    "theRepastSolution": [
      {
        "title": "Hard Mathematical Carb Ceilings",
        "description": "Repast holds your daily net carbs strictly under 18g across verified single-ingredient foods, preventing portal glucose surges from ever challenging pancreatic beta cells."
      },
      {
        "title": "Zero-Tolerance Sweetener Filtering",
        "description": "Repast excludes high-glycemic sugar alcohols and deceptive maltodextrin additives, ensuring every recipe delivers true glycemic stability verified by continuous glucose monitors."
      }
    ],
    "sampleMealPlan": [
      {
        "mealName": "Morning Glycemic Anchor",
        "dish": "Pasture-Raised Eggs Scrambled with Baby Spinach in Grass-Fed Ghee",
        "macros": "28g P · 22g F · 1.2g NC",
        "prepTime": "6 mins"
      },
      {
        "mealName": "Midday Blood Sugar Anchor",
        "dish": "Grilled Grass-Fed Beef Patties with Sliced Avocado & Romaine Wraps",
        "macros": "44g P · 28g F · 2.1g NC",
        "prepTime": "5 mins (carryover)"
      },
      {
        "mealName": "Evening Insulin-Spike-Free Dinner",
        "dish": "Wild Sockeye Salmon with Steamed Asparagus & Extra Virgin Olive Oil",
        "macros": "46g P · 24g F · 2.8g NC",
        "prepTime": "15 mins"
      }
    ],
    "contentSections": [
      {
        "heading": "The Virta Health Paradigm and Carbohydrate Restriction",
        "body": [
          "Landmark multi-year clinical trials published by Virta Health and Indiana University demonstrate that sustained nutritional ketosis (<30g total carbs) achieves type 2 diabetes reversal in over 53% of adherent patients, drastically reducing or eliminating exogenous insulin.",
          "Carbohydrates are the primary dietary stimulus for insulin secretion. When a diabetic patient restricts carbohydrates, the demand on exhausted pancreatic beta cells drops immediately.",
          "Fasting blood glucose normalizes, hepatic gluconeogenesis slows, and serum HbA1c glides downward without the danger of medication-induced hypoglycemic crashes."
        ],
        "pullquote": "Nutritional ketosis reduces beta-cell strain, stabilizing blood glucose curves within 72 hours."
      },
      {
        "heading": "Why 'Diabetic Exchanges' and Carbs-per-Meal Fail",
        "body": [
          "Conventional diabetic dietary guidelines often recommend '45 to 60 grams of healthy carbs per meal.' For an individual with severe insulin resistance, this represents 180 grams of glucose that their body cannot dispose of efficiently.",
          "The patient is forced to inject escalating doses of insulin to force glucose into already hyper-saturated liver and fat cells, driving non-alcoholic fatty liver disease and weight gain.",
          "Repast adopts the carbohydrate restriction model: by capping daily net carbs at 18 grams, the total daily glycemic challenge is smaller than a single slice of whole-wheat bread."
        ]
      },
      {
        "heading": "Eliminating Hidden Excipient Spikes",
        "body": [
          "Commercial low-sugar foods routinely cut corners using maltitol (GI: 35–52) and corn maltodextrin (GI: 110). On a continuous glucose monitor (CGM), these chemicals produce glycemic curves indistinguishable from pure table sugar.",
          "Repast relies exclusively on whole, unadulterated proteins, leafy greens, brassica vegetables, and pure fats that produce flat, steady glucose responses under 95 mg/dL."
        ]
      }
    ],
    "faq": [
      {
        "question": "Should I consult my endocrinologist before starting Repast?",
        "answer": "Yes. Because restricting net carbs below 20g rapidly lowers blood sugar, medications such as insulin and sulfonylureas often require prompt clinical de-escalation to prevent hypoglycemia."
      },
      {
        "question": "How does Repast handle the Dawn Phenomenon?",
        "answer": "Repast designs evening dinners with moderate protein and healthy fats that prevent nocturnal hypoglycemia while minimizing excessive morning cortisol-driven gluconeogenesis."
      }
    ],
    "cta": {
      "eyebrow": "GLYCEMIC STABILITY",
      "title": "Stabilize your blood glucose with precision meal planning.",
      "description": "Repast plans whole-food keto meals that eliminate glycemic spikes, hold carbs strictly sub-20g, and keep blood sugar flat on your iPhone.",
      "buttonText": "Plan glycemic stability on iPhone"
    }
  },
  {
    "slug": "endurance-athletes",
    "title": "Repast for Endurance Athletes: Zone 2 Fat Adaptation & Glycogen Sparing",
    "targetAudience": "Marathon runners, ultra-distance trail runners, cyclists, and Ironman triathletes",
    "subtitle": "Unlocking peak fat oxidation rates exceeding 1.5g/min to eliminate mid-race bonking and reduce reliance on sugary energy gels.",
    "category": "Athletic Performance",
    "readingTime": "8 min read",
    "heroMetrics": [
      {
        "label": "Peak Fat Oxidation",
        "value": "> 1.5g / min"
      },
      {
        "label": "Daily Sodium Target",
        "value": "5,000–7,000mg"
      },
      {
        "label": "Race-Day Bonk Risk",
        "value": "0%"
      }
    ],
    "painPoints": [
      {
        "title": "The 2,000-Calorie Glycogen Wall",
        "description": "The human body can only store ~2,000 calories of liver and muscle glycogen. At mile 20 of a marathon, glycogen runs dry, causing the dreaded systemic athletic 'bonk.'"
      },
      {
        "title": "GI Distress from Sugary Gels",
        "description": "Chugging 60g to 90g of maltodextrin gels per hour during long events frequently causes severe gastric cramping, nausea, and emergency porta-potty stops."
      }
    ],
    "theRepastSolution": [
      {
        "title": "Metabolic Fat-Adaptation Protocols",
        "description": "Repast structures daily macros to upregulate mitochondrial CPT-1 enzymes, shifting your aerobic crossover point so you cruise at race pace fueled by body fat."
      },
      {
        "title": "Precision Mineral & Plasma Support",
        "description": "Athletes lose up to 2,000mg of sodium per hour of heavy sweat. Repast ensures your daily meals deliver the 5,000mg electrolyte floor required to prevent plasma volume collapse."
      }
    ],
    "sampleMealPlan": [
      {
        "mealName": "Pre-Training Aerobic Anchor",
        "dish": "Whole Eggs Fried in Grass-Fed Tallow with Avocado Flakes & Flake Salt",
        "macros": "26g P · 32g F · 1.5g NC",
        "prepTime": "8 mins"
      },
      {
        "mealName": "Post-Workout Glycogen Recovery",
        "dish": "Wild Albacore Tuna Salad with Olive Oil Mayo, Celery & Pumpkin Seeds",
        "macros": "46g P · 22g F · 2g NC",
        "prepTime": "5 mins (0 cook)"
      },
      {
        "mealName": "Evening Mitochondrial Rebuilding",
        "dish": "Grilled Grass-Fed Flank Steak with Roasted Broccolini in Beef Drippings",
        "macros": "52g P · 34g F · 3.5g NC",
        "prepTime": "18 mins"
      }
    ],
    "contentSections": [
      {
        "heading": "The Mathematics of Human Energy Reservoirs",
        "body": [
          "Even a razor-lean 150-pound athlete with 10% body fat carries 15 pounds of adipose tissue — representing over 50,000 calories of usable stored energy.",
          "Compare this to muscle glycogen, which caps out at roughly 450 to 500 grams (1,800 to 2,000 calories). High-carbohydrate runners are trapped in a fragile metabolic model: they burn sugar rapidly, run out of fuel within two hours, and must continuously shovel sugary gels into an irritated digestive tract.",
          "By undergoing keto adaptation, the athlete taps into their 50,000-calorie fuel tank, turning aerobic endurance into an effortless, bonk-free physiological state."
        ],
        "pullquote": "A fat-adapted runner carries 50,000 calories of fuel on their body, completely eliminating the marathon bonk."
      },
      {
        "heading": "Upregulating CPT-1 and Mitochondrial Density",
        "body": [
          "In the FASTER trial led by Dr. Jeff Volek, keto-adapted elite endurance runners demonstrated peak fat oxidation rates averaging 1.54 grams per minute — more than double the rate of high-carb athletes (0.67 g/min).",
          "This adaptation is driven by the upregulation of Carnitine Palmitoyltransferase-1 (CPT-1), the enzymatic shuttle that pulls long-chain fatty acids into mitochondria for beta-oxidation.",
          "Repast structures your meals with optimal ratios of saturated and monounsaturated fatty acids to maximize mitochondrial respiration in slow-twitch Type I muscle fibers."
        ]
      },
      {
        "heading": "The Electrolyte Replacement Mandate",
        "body": [
          "The number one reason endurance athletes fail on keto is not lack of carbohydrates; it is sodium deficiency. Low baseline insulin accelerates renal sodium clearance.",
          "When you add 90 minutes of Zone 2 running in warm weather, blood plasma volume shrinks rapidly, resulting in elevated heart rate and heavy legs.",
          "Repast plans sodium-dense whole foods and mineral anchors that keep your vascular volume fully pressurized for training."
        ]
      }
    ],
    "faq": [
      {
        "question": "How long does full keto fat-adaptation take for runners?",
        "answer": "While blood ketones elevate within 48 hours, full mitochondrial remodeling and recovery of peak aerobic pace requires 6 to 10 weeks of strict compliance."
      },
      {
        "question": "Can I use Targeted Keto (TKD) for high-intensity intervals?",
        "answer": "Yes. Repast supports Targeted Ketogenic protocols, allowing 15–25g of pure dextrose 30 minutes prior to VO2 max track intervals without disrupting resting ketosis."
      }
    ],
    "cta": {
      "eyebrow": "ENDURANCE NUTRITION",
      "title": "Fuel endurance training on iPhone without bonking.",
      "description": "Repast designs high-fat, electrolyte-calibrated meal plans that double fat oxidation rates and support heavy training volume.",
      "buttonText": "Plan athletic keto on iPhone"
    }
  },
  {
    "slug": "strength-training-bodybuilders",
    "title": "Repast for Strength Training: Hitting the 1.8g/kg Leucine Threshold on Keto",
    "targetAudience": "Powerlifters, bodybuilders, and heavy resistance trainees building muscle on low-carb",
    "subtitle": "Maximal myofibrillar hypertrophy without carbohydrate bloat by anchoring meals around complete amino acid profiles.",
    "category": "Hypertrophy & Strength",
    "readingTime": "8 min read",
    "heroMetrics": [
      {
        "label": "Target Protein Floor",
        "value": "1.8–2.2g/kg LBM"
      },
      {
        "label": "Leucine Pulses",
        "value": "2–3x Daily"
      },
      {
        "label": "Lean Muscle Retention",
        "value": "100%"
      }
    ],
    "painPoints": [
      {
        "title": "The Myth of Low-Protein Keto",
        "description": "Old-school epilepsy keto protocols mandated 80% fat and minimal protein out of an unfounded fear that gluconeogenesis converts protein into sugar. Bodybuilders following this lose significant muscle."
      },
      {
        "title": "Premature Fullness from Excess Dietary Fat",
        "description": "Drinking butter coffee and eating fat bombs fills caloric allowances without providing the critical essential amino acids required for myofibrillar protein synthesis."
      }
    ],
    "theRepastSolution": [
      {
        "title": "Unyielding 1.8g/kg Protein Floors",
        "description": "Repast sets an aggressive, non-negotiable protein floor based on your target lean mass, ensuring every gram of muscle tissue is protected during heavy lifting blocks."
      },
      {
        "title": "Leucine-Optimized Recipe Selection",
        "description": "Every planned dinner and lunch provides 35g to 50g of complete animal protein (rich in leucine, isoleucine, and valine) to trigger maximum mTORC1 anabolic signaling."
      }
    ],
    "sampleMealPlan": [
      {
        "mealName": "Pre-Lift Anabolic Anchor",
        "dish": "Whole Eggs Scrambled with Smoked Salmon & Flake Salt",
        "macros": "36g P · 18g F · 1g NC",
        "prepTime": "6 mins"
      },
      {
        "mealName": "Post-Workout Recovery Anchor",
        "dish": "Grilled Chicken Breast with Crushed Avocado & Extra Virgin Olive Oil",
        "macros": "52g P · 20g F · 2.5g NC",
        "prepTime": "4 mins (carryover)"
      },
      {
        "mealName": "Evening Myofibrillar Rebuilding",
        "dish": "Seared 90/10 Lean Ground Beef Patties with Steamed Asparagus Spears",
        "macros": "54g P · 26g F · 2g NC",
        "prepTime": "14 mins"
      }
    ],
    "contentSections": [
      {
        "heading": "Debunking the Gluconeogenesis Myth",
        "body": [
          "For years, keto forums warned lifters: 'Do not eat too much protein, or gluconeogenesis will kick you out of ketosis.' This is biochemically false.",
          "Gluconeogenesis is a demand-driven physiological process, not a supply-driven overflow pipe. The liver converts amino acids into glucose at a slow, tightly regulated rate governed by glucagon and hepatic enzymes — only when systemic glucose is needed.",
          "Consuming 180 grams of protein on a sub-20g net carb diet does not spike blood sugar; it preserves nitrogen balance, accelerates myofibrillar repair, and optimizes body composition."
        ],
        "pullquote": "Gluconeogenesis is demand-driven, not supply-driven. Eating high protein will not kick you out of ketosis."
      },
      {
        "heading": "The Leucine Trigger and mTOR Activation",
        "body": [
          "To stimulate Muscle Protein Synthesis (MPS), a lifter must deliver at least 2.7g to 3.2g of leucine per meal. High-quality animal proteins (beef, eggs, poultry, wild fish) contain 8% to 10% leucine by weight.",
          "Eating 40 grams of beef delivers approximately 3.6g of leucine, triggering intracellular mTORC1 phosphorylation and initiating translation initiation factors for protein synthesis.",
          "Repast guarantees that every anchor meal crosses this biological threshold, turning your meals into potent anabolic drivers."
        ]
      },
      {
        "heading": "Intracellular Hydration and Glycogen Recovery",
        "body": [
          "Keto athletes frequently confuse glycogen depletion with intracellular water loss. Without adequate sodium and potassium, muscles look flat and intra-set pump is diminished.",
          "Repast combines adequate sodium (5,000mg) with potassium-rich whole foods to maximize cell swelling and intramuscular turgor, ensuring heavy squats and bench presses feel explosive."
        ]
      }
    ],
    "faq": [
      {
        "question": "Can I build muscle on keto without eating carbs?",
        "answer": "Yes. Resistance training provides the mechanical tension signal for hypertrophy, and dietary protein provides the amino acids. Carbs are not chemically required for muscle protein synthesis."
      },
      {
        "question": "Does Repast support calorie surpluses for bulking?",
        "answer": "Yes. You can configure Repast for maintenance, moderate caloric surplus (+250 kcal), or aggressive cutting (-500 kcal) while keeping your protein floor locked."
      }
    ],
    "cta": {
      "eyebrow": "STRENGTH & HYPERTROPHY",
      "title": "Hit your physiological protein floor on iPhone.",
      "description": "Repast designs high-protein keto meal plans that cross the 3g leucine threshold every single meal while keeping net carbs sub-20g.",
      "buttonText": "Plan lifting macros on iPhone"
    }
  },
  {
    "slug": "couples-mixed-diet-households",
    "title": "Repast for Couples & Families: Multi-Portion Batching When Only One Person Is Keto",
    "targetAudience": "Couples and families where one partner eats low-carb and others eat standard diets",
    "subtitle": "How modular base-protein meal planning lets you cook one dinner for the entire household without cooking separate meals.",
    "category": "Household Economics",
    "readingTime": "4 min read",
    "heroMetrics": [
      {
        "label": "Separate Dinners Cooked",
        "value": "0"
      },
      {
        "label": "Extra Kitchen Minutes",
        "value": "0 mins"
      },
      {
        "label": "Shared Grocery Alignment",
        "value": "92%"
      }
    ],
    "painPoints": [
      {
        "title": "The Exhaustion of Cooking Two Dinners",
        "description": "Cooking a low-carb dinner for yourself and a separate pasta or rice meal for your spouse or children doubles kitchen prep, doubles pan washing, and causes resentment."
      },
      {
        "title": "Household Grocery Fragmentation",
        "description": "Buying specialized 'keto foods' alongside standard groceries results in inflated supermarket bills and half-eaten items spoiling across crowded refrigerator shelves."
      }
    ],
    "theRepastSolution": [
      {
        "title": "Modular Base-Protein Architecture",
        "description": "Repast builds dinners around a universal, delicious whole-food protein and vegetable core (e.g. Herb-Roasted Chicken & Asparagus) that non-keto partners can pair with rice or potatoes."
      },
      {
        "title": "Multi-Portion Scalability",
        "description": "Toggle portion counts between 2, 3, or 4 servings with one tap. Repast automatically scales recipe weights and shopping list pack sizes without altering macro balances."
      }
    ],
    "sampleMealPlan": [
      {
        "mealName": "Universal Family Core",
        "dish": "Garlic Butter Pan-Seared Salmon with Roasted Broccolini",
        "macros": "46g P · 28g F · 3g NC (for keto partner)",
        "prepTime": "18 mins (One Skillet)"
      },
      {
        "mealName": "Non-Keto Household Add-On",
        "dish": "Steamed Jasmine Rice or Sliced Sourdough (Modular side)",
        "macros": "Add-on for spouse/kids cooked concurrently",
        "prepTime": "+0 active mins"
      },
      {
        "mealName": "Next-Day Shared Lunch",
        "dish": "Cold Flaked Salmon Caesar Salad with Shaved Parmesan",
        "macros": "42g P · 24g F · 2g NC",
        "prepTime": "3 mins (carryover)"
      }
    ],
    "contentSections": [
      {
        "heading": "The Modular Plate Philosophy",
        "body": [
          "The fastest way to fail a dietary lifestyle is creating friction with the people you live with. If adopting keto means telling your partner they can never eat pasta again, or cooking two separate meals every night, the diet will not survive past month two.",
          "The solution is modular meal architecture: every human being eats protein and green vegetables. Repast designs meals where the core center of the plate — the braised beef, the roast poultry, the sautéed greens — is universally enjoyed by everyone.",
          "Carbohydrates become an optional satellite side: your partner boils a pot of pasta or bakes potatoes, while your plate remains strictly sub-5g net carbs. One stove, one cook session, zero friction."
        ],
        "pullquote": "Cook one universal meal. Make carbohydrates a modular side dish for non-keto family members."
      },
      {
        "heading": "Consolidating the Household Grocery Receipt",
        "body": [
          "By aligning 90% of your grocery cart around shared staple ingredients — eggs, chicken, beef, butter, olive oil, greens — your household shopping list remains compact and economical.",
          "Repast organizes your ingredients by grocery aisle so you never have to navigate specialty health food aisles to feed your family well."
        ]
      }
    ],
    "faq": [
      {
        "question": "Can Repast scale ingredient amounts for 2 or 4 people?",
        "answer": "Yes. You can set individual recipe serving counts to 2, 3, or 4 portions. Repast automatically calculates exact ingredient gram weights and grocery pack requirements."
      },
      {
        "question": "How do we handle shared leftovers?",
        "answer": "Repast assigns carryover portions to specific days, allowing you to pack one portion for your work lunch and leave another for your partner at home."
      }
    ],
    "cta": {
      "eyebrow": "FAMILY MEAL PLANNING",
      "title": "Cook one dinner for the entire household on iPhone.",
      "description": "Repast creates modular, whole-food keto meals that satisfy your strict carb limits while feeding your non-keto partner with zero extra cooking.",
      "buttonText": "Plan family keto on iPhone"
    }
  },
  {
    "slug": "budget-conscious-dieters",
    "title": "Repast for Budget-Conscious Dieters: Under $60/Week Whole-Food Keto",
    "targetAudience": "Students, thrifty meal planners, and dieters seeking maximum protein per grocery dollar",
    "subtitle": "The unit economics of low-cost keto: buying bulk whole proteins and eliminating the $1,800/year crisper graveyard.",
    "category": "Household Economics",
    "readingTime": "5 min read",
    "heroMetrics": [
      {
        "label": "Weekly Grocery Target",
        "value": "≤ $58 / person"
      },
      {
        "label": "Cost per 30g Protein",
        "value": "$0.95"
      },
      {
        "label": "Crisper Produce Waste",
        "value": "$0.00"
      }
    ],
    "painPoints": [
      {
        "title": "The $14 'Keto Convenience Snack' Trap",
        "description": "Buying commercial keto protein bars, almond flour cookies, and MCT oil powders causes weekly grocery bills to surge past $160 without adding real nutritional value."
      },
      {
        "title": "Perishable Food Waste in the Crisper",
        "description": "Buying ingredients without a strict calendar schedule leads to throwing away $35 of spoiled produce and proteins every single Sunday."
      }
    ],
    "theRepastSolution": [
      {
        "title": "Unit-Cost Protein Optimization",
        "description": "Repast builds weekly templates around the most affordable, highly bioavailable protein sources: bulk eggs, chicken drumsticks, canned wild fish, and ground beef."
      },
      {
        "title": "Shared Combinatorial Ingredient Schedules",
        "description": "Every perishable vegetable bought is scheduled across multiple meals so 100% of your grocery cart is consumed before anything reaches its expiration date."
      }
    ],
    "sampleMealPlan": [
      {
        "mealName": "Thrifty Morning Anchor",
        "dish": "3 Large Pasture Eggs Scrambled in Butter with Flake Salt",
        "macros": "21g P · 18g F · 1g NC · ($0.90)",
        "prepTime": "4 mins"
      },
      {
        "mealName": "High-Protein Pocket Lunch",
        "dish": "Canned Wild Sardines with Mustard & Cucumber Slices",
        "macros": "28g P · 14g F · 1.5g NC · ($1.45)",
        "prepTime": "2 mins (0 cook)"
      },
      {
        "mealName": "Comfort Budget Dinner",
        "dish": "Crispy Baked Bone-In Chicken Thighs with Roasted Cabbage Wedges",
        "macros": "44g P · 26g F · 3.5g NC · ($2.30)",
        "prepTime": "30 mins (5 active)"
      }
    ],
    "contentSections": [
      {
        "heading": "The Myth of the Expensive Keto Diet",
        "body": [
          "Mainstream media often portrays keto as an elitist diet of $32-a-pound grass-fed ribeyes and organic macadamia nuts. In reality, some of the most nutrient-dense foods on Earth are among the cheapest items in the grocery store.",
          "A 30-egg flat costs roughly $6.00 and provides 180 grams of complete protein with essential choline and vitamins. Bone-in, skin-on chicken thighs frequently retail for $1.99/lb. Canned wild fish costs under $1.50 per tin.",
          "When you base your diet on whole, unbranded foundation staples, your cost per day for 130g of protein and single-digit net carbs is under $8.00."
        ],
        "pullquote": "Keto is only expensive when you buy packaged foods imitating the junk you are trying to quit."
      },
      {
        "heading": "Eliminating Food Waste Returns $1,800 a Year",
        "body": [
          "The average American household discards 31% of purchased food. When people shop without an exact combinatorial plan, they buy ingredients that sit forgotten in the crisper drawer.",
          "Repast solves this by sharing ingredients: a single head of green cabbage is split between Monday's roasted wedges and Wednesday's beef stir-fry. Zero food is thrown away, instantly saving $150 a month."
        ]
      }
    ],
    "faq": [
      {
        "question": "Can I eat organic on a tight keto budget?",
        "answer": "Yes. Use the 'Clean 15' guidelines: conventional eggs, butter, and cabbage have minimal pesticide residues, allowing you to allocate budget toward higher-priority proteins."
      },
      {
        "question": "Does Repast generate a shopping list that groups items by store section?",
        "answer": "Yes. Repast consolidates every recipe into an aisle-by-aisle shopping list, showing exact unit quantities so you never overbuy perishable goods."
      }
    ],
    "cta": {
      "eyebrow": "THRIFTY MEAL PLANNING",
      "title": "Cut your low-carb grocery bill in half on iPhone.",
      "description": "Repast creates affordable, whole-food keto meal plans with zero wasted ingredients and an aisle-by-aisle shopping list on your iPhone.",
      "buttonText": "Plan budget keto on iPhone"
    }
  },
  {
    "slug": "adhd-decision-fatigue",
    "title": "Repast for ADHD & Executive Dysfunction: Removing Daily Kitchen Decision Fatigue",
    "targetAudience": "Neurodivergent adults, individuals with ADHD, and anyone overwhelmed by meal prep steps",
    "subtitle": "Single-decision meal planning that eliminates the 6:30 PM kitchen panic and removes multi-step cooking anxiety.",
    "category": "Cognitive Lifestyle",
    "readingTime": "3 min read",
    "heroMetrics": [
      {
        "label": "Daily Kitchen Decisions",
        "value": "1"
      },
      {
        "label": "Prep Steps per Recipe",
        "value": "≤ 4 steps"
      },
      {
        "label": "Orphaned Fridge Items",
        "value": "0"
      }
    ],
    "painPoints": [
      {
        "title": "The Multi-Step Executive Function Trap",
        "description": "Traditional cooking requires 12 micro-decisions: finding recipes, checking ingredients, timing cooking pans, and logging macros. For ADHD minds, this triggers overwhelming task paralysis."
      },
      {
        "title": "The Produce Forgetting Cycle",
        "description": "Out of sight is out of mind. Vegetables placed in crisper drawers cease to exist until they rot, triggering cycles of shame and food waste."
      }
    ],
    "theRepastSolution": [
      {
        "title": "Single-Decision Weekly Generation",
        "description": "You press one button on Sunday. Repast solves your entire week, locks in your macros, and gives you a linear instruction sequence for every day."
      },
      {
        "title": "Ultra-Short 4-Step Recipes",
        "description": "Every recipe is stripped of culinary complexity: maximum 4 steps, minimal dishes, and zero simultaneous multi-pan juggling."
      }
    ],
    "sampleMealPlan": [
      {
        "mealName": "Zero-Decision Morning",
        "dish": "Cold Pre-Boiled Eggs with Flake Salt & Sliced Cheddar",
        "macros": "26g P · 22g F · 1g NC",
        "prepTime": "1 min"
      },
      {
        "mealName": "Grab-and-Go Lunch",
        "dish": "Sliced Deli Turkey Rollups with Avocado Mayo",
        "macros": "34g P · 16g F · 1.5g NC",
        "prepTime": "2 mins"
      },
      {
        "mealName": "One-Pan Dinner Anchor",
        "dish": "Sheet-Pan Sausage Links & Roasted Green Beans",
        "macros": "38g P · 32g F · 3g NC",
        "prepTime": "20 mins (3 active)"
      }
    ],
    "contentSections": [
      {
        "heading": "Engineering the Kitchen for Low Executive Function",
        "body": [
          "For individuals with ADHD, hunger is often ignored until it becomes an urgent crisis. When blood sugar drops, the cognitive capacity to plan a complex low-carb dinner vanishes, leading to fast-food binges.",
          "Repast acts as an external executive function engine. It removes the need to invent meals every day. You check the app, look at the single protein scheduled for today, and follow three direct steps.",
          "By limiting active cookware to a single sheet pan or cast-iron skillet, cleanup friction is minimized, preventing dirty pans from piling up in the sink for days."
        ],
        "pullquote": "Remove the micro-decisions. One tap plans your week; four steps make your dinner."
      }
    ],
    "faq": [
      {
        "question": "Can I repeat the same 3 favorite meals every week?",
        "answer": "Yes. Repast allows you to favorite recipes and lock them into specific recurring days, giving you the comfort of predictable routine."
      }
    ],
    "cta": {
      "eyebrow": "LOW-FRICTION NUTRITION",
      "title": "End kitchen decision paralysis on iPhone.",
      "description": "Repast automates your low-carb week in one tap with simple 4-step recipes and zero daily macro tracking.",
      "buttonText": "Simplify dinner on iPhone"
    }
  },
  {
    "slug": "shift-workers-night-shifts",
    "title": "Repast for Shift Workers: Erratic Schedules, Night Shifts & Circadian Fasting",
    "targetAudience": "Nurses, physicians, paramedics, police officers, and overnight logistics workers",
    "subtitle": "Circadian meal timing and portable non-refrigerated keto protocols that keep energy stable through 12-hour night rotations.",
    "category": "Occupational Health",
    "readingTime": "4 min read",
    "heroMetrics": [
      {
        "label": "Portable Meal Slots",
        "value": "2 per Shift"
      },
      {
        "label": "Mid-Shift Energy Crashes",
        "value": "0"
      },
      {
        "label": "Circadian Alignment",
        "value": "100%"
      }
    ],
    "painPoints": [
      {
        "title": "The 3:00 AM Vending Machine Trap",
        "description": "When exhaustion hits during a 12-hour night shift, the breakroom vending machine full of high-carb candy and chips is often the only available food, causing insulin spikes and circadian disruption."
      },
      {
        "title": "Erratic Sleep and Digestion Desynchrony",
        "description": "Eating heavy meals right before sleeping at 8:00 AM disrupts melatonin, impairs deep sleep, and worsens insulin resistance caused by circadian rhythm inversion."
      }
    ],
    "theRepastSolution": [
      {
        "title": "Portable Grab-and-Go Shift Slots",
        "description": "Repast prioritizes leak-proof, cold-pack meals that can be eaten in 8 minutes between patient calls without requiring microwave heating."
      },
      {
        "title": "Pre-Sleep Light Meal Sequencing",
        "description": "Repast schedules your heaviest protein meal before your shift begins, keeping the meal preceding your daytime sleep light and easy to digest to protect sleep architecture."
      }
    ],
    "sampleMealPlan": [
      {
        "mealName": "Pre-Shift Anchor (5:30 PM)",
        "dish": "Seared Grass-Fed Beef Patties with Steamed Broccoli & Herb Butter",
        "macros": "48g P · 32g F · 3g NC",
        "prepTime": "12 mins"
      },
      {
        "mealName": "Mid-Shift Tactical Fuel (2:00 AM)",
        "dish": "Hard-Boiled Eggs, Smoked Salmon Strips & Sliced Cucumbers",
        "macros": "32g P · 18g F · 1.5g NC",
        "prepTime": "3 mins (packable)"
      },
      {
        "mealName": "Pre-Sleep Wind-Down (8:00 AM)",
        "dish": "Magnesium-Rich Bone Broth with Collagen Peptides & Pinch of Sea Salt",
        "macros": "18g P · 2g F · 0g NC",
        "prepTime": "2 mins"
      }
    ],
    "contentSections": [
      {
        "heading": "Managing Insulin Sensitivity During Circadian Misalignment",
        "body": [
          "Human metabolic biology is inherently circadian. Insulin sensitivity is naturally highest in the morning and lowest in the middle of the night.",
          "When a night-shift nurse consumes 70 grams of carbohydrates at 3:00 AM, the glucose spike remains elevated twice as long as it would during daytime hours, accelerating abdominal fat storage and systemic inflammation.",
          "Maintaining nutritional ketosis on night shifts provides a biological shield: because keto meals rely on fat and protein rather than glucose, the absence of nighttime insulin sensitivity ceases to be a liability. Energy remains completely flat from 7:00 PM to 7:00 AM."
        ],
        "pullquote": "Keto is the ultimate night-shift defense: zero carbs means nighttime insulin resistance cannot hurt you."
      },
      {
        "heading": "Protecting Daytime Sleep Architecture",
        "body": [
          "Eating a large, heavy meal immediately before climbing into bed at 8:00 AM elevates core body temperature and forces gastrointestinal motility, disrupting slow-wave deep sleep.",
          "Repast schedules your primary caloric bolus 90 minutes before your shift starts, leaving your post-shift morning meal light, warm, and electrolyte-dense so you fall asleep within minutes."
        ]
      }
    ],
    "faq": [
      {
        "question": "How do I transition my meal schedule between night shifts and off days?",
        "answer": "Use an intermittent fasting bridge: on your transition day, fast until early afternoon, then resume standard daytime keto dinner to synchronize with family life."
      }
    ],
    "cta": {
      "eyebrow": "SHIFT WORK NUTRITION",
      "title": "Master 12-hour shifts on iPhone with zero brain fog.",
      "description": "Repast designs portable, zero-carb shift meals that eliminate 3 AM vending machine crashes and protect daytime sleep on iPhone.",
      "buttonText": "Plan shift keto on iPhone"
    }
  },
  {
    "slug": "keto-beginners",
    "title": "Repast for Keto Beginners: Overcoming the 3-Week Stall Without Food Diaries",
    "targetAudience": "First-time keto dieters terrified of carb math, the keto flu, and tracking friction",
    "subtitle": "A foolproof, constraint-based roadmap through your first 30 days of ketosis with zero barcode scanning.",
    "category": "Beginner Foundations",
    "readingTime": "3 min read",
    "heroMetrics": [
      {
        "label": "First-Week Flu Rate",
        "value": "0%"
      },
      {
        "label": "Upfront Plan Accuracy",
        "value": "100%"
      },
      {
        "label": "Daily Barcodes Scanned",
        "value": "0"
      }
    ],
    "painPoints": [
      {
        "title": "The Confusion of Net vs. Total Carbs",
        "description": "Beginners get paralyzed trying to figure out which fibers to subtract, whether sugar alcohols count, and why their barcode scanner says negative carbohydrates."
      },
      {
        "title": "The Week-One Headache and Dizziness",
        "description": "Dumping 3,000mg of sodium through rapid kidney natriuresis causes severe 'keto flu' that makes 50% of beginners quit within 96 hours."
      }
    ],
    "theRepastSolution": [
      {
        "title": "Pre-Calculated Verified Recipes",
        "description": "Every recipe in Repast has already had its net carbs verified against USDA FoodData Central. You never calculate or subtract a single macro yourself."
      },
      {
        "title": "Built-In Mineral Guidance",
        "description": "Repast schedules natural sodium, potassium, and magnesium into your weekly meals, completely preventing keto flu before it starts."
      }
    ],
    "sampleMealPlan": [
      {
        "mealName": "Day 1 Beginner Breakfast",
        "dish": "Pasture Eggs Scrambled in Butter with Avocado & Sea Salt",
        "macros": "22g P · 24g F · 1.5g NC",
        "prepTime": "5 mins"
      },
      {
        "mealName": "Day 1 Easy Lunch",
        "dish": "Cold Roast Chicken Thighs over Baby Spinach with Olive Oil Dressing",
        "macros": "38g P · 22g F · 2g NC",
        "prepTime": "3 mins"
      },
      {
        "mealName": "Day 1 Satisfying Dinner",
        "dish": "Seared Beef Patties with Melted Cheddar & Sautéed Green Beans",
        "macros": "44g P · 30g F · 3g NC",
        "prepTime": "15 mins"
      }
    ],
    "contentSections": [
      {
        "heading": "Why Starting Keto with a Food Diary Is a Mistake",
        "body": [
          "Most beginners download a calorie tracker, go to the grocery store, and try to figure out what to eat as they go. By day four, they scan a protein bar that secretly contains maltitol, get kicked out of ketosis, suffer a headache, and give up.",
          "Repast takes the opposite approach: planning first. You do not log anything after the fact. Repast gives you the complete week of meals, the exact grocery list, and handles the math behind the scenes.",
          "You simply cook simple, delicious real food and let your body adapt to burning fat."
        ],
        "pullquote": "Do not start keto with a food diary. Start with an upfront plan that guarantees success."
      }
    ],
    "faq": [
      {
        "question": "Do I need to buy expensive ketone testing meters?",
        "answer": "No. If your daily meals are mathematically verified under 20g of net carbohydrates, your body has no physiological choice but to enter ketosis within 48 to 72 hours."
      }
    ],
    "cta": {
      "eyebrow": "BEGINNER ONBOARDING",
      "title": "Start your first 30 days of keto on iPhone.",
      "description": "Repast handles all the carb math and grocery logistics so you can transition into ketosis smoothly without daily food diaries.",
      "buttonText": "Start beginner keto on iPhone"
    }
  },
  {
    "slug": "intermittent-fasters",
    "title": "Repast for Intermittent Fasting: 16:8 and 18:6 Window Macro Compression",
    "targetAudience": "Practitioners of 16:8, 18:6, or 20:4 time-restricted eating seeking high-protein density",
    "subtitle": "Structuring two nutrient-dense meals that hit your 130g protein floor without gastric distress during compressed feeding windows.",
    "category": "Fasting & Longevity",
    "readingTime": "4 min read",
    "heroMetrics": [
      {
        "label": "Feeding Window Range",
        "value": "6–8 Hours"
      },
      {
        "label": "Daily Protein Floor",
        "value": "130g Guaranteed"
      },
      {
        "label": "Midday Energy Drop",
        "value": "0%"
      }
    ],
    "painPoints": [
      {
        "title": "The Protein Compression Problem",
        "description": "Fitting 130g of protein and 1,800 calories into a 6-hour feeding window often causes uncomfortable stomach fullness, leading people to under-eat vital amino acids."
      },
      {
        "title": "Breaking the Fast with the Wrong Macros",
        "description": "Breaking a 16-hour fast with high-fat, high-carb foods causes extreme reactive hypoglycemia, leaving you sleepy and groggy at 1:30 PM."
      }
    ],
    "theRepastSolution": [
      {
        "title": "Biphasic Asymmetric Caloric Budgeting",
        "description": "Repast divides your daily targets into a 40/60 split: a clean, moderate-fat fast-breaker at 12:00 PM followed by a substantial, nutrient-dense dinner anchor at 6:30 PM."
      },
      {
        "title": "Leucine-Dense Whole Foods",
        "description": "Using compact, highly bioavailable proteins (salmon, lean beef, eggs) ensures you breach the 3g leucine threshold twice daily without overwhelming stomach capacity."
      }
    ],
    "sampleMealPlan": [
      {
        "mealName": "Fast-Breaker (12:00 PM)",
        "dish": "Seared Chicken Breast over Mixed Greens with Avocado & Apple Cider Vinaigrette",
        "macros": "48g P · 18g F · 2.5g NC",
        "prepTime": "8 mins"
      },
      {
        "mealName": "Dinner Anchor (6:30 PM)",
        "dish": "Grass-Fed Ribeye with Roasted Cauliflower Florets in Garlic Herb Butter",
        "macros": "54g P · 38g F · 3g NC",
        "prepTime": "18 mins"
      },
      {
        "mealName": "Fasting Window (7:00 PM – 12:00 PM)",
        "dish": "Black Coffee, Mineral Water & Electrolyte Salts",
        "macros": "0g P · 0g F · 0g NC",
        "prepTime": "0 mins"
      }
    ],
    "contentSections": [
      {
        "heading": "The Synergistic Power of Ketosis and Fasting",
        "body": [
          "When a standard high-carbohydrate dieter fasts for 16 hours, the first 12 hours are spent merely depleting hepatic glycogen. Only in the final 4 hours does AMPK activate and fat burning begin.",
          "In a keto-adapted individual, glycogen is already minimized. The moment your last meal digests, your body enters deep fasting physiology: autophagy accelerates, cellular recycling begins, and insulin remains at baseline.",
          "However, compressing your food into two meals requires deliberate volumetric planning so you do not under-consume essential electrolytes and protein."
        ],
        "pullquote": "Fasting while already keto-adapted accelerates cellular autophagy from hour four instead of hour twelve."
      },
      {
        "heading": "The 40/60 Biphasic Protocol",
        "body": [
          "Eating 65 grams of protein alongside 50 grams of rich fat at 12:00 PM will send blood rushing to your digestive tract, causing an afternoon energy slump.",
          "Repast structures Meal 1 as a moderate-fat protein anchor that satisfies hunger without heaviness. Meal 2 at dinner provides the larger caloric allotment and satisfying fats that carry you through the night without late-night cravings."
        ]
      }
    ],
    "faq": [
      {
        "question": "Can I do OMAD (One Meal a Day) with Repast?",
        "answer": "While Repast supports single-meal templates, we recommend a minimum of two protein anchors daily to optimize muscle protein synthesis and prevent gastric distension."
      }
    ],
    "cta": {
      "eyebrow": "FASTING PROTOCOLS",
      "title": "Sync your keto meals with your fasting timer on iPhone.",
      "description": "Repast designs high-protein, compact meals structured specifically for 16:8 and 18:6 eating windows on your iPhone.",
      "buttonText": "Plan fasting keto on iPhone"
    }
  },
  {
    "slug": "dairy-free-keto",
    "title": "Repast for Dairy-Free Keto: Pure Animal & Monounsaturated Plant Lipids",
    "targetAudience": "Dieters with lactose intolerance, casein sensitivity, or autoimmune inflammation",
    "subtitle": "Flawless ketogenic meal plans built without cheese, heavy cream, or butter, focusing on clean culinary lipids.",
    "category": "Allergen & Autoimmune",
    "readingTime": "3 min read",
    "heroMetrics": [
      {
        "label": "Dairy Derivative Exposure",
        "value": "0%"
      },
      {
        "label": "Saturated / MUFA Ratio",
        "value": "50 / 50"
      },
      {
        "label": "Calcium & Trace Minerals",
        "value": "100% RDI"
      }
    ],
    "painPoints": [
      {
        "title": "The Cheese-Heavy Keto Stereotype",
        "description": "Standard keto recipes smother everything in cheddar, cream cheese, and heavy whipping cream, causing acne, gut inflammation, and sinus congestion in dairy-sensitive dieters."
      },
      {
        "title": "Difficulty Hitting Fat Targets Cleanly",
        "description": "Removing dairy often leaves dieters wondering where to get healthy cooking fats without relying on toxic industrial seed oils."
      }
    ],
    "theRepastSolution": [
      {
        "title": "100% Dairy-Free Exclusion Filter",
        "description": "Repast completely purges butter, cream, cheese, and casein-based ingredients, relying on beef tallow, duck fat, extra virgin olive oil, avocado oil, and coconut milk."
      },
      {
        "title": "Whole-Food Calcium Sources",
        "description": "Ensures trace mineral and calcium needs are met through wild bone-in canned salmon, dark leafy greens, sesame seeds, and rich bone broths."
      }
    ],
    "sampleMealPlan": [
      {
        "mealName": "Clean Dairy-Free Breakfast",
        "dish": "Pasture-Raised Eggs Fried in Grass-Fed Beef Tallow with Avocado Slices",
        "macros": "24g P · 28g F · 1.5g NC",
        "prepTime": "6 mins"
      },
      {
        "mealName": "Rich Plant-Lipid Lunch",
        "dish": "Wild Tuna Salad with Cold-Pressed Avocado Oil Mayo & Capers",
        "macros": "36g P · 18g F · 1g NC",
        "prepTime": "4 mins (0 cook)"
      },
      {
        "mealName": "Savory Coconut-Herb Dinner",
        "dish": "Braised Chicken Thighs in Coconut Milk, Ginger & Sautéed Bok Choy",
        "macros": "42g P · 32g F · 3.5g NC",
        "prepTime": "22 mins"
      }
    ],
    "contentSections": [
      {
        "heading": "Eliminating the Casein Inflammation Spike",
        "body": [
          "For many individuals, dairy is a profound inflammatory trigger. Bovine A1 beta-casein and whey proteins can irritate gut mucosa, drive cystic acne, and trigger sinus congestion.",
          "When people go keto and dramatically increase their cheese intake, they often experience digestive bloat that masks their fat loss.",
          "Repast builds pure dairy-free meal plans that maintain strict sub-20g net carbs while delivering anti-inflammatory monounsaturated lipids and ancestral animal fats."
        ],
        "pullquote": "You do not need cheese to eat keto. Tallow, duck fat, and extra virgin olive oil are superior culinary lipids."
      }
    ],
    "faq": [
      {
        "question": "Is ghee allowed in the dairy-free profile?",
        "answer": "You can toggle ghee on or off in Repast. While clarified ghee contains zero lactose and minimal casein, Repast can exclude it entirely if you have severe milk allergies."
      }
    ],
    "cta": {
      "eyebrow": "DAIRY-FREE KETO",
      "title": "Plan dairy-free keto meals effortlessly on iPhone.",
      "description": "Repast designs delicious, anti-inflammatory keto plans without a single drop of cream, butter, or cheese on your iPhone.",
      "buttonText": "Plan dairy-free on iPhone"
    }
  },
  {
    "slug": "desk-workers-brain-fog",
    "title": "Repast for Desk Workers: Eliminating the 2 PM Food Coma & Brain Fog",
    "targetAudience": "Software developers, writers, remote workers, and analysts sitting at screens all day",
    "subtitle": "Maintaining steady cognitive stamina and eliminating postprandial sleepiness with zero afternoon glucose crashes.",
    "category": "Cognitive Performance",
    "readingTime": "3 min read",
    "heroMetrics": [
      {
        "label": "Afternoon Glucose Drop",
        "value": "0 mg/dL"
      },
      {
        "label": "Uninterrupted Focus",
        "value": "5+ Hours"
      },
      {
        "label": "Daily Glycemic Variance",
        "value": "< 12 mg/dL"
      }
    ],
    "painPoints": [
      {
        "title": "The Post-Lunch Productivity Death Spiral",
        "description": "Eating a sandwich or burrito bowl at 1:00 PM triggers massive insulin release, followed by reactive hypoglycemia and irresistible sleepiness right during peak work hours."
      },
      {
        "title": "Constant Grazing While Staring at Screens",
        "description": "Boredom and sedentary desk work lead to mindless afternoon snacking on pretzels, chips, and sodas that destroy metabolic focus."
      }
    ],
    "theRepastSolution": [
      {
        "title": "Zero-Somnolence Lunch Architecture",
        "description": "Repast plans midday meals with high protein and clean monounsaturated fats that produce zero glycemic excursion, keeping afternoon energy flat and focused."
      },
      {
        "title": "Sustained Satiety",
        "description": "High amino acid density and stable ketone production turn off ghrelin signals, completely eliminating the impulse to visit the office kitchen at 3:30 PM."
      }
    ],
    "sampleMealPlan": [
      {
        "mealName": "Morning Sharpness",
        "dish": "Black Coffee or Tea with 3 Soft-Boiled Pasture Eggs & Flake Salt",
        "macros": "21g P · 15g F · 0.8g NC",
        "prepTime": "4 mins"
      },
      {
        "mealName": "Zero-Crash Desk Lunch",
        "dish": "Grilled Chicken Strips over Arugula, Sliced Avocado & Olive Oil",
        "macros": "44g P · 22g F · 2g NC",
        "prepTime": "3 mins (carryover)"
      },
      {
        "mealName": "Evening Restorative Dinner",
        "dish": "Seared Grass-Fed Sirloin Steak with Garlic Sautéed Spinach",
        "macros": "48g P · 26g F · 2.5g NC",
        "prepTime": "15 mins"
      }
    ],
    "contentSections": [
      {
        "heading": "The Neurochemistry of Afternoon Energy",
        "body": [
          "The dreaded '2 PM food coma' is not a personal character flaw; it is the direct neurochemical consequence of carbohydrate-induced reactive hypoglycemia and tryptophan shunting.",
          "When you remove high-glycemic starches from your midday meal, your blood glucose curve remains completely horizontal. The brain runs on clean beta-hydroxybutyrate and basal glucose, providing sustained focus without caffeine spikes.",
          "Repast organizes your workday lunches so you spend zero time thinking about food while getting 5+ hours of uninterrupted deep work accomplished every afternoon."
        ],
        "pullquote": "Eliminate the sandwich crash. Flat blood sugar means five continuous hours of afternoon deep work."
      }
    ],
    "faq": [
      {
        "question": "Can I prepare all my workday lunches in advance?",
        "answer": "Yes. Repast automatically schedules lunch carryover from dinner batch preps, so lunch is already in a container ready to eat when your midday meeting ends."
      }
    ],
    "cta": {
      "eyebrow": "COGNITIVE STAMINA",
      "title": "Eliminate afternoon brain fog on iPhone.",
      "description": "Repast plans midday keto meals that keep your blood glucose flat and your cognitive focus razor-sharp all afternoon on your iPhone.",
      "buttonText": "Plan cognitive keto on iPhone"
    }
  },
  {
    "slug": "vegetarian-keto",
    "title": "Repast for Vegetarian Keto: Sub-25g Net Carbs for Plant-Based Dieters",
    "targetAudience": "Vegetarians who want the cognitive and metabolic benefits of ketosis without meat",
    "subtitle": "Overcoming the plant protein carb bottleneck with whole eggs, pasture dairy, hemp hearts, and lupini beans.",
    "category": "Plant-Based Nutrition",
    "readingTime": "5 min read",
    "heroMetrics": [
      {
        "label": "Target Daily Net Carbs",
        "value": "≤ 24g"
      },
      {
        "label": "Complete Plant Proteins",
        "value": "100% Verified"
      },
      {
        "label": "Ultra-Processed Fake Meats",
        "value": "0g Allowed"
      }
    ],
    "painPoints": [
      {
        "title": "The Plant Protein Carbohydrate Bottleneck",
        "description": "Most plant proteins (beans, lentils, chickpeas) carry 2 to 3 grams of carbohydrate for every gram of protein, making traditional vegan or vegetarian diets incompatible with strict ketosis."
      },
      {
        "title": "Over-Reliance on Chemical Fake Meats",
        "description": "Many vegetarian keto eaters resort to ultra-processed soy isolates and industrial seed oil burgers packed with inflammatory additives to hit their protein targets."
      }
    ],
    "theRepastSolution": [
      {
        "title": "High-Bioavailability Vegetarian Anchors",
        "description": "Repast anchors vegetarian keto plans around pasture-raised eggs, aged hard cheeses, Greek yogurt, hemp seeds, and lupini flour, hitting 100g+ protein under 25g net carbs."
      },
      {
        "title": "Zero-Fake-Meat Integrity",
        "description": "Excludes processed plant-based meat analogs, using unrefined whole foods to build complete amino acid profiles with natural micronutrient density."
      }
    ],
    "sampleMealPlan": [
      {
        "mealName": "Vegetarian Morning Anchor",
        "dish": "3 Pasture Eggs Scrambled with Feta Cheese, Spinach & Kalamata Olives",
        "macros": "28g P · 24g F · 2g NC",
        "prepTime": "6 mins"
      },
      {
        "mealName": "Plant-Protein Midday Bowl",
        "dish": "Hemp Heart & Chia Seed Porridge with Unsweetened Almond Milk & Crushed Walnuts",
        "macros": "32g P · 30g F · 3.5g NC",
        "prepTime": "4 mins (0 cook)"
      },
      {
        "mealName": "Savory Vegetarian Dinner",
        "dish": "Pan-Seared Paneer or Halloumi Cheese with Roasted Asparagus & Walnut Pesto",
        "macros": "36g P · 34g F · 4g NC",
        "prepTime": "16 mins"
      }
    ],
    "contentSections": [
      {
        "heading": "Solving the Vegetarian Macro Equation",
        "body": [
          "Vegetarian keto is the most mathematically constrained dietary protocol in existence. Standard vegetarian staples — black beans, brown rice, quinoa — are strictly off-limits due to high starch content.",
          "To hit a 100g protein floor while remaining under 25g of net carbs, the meal plan must utilize high-density low-carb vegetarian anchors.",
          "Pasture-raised eggs provide the biological gold standard of protein quality. When paired with high-protein aged cheeses (parmesan, pecorino), hemp hearts (which contain 10g protein and only 1g net carb per 30g), and avocado, a vegetarian can achieve deep nutritional ketosis without touching a single cut of meat."
        ],
        "pullquote": "Vegetarian keto is mathematically challenging, but completely solvable with eggs, hemp hearts, and aged cheeses."
      },
      {
        "heading": "Bypassing Ultra-Processed Soy Analogs",
        "body": [
          "Many commercial vegetarian 'keto' products are extruded soy protein isolates bound with methylcellulose and fried in canola oil. These industrial products disrupt gut microbiota and drive systemic inflammation.",
          "Repast builds vegetarian meal plans entirely out of clean, real whole foods, verifying that every amino acid requirement is met through whole-food biochemistry."
        ]
      }
    ],
    "faq": [
      {
        "question": "Can I do 100% vegan keto in Repast?",
        "answer": "Strict vegan keto without eggs or dairy is an over-constrained mathematical problem that forces unhealthily high processed isolate consumption. Repast supports vegetarian (lacto-ovo) keto for optimal nutritional completeness."
      }
    ],
    "cta": {
      "eyebrow": "VEGETARIAN KETO",
      "title": "Master vegetarian low-carb eating on iPhone.",
      "description": "Repast solves the difficult vegetarian keto macro puzzle, delivering 100g+ of complete protein under 25g net carbs on your iPhone.",
      "buttonText": "Plan vegetarian keto on iPhone"
    }
  }
];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((u) => u.slug === slug);
}
