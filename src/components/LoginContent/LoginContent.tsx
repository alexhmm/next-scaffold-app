'use client';

import { signIn, useSession } from 'next-auth/react';

const LoginContent = () => {
  const session = useSession();

  return (
    <button
      disabled={session.status === 'loading'}
      onClick={() => signIn('spotify')}
    >
      Sign in with Spotify
    </button>
  );
};

export default LoginContent;
