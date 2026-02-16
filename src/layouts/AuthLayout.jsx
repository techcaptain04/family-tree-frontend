export default function AuthLayout({ children }) {
  return (
    <div
      className="relative min-h-screen bg-gradient-to-br 
      from-[#F6F1EB] via-[#F3EEE8] to-[#EDE6DE] overflow-hidden flex"
    >
      {/* Background Blobs */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] 
        bg-[#E8E2FF] opacity-30 rounded-full blur-3xl"
      />

      <div
        className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] 
        bg-[#FFDCCF] opacity-25 rounded-full blur-3xl"
      />

      {/* LEFT SIDE */}
      <div className="hidden lg:flex flex-1 items-center justify-center p-16 relative z-10">
        <div>
          <h1 className="text-4xl font-semibold text-[#2E2E38] leading-snug">
            Share beautiful family moments 💜
          </h1>
          <p className="mt-6 text-[#6B6B7B] max-w-md text-lg">
            A private space to stay connected, create memories, and celebrate
            life together.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE (Form) */}
      <div className="flex-1 flex items-center justify-center p-8 relative z-10">
        {children}
      </div>
    </div>
  );
}
