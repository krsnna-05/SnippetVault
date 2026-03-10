"use client";

import { useState } from "react";
import { ArrowRight, AtSign, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import AuthFeaturePanel from "@/components/auth/AuthFeaturePanel";
import FieldLabel from "@/components/auth/FieldLabel";
import InputWithIcon from "@/components/auth/InputWithIcon";
import PasswordInput from "@/components/auth/PasswordInput";

import { Button } from "@/components/ui/button";
import { signUp } from "@/lib/api/auth";

interface SigninProps {
  heading?: string;
  buttonText?: string;
  className?: string;
}

type Status = {
  type: "success" | "error" | "loading" | null;
  message: string | null;
};

type AuthLikeError = {
  code?: string;
  message?: string;
};

const getAuthError = (error: unknown): AuthLikeError => {
  if (typeof error === "object" && error !== null) {
    return error as AuthLikeError;
  }

  return {};
};

const mapSignupErrorMessage = (error: AuthLikeError): string => {
  const code = error.code;
  const message = (error.message ?? "").toLowerCase();

  if (code === "email_exists" || code === "user_already_exists") {
    return "Account already exists.";
  }

  if (code === "invalid_credentials") {
    return "Invalid credentials.";
  }

  if (code === "weak_password" || message.includes("password")) {
    return "Password is too weak. Use at least 8 characters.";
  }

  if (code === "validation_failed" || message.includes("invalid email")) {
    return "Please enter a valid email address.";
  }

  return error.message ?? "Unexpected signup error. Please try again.";
};

const SigninPage = ({
  heading = "Create your account",
  buttonText = "Create account",
  className,
}: SigninProps) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [status, setStatus] = useState<Status>({
    type: null,
    message: null,
  });

  const handleDisplayNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus({ type: "loading", message: "Creating your account..." });

    if (!displayName.trim()) {
      setStatus({ type: "error", message: "Display name is required." });
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    if (password.length < 8) {
      setStatus({
        type: "error",
        message: "Password must be at least 8 characters.",
      });
      return;
    }

    try {
      await signUp({
        displayName: displayName.trim(),
        email: email.trim(),
        password,
      });
      setStatus({
        type: "success",
        message: "Signup successful. Check your email to confirm your account.",
      });
    } catch (error: unknown) {
      const authError = getAuthError(error);
      setStatus({
        type: "error",
        message: mapSignupErrorMessage(authError),
      });

      console.error("Unexpected signup error", error);
    }
  };

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

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <FieldLabel htmlFor="displayName" label="Display Name" />
              <InputWithIcon
                id="displayName"
                icon={<AtSign className="size-4" />}
                placeholder="dev_ninja"
                type="text"
                value={displayName}
                onChange={handleDisplayNameChange}
              />

              <FieldLabel htmlFor="email" label="Email Address" />
              <InputWithIcon
                id="email"
                icon={<Mail className="size-4" />}
                placeholder="name@company.com"
                type="email"
                value={email}
                onChange={handleEmailChange}
              />

              <FieldLabel htmlFor="password" label="Password" />
              <PasswordInput
                id="password"
                placeholder="Min. 8 characters"
                value={password}
                onChange={handlePasswordChange}
              />

              <Button
                type="submit"
                className="h-11 w-full text-base font-semibold"
              >
                {buttonText}
                <ArrowRight className="ml-2 size-4" />
              </Button>

              {status.type && status.message && (
                <p
                  className={cn(
                    "text-sm",
                    status.type === "error"
                      ? "text-destructive"
                      : "text-primary",
                  )}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigninPage;
