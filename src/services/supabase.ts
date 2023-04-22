import { createClient } from "@supabase/supabase-js";

// const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
// const SUPABASE_ANONYMOUS_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;

const SUPABASE_URL = "https://mintqpocupbvbhaqlmtu.supabase.co";
const SUPABASE_ANONYMOUS_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pbnRxcG9jdXBidmJoYXFsbXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNzU0NjYsImV4cCI6MTk5Njc1MTQ2Nn0.a5VbtP5aoRzcTfk8pMfMDexWyiVvW4ja45d_SGdXTCM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANONYMOUS_KEY);
