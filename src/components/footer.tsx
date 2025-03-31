import { RxDiscordLogo, RxGithubLogo } from 'react-icons/rx'

import { FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-4 z-20'>
      <div className='w-full flex flex-col items-center justify-center m-auto'>
        <div className='size-full flex flex-row items-center justify-around flex-wrap'>
          <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
            <div className='font-bold text-lg'>Community</div>
            <p className='flex flex-row items-center my-4 cursor-pointer'>
              <FaYoutube />
              <span className='text-[15px] ml-1.5'>Youtube</span>
            </p>
            <p className='flex flex-row items-center my-4 cursor-pointer'>
              <RxGithubLogo />
              <span className='text-[15px] ml-1.5'>Github</span>
            </p>
            <p className='flex flex-row items-center my-4 cursor-pointer'>
              <RxDiscordLogo />
              <span className='text-[15px] ml-1.5'>Discord</span>
            </p>
          </div>
          <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
            <div className='font-bold text-lg'>Social Media</div>
            <p className='flex flex-row items-center my-4 cursor-pointer'>
              <FaYoutube />
              <span className='text-[15px] ml-1.5'>Instagram</span>
            </p>
            <p className='flex flex-row items-center my-4 cursor-pointer'>
              <RxGithubLogo />
              <span className='text-[15px] ml-1.5'>Twitter</span>
            </p>
            <p className='flex flex-row items-center my-4 cursor-pointer'>
              <RxDiscordLogo />
              <span className='text-[15px] ml-1.5'>Linkedin</span>
            </p>
          </div>
          <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
            <div className='font-bold text-lg'>About</div>
            <p className='flex flex-row items-center my-4 cursor-pointer'>
              <span className='text-[15px] ml-1.5'>Become Sponsor</span>
            </p>
            <p className='flex flex-row items-center my-4 cursor-pointer'>
              <span className='text-[15px] ml-1.5'>Learning about me</span>
            </p>
            <p className='flex flex-row items-center my-4 cursor-pointer'>
              <span className='text-[15px] ml-1.5'>bogomolovs693@gmail.com</span>
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
