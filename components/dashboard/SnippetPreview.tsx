import { highlightCode } from "@/lib/shiki";

interface SnippetPreviewProps {
  code: string;
  language?: string;
}

const SnippetPreview = async ({
  code,
  language = "text",
}: SnippetPreviewProps) => {
  const previewCode = code.split("\n").slice(0, 3).join("\n");
  const hasMoreLines = code.split("\n").length > 3;
  const html = await highlightCode(previewCode, language);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/95 p-4 shadow-[inset_0_-24px_36px_rgba(0,0,0,0.55)] [&_code]:font-mono [&_code]:text-[13px] [&_pre]:m-0 [&_pre]:overflow-x-auto [&_pre]:bg-transparent [&_pre]:p-0 [&_pre]:leading-6">
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {hasMoreLines ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-linear-to-t from-black/80 via-black/35 to-transparent" />
      ) : null}
    </div>
  );
};

export default SnippetPreview;
