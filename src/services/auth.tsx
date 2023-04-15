import { useEffect, useState } from "react";

import { createClient } from "@supabase/supabase-js";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@supabase/auth-ui-react";

import { Box } from "@stagepass/osiris-ui";

const SUPABASE_URL = "https://mintqpocupbvbhaqlmtu.supabase.co";
const SUPABASE_ANONYMOUS_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pbnRxcG9jdXBidmJoYXFsbXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNzU0NjYsImV4cCI6MTk5Njc1MTQ2Nn0.a5VbtP5aoRzcTfk8pMfMDexWyiVvW4ja45d_SGdXTCM";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANONYMOUS_KEY);

export const useAuth = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const getAuthUI = () => {
    return (
      <Box
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <div style={{ width: "40%" }}>
          <Auth
            supabaseClient={supabase}
            providers={["google"]}
            appearance={{ theme: ThemeSupa }}
          />
        </div>
      </Box>
    );
  };

  return {
    session,
    signOut,
    getAuthUI,
  };
};
