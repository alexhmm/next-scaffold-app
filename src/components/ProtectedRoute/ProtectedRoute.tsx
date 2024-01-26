import { ReactNode } from 'react';
import { redirect } from 'next/navigation';

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
