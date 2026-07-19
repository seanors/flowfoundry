export type WorkflowResource = {
  title: string;
  type: string;
  url: string;
};

export type Workflow = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  difficulty: string;
  timeSaved: string;
  audience: string[];
  problem: string;
  solution: string;
  steps: string[];
  prompt: string;
  tools: string[];
  resources: WorkflowResource[];
};