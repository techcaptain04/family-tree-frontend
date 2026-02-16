import AuthProvider from './context/AuthContext';
import AppRouter from './routes/AppRouter';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#ffffff',
            border: '1px solid #eee'
          }
        }}
      />
    </AuthProvider>
  );
}
