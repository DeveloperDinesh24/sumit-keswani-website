export default function Header() {
  return (
    <nav className='fixed w-full z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/5 max-[520px]:px-4 px-8 py-5 flex justify-between items-center'>
      <span className='font-serif max-[440px]:text-sm text-xl tracking-tighter italic uppercase text-indigo-400'>
        Sumit Keswani
      </span>
      <div className='flex gap-2 max-[520px]:gap-4 max-[440px]:text-[8px] sm:gap-8 text-[10px] uppercase tracking-[0.2em] font-bold'>
        <a href='#about' className='hover:text-indigo-400 transition-colors'>
          History
        </a>
        <a
          href='#portfolio'
          className='hover:text-indigo-400 transition-colors'
        >
          Ventures
        </a>
        <a
          href='#contact'
          className='hover:text-indigo-400 transition-colors underline decoration-indigo-500 underline-offset-4'
        >
          Connect
        </a>
      </div>
    </nav>
  )
}
