'use server';

// Actions
import { revalidateLayout } from '@/lib/actions';

// Navigation
import { redirect } from '@/navigation';

// Types
import { SupabaseError } from '@/types/auth.types';

// Utils
import { createClient } from '@/lib/supabase/server';

/**
 * Action to login into SupaBase.
 * @param formData FormData
 * @returns SupabaseError
 */
export const login = async (
  formData: FormData
): Promise<{ error: SupabaseError | null }> => {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const parsedData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(parsedData);

  if (error) {
    return { error: { message: error.message, status: error.status } };
  }

  revalidateLayout();
  redirect('/supabase');

  return { error: null };
};

/**
 * Action to logout from SupaBase.
 */
export const logout = async () => {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect('/supabase/login');
  }

  revalidateLayout();
  redirect('/supabase/login');
};

/**
 * Action to navigate to SupaBase Login page.
 */
export const navigateToLogin = async () => {
  redirect('/supabase/login');
};

/**
 * Action to signup to SupaBase.
 * @param formData FormData
 * @returns SupabaseError
 */
export const signup = async (
  formData: FormData
): Promise<{ error: SupabaseError | null }> => {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const parsedData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signUp(parsedData);

  if (error) {
    return { error: { message: error.message, status: error.status } };
  }

  revalidateLayout();
  redirect('/supabase/signup/success');

  return { error: null };
};
