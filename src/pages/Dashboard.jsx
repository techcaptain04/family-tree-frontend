import Sidebar from '../components/layout/Sidebar';
import Topbar from '../components/layout/Topbar';
import WelcomeCard from '../components/feed/WelcomeCard';
import PostComposer from '../components/feed/PostComposer';
import Feed from '../components/feed/Feed';
import MobileNav from '../components/layout/MobileNav';

export default function Dashboard() {
  return (
    <div
      className="relative min-h-screen bg-gradient-to-br 
      from-[#F6F1EB] via-[#F3EEE8] to-[#EDE6DE] overflow-hidden"
    >
      {/* 🌸 Soft Decorative Background Blobs */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] 
        bg-[#E8E2FF] opacity-30 rounded-full blur-3xl"
      />

      <div
        className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] 
        bg-[#FFDCCF] opacity-25 rounded-full blur-3xl"
      />

      {/* 🌿 Main Content */}
      <div className="relative z-10 px-6 lg:px-16 py-10">
        <div className="flex flex-col lg:flex-row gap-12 pb-20 lg:pb-0">
          {/* Sidebar */}
          <aside className="hidden lg:block w-[260px]">
            <Sidebar />
          </aside>

          {/* Main Area */}
          <main className="flex-1 max-w-full lg:max-w-[760px]">
            <Topbar />
            <WelcomeCard />
            <PostComposer />
            <Feed />
          </main>
        </div>
      </div>
      <MobileNav />
    </div>
  );
}
