'use client'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { motion } from 'motion/react'
import Image from 'next/image'

export default function HeroContent() {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      className='flex items-center justify-center px-5 md:px-20 mt-40 w-full z-[20]'
    >
      <div className='flex-1 flex justify-center'>
        <div className='flex flex-col gap-5 text-center md:text-start'>
          <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-2 px-3 border border-[#7042f88b] opacity-[0.9]'
          >
            <SparklesIcon className='text-[#b49bff] mr-2.5 h-5 w-5' />
            <h1 className='Welcome-text text-sm'>Ксюшка просто пушка</h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 md:text-6xl text-5xl font-bold text-white max-w-[600px] size-auto'
          >
            <span>
              Амина
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                {' '}
                лучшая{' '}
              </span>
              и крутая
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className='md:text-lg text-gray-400 my-5 max-w-[600px]'
          >
            When I came to you with those calculations, we thought we might start a chain reaction
            that would destroy the entire world. I believe we did.
          </motion.p>
          <motion.a
            variants={slideInFromLeft(1)}
            className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] w-full md:self-start self-center'
            href='#skills'
          >
            Learn More!
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className='flex-1 md:flex justify-center items-center hidden'
      >
        <Image
          src='/profile.jpg'
          alt='photo'
          height={500}
          width={500}
          className='rounded-full object-cover aspect-square animate-border'
        />
      </motion.div>
    </motion.div>
  )
}
