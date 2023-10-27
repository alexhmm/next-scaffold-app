'use client';

import { Typography } from '@mui/material';

// Styles
import styles from './Home.module.scss';

export default function Home() {
  return (
    <main className={styles['home']}>
      <div className={styles['home-title']}>
        <Typography>
          Get started by editing&nbsp;
          <code className={styles['home-code']}>app/page.tsx</code>
        </Typography>
      </div>
    </main>
  );
}
