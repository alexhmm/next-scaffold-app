import { getTranslations } from 'next-intl/server';

// Styles
import styles from './Home.module.scss';

export default async function Home() {
  const t = await getTranslations('home');

  return (
    <div className={styles['home']}>
      <h1>{t('title')}</h1>
    </div>
  );
}
