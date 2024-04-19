import { getTranslations } from 'next-intl/server';

// Actions
import { navigateToLogin } from '@/lib/supabase/actions';

// Styles
import styles from './SupabaseSignupSuccess.module.scss';

// UI
import { Button } from '@/lib/components/ui/Button';

export default async function SupabaseSignupSuccess() {
  const t = await getTranslations('auth');

  return (
    <div className={styles['supabase-signup-success']}>
      <p>{t('supabase.signup.success.text1')}</p>
      <p>{t('supabase.signup.success.text2')}</p>
      <form action={navigateToLogin}>
        <Button>{t('supabase.login.title')}</Button>
      </form>
    </div>
  );
}
