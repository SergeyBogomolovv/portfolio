import HeroContent from './content'

export default function Hero() {
  return (
    <section id='about' className='relative flex flex-col w-full h-full'>
      <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute md:top-[-340px] top-[-200px] left-0 z-1 w-full h-full '
      >
        <source src='/blackhole.webm' type='video/webm' />
      </video>
      <HeroContent />
    </section>
  )
}
