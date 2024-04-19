'use client';

import { FC } from 'react';

type SupabaseLoginSignupErrorProps = {
  message?: string;
  status?: number;
};

const SupabaseLoginSignupError: FC<SupabaseLoginSignupErrorProps> = (props) => {
  return (
    <>
      {props.message && props.status && (
        <div className="text-red-500">
          {props.status}: {props.message}
        </div>
      )}
    </>
  );
};

export default SupabaseLoginSignupError;
