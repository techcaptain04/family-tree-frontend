export default function PostCard({ post }) {
  return (
    <div className="bg-white/95 backdrop-blur-md rounded-4xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E8E5FF] to-[#DCD8FF]flex items-center justify-center text-[#6C63FF] font-semibold shadow-sm">
          {post.author.charAt(0)}
        </div>

        <div>
          <p className="font-semibold text-[#2E2E38] text-[15px]">
            {post.author}
          </p>
          <p className="text-sm text-[#8A8AA0] mt-0.5">{post.time}</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-[#2E2E38] leading-relaxed text-[16px]">
        {post.content}
      </p>

      {/* Actions */}
      <div className="flex gap-8 mt-8 text-sm text-[#8A8AA0]">
        <button className="flex items-center gap-2 hover:text-[#6C63FF] transition-all duration-200">
          <span>❤️</span>
          <span>Like</span>
        </button>

        <button className="flex items-center gap-2 hover:text-[#6C63FF] transition-all duration-200">
          <span>💬</span>
          <span>Comment</span>
        </button>
      </div>
    </div>
  );
}
