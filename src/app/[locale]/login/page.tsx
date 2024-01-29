import { getServerSession } from 'next-auth';

// Components
import LoginContent from '@/components/LoginContent/LoginContent';

// Navigation
import { redirect } from '@/navigation';

export default async function Login() {
  const session = await getServerSession();

  // Redirect to HomePage if session is available
  if (session) {
    redirect('/');
  }

  return <LoginContent />;
}
