'use client';

import { FC } from 'react';
import { signOut, useSession } from 'next-auth/react';

// UI
import { Button } from '../../ui/Button';

type LogoutProps = {
  title: string;
};

const Logout: FC<LogoutProps> = (props) => {
  const session = useSession();

  return (
    <Button disabled={session.status === 'loading'} onClick={() => signOut()}>
      {props.title}
    </Button>
  );
};

export default Logout;
