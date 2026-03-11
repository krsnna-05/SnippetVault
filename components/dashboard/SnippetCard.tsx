import { Copy, LockKeyhole, Star } from "lucide-react";

import SnippetPreview from "@/components/dashboard/SnippetPreview";
import { Button } from "@/components/ui/button";
import { DashboardSnippet } from "@/components/dashboard/types";

interface SnippetCardProps {
  snippet: DashboardSnippet;
}

const SnippetCard = async ({ snippet }: SnippetCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-border/70 bg-card/80 shadow-lg shadow-black/5 transition-transform duration-200 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-3 border-b border-border/70 px-5 pb-4 pt-5">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {snippet.locked ? <LockKeyhole className="size-3.5" /> : null}
            <span>{snippet.language}</span>
          </div>
          <h3 className="mt-2 truncate text-lg font-semibold text-foreground">
            {snippet.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {snippet.description}
          </p>
        </div>

        <span
          className={
            "rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide " +
            snippet.languageTone
          }
        >
          {snippet.language}
        </span>
      </div>

      <div className="px-5 py-4">
        <SnippetPreview
          code={snippet.preview}
          language={snippet.syntaxLanguage}
        />
      </div>

      <div className="mt-auto px-5 pb-5">
        <div className="flex flex-wrap gap-2">
          {snippet.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-4 border-t border-border/70 pt-4">
          <p className="text-sm text-muted-foreground">
            Updated {snippet.updatedAt}
          </p>
        </div>
      </div>
    </article>
  );
};

export default SnippetCard;
