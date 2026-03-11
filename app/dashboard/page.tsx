import SnippetDashboard from "@/components/dashboard/SnippetDashboard";
import {
  DashboardCollection,
  DashboardSnippet,
  DashboardStat,
} from "@/components/dashboard/types";

const stats: DashboardStat[] = [
  {
    label: "Saved snippets",
    value: "148",
    detail: "12 new entries added this week across backend and UI work.",
    iconName: "BookMarked",
  },
  {
    label: "Recent updates",
    value: "23",
    detail: "Most edits happened in authentication and API helper templates.",
    iconName: "Clock3",
  },
  {
    label: "Active collections",
    value: "09",
    detail: "Reusable kits for React, SQL, automation, and deployment flows.",
    iconName: "FolderKanban",
  },
];

const collections: DashboardCollection[] = [
  { label: "Authentication", count: "18 snippets" },
  { label: "UI Patterns", count: "26 snippets" },
  { label: "Database Recipes", count: "14 snippets" },
  { label: "Automation", count: "11 snippets" },
];

const snippets: DashboardSnippet[] = [
  {
    id: "auth-guard",
    title: "JWT Auth Guard",
    language: "TypeScript",
    syntaxLanguage: "ts",
    languageTone: "border-primary/30 bg-primary/10 text-primary",
    description:
      "Middleware helper for validating a session token before protected routes load.",
    preview: `export const authGuard = (req: Request) => {
  const token = req.headers.get("authorization");

  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  return validateSession(token);
};`,
    tags: ["auth", "security", "middleware"],
    updatedAt: "2h ago",
    locked: true,
  },
  {
    id: "fastapi-config",
    title: "FastAPI Base Config",
    language: "Python",
    syntaxLanguage: "python",
    languageTone:
      "border-chart-2/30 bg-chart-2/10 text-[color:var(--color-chart-2)]",
    description:
      "A minimal service bootstrap for spinning up internal APIs quickly.",
    preview: `from fastapi import FastAPI

app = FastAPI(title="SnippetVault API")

@app.get("/")
def read_root():
    return {"status": "ok"}`,
    tags: ["backend", "fastapi"],
    updatedAt: "5h ago",
    starred: true,
  },
  {
    id: "responsive-grid",
    title: "Responsive Grid Layout",
    language: "CSS/Tailwind",
    syntaxLanguage: "tsx",
    languageTone:
      "border-chart-3/30 bg-chart-3/10 text-[color:var(--color-chart-3)]",
    description:
      "Responsive card shell for dashboards, marketing sections, and internal tools.",
    preview: `<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
  <div className="rounded-3xl border bg-card p-6 shadow-sm">
    Content
  </div>
</div>`,
    tags: ["ui", "layout", "tailwind"],
    updatedAt: "1d ago",
    locked: true,
  },
  {
    id: "sql-user-stats",
    title: "SQL Query: User Stats",
    language: "SQL",
    syntaxLanguage: "sql",
    languageTone:
      "border-chart-1/30 bg-chart-1/10 text-[color:var(--color-chart-1)]",
    description:
      "Aggregate user activity to feed leaderboards, internal reports, or admin panels.",
    preview: `SELECT u.id,
       COUNT(s.id) AS snippet_count
FROM users u
LEFT JOIN snippets s ON s.user_id = u.id
GROUP BY u.id
ORDER BY snippet_count DESC;`,
    tags: ["db", "metrics"],
    updatedAt: "3d ago",
  },
];

const DashboardPage = () => {
  return (
    <SnippetDashboard
      heading="My Dashboard"
      description="A focused view of your most useful code blocks, recent changes, and reusable collections. Everything here uses static data for now so the UI can be shaped before the real backend is wired in."
      stats={stats}
      collections={collections}
      snippets={snippets}
    />
  );
};

export default DashboardPage;
