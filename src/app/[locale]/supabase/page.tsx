// Components
import SupabaseLogout from '@/lib/supabase/components/SupabaseLogout/SupabaseLogout';

// Styles
import styles from './Supabase.module.scss';

// Router
import ProtectedRouteSupabase from '@/lib/components/router/ProtectedRouteSupabase/ProtectedRouteSupabase';

// Utils
import { createClient } from '@/lib/supabase/server';

export default async function Supabase() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  // if (error || !data?.user) {
  //   redirect('/supabase/login');
  // }

  return (
    <ProtectedRouteSupabase>
      <div className={styles['supabase']}>
        <p>Hello {data?.user?.email}</p>
        <SupabaseLogout />
      </div>
    </ProtectedRouteSupabase>
  );
}
