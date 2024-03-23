'use client';

import { signIn, useSession } from 'next-auth/react';
import { FC } from 'react';

// UI
import { Button } from '@/components/ui/Button';

type LoginContentProps = {
  title: string;
};

const LoginContent: FC<LoginContentProps> = (props) => {
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

export default LoginContent;
