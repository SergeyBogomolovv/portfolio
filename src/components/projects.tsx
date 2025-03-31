import ProjectCard from './project-card'

export default function Projects() {
  return (
    <section id='projects' className='flex flex-col items-center justify-center md:py-20 z-20'>
      <h1 className='text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10'>
        Мои проекты
      </h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard
          src='/NextWebsite.png'
          title='Менеджер профилей'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        <ProjectCard
          src='/CardImage.png'
          title='Онлайн мессенджер'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        <ProjectCard
          src='/SpaceWebsite.png'
          title='Телеграм бот'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
      </div>
    </section>
  )
}
