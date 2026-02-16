import { useState } from 'react';

export default function PostComposer() {
  const [content, setContent] = useState('');

  return (
    <div
      className="bg-white/95 backdrop-blur-md rounded-[32px]
      p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] mb-10"
    >
      {/* Title */}
      <h3 className="text-lg font-semibold text-[#2E2E38] mb-5">
        Share a moment 💜
      </h3>

      {/* Soft inner surface */}
      <div className="bg-[#F7F3EE] rounded-2xl p-5 transition-all focus-within:ring-2 focus-within:ring-[#6C63FF]/20">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What’s happening today?"
          className="w-full bg-transparent resize-none outline-none
          text-[#2E2E38] placeholder-[#A0A0B5] text-[15px]"
          rows={3}
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end mt-6">
        <button
          disabled={!content.trim()}
          className={`px-7 py-2.5 rounded-full text-white font-medium
          transition-all duration-200
          ${
            content.trim()
              ? 'bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] shadow-lg shadow-[#6C63FF]/25 hover:scale-105 active:scale-95'
              : 'bg-slate-300 cursor-not-allowed'
          }`}
        >
          Post
        </button>
      </div>
    </div>
  );
}
