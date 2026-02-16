import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import useAuth from '../hooks/useAuth';

export default function SignUp() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await register(form);
      navigate('/signin');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div
        className="bg-white rounded-[32px] p-10 
      shadow-[0_30px_80px_rgba(0,0,0,0.08)] w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-[#2E2E38] mb-6">
          Create Account
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-[#F9F6F2] 
          outline-none focus:ring-2 focus:ring-[#7B6EF6]"
          />

          <input
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-[#F9F6F2] 
          outline-none focus:ring-2 focus:ring-[#7B6EF6]"
          />

          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-[#F9F6F2] 
          outline-none focus:ring-2 focus:ring-[#7B6EF6]"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-[#F9F6F2] 
          outline-none focus:ring-2 focus:ring-[#7B6EF6]"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-[#F9F6F2] 
          outline-none focus:ring-2 focus:ring-[#7B6EF6]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-full 
          bg-gradient-to-r from-[#7B6EF6] to-[#9F94FF] 
          text-white font-medium 
          shadow-lg shadow-[#7B6EF6]/20 
          hover:scale-[1.02] transition-all duration-300"
          >
            {loading ? 'Creating...' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-[#6B6B7B]">
          Already have an account?{' '}
          <Link to="/signin" className="text-[#7B6EF6] font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
