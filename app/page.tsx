import HeroSection from '@/components/sections/hero-section'
import Particles from '@/components/effects/particles'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <HeroSection />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
    </main>
  )
}
