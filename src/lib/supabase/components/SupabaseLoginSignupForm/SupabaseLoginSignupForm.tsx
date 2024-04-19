'use client';

import { FC } from 'react';

// Icons
import { ReloadIcon } from '@radix-ui/react-icons';

// Styles
import styles from './SupabaseLoginSignupForm.module.scss';

// UI
import { Button } from '@/lib/components/ui/Button';

type SupabaseLoginSignupFormProps = {
  isLoading?: boolean;
  tEmail: string;
  tPassword: string;
  tTitle: string;
  onSubmit: (formData: FormData) => Promise<void>;
};

const SupabaseLoginSignupForm: FC<SupabaseLoginSignupFormProps> = (props) => {
  console.log('props.isLoading', props.isLoading);

  return (
    <form className={styles['supabase-login-signup-form']}>
      <div>
        <label htmlFor="email">{props.tEmail}: </label>
        <input id="email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="password">{props.tPassword}: </label>
        <input id="password" name="password" type="password" required />
      </div>
      <div className={styles['supabase-login-signup-form-buttons']}>
        <Button disabled={props.isLoading} formAction={props.onSubmit}>
          {props.isLoading && (
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          )}
          {props.tTitle}
        </Button>
      </div>
    </form>
  );
};

export default SupabaseLoginSignupForm;
