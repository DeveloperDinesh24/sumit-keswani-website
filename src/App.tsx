import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import PhilosophySection from './components/PhilosophySection'
import TimelineSection from './components/TimelineSection'

export default function App() {
  return (
    <div className='min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-indigo-500/30'>
      <Header />
      <HeroSection />
      <PhilosophySection />
      <TimelineSection />
    </div>
  )
}
