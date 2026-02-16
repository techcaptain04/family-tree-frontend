import { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { loginRequest, registerRequest } from '../api/auth.api';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const setAuthFromToken = (token) => {
    localStorage.setItem('token', token);
    const decoded = jwtDecode(token);
    setUser(decoded);
  };

  const login = async (credentials) => {
    const res = await loginRequest(credentials);
    setAuthFromToken(res.data.access_token);
  };

  const register = async (data) => {
    const res = await registerRequest(data);
    setAuthFromToken(res.data.access_token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  // Auto-login on refresh
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);

      if (decoded.exp * 1000 < Date.now()) {
        logout();
      } else {
        setUser(decoded);
      }
    } catch {
      logout();
    }

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
