import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LoginProps {
  heading?: string;
  logo: {
    url: string;
    src: string;
    alt: string;
    title?: string;
    className?: string;
  };
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
  className?: string;
}

const Login = ({
  heading = "Welcome back",
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-wordmark.svg",
    alt: "logo",
    title: "shadcnblocks.com",
  },
  buttonText = "Log in",
  signupText = "Need an account?",
  signupUrl = "/auth/signin",
  className,
}: LoginProps) => {
  return (
    <section
      className={cn(
        "flex min-h-screen items-center justify-center bg-muted/40 px-4 py-10",
        className,
      )}
    >
      <div className="w-full max-w-md rounded-xl border bg-background p-7 shadow-lg sm:p-8">
        <div className="mb-6 flex flex-col items-center gap-4 text-center">
          <Link href={logo.url} className="inline-flex items-center gap-2">
            <Image
              src={logo.src}
              alt={logo.alt}
              title={logo.title}
              width={160}
              height={36}
              className="h-9 w-auto"
            />
          </Link>
          {heading && (
            <h1 className="text-2xl font-semibold tracking-tight">{heading}</h1>
          )}
          <p className="text-sm text-muted-foreground">
            Continue managing your snippets and collections.
          </p>
        </div>

        <form className="space-y-3">
          <Input
            type="email"
            placeholder="Email"
            className="h-11 text-sm"
            required
          />
          <Input
            type="password"
            placeholder="Password"
            className="h-11 text-sm"
            required
          />
          <Button type="submit" className="mt-1 h-11 w-full">
            {buttonText}
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
    </section>
  );
};

export { Login };
