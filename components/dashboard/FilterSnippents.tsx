"use client";

import { useEffect, useMemo, useState } from "react";
import { LockKeyhole, Search } from "lucide-react";

import { DashboardSnippet } from "@/components/dashboard/types";
import { Input } from "@/components/ui/input";

interface FilterSnippentsProps {
  snippets: DashboardSnippet[];
}

const getSnippetSearchText = (snippet: DashboardSnippet) => {
  return [
    snippet.title,
    snippet.language,
    snippet.description,
    snippet.tags.join(" "),
    snippet.preview,
  ]
    .join(" ")
    .toLowerCase();
};

const FilterSnippents = ({ snippets }: FilterSnippentsProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedTerm(searchTerm.trim().toLowerCase());
    }, 300);

    return () => window.clearTimeout(timeoutId);
  }, [searchTerm]);

  const availableTags = useMemo(() => {
    const tags = new Set<string>();

    for (const snippet of snippets) {
      for (const tag of snippet.tags) {
        tags.add(tag.toLowerCase());
      }
    }

    return Array.from(tags).sort((a, b) => a.localeCompare(b));
  }, [snippets]);

  const filteredSnippets = useMemo(() => {
    const terms = debouncedTerm.split(/\s+/).filter(Boolean);

    return snippets.filter((snippet) => {
      const snippetTags = snippet.tags.map((tag) => tag.toLowerCase());
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => snippetTags.includes(tag));

      if (!matchesTags) {
        return false;
      }

      if (terms.length === 0) {
        return true;
      }

      const searchText = getSnippetSearchText(snippet);
      return terms.every((term) => searchText.includes(term));
    });
  }, [debouncedTerm, selectedTags, snippets]);

  const toggleTag = (tag: string) => {
    setSelectedTags((currentTags) =>
      currentTags.includes(tag)
        ? currentTags.filter((value) => value !== tag)
        : [...currentTags, tag],
    );
  };

  return (
    <div className="mt-5 space-y-5">
      <div className="relative max-w-xl">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search snippets by title, language, tag, or code..."
          className="h-11 rounded-full border-border/70 bg-background/80 pl-10 pr-4"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {availableTags.map((tag) => {
          const isActive = selectedTags.includes(tag);

          return (
            <button
              key={tag}
              type="button"
              onClick={() => toggleTag(tag)}
              className={
                isActive
                  ? "rounded-full border border-primary/30 bg-primary/12 px-3 py-1 text-xs font-semibold text-primary"
                  : "rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/20 hover:text-foreground"
              }
            >
              #{tag}
            </button>
          );
        })}
      </div>

      {filteredSnippets.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredSnippets.map((snippet) => {
            const previewLines = snippet.preview
              .split("\n")
              .slice(0, 3)
              .join("\n");

            return (
              <article
                key={snippet.id}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-border/70 bg-card/80 shadow-lg shadow-black/5 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3 border-b border-border/70 px-5 pb-4 pt-5">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      {snippet.locked ? (
                        <LockKeyhole className="size-3.5" />
                      ) : null}
                      <span>{snippet.locked ? "Private" : "Public"}</span>
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
                  <pre className="overflow-x-auto rounded-2xl border border-border/70 bg-background/95 p-4 font-mono text-[13px] leading-6 text-foreground/90">
                    {previewLines}
                  </pre>
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
          })}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border/80 bg-background/60 px-5 py-7 text-sm text-muted-foreground">
          No snippets match your current search or tag filters.
        </div>
      )}
    </div>
  );
};

export default FilterSnippents;
