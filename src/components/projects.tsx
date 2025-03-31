import ProjectCard from './project-card'

export default function Projects() {
  return (
    <section id='projects' className='flex flex-col items-center justify-center md:py-20 z-20'>
      <h1 className='text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10'>
        Мои проекты
      </h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard
          link='https://github.com/SergeyBogomolovv/profile-manager'
          src='/profile-manager.png'
          title='Менеджер профилей'
          description='Микросервисное приложение для управления профилями. Включает SSO, телеграм бота и gRPC API.'
        />
        <ProjectCard
          link='https://github.com/SergeyBogomolovv/grekasgram'
          src='/messenger.png'
          title='Онлайн мессенджер'
          description='Fullstack онлайн мессенджер на socket.io, nest и next.'
        />
        <ProjectCard
          link='https://github.com/SergeyBogomolovv/fitflow'
          src='/tgbot.png'
          title='Телеграм бот'
          description='Телеграм бот для тренировок и REST API для управления постами.'
        />
      </div>
    </section>
  )
}
