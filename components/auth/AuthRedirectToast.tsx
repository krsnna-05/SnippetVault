"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

const AuthRedirectToast = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const shownNotice = useRef<string | null>(null);

  useEffect(() => {
    const notice = searchParams.get("auth_notice");

    if (!notice || shownNotice.current === notice) {
      return;
    }

    if (notice === "already_authenticated") {
      toast.info("You are already authenticated.");
    }

    if (notice === "auth_required") {
      toast.error("You are not authenticated. Please log in.");
    }

    shownNotice.current = notice;

    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.delete("auth_notice");

    const nextQuery = nextParams.toString();
    const nextUrl = nextQuery ? `${pathname}?${nextQuery}` : pathname;

    router.replace(nextUrl);
  }, [pathname, router, searchParams]);

  return null;
};

export default AuthRedirectToast;
