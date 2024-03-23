import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { getTranslations } from 'next-intl/server';

// Auth
import { authOptions } from '../api/auth/[...nextauth]';

// Components
import Logout from '@/components/Logout/Logout';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';

// Styles
import styles from './Home.module.scss';

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

export default async function Home() {
  const session = (await getServerSession(authOptions)) as SpotifySession;

  const data: User = await getUser(session);

  const t = await getTranslations('home');

  return (
    <ProtectedRoute session={session}>
      {session?.user && (
        <div className={styles['home']}>
          <h1 className={styles['home-title']}>{t('title')}</h1>
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
          <Logout title={t('logout')} />
        </div>
      )}
    </ProtectedRoute>
  );
}
