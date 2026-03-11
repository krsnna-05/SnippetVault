// Browser-side singleton — imports the @supabase/ssr browser client
// which stores the session in cookies (not localStorage) so middleware
// can always read and refresh the session server-side.
import { createClient } from "@/lib/supabase/client";

export const supabase = createClient();
