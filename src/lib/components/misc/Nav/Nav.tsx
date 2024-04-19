import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Session } from '@supabase/supabase-js';

// Navigation
import { Link } from '@/navigation';

// Styles
import styles from './Nav.module.scss';

type NavProps = {
  session: Session | null;
};

const Nav: FC<NavProps> = (props) => {
  const t = useTranslations('common');

  return (
    <div className={styles['nav']}>
      <Link href="/">{t('nav.home')}</Link>
      <Link href="/settings">{t('nav.settings')}</Link>
      {props.session?.access_token && (
        <Link href="/notes">{t('nav.notes')}</Link>
      )}
      <Link href="/supabase">Supabase</Link>
      <Link href="/spotify">Spotify</Link>
    </div>
  );
};

export default Nav;
