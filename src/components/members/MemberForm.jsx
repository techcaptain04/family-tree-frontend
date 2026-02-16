import { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function MemberForm({ onAdd }) {
  const [form, setForm] = useState({
    name: '',
    relation: '',
    age: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.relation || !form.age) return;

    onAdd({
      id: Date.now(),
      ...form,
      age: Number(form.age)
    });

    setForm({ name: '', relation: '', age: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4"
    >
      <Input
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <Input
        label="Relation"
        name="relation"
        value={form.relation}
        onChange={handleChange}
      />
      <Input
        label="Age"
        name="age"
        type="number"
        value={form.age}
        onChange={handleChange}
      />

      <Button type="submit">Add Member</Button>
    </form>
  );
}
