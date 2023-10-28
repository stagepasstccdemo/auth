import { createClient } from "@supabase/supabase-js";

// const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
// const SUPABASE_ANONYMOUS_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;

const SUPABASE_URL = "INSERT_SUPABASE_URL_HERE";
const SUPABASE_ANONYMOUS_KEY = "INSERT_SUPABASE_ANONYMOUS_KEY_HERE";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANONYMOUS_KEY);
