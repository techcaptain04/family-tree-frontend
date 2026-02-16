import { useState, useEffect } from 'react';

export default function MainLayout({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div
      className="relative min-h-screen overflow-hidden transition-colors duration-500
      bg-gradient-to-br from-[#F6F2EC] via-[#EFE8DE] to-[#E7DFD5]
      dark:bg-[#0f0f0f]"
    >
      {/* Warm soft glow */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px]
        bg-[#EADFD3]/40 rounded-full blur-3xl pointer-events-none"
      />

      <div
        className="absolute bottom-0 right-0 w-[450px] h-[450px]
        bg-[#DDD2C5]/30 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-10">
        {/* Top Controls */}
        <div className="flex justify-end mb-10">
          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 rounded-full text-sm
            border border-slate-300/70 dark:border-slate-600
            backdrop-blur-md bg-white/40 dark:bg-slate-800/40
            hover:scale-105 active:scale-95
            transition-all duration-200"
          >
            {dark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
