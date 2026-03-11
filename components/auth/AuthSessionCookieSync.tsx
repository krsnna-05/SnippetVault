"use client";

import { useEffect } from "react";

import { createClient } from "@/lib/supabase/client";
import { useAuthStore } from "@/store/authStore";

const AuthSessionCookieSync = () => {
  const { setUser, setLoading } = useAuthStore();

  useEffect(() => {
    const supabase = createClient();

    // onAuthStateChange fires immediately with INITIAL_SESSION on mount,
    // so no separate getSession() call is needed. All subsequent events
    // (SIGNED_IN, SIGNED_OUT, TOKEN_REFRESHED) keep the store in sync.
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "INITIAL_SESSION") {
        setUser(session?.user ?? null);
        setLoading(false);
        return;
      }

      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [setUser, setLoading]);

  return null;
};

export default AuthSessionCookieSync;
