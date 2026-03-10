import { BookText, Users } from "lucide-react";

import FeatureRow from "./FeatureRow";

const AuthFeaturePanel = () => {
  return (
    <div className="order-2 hidden flex-col justify-center lg:order-1 lg:flex">
      <div className="mb-5 inline-flex w-fit items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
        For Developers
      </div>
      <h1 className="max-w-xl text-4xl font-bold leading-tight text-foreground sm:text-5xl">
        Your second brain for{" "}
        <span className="text-primary">code snippets.</span>
      </h1>
      <p className="mt-6 max-w-lg text-lg text-muted-foreground">
        Organize, sync, and share your most used code blocks. Join 50,000+
        developers building faster every day.
      </p>

      <div className="mt-8 space-y-5">
        <FeatureRow
          icon={<BookText className="size-4" />}
          title="Cloud Sync"
          description="Access your snippets from VS Code, IntelliJ, or any browser."
        />
        <FeatureRow
          icon={<Users className="size-4" />}
          title="Team Library"
          description="Share internal documentation and helper functions with your team."
        />
      </div>
    </div>
  );
};

export default AuthFeaturePanel;
