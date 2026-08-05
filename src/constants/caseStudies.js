export const caseStudyFilters = [
  { label: "All", value: "all" },
  { label: "E-commerce", value: "ecommerce" },
  { label: "Retail", value: "retail" },
  { label: "HR", value: "hr" },
  { label: "Finance", value: "finance" },
  { label: "Healthcare", value: "healthcare" },
];

export const caseStudiesData = [
  {
    id: "case1",
    category: "ecommerce",
    badge: "E-commerce",
    bars: [50, 70, 60, 85, 55, 90],
    title: "E-commerce Sales & Profit Analysis",
    desc: "Identified underperforming product categories dragging down margins and proposed a pricing correction strategy.",
    tags: ["SQL", "Power BI", "Statistics"],
  },
  {
    id: "case2",
    category: "hr",
    badge: "HR",
    bars: [40, 65, 50, 75, 45, 80],
    title: "HR Employee Attrition Analysis",
    desc: "Analyzed workforce data to uncover the top 3 drivers of attrition and recommended retention interventions.",
    tags: ["Excel", "SQL", "EDA"],
  },
  {
    id: "case3",
    category: "retail",
    badge: "Retail",
    bars: [60, 45, 80, 55, 70, 90],
    title: "Retail Business Performance Analysis",
    desc: "Benchmarked store-level revenue and product performance to guide inventory reallocation across 40+ stores.",
    tags: ["Power BI", "SQL", "Retail"],
  },
];
