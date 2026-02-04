export default function PhilosophySection() {
  return (
    <section id='about' className='py-40 bg-slate-950 px-6 relative'>
      <div className='absolute top-0 right-0 w-1/3 h-full bg-indigo-600/5 blur-[120px] rounded-full' />
      <div className='max-w-5xl mx-auto text-center'>
        <h3 className='text-indigo-500 text-xs font-bold uppercase tracking-[0.5em] mb-12'>
          Philosophy
        </h3>
        <p className='text-4xl md:text-6xl font-serif leading-[1.1] text-white italic mb-12 px-4'>
          "Success is not a destination, but a{' '}
          <span className='text-indigo-400'>relentless commitment</span> to
          excellence and human-centric innovation."
        </p>
        <div className='w-24 h-1 bg-indigo-500 mx-auto' />
      </div>
    </section>
  )
}
