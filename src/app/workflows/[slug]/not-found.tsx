import Link from "next/link";

export default function WorkflowNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-foundry-white px-6 text-center">
      <h1 className="text-2xl font-semibold text-forge-black">
        Workflow not found
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        That workflow does not exist or the link may be outdated.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-brand-gradient px-6 py-3 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
      >
        Back to homepage
      </Link>
    </div>
  );
}