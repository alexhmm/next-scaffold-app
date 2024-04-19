'use client';

import { FC, useState } from 'react';

// Actions
import { login, signup } from '@/lib/supabase/actions';

// Components
import SupabaseLoginSignupForm from '../SupabaseLoginSignupForm/SupabaseLoginSignupForm';
import SupabaseLoginSignupError from '../SupabaseLoginSignupError/SupabaseLoginSignupError';

// Types
import { SupabaseError } from '@/types/auth.types';

type SupabaseLoginSignupContentProps = {
  tEmail: string;
  tPassword: string;
  tTitle: string;
  type: 'login' | 'signup';
};

const SupabaseLoginSignupContent: FC<SupabaseLoginSignupContentProps> = (
  props
) => {
  const [isError, setIsError] = useState<SupabaseError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   * Handler to login or signup into supabase.
   * @param formData FormData
   */
  const onSubmit = async (formData: FormData) => {
    setIsLoading(true);
    let error = null;

    if (props.type === 'login') {
      error = (await login(formData)).error;
    } else {
      console.log('signup');
      error = (await signup(formData)).error;
    }

    setIsError(error);
    setIsLoading(false);
  };

  return (
    <>
      <SupabaseLoginSignupForm
        isLoading={isLoading}
        tEmail={props.tEmail}
        tPassword={props.tPassword}
        tTitle={props.tTitle}
        onSubmit={onSubmit}
      />
      <SupabaseLoginSignupError
        message={isError?.message}
        status={isError?.status}
      />
    </>
  );
};

export default SupabaseLoginSignupContent;
