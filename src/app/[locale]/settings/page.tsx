import { useTranslations } from 'next-intl';

// Components
import ChangeLanguage from '@/lib/settings/components/ChangeLanguage/ChangeLanguage';
import ChangeTheme from '@/lib/settings/components/ChangeTheme/ChangeTheme';

// Styles
import styles from './Settings.module.scss';

export default function Settings({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations('settings');

  return (
    <div className={styles['settings']}>
      <h1 className={styles['settings-title']}>{t('title')}</h1>
      <div>{t(`language.${locale}`)}</div>
      <ChangeLanguage title={t('language.title')} />
      <ChangeTheme
        translations={{
          dark: t('theme.dark'),
          light: t('theme.light'),
          system: t('theme.system'),
          title: t('theme.title'),
        }}
      />
    </div>
  );
}
