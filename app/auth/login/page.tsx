"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import AuthFeaturePanel from "@/components/auth/AuthFeaturePanel";
import AuthRedirectToast from "@/components/auth/AuthRedirectToast";
import FieldLabel from "@/components/auth/FieldLabel";
import InputWithIcon from "@/components/auth/InputWithIcon";
import PasswordInput from "@/components/auth/PasswordInput";

import { Button } from "@/components/ui/button";
import { login } from "@/lib/api/auth";

interface LoginProps {
  heading?: string;
  buttonText?: string;
  signupText?: string;
  signupUrl?: string;
  className?: string;
}

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

const mapLoginErrorMessage = (error: AuthLikeError): string => {
  const code = error.code;
  const message = (error.message ?? "").toLowerCase();

  if (code === "invalid_credentials" || message.includes("invalid login")) {
    return "Invalid Credentials";
  }

  if (code === "validation_failed" || message.includes("invalid email")) {
    return "Please enter a valid email address.";
  }

  return error.message ?? "Unexpected login error. Please try again.";
};

const LoginPage = ({
  heading = "Welcome back",
  buttonText = "Log in",
  signupText = "Need an account?",
  signupUrl = "/auth/signin",
  className,
}: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!password) {
      toast.error("Password is required.");
      return;
    }

    setIsSubmitting(true);
    const loadingToastId = toast.loading("Logging you in...");

    try {
      await login({
        email: email.trim(),
        password,
      });

      toast.success("Login successful.", { id: loadingToastId });
      router.push("/dashboard");
    } catch (error: unknown) {
      const authError = getAuthError(error);
      toast.error(mapLoginErrorMessage(authError), { id: loadingToastId });
      console.error("Unexpected login error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={cn("min-h-screen bg-background", className)}>
      <AuthRedirectToast />
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

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
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
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />

              <Button
                type="submit"
                className="h-11 w-full text-base font-semibold"
                disabled={isSubmitting}
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
