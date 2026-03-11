import { highlightCode } from "@/lib/shiki";

interface SnippetPreviewProps {
  code: string;
  language?: string;
}

const SnippetPreview = async ({
  code,
  language = "text",
}: SnippetPreviewProps) => {
  const html = await highlightCode(code, language);

  return (
    <div
      className="rounded-2xl border border-border/70 bg-background/90 p-4 [&_code]:font-mono [&_code]:text-[13px] [&_pre]:m-0 [&_pre]:overflow-x-auto [&_pre]:bg-transparent [&_pre]:p-0 [&_pre]:leading-6"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default SnippetPreview;
