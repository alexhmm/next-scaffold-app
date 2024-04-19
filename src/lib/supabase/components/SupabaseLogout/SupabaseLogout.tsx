'use client';

import { FC } from 'react';

// Actions
import { logout } from '@/lib/supabase/actions';

// UI
import { Button } from '@/lib/components/ui/Button';

const SupabaseLogout: FC = () => {
  return (
    <Button
      onClick={async () => {
        await logout();
      }}
    >
      Logout
    </Button>
  );
};

export default SupabaseLogout;
