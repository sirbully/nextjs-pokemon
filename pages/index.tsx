import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Redirect.module.scss';

const Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/signin');
  }, [router]);

  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center">
      <div className={styles.wrapper}>
        <div className={styles.spinner} />
      </div>
    </div>
  );
};

export default Redirect;
