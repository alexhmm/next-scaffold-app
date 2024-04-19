'use client';

import { FC } from 'react';
import { signOut, useSession } from 'next-auth/react';

// UI
import { Button } from '@/lib/components/ui/Button';
import { revalidateLayout } from '@/lib/actions';

type LogoutSpotify = {
  title: string;
};

const LogoutSpotify: FC<LogoutSpotify> = (props) => {
  const session = useSession();

  return (
    <Button
      disabled={session.status !== 'authenticated'}
      onClick={async () => {
        await signOut();
        await revalidateLayout();
      }}
    >
      {props.title}
    </Button>
  );
};

export default LogoutSpotify;
