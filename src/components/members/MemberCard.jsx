import { motion } from 'framer-motion';

export default function MemberCard({ member }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        show: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 160, damping: 18 }}
      className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/30 dark:border-slate-700/60 shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500"
    >
      <div className="flex items-center gap-5 mb-8">
        <div className="w-16 h-16 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black flex items-center justify-center text-lg font-semibold transition group-hover:scale-105">
          {member.name.charAt(0)}
        </div>

        <div>
          <h3 className="text-lg font-semibold tracking-tight">
            {member.name}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            {member.relation}
          </p>
        </div>
      </div>

      <div className="text-sm text-slate-400 dark:text-slate-500">
        Age {member.age}
      </div>
    </motion.div>
  );
}
