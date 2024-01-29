import { useTranslations } from 'next-intl';

// Components
import ChangeLanguage from './components/ChangeLanguage/ChangeLanguage';

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
      <div>{t(`language.${locale}`)}</div>
      <ChangeLanguage title={t('language.title')} />
    </div>
  );
}
