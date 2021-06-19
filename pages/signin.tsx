import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuth } from '@/hooks/auth-context';
import Button from '@/components/Button';
import FormError from '@/components/FormError';
import Input from '@/components/Input';

type SigninForm = {
  'Email Address': string;
  Password: string;
};

const Signin = () => {
  const router = useRouter();
  const { state } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninForm>();

  useEffect(() => {
    if (state.isLoggedIn) router.push('/dashboard');
  }, [state, router]);

  const onSubmit: SubmitHandler<SigninForm> = data => console.log(data);

  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/3 px-8 py-8 md:px-0 md:py-16">
        <div className="border-2 rounded-xl border-black p-4 flex flex-col items-center shadow-custom">
          <h1 className="text-2xl mt-4">Pokemon Next!</h1>
          <form
            className="w-full flex flex-col px-4 pt-4 pb-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              type="email"
              label="Email Address"
              register={register}
              required
            />
            {errors['Email Address'] && (
              <FormError>Email Address is required</FormError>
            )}
            <Input
              type="password"
              label="Password"
              register={register}
              required
            />
            {errors['Password'] && <FormError>Password is required</FormError>}
            <Button type="submit">Sign in</Button>
            <p className="text-sm text-center mt-2">
              Don&apos;t have an account yet?{' '}
              <Link href="/signup">
                <a className="font-bold text-red-300">Sign up here!</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
