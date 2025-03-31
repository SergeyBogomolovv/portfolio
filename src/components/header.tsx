import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { BsTelegram } from 'react-icons/bs'

export default function Header() {
  return (
    <header className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]/50 not-first:bg-[#03001417] backdrop-blur-md z-50 md:px-10 px-2.5 flex gap-6 items-center justify-between'>
      {/* Logo */}
      <a href='#about' className='size-auto flex items-center'>
        <Image
          alt='logo'
          src='/logo.svg'
          width={50}
          height={50}
          className='cursor-pointer hover:animate-pulse'
        />
        <span className='font-bold ml-2.5 hidden md:block text-gray-300'>Sergey Bogomolov</span>
      </a>
      {/* Nav */}
      <nav className='md:absolute md:right-1/2 md:translate-x-1/2 md:w-[500px] flex gap-3 items-center justify-between border border-[#7042f861] bg-[#0300145e] px-5 py-2.5 rounded-full text-white text-sm md:text-md'>
        <a href='#about' className='cursor-pointer'>
          About me
        </a>
        <a href='#skills' className='cursor-pointer'>
          Skills
        </a>
        <a href='#projects' className='cursor-pointer'>
          Projects
        </a>
      </nav>
      {/* Social */}
      <div className='hidden md:flex flex-row gap-5'>
        <a href='https://github.com/SergeyBogomolovv' target='_blank'>
          <FaGithub className='text-white size-6' />
        </a>
        <a href='https://t.me/grekassoq' target='_blank'>
          <BsTelegram className='text-white size-6' />
        </a>
      </div>
    </header>
  )
}
