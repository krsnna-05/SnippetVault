import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { cn } from "@/lib/utils";
import AuthFeaturePanel from "@/components/auth/AuthFeaturePanel";
import FieldLabel from "@/components/auth/FieldLabel";
import InputWithIcon from "@/components/auth/InputWithIcon";
import PasswordInput from "@/components/auth/PasswordInput";

import { Button } from "@/components/ui/button";

interface LoginProps {
  heading?: string;
  buttonText?: string;
  signupText?: string;
  signupUrl?: string;
  className?: string;
}

const LoginPage = ({
  heading = "Welcome back",
  buttonText = "Log in",
  signupText = "Need an account?",
  signupUrl = "/auth/signin",
  className,
}: LoginProps) => {
  return (
    <section className={cn("min-h-screen bg-background", className)}>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-14">
        <AuthFeaturePanel />

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
              <PasswordInput id="password" placeholder="Enter your password" />

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

export default LoginPage;
