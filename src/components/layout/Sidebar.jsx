import {
  Home,
  Users,
  Heart,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (path) => location.pathname === path;

  const linkClasses = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer
     ${
       isActive(path)
         ? 'bg-[#6C63FF]/10 text-[#6C63FF] font-medium'
         : 'text-[#6b6b7a] hover:bg-slate-100'
     }`;

  return (
    <div
      className={`bg-white/70 backdrop-blur-md border border-slate-200 
      rounded-2xl p-4 shadow-sm transition-all duration-300
      ${collapsed ? 'w-20' : 'w-60'}`}
    >
      {/* Toggle Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-slate-500 hover:text-[#6C63FF] transition"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Title */}
      {!collapsed && (
        <h2 className="text-lg font-semibold text-[#333] mb-6">Family Space</h2>
      )}

      <div className="flex flex-col gap-2">
        <div
          onClick={() => navigate('/dashboard')}
          className={linkClasses('/dashboard')}
        >
          <Home size={18} />
          {!collapsed && <span>Home</span>}
        </div>

        <div
          onClick={() => navigate('/members')}
          className={linkClasses('/members')}
        >
          <Users size={18} />
          {!collapsed && <span>Members</span>}
        </div>

        <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 cursor-not-allowed">
          <Heart size={18} />
          {!collapsed && <span>Memories</span>}
        </div>

        <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 cursor-not-allowed">
          <Settings size={18} />
          {!collapsed && <span>Settings</span>}
        </div>
      </div>
    </div>
  );
}
