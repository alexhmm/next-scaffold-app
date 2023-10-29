import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Typography } from '@mui/material';

// Components
import HomeContent from '@/app/[locale]/components/HomeContent/HomeContent';

// Styles
import styles from './Home.module.scss';

// Types
import { Language } from '@/types/shared.types';

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const tCommon = useTranslations('common');
  const tHome = useTranslations('home');

  return (
    <main className={styles['home']}>
      <Typography variant="h5">{tHome('title')}</Typography>
      <HomeContent title={tCommon('settings.language.title')} />
      <Typography>
        {locale === Language.English
          ? tCommon('settings.language.en')
          : tCommon('settings.language.de')}
      </Typography>
    </main>
  );
}
