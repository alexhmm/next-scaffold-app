'use client';

import { FC } from 'react';
import { signOut, useSession } from 'next-auth/react';

type LogoutProps = {
  title: string;
};

const Logout: FC<LogoutProps> = (props) => {
  const session = useSession();

  return (
    <button disabled={session.status === 'loading'} onClick={() => signOut()}>
      {props.title}
    </button>
  );
};

export default Logout;
