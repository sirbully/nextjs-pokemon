import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/auth-context';
import styles from '@/styles/Redirect.module.scss';

const Redirect = () => {
  const router = useRouter();
  const { state } = useAuth();

  useEffect(() => {
    if (state.isLoggedIn) router.push('/dashboard');
    else router.push('/signin');
  }, [state, router]);

  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center">
      <div className={styles.wrapper}>
        <div className={styles.spinner} />
      </div>
    </div>
  );
};

export default Redirect;
