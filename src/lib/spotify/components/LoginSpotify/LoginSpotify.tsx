'use client';

import { signIn, useSession } from 'next-auth/react';
import { FC } from 'react';

// UI
import { Button } from '@/lib/components/ui/Button';

type LoginSpotifyProps = {
  title: string;
};

const LoginSpotify: FC<LoginSpotifyProps> = (props) => {
  const session = useSession();

  return (
    <Button
      disabled={session.status === 'loading'}
      onClick={() => signIn('spotify')}
    >
      {props.title}
    </Button>
  );
};

export default LoginSpotify;
