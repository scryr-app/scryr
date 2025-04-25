export function DownloadButton() {
  const handleDownload = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const screenshot = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "screenshot.png";
    link.href = screenshot;
    link.click();
  };

  return (
    <button
      className="
        fixed bottom-10 right-10 z-20
        px-10 py-4
        rounded-[2rem]
        shadow-xl
        bg-gradient-to-br from-[#e0c3fc] via-[#8ec5fc] to-[#a1c4fd]
        text-[#3b3054]
        text-2xl font-extrabold
        tracking-widest
        border-4 border-[#b993d6]/40
        ring-4 ring-[#fbc2eb]/40
        hover:scale-105
        hover:shadow-[0_0_40px_12px_rgba(186,85,211,0.18)]
        transition-all duration-300
        backdrop-blur-[2px]
        before:content-[''] before:absolute before:inset-0 before:rounded-[2rem] before:border before:border-[#fff6] before:pointer-events-none
      "
      onClick={handleDownload}
    >
      <span className="relative z-10">
        <svg
          className="inline-block mr-3 -mt-1"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b993d6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: "drop-shadow(0 0 4px #fff6)" }}
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
        Download
      </span>
    </button>
  );
}
