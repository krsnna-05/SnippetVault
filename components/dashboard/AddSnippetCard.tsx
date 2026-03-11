import { ArrowRight, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

const AddSnippetCard = () => {
  return (
    <article className="flex h-full min-h-90 flex-col items-center justify-center rounded-[24px] border border-dashed border-border bg-card/60 px-6 text-center shadow-lg shadow-black/5">
      <div className="inline-flex size-14 items-center justify-center rounded-full bg-primary/12 text-primary">
        <Plus className="size-6" />
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-foreground">
        Add a fresh snippet
      </h3>
      <p className="mt-3 max-w-xs text-sm text-muted-foreground">
        Save boilerplate, SQL recipes, and utility fragments you reach for every
        week.
      </p>
      <Button className="mt-6 h-10 rounded-full px-5 font-semibold">
        Get Started
        <ArrowRight className="size-4" />
      </Button>
    </article>
  );
};

export default AddSnippetCard;
