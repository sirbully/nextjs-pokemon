import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuth } from '@/hooks/auth-context';
import Button from '@/components/Button';
import FormError from '@/components/FormError';
import Input from '@/components/Input';

type SignupForm = {
  'First Name': string;
  'Last Name': string;
  'Email Address': string;
  Password: string;
  'Confirm Password': string;
};

const Signup = () => {
  const router = useRouter();
  const { state } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupForm>();

  useEffect(() => {
    if (state.isLoggedIn) router.push('/dashboard');
  }, [state, router]);

  const validatePassword = (value: string) =>
    value === watch('Password') || 'Passwords do not match';

  const onSubmit: SubmitHandler<SignupForm> = data => console.log(data);

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
              type="text"
              label="First Name"
              register={register}
              validation={{
                required: 'First Name is required',
              }}
            />
            {errors['First Name'] && (
              <FormError>{errors['First Name'].message}</FormError>
            )}
            <Input
              type="text"
              label="Last Name"
              register={register}
              validation={{
                required: 'Last Name is required',
              }}
            />
            {errors['Last Name'] && (
              <FormError>{errors['Last Name'].message}</FormError>
            )}
            <Input
              type="email"
              label="Email Address"
              register={register}
              validation={{
                required: 'Email address is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
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
              <FormError>{errors.Password.message}</FormError>
            )}
            <Input
              type="password"
              label="Confirm Password"
              register={register}
              validation={{
                required: 'Confirm Password is required',
                validate: validatePassword,
              }}
            />
            {errors['Password'] && (
              <FormError>{errors.Password.message}</FormError>
            )}
            <Button type="submit" color="blue">
              Sign up
            </Button>
            <p className="text-sm text-center mt-2">
              Already have an account?{' '}
              <Link href="/signin">
                <a className="font-bold text-blue-700">Sign in here!</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
