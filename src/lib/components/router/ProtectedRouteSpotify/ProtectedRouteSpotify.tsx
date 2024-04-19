import { ReactNode } from 'react';

// Navigation
import { redirect } from '@/navigation';

// Types
import { SpotifySession } from '@/types/auth.types';

type ProtectedRouteSpotifyProps = {
  children: ReactNode;
  session: SpotifySession | null;
};

export default async function ProtectedRouteSpotify({
  children,
  session,
}: ProtectedRouteSpotifyProps) {
  if (!session) {
    redirect('/spotify/login');
  }

  return <>{children}</>;
}
