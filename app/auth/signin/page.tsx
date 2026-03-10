import { ArrowRight, AtSign, Mail } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import AuthFeaturePanel from "@/components/auth/AuthFeaturePanel";
import FieldLabel from "@/components/auth/FieldLabel";
import InputWithIcon from "@/components/auth/InputWithIcon";
import PasswordInput from "@/components/auth/PasswordInput";

import { Button } from "@/components/ui/button";

interface SigninProps {
  heading?: string;
  buttonText?: string;
  className?: string;
}

const SigninPage = ({
  heading = "Create your account",
  buttonText = "Create account",
  className,
}: SigninProps) => {
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
              Get started with your free-forever developer plan.
            </p>

            <form className="mt-8 space-y-5">
              <FieldLabel htmlFor="displayName" label="Display Name" />
              <InputWithIcon
                id="displayName"
                icon={<AtSign className="size-4" />}
                placeholder="dev_ninja"
                type="text"
              />

              <FieldLabel htmlFor="email" label="Email Address" />
              <InputWithIcon
                id="email"
                icon={<Mail className="size-4" />}
                placeholder="name@company.com"
                type="email"
              />

              <FieldLabel htmlFor="password" label="Password" />
              <PasswordInput id="password" placeholder="Min. 8 characters" />

              <label className="flex items-start gap-3 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  className="mt-0.5 size-4 rounded border-border bg-background"
                />
                <span>
                  I agree to the{" "}
                  <span className="text-primary">Terms of Service</span> and{" "}
                  <span className="text-primary">Privacy Policy</span>. I also
                  agree to receive occasional product updates.
                </span>
              </label>

              <Button
                type="submit"
                className="h-11 w-full text-base font-semibold"
              >
                {buttonText}
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigninPage;
