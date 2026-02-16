import { Home, Heart, Users, Settings } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function MobileNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 
      bg-white/90 backdrop-blur-md 
      border-t border-slate-200 
      flex justify-around items-center 
      py-3 lg:hidden z-50"
    >
      {/* Home */}
      <button
        onClick={() => navigate('/dashboard')}
        className={`flex flex-col items-center transition ${
          isActive('/dashboard') ? 'text-[#6C63FF]' : 'text-[#7A7A8C]'
        }`}
      >
        <Home size={20} />
        <span className="text-xs mt-1">Home</span>
      </button>

      {/* Memories (Disabled) */}
      <button
        disabled
        className="flex flex-col items-center text-slate-300 cursor-not-allowed"
      >
        <Heart size={20} />
        <span className="text-xs mt-1">Memories</span>
      </button>

      {/* Members */}
      <button
        onClick={() => navigate('/members')}
        className={`flex flex-col items-center transition ${
          isActive('/members') ? 'text-[#6C63FF]' : 'text-[#7A7A8C]'
        }`}
      >
        <Users size={20} />
        <span className="text-xs mt-1">Members</span>
      </button>

      {/* Settings (Disabled) */}
      <button
        disabled
        className="flex flex-col items-center text-slate-300 cursor-not-allowed"
      >
        <Settings size={20} />
        <span className="text-xs mt-1">Settings</span>
      </button>
    </div>
  );
}
