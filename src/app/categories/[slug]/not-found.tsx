import Link from "next/link";

export default function CategoryNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-foundry-white px-6 text-center">
      <h1 className="text-2xl font-semibold text-forge-black">
        Category not found
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        That category does not exist or the link may be outdated.
      </p>
      <Link
        href="/explore"
        className="mt-8 rounded-lg bg-forge-blue px-6 py-3 text-sm font-medium text-white hover:bg-forge-blue/90"
      >
        Browse categories
      </Link>
    </div>
  );
}