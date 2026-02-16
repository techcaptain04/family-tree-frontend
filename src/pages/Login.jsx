import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from '../api/axios';
import useAuth from '../hooks/useAuth';
import { API_ENDPOINTS } from '../utils/constants';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export default function Login() {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data) => {
    const res = await axios.post(API_ENDPOINTS.LOGIN, data);
    login(res.data.token);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold">Login</h2>

        <input
          {...register('email')}
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">Invalid email</p>}

        <input
          type="password"
          {...register('password')}
          placeholder="Password"
          className="w-full border p-2 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">Min 6 characters</p>
        )}

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
