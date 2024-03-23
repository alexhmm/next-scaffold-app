import { ReactNode } from 'react';

// Navigation
import { redirect } from '@/navigation';

// Types
import { SpotifySession } from '@/types/auth.types';

type ProtectedRouteProps = {
  children: ReactNode;
  session: SpotifySession | null;
};

export default async function ProtectedRoute({
  children,
  session,
}: ProtectedRouteProps) {
  if (!session) {
    redirect('/login');
  }

  return <>{children}</>;
}
