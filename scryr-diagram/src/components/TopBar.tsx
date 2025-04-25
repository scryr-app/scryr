export function TopBar() {
  return (
    <div className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-8 bg-gradient-to-r from-[#e0c3fc]/80 via-[#8ec5fc]/80 to-[#a1c4fd]/80 shadow-lg z-30 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <img
          src="/src/assets/scryr_logo.png"
          alt="Scryr Logo"
          className="h-12 w-12 rounded-full shadow-lg border-2 border-[#b993d6]/60 bg-white/70"
        />
        <span
          className="text-3xl font-extrabold text-[#3b3054] drop-shadow-lg tracking-widest"
          style={{
            fontFamily: "'Cinzel Decorative', 'Parisienne', cursive, serif",
          }}
        >
          Scryr
        </span>
      </div>
      <div className="flex items-center gap-6">
        <button
          className="relative px-6 py-2 rounded-2xl bg-gradient-to-br from-[#a1c4fd] via-[#b993d6] to-[#fbc2eb] text-[#3b3054] font-bold text-lg shadow-md border-2 border-[#fff6] hover:scale-105 transition-all duration-200
            before:absolute before:inset-0 before:rounded-2xl before:border before:border-[#fff3] before:pointer-events-none"
          style={{
            fontFamily: "'Cinzel Decorative', 'Parisienne', cursive, serif",
            letterSpacing: "0.08em",
            textShadow: "0 1px 6px #fff8, 0 0 8px #b993d6",
          }}
        >
          <span className="inline-block mr-2">
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="#b993d6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="7" height="7" rx="2" />
              <rect x="14" y="3" width="7" height="7" rx="2" />
              <rect x="14" y="14" width="7" height="7" rx="2" />
              <rect x="3" y="14" width="7" height="7" rx="2" />
            </svg>
          </span>
          My Diagrams
        </button>
        <button
          className="relative px-6 py-2 rounded-2xl bg-gradient-to-br from-[#fbc2eb] via-[#a1c4fd] to-[#b993d6] text-[#3b3054] font-bold text-lg shadow-md border-2 border-[#fff6] hover:scale-105 transition-all duration-200
            before:absolute before:inset-0 before:rounded-2xl before:border before:border-[#fff3] before:pointer-events-none"
          style={{
            fontFamily: "'Cinzel Decorative', 'Parisienne', cursive, serif",
            letterSpacing: "0.08em",
            textShadow: "0 1px 6px #fff8, 0 0 8px #b993d6",
          }}
        >
          <span className="inline-block mr-2">
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="#b993d6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M2 20c0-4 8-6 10-6s10 2 10 6" />
            </svg>
          </span>
          Login
        </button>
      </div>
    </div>
  );
}
