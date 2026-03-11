import { LucideIcon } from "lucide-react";

export interface DashboardStat {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
}

export interface DashboardSnippet {
  id: string;
  title: string;
  language: string;
  syntaxLanguage?: string;
  languageTone: string;
  description: string;
  preview: string;
  tags: string[];
  updatedAt: string;
  locked?: boolean;
  starred?: boolean;
}

export interface DashboardCollection {
  label: string;
  count: string;
}
