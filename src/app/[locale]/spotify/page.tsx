import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { getTranslations } from 'next-intl/server';

// Auth
import { authOptions } from '../../api/auth/[...nextauth]';

// Components
import LogoutSpotify from '@/lib/spotify/components/LogoutSpotify/LogoutSpotify';
import ProtectedRouteSpotify from '@/lib/components/router/ProtectedRouteSpotify/ProtectedRouteSpotify';

// Styles
import styles from './Spotify.module.scss';

// Types
import { SpotifySession } from '@/types/auth.types';
import { User } from '@/types/spotify.types';

async function getUser(session: SpotifySession) {
  if (session?.token?.accessToken) {
    const response = await fetch('https://api.spotify.com/v1/me/', {
      headers: {
        Authorization: `Bearer ${session.token.accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      // throw new Error('Failed to fetch data');
      return {
        status: response.status,
        statusText: response.statusText,
      };
    }

    return await response.json();
  }
}

export default async function Login() {
  const session = (await getServerSession(authOptions)) as SpotifySession;
  const t = await getTranslations('auth');

  const data: User = await getUser(session);

  return (
    <ProtectedRouteSpotify session={session}>
      {session?.user && (
        <div className={styles['spotify']}>
          <h1 className={styles['spotify-title']}>{t('spotify.title')}</h1>
          {data.display_name && <div>{data.display_name}</div>}
          {data.id && <div>{data.id}</div>}
          {data.images && data.images.length > 0 && data.images[0].url && (
            <Image
              alt="User image"
              height={64}
              width={64}
              src={session.user.image}
            />
          )}
          <LogoutSpotify title={t('spotify.logout')} />
        </div>
      )}
    </ProtectedRouteSpotify>
  );
}
