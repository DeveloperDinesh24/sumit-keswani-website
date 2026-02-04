export default function HeroSection() {
  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0'>
        {/* Placeholder for CEO Hero Image */}
        <div className='w-full h-full bg-slate-900 bg-[url("[IMG_PATH_HERO]")] bg-cover bg-center grayscale contrast-125' />
        <div className='absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent' />
      </div>

      <div className='relative z-10 max-w-7xl w-full px-6 lg:px-12'>
        <div className='max-w-3xl'>
          <h2 className='text-indigo-500 text-sm font-bold uppercase tracking-[0.4em] mb-6 animate-pulse'>
            Executive Profile
          </h2>
          <h1 className='text-white text-6xl sm:text-7xl md:text-9xl font-serif mb-8 leading-[0.85] tracking-tighter'>
            Defining <br /> the{' '}
            <span className='italic text-indigo-400'>Standard.</span>
          </h1>
          <p className='text-slate-400 text-xl md:text-2xl mb-12 leading-relaxed font-light max-w-xl'>
            Visionary leadership at the intersection of technology, venture
            capital, and Marina World.
          </p>
          <div className='flex gap-6'>
            <a
              href='#about'
              className='px-12 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(99,102,241,0.4)]'
            >
              The Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
