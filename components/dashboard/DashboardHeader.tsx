import { Bell, Plus, Search, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DashboardHeaderProps {
  heading: string;
  description: string;
}

const DashboardHeader = ({ heading, description }: DashboardHeaderProps) => {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-border/70 bg-card/70 p-5 shadow-2xl shadow-black/10 backdrop-blur sm:p-6">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-primary/10 via-transparent to-primary/5" />

      <div className="relative flex flex-col gap-6">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div className="space-y-3">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" />
              Snippet Command Center
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {heading}
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
                {description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start">
            <Button variant="outline" size="icon-sm" aria-label="Notifications">
              <Bell className="size-4" />
            </Button>
            <Button className="h-10 rounded-full px-4 text-sm font-semibold">
              <Plus className="size-4" />
              New Snippet
            </Button>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_240px]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search snippets by name, tag, or language..."
              className="h-11 rounded-full border-border/70 bg-background/80 pl-10 pr-4"
            />
          </div>

          <div className="rounded-2xl border border-dashed border-border/80 bg-background/60 px-4 py-3 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Focus mode:</span>{" "}
            Ship your most reused snippets first.
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHeader;
