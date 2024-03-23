import { useTranslations } from 'next-intl';

// Components
import ChangeLanguage from '../../../modules/settings/components/ChangeLanguage/ChangeLanguage';

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
    </div>
  );
}
