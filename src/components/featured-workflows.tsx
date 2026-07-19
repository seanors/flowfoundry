import { WorkflowCard } from "@/components/workflow-card";
import { workflows } from "@/data/workflows";

export function FeaturedWorkflows() {
  return (
    <section
      id="featured"
      className="border-t border-black/5 bg-white px-6 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight text-forge-black sm:text-3xl">
          Featured workflows
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workflows.map((workflow) => (
            <WorkflowCard
              key={workflow.id}
              title={workflow.title}
              category={workflow.category}
              benefit={workflow.timeSaved}
              tools={workflow.tools}
              href={`/workflows/${workflow.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}