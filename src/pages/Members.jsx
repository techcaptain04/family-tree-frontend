import { useState, useMemo } from 'react';
import MemberCard from '../components/members/MemberCard';
import SlidePanel from '../components/ui/SlidePanel';
import AddMemberPanel from '../components/members/AddMemberPanel';
import useDebounce from '../hooks/useDebounce';
import { motion } from 'framer-motion';

const initialMembers = [
  { id: 1, name: 'Emma Carter', relation: 'Mother', age: 45 },
  { id: 2, name: 'Daniel Carter', relation: 'Father', age: 48 },
  { id: 3, name: 'Olivia Carter', relation: 'Daughter', age: 18 },
  { id: 4, name: 'Liam Carter', relation: 'Son', age: 15 }
];

export default function Members() {
  const [members, setMembers] = useState(initialMembers);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  const debouncedSearch = useDebounce(search);

  const filteredMembers = useMemo(() => {
    return members.filter((m) =>
      m.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch, members]);

  const addMember = (newMember) => {
    setMembers((prev) => [newMember, ...prev]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-14"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
        <div>
          <h1 className="text-5xl font-semibold tracking-tight">
            Family Members
          </h1>
          <p className="text-slate-500 mt-3 text-lg">
            Keep your loved ones beautifully organized
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="px-7 py-3 rounded-full bg-slate-900 text-white text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
        >
          Add Member
        </button>
      </div>

      {/* Search */}
      <div>
        <input
          placeholder="Search family members..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 px-6 py-3 rounded-full border border-slate-200 bg-white shadow-sm focus:ring-2 focus:ring-slate-900/20 focus:border-slate-300 outline-none transition"
        />
      </div>

      {/* Grid */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08
            }
          }
        }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {filteredMembers.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </motion.div>

      {/* Slide Panel */}
      <SlidePanel open={open} onClose={() => setOpen(false)}>
        <AddMemberPanel onAdd={addMember} onClose={() => setOpen(false)} />
      </SlidePanel>
    </motion.div>
  );
}
