import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { navigateToUrl } from "single-spa";

const SUPABASE_URL = "https://mintqpocupbvbhaqlmtu.supabase.co";
const SUPABASE_ANONYMOUS_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pbnRxcG9jdXBidmJoYXFsbXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNzU0NjYsImV4cCI6MTk5Njc1MTQ2Nn0.a5VbtP5aoRzcTfk8pMfMDexWyiVvW4ja45d_SGdXTCM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANONYMOUS_KEY);

export const useAuth = () => {
  const [userSession, setUserSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigateToUrl("/");
  };

  if (userSession) {
    navigateToUrl("/events");
  }

  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    return { data, error };
  };

  const signInWithPassword = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setUserSession(data);
    return { data, error };
  };

  return {
    userSession,
    signOut,
    signInWithGoogle,
    signInWithPassword,
  };
};
