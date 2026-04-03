export default function Footer() {
  return (
    <footer className="w-full py-10 px-8 bg-[#060e20] flex flex-col md:flex-row justify-between items-center border-t border-white/5 gap-6">
      <div className="text-cyan-400/30 font-headline font-bold text-base tracking-tight"></div>
      <p className="font-label text-[10px] tracking-widest text-slate-600 uppercase">
        © 2025 LEE YONGMIN. ALL RIGHTS RESERVED.
      </p>
      <div className="flex gap-6">
        <a
          className="text-[10px] font-label tracking-widest text-slate-600 hover:text-slate-300 transition-colors"
          href="https://github.com/M1NiDRAG0N"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="text-[10px] font-label tracking-widest text-slate-600 hover:text-slate-300 transition-colors"
          href="https://www.linkedin.com/in/용민-이-58b66138a"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
