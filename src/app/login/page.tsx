import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

// Components
import LoginContent from '@/components/LoginContent/LoginContent';

export default async function Login({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const session = await getServerSession();

  // Redirect if session is available
  if (session) {
    redirect('/');
  }

  return <LoginContent />;
}
