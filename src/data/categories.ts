export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
};

export const categories: Category[] = [
  {
    id: "1",
    name: "Project Management",
    slug: "project-management",
    description: "Plan, track, and communicate progress across projects with AI.",
    icon: "ClipboardList",
  },
  {
    id: "2",
    name: "Knowledge Management",
    slug: "knowledge-management",
    description: "Capture, organize, and share what your team knows.",
    icon: "BookOpen",
  },
  {
    id: "3",
    name: "Productivity",
    slug: "productivity",
    description: "Get more done with less friction in your daily work.",
    icon: "Zap",
  },
  {
    id: "4",
    name: "Operations",
    slug: "operations",
    description: "Document and run the processes that keep the business moving.",
    icon: "Settings",
  },
  {
    id: "5",
    name: "Automation",
    slug: "automation",
    description: "Connect tools and remove repetitive manual steps.",
    icon: "Workflow",
  },
  {
    id: "6",
    name: "AI Agents",
    slug: "ai-agents",
    description: "Design agents that research, draft, and act on your behalf.",
    icon: "Bot",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}