import { FC } from 'react';
import { useTranslations } from 'next-intl';

// Navigation
import { Link } from '@/navigation';

// Styles
import styles from './Nav.module.scss';

const Nav: FC = () => {
  const t = useTranslations('common');

  return (
    <div className={styles['nav']}>
      <Link href="/">{t('nav.home')}</Link>
      <Link href="/settings">{t('nav.settings')}</Link>
    </div>
  );
};

export default Nav;
