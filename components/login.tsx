import Link from "next/link";
import { ArrowRight, BookText, Eye, Github, Mail, Users } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LoginProps {
  heading?: string;
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
  className?: string;
}

const Login = ({
  heading = "Welcome back",
  buttonText = "Log in",
  signupText = "Need an account?",
  signupUrl = "/auth/signin",
  className,
}: LoginProps) => {
  return (
    <section className={cn("min-h-screen bg-background", className)}>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-14">
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

        <div className="order-1 lg:order-2">
          <div className="mx-auto w-full max-w-xl rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8">
            {heading && (
              <h2 className="text-3xl font-bold tracking-tight text-card-foreground">
                {heading}
              </h2>
            )}
            <p className="mt-2 text-sm text-muted-foreground">
              Continue managing your snippets and collections.
            </p>

            <form className="mt-8 space-y-5">
              <FieldLabel htmlFor="email" label="Email Address" />
              <InputWithIcon
                id="email"
                icon={<Mail className="size-4" />}
                placeholder="name@company.com"
                type="email"
              />

              <FieldLabel htmlFor="password" label="Password" />
              <InputWithIcon
                id="password"
                icon={<Eye className="size-4" />}
                placeholder="Enter your password"
                type="password"
                iconOnRight
              />

              <Button
                type="submit"
                className="h-11 w-full text-base font-semibold"
              >
                {buttonText}
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </form>
            <div className="mt-5 flex justify-center gap-1 text-sm text-muted-foreground">
              <p>{signupText}</p>
              <Link
                href={signupUrl}
                className="font-medium text-primary hover:underline"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FieldLabel = ({ htmlFor, label }: { htmlFor: string; label: string }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-medium text-card-foreground"
    >
      {label}
    </label>
  );
};

const InputWithIcon = ({
  id,
  icon,
  placeholder,
  type,
  iconOnRight = false,
}: {
  id: string;
  icon: React.ReactNode;
  placeholder: string;
  type: string;
  iconOnRight?: boolean;
}) => {
  return (
    <div className="relative">
      {!iconOnRight && (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          {icon}
        </span>
      )}
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        required
        className={cn(
          "h-12 border-border bg-background text-base",
          iconOnRight ? "pr-11" : "pl-10",
        )}
      />
      {iconOnRight && (
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          {icon}
        </span>
      )}
    </div>
  );
};

const FeatureRow = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 inline-flex size-7 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export { Login };
