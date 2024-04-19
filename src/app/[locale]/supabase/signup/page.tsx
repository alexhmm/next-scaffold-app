import { getTranslations } from 'next-intl/server';

// Components
import SupabaseLoginSignupContent from '@/lib/supabase/components/SupabaseLoginSignupContent/SupabaseLoginSignupContent';

// Navigation
import { Link, redirect } from '@/navigation';

// Styles
import styles from './Signup.module.scss';

// UI
import { H1 } from '@/lib/components/ui/H1';

// Utils
import { getSession } from '@/lib/supabase/server';

export default async function Signup() {
  const t = await getTranslations('auth');

  // Redirect to Supabase page if session is available
  const session = await getSession();

  if (session?.access_token) {
    redirect('/supabase');
  }

  return (
    <div className={styles['supabase-signup']}>
      <H1>Supabase {t('supabase.signup.title')}</H1>
      <SupabaseLoginSignupContent
        tEmail={t('supabase.form.email')}
        tPassword={t('supabase.form.password')}
        tTitle={t('supabase.signup.title')}
        type="signup"
      />
      <Link href="/supabase/login">{t('supabase.signup.back')}</Link>
    </div>
  );
}
