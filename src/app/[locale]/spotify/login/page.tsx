import { getServerSession } from 'next-auth';
import { getTranslations } from 'next-intl/server';

// Components
import LoginSpotify from '@/lib/spotify/components/LoginSpotify/LoginSpotify';

// Navigation
import { redirect } from '@/navigation';

// Styles
import styles from './SpotifyLogin.module.scss';

export default async function Login() {
  const session = await getServerSession();
  const t = await getTranslations('auth');

  // Redirect to HomePage if session is available
  if (session) {
    redirect('/spotify');
  }

  return (
    <div className={styles['spotify-login']}>
      <h1>{t('spotify.login')}</h1>
      <LoginSpotify title={t('spotify.login')} />
    </div>
  );
}
