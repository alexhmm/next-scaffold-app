import { getServerSession } from 'next-auth';
import { getTranslations } from 'next-intl/server';

// Components
import LoginContent from '@/components/login/LoginContent/LoginContent';

// Navigation
import { redirect } from '@/navigation';

export default async function Login() {
  const session = await getServerSession();
  const t = await getTranslations('home');

  // Redirect to HomePage if session is available
  if (session) {
    redirect('/');
  }

  return <LoginContent title={t('login')} />;
}
