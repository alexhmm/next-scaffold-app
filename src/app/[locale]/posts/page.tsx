import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Typography } from '@mui/material';

// Styles
import styles from './Posts.module.scss';
import { Link } from '@/navigation';

export default function Posts({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('posts');

  return (
    <main className={styles['posts']}>
      <Typography variant="h5">{t('title')}</Typography>
      <Link href="/posts/1">1</Link>
      <Link href="/posts/2">2</Link>
    </main>
  );
}
