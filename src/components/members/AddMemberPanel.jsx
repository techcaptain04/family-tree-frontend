import { useState } from 'react';

export default function AddMemberPanel({ onAdd, onClose }) {
  const [form, setForm] = useState({
    name: '',
    relation: '',
    age: ''
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.relation || !form.age) return;

    onAdd({
      id: Date.now(),
      ...form,
      age: Number(form.age),
      photo: preview
    });

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-800">
        Add Family Member
      </h2>

      {/* Avatar Upload */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-24 h-24 rounded-full bg-[#f1e4df] overflow-hidden flex items-center justify-center">
          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-[#c97b63] text-sm">Upload</span>
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="text-sm"
        />
      </div>

      <input
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#c97b63]/40 outline-none"
      />

      <input
        name="relation"
        placeholder="Relation"
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#c97b63]/40 outline-none"
      />

      <input
        name="age"
        type="number"
        placeholder="Age"
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#c97b63]/40 outline-none"
      />

      <button className="w-full py-3 rounded-xl bg-[#c97b63] text-white font-medium hover:opacity-90 transition">
        Save Member
      </button>
    </form>
  );
}
