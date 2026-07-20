export type CategoryAccent = {
  bg: string;
  text: string;
  dot: string;
  /** Tailwind class for label background tint */
  bgClass: string;
  /** Tailwind class for label text */
  textClass: string;
  /** Tailwind class for accent dot / chip */
  dotClass: string;
};

const categoryAccents: Record<string, CategoryAccent> = {
  "Project Management": {
    bg: "#EEEDFE",
    text: "#3C3489",
    dot: "#7C3AED",
    bgClass: "bg-project-management-bg",
    textClass: "text-project-management-text",
    dotClass: "bg-project-management-dot",
  },
  "Knowledge Management": {
    bg: "#E6F1FB",
    text: "#0C447C",
    dot: "#2563EB",
    bgClass: "bg-knowledge-management-bg",
    textClass: "text-knowledge-management-text",
    dotClass: "bg-knowledge-management-dot",
  },
  Productivity: {
    bg: "#E1F5EE",
    text: "#085041",
    dot: "#0F6E56",
    bgClass: "bg-productivity-bg",
    textClass: "text-productivity-text",
    dotClass: "bg-productivity-dot",
  },
  Operations: {
    bg: "#FAEEDA",
    text: "#633806",
    dot: "#BA7517",
    bgClass: "bg-operations-bg",
    textClass: "text-operations-text",
    dotClass: "bg-operations-dot",
  },
  Automation: {
    bg: "#FAECE7",
    text: "#712B13",
    dot: "#D85A30",
    bgClass: "bg-automation-bg",
    textClass: "text-automation-text",
    dotClass: "bg-automation-dot",
  },
  "AI Agents": {
    bg: "#FBEAF0",
    text: "#72243E",
    dot: "#D4537E",
    bgClass: "bg-ai-agents-bg",
    textClass: "text-ai-agents-text",
    dotClass: "bg-ai-agents-dot",
  },
};

const fallbackAccent: CategoryAccent = {
  bg: "#F4F4F5",
  text: "#3F3F46",
  dot: "#71717A",
  bgClass: "bg-zinc-100",
  textClass: "text-zinc-700",
  dotClass: "bg-zinc-500",
};

/** Look up accent colors for a workflow/category display name. */
export function getCategoryAccent(category: string): CategoryAccent {
  return categoryAccents[category] ?? fallbackAccent;
}