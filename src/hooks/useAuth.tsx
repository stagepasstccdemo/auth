import { supabase } from "@services/supabase";
import { useEffect, useState } from "react";
import { navigateToUrl } from "single-spa";

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
