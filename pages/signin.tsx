import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '@/components/Button';
import FormError from '@/components/FormError';
import Input from '@/components/Input';

type SigninForm = {
  'Email Address': string;
  Password: string;
};

const Signin = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninForm>();

  const onSubmit: SubmitHandler<SigninForm> = () => {
    router.push('/dashboard');
  };

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
              validation={{
                required: 'Email address is required',
              }}
            />
            {errors['Email Address'] && (
              <FormError>{errors['Email Address'].message}</FormError>
            )}
            <Input
              type="password"
              label="Password"
              register={register}
              validation={{
                required: 'Password is required',
              }}
            />
            {errors['Password'] && (
              <FormError>{errors['Password'].message}</FormError>
            )}
            <Button type="submit" color="red">
              Sign in
            </Button>
            <p className="text-sm text-center mt-2">
              Don&apos;t have an account yet?{' '}
              <Link href="/signup">
                <a className="font-bold text-red-700">Sign up here!</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
