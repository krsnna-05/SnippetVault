import { cache } from "react";
import { codeToHtml } from "shiki";

const fallbackLanguage = "text";
const theme = "github-dark-default";

const removePreBackground = (html: string) => {
  return html.replace(/background-color:[^;"]+;?/g, "");
};

export const highlightCode = cache(async (code: string, language: string) => {
  try {
    const html = await codeToHtml(code, {
      lang: language,
      theme,
    });

    return removePreBackground(html);
  } catch {
    const html = await codeToHtml(code, {
      lang: fallbackLanguage,
      theme,
    });

    return removePreBackground(html);
  }
});
