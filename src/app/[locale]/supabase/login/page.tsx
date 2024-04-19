import { getTranslations } from 'next-intl/server';

// Components
import SupabaseLoginSignupContent from '@/lib/supabase/components/SupabaseLoginSignupContent/SupabaseLoginSignupContent';

// Navigation
import { Link } from '@/navigation';

// Styles
import styles from './SupabaseLogin.module.scss';

// UI
import { H1 } from '@/lib/components/ui/H1';

export default async function Login() {
  const t = await getTranslations('auth');

  return (
    <div className={styles['supabase-login']}>
      <H1>Supabase {t('supabase.login.title')}</H1>
      <SupabaseLoginSignupContent
        tEmail={t('supabase.form.email')}
        tPassword={t('supabase.form.password')}
        tTitle={t('supabase.login.title')}
        type="login"
      />
      <Link href="/supabase/signup">{t('supabase.signup.title')}</Link>
    </div>
  );
}
