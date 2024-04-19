import { createBrowserClient } from '@supabase/ssr';
import { Session } from '@supabase/supabase-js';

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

/**
 * Get SupaBase session.
 * @returns Boolean
 */
export const getSession = async (): Promise<Session | null> => {
  const supabase = createClient();

  return (await supabase.auth.getSession()).data.session;
};
