import { DashboardSnippet } from "@/components/dashboard/types";
import FilterSnippents from "@/components/dashboard/FilterSnippents";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

interface SnippetDashboardProps {
  heading: string;
  description: string;
  snippets: DashboardSnippet[];
}

const SnippetDashboard = ({ snippets }: SnippetDashboardProps) => {
  return (
    <main className="relative flex-1 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-background" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <section className="sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                My Library
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Manage and organize your saved code blocks with a clean working
                set.
              </p>
            </div>

            <Button variant="default" size="default" aria-label="New Snippet">
              <Plus className="size-4" />
              New Snippet
            </Button>
          </div>

          <FilterSnippents snippets={snippets} />
        </section>
      </div>
    </main>
  );
};

export default SnippetDashboard;
