import {
  DashboardCollection,
  DashboardStat,
} from "@/components/dashboard/types";
import {
  BookMarked,
  Clock3,
  FolderKanban,
  type LucideIcon,
} from "lucide-react";

interface DashboardStatsProps {
  stats: DashboardStat[];
  collections: DashboardCollection[];
}

const iconMap: Record<string, LucideIcon> = {
  BookMarked,
  Clock3,
  FolderKanban,
};

const DashboardStats = ({ stats, collections }: DashboardStatsProps) => {
  return (
    <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => {
          const Icon = iconMap[stat.iconName];

          return (
            <article
              key={stat.label}
              className="rounded-[24px] border border-border/70 bg-card/75 p-5 shadow-lg shadow-black/5 backdrop-blur"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                    {stat.value}
                  </p>
                </div>
                <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <Icon className="size-4.5" />
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                {stat.detail}
              </p>
            </article>
          );
        })}
      </div>

      <aside className="rounded-[24px] border border-border/70 bg-card/75 p-5 shadow-lg shadow-black/5 backdrop-blur">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Top Collections</p>
            <h2 className="mt-1 text-xl font-semibold text-foreground">
              Keep recurring work close.
            </h2>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {collections.map((collection) => (
            <div
              key={collection.label}
              className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/70 px-4 py-3"
            >
              <span className="font-medium text-foreground">
                {collection.label}
              </span>
              <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
                {collection.count}
              </span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
};

export default DashboardStats;
