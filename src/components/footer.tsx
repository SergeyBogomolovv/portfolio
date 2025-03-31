import { RxGithubLogo } from 'react-icons/rx'

import { FaYoutube } from 'react-icons/fa'
import { BsTelegram } from 'react-icons/bs'
import { IoMail } from 'react-icons/io5'

const socials = [
  {
    label: 'Github',
    Icon: RxGithubLogo,
    href: 'https://github.com/SergeyBogomolovv',
  },
  {
    label: 'Youtube',
    Icon: FaYoutube,
    href: 'https://www.youtube.com/@geraxfn',
  },
]

export default function Footer() {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-4 z-20'>
      <div className='w-full flex flex-col items-center justify-center m-auto'>
        <div className='size-full flex flex-row items-center justify-around flex-wrap'>
          <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
            <div className='font-bold text-lg'>Community</div>
            {socials.map(({ href, label, Icon }, i) => (
              <a
                target='_blank'
                key={i}
                href={href}
                className='flex flex-row items-center my-2 md:my-4 cursor-pointer'
              >
                <Icon />
                <span className='text-[15px] ml-1.5'>{label}</span>
              </a>
            ))}
          </div>
          <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
            <div className='font-bold text-lg'>Contact</div>
            <a
              target='_blank'
              href='https://t.me/grekassoq'
              className='flex flex-row items-center my-2 md:my-4 cursor-pointer'
            >
              <BsTelegram />
              <span className='text-[15px] ml-1.5'>Telegram</span>
            </a>
            <a
              href='mailto:bogomolovs693@gmail.com'
              className='flex flex-row items-center my-2 md:my-4 cursor-pointer'
            >
              <IoMail />
              <span className='text-[15px] ml-1.5'>Email</span>
            </a>
          </div>
          <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
            <div className='font-bold text-lg'>About</div>
            <p className='flex flex-row items-center my-2 md:my-4 cursor-pointer'>
              <span className='text-[15px] ml-1.5'>Become Sponsor</span>
            </p>
            <p className='flex flex-row items-center my-2 md:my-4 cursor-pointer'>
              <span className='text-[15px] ml-1.5'>Learning about me</span>
            </p>
          </div>
        </div>

        <div className='mb-5 text-center'>
          &copy; Doofenshmirtz Evil 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  )
}
