import { Backend_skill, Devops_skill, Frontend_skill } from '@/constants'
import SkillDataProvider from './skill-data-provider'
import SkillText from './skill-text'

export default function Skills() {
  return (
    <section
      id='skills'
      className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-10'
      style={{ transform: 'scale(0.9)' }}
    >
      <SkillText />
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Devops_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className='w-full h-full absolute'>
        <div className='w-full h-full z-[-10] opacity-30 top-16 absolute flex items-center justify-center bg-cover'>
          <video
            className='w-full h-full'
            preload='false'
            playsInline
            loop
            muted
            autoPlay
            src='/cards-video.webm'
          />
        </div>
      </div>
    </section>
  )
}
