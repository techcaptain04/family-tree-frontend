import { useState } from 'react';
import { mockMembers } from '../data/mockMembers';
import MemberCard from '../components/members/MemberCard';
import MemberForm from '../components/members/MemberForm';

export default function Home() {
  const [members, setMembers] = useState(mockMembers);

  const addMember = (newMember) => {
    setMembers((prev) => [newMember, ...prev]);
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <MemberForm onAdd={addMember} />
      </div>

      <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
