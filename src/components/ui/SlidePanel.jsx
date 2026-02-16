export default function SlidePanel({ open, onClose, children }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-xl transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full overflow-y-auto">{children}</div>
      </div>
    </>
  );
}
