export default function WelcomeCard() {
  return (
    <div
      className="bg-white/90 backdrop-blur-md rounded-[32px] 
      p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] mb-10"
    >
      {/* Main Title */}
      <h1 className="text-4xl font-semibold tracking-tight text-[#2E2E38]">
        Family Feed
      </h1>

      <p className="text-[#6F6F82] text-lg mt-3">
        A private space to share moments, memories, and love 💜
      </p>

      {/* Inner soft card */}
      <div className="mt-8 bg-[#F7F3EE] rounded-2xl p-6">
        <h2 className="text-lg font-medium text-[#2E2E38]">Welcome back 💜</h2>

        <p className="text-[#7A7A8C] mt-2">
          3 new family moments are waiting for you.
        </p>
      </div>
    </div>
  );
}
