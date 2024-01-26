'use client';

import { signOut, useSession } from 'next-auth/react';

const Logout = () => {
  const session = useSession();

  return (
    <button disabled={session.status === 'loading'} onClick={() => signOut()}>
      Sign out from Spotify
    </button>
  );
};

export default Logout;
