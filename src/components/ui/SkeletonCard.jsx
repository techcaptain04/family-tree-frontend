export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm animate-pulse">
      <div className="flex gap-4">
        <div className="w-16 h-16 rounded-full bg-slate-200" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-slate-200 rounded w-3/4" />
          <div className="h-3 bg-slate-200 rounded w-1/2" />
        </div>
      </div>
      <div className="mt-6 h-3 bg-slate-200 rounded w-1/3" />
    </div>
  );
}
