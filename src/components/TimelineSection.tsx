export default function TimelineSection() {
  const milestones = [
    {
      year: '2021',
      event: 'CEO of Marina World',
      detail:
        'Launched with a vision to disrupt the national electrical appliances market.',
    },
    {
      year: '2020',
      event: 'Strategic Exit of [PREVIOUS_CORP]',
      detail: 'Acquired for $250M by a Fortune 500 technology leader.',
    },
    {
      year: '2016',
      event: 'Global Leadership Summit',
      detail:
        'Awarded "Innovator of the Year" for excellence in strategic growth.',
    },
  ]

  return (
    <section className='py-40 bg-[#020617] px-6 border-y border-white/5'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid lg:grid-cols-3 gap-20'>
          <div className='lg:col-span-1'>
            <h2 className='text-4xl lg:text-5xl font-serif sticky top-32'>
              The <br />
              Timeline
            </h2>
          </div>
          <div className='lg:col-span-2 space-y-24'>
            {milestones.map((m, i) => (
              <div
                key={i}
                className='relative pl-12 border-l border-indigo-500/30 group'
              >
                <div className='absolute -left-1.25 top-0 w-2 h-2 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform' />
                <span className='text-5xl md:text-6xl font-serif text-slate-800 mb-4 block group-hover:text-indigo-500 transition-colors'>
                  {m.year}
                </span>
                <h3 className='text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-widest'>
                  {m.event}
                </h3>
                <p className='text-slate-400 text-sm md:text-lg leading-relaxed'>
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
