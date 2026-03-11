"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, Copy, Globe, LockKeyhole } from "lucide-react";

import { DashboardSnippet } from "@/components/dashboard/types";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface SnippetDetailSheetProps {
  snippet: DashboardSnippet | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const copyText = async (value: string) => {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};

const SnippetDetailSheet = ({
  snippet,
  open,
  onOpenChange,
}: SnippetDetailSheetProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  useEffect(() => {
    if (!open) {
      setCopied(false);
    }
  }, [open]);

  const visibilityLabel = useMemo(() => {
    if (!snippet) {
      return "Private";
    }

    return snippet.locked ? "Private" : "Public";
  }, [snippet]);

  const handleCopy = async () => {
    if (!snippet) {
      return;
    }

    await copyText(snippet.preview);
    setCopied(true);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="p-0 data-[side=right]:w-full data-[side=right]:sm:max-w-2xl"
      >
        {snippet ? (
          <div className="flex h-full flex-col">
            <SheetHeader className="border-b border-border/70 px-6 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <SheetTitle className="text-2xl font-semibold">
                    {snippet.title}
                  </SheetTitle>
                  <SheetDescription className="mt-2 text-sm">
                    {snippet.description}
                  </SheetDescription>
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
            </SheetHeader>

            <div className="flex-1 space-y-5 overflow-y-auto px-6 py-5">
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                {snippet.locked ? (
                  <LockKeyhole className="size-4" />
                ) : (
                  <Globe className="size-4" />
                )}
                <span>{visibilityLabel}</span>
                <span className="text-border">|</span>
                <span>Updated {snippet.updatedAt}</span>
              </div>

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

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-sm font-semibold text-foreground">
                    Full Code
                  </h4>
                  <Button
                    variant="outline"
                    size="sm"
                    type="button"
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <Check className="size-4" />
                    ) : (
                      <Copy className="size-4" />
                    )}
                    {copied ? "Copied!" : "Copy code"}
                  </Button>
                </div>
                <pre className="max-h-[60vh] overflow-auto rounded-2xl border border-border/70 bg-background p-4 font-mono text-[13px] leading-6 text-foreground/90">
                  {snippet.preview}
                </pre>
              </div>
            </div>
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
};

export default SnippetDetailSheet;
