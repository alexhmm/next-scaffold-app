import { ReactNode } from 'react';

// Navigation
import { redirect } from '@/navigation';

// Utils
import { createClient } from '@/lib/supabase/server';

type ProtectedRouteProps = {
  children: ReactNode;
};

export default async function ProtectedRouteSupabase({
  children,
}: ProtectedRouteProps) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getSession();

  if (error || !data?.session?.access_token) {
    redirect('/supabase/login');
  }

  return <>{children}</>;
}
