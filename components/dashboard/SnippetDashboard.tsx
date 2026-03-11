import {
  DashboardCollection,
  DashboardSnippet,
  DashboardStat,
} from "@/components/dashboard/types";
import AddSnippetCard from "@/components/dashboard/AddSnippetCard";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardStats from "@/components/dashboard/DashboardStats";
import SnippetCard from "@/components/dashboard/SnippetCard";

interface SnippetDashboardProps {
  heading: string;
  description: string;
  stats: DashboardStat[];
  collections: DashboardCollection[];
  snippets: DashboardSnippet[];
}

const tabs = ["All Snippets", "Recent", "Favorites"];

const SnippetDashboard = ({
  heading,
  description,
  stats,
  collections,
  snippets,
}: SnippetDashboardProps) => {
  return (
    <main className="relative flex-1 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_25%)]" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <section className="rounded-[28px] border border-border/70 bg-card/60 p-5 shadow-xl shadow-black/5 backdrop-blur sm:p-6">
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

            <div className="inline-flex w-fit items-center rounded-full border border-border/70 bg-background/70 p-1">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  type="button"
                  className={
                    index === 0
                      ? "rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                      : "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  }
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {["python", "react", "backend", "frontend", "api", "sql"].map(
              (tag, index) => (
                <span
                  key={tag}
                  className={
                    index === 0
                      ? "rounded-full border border-primary/30 bg-primary/12 px-3 py-1 text-xs font-semibold text-primary"
                      : "rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground"
                  }
                >
                  #{tag}
                </span>
              ),
            )}
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {snippets.map((snippet) => (
              <SnippetCard key={snippet.id} snippet={snippet} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default SnippetDashboard;
