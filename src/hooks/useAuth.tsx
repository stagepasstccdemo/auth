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

  const checkIfUserAlreadyExists = async (email: string) => {
    const { data: users } = await supabase
      .from("users")
      .select("*")
      .eq("email", email);

    return users && users.length > 0;
  };

  const signUp = async (email: string, password: string) => {
    const userAlreadyExists = await checkIfUserAlreadyExists(email);

    if (userAlreadyExists) {
      return {
        data: null,
        error: {
          message: "User already exists - please sign in instead",
        },
      };
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    setUserSession(data);
    return { data, error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigateToUrl("/");
  };

  if (userSession && userSession.user !== null) {
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

  const sendResetPasswordEmail = async (email: string) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    return { data, error };
  };

  return {
    userSession,
    signOut,
    signUp,
    signInWithGoogle,
    signInWithPassword,
    sendResetPasswordEmail,
  };
};
