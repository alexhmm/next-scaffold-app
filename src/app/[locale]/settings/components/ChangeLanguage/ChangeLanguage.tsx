'use client';

import { FC, useCallback } from 'react';
import { useLocale } from 'next-intl';

// Navigation
import { usePathname, useRouter } from '@/navigation';

// Types
import { Language } from '@/types/shared.types';

type ChangeLanguageProps = {
  title: string;
};

const ChangeLanguage: FC<ChangeLanguageProps> = (props) => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  /**
   * Change language on current path
   */
  const changeLanguage = useCallback(() => {
    router.replace(pathname, {
      locale: locale === Language.English ? Language.German : Language.English,
    });
  }, [locale, pathname]);

  return <button onClick={changeLanguage}>{props.title}</button>;
};

export default ChangeLanguage;
