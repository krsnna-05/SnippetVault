import { cache } from "react";
import { codeToHtml } from "shiki";

const fallbackLanguage = "text";
const theme = "github-dark-default";

const normalizeShikiHtml = (html: string) => {
  return html
    .replace(/background-color:[^;"]+;?/g, "")
    .replace(/<pre class="shiki/g, '<pre class="shiki dashboard-code-block');
};

export const highlightCode = cache(async (code: string, language: string) => {
  try {
    const html = await codeToHtml(code, {
      lang: language,
      theme,
    });

    return normalizeShikiHtml(html);
  } catch {
    const html = await codeToHtml(code, {
      lang: fallbackLanguage,
      theme,
    });

    return normalizeShikiHtml(html);
  }
});
