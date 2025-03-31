'use client'
import { motion } from 'motion/react'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

export default function SkillText() {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromTop}
        className='Welcome-box py-2 px-3 border border-[#7042f88b] opacity-[0.9]'
      >
        <SparklesIcon className='text-[#b49bff] mr-2.5 h-5 w-5' />
        <h1 className='Welcome-text'>Очень крутой текст</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-4'
      >
        When you see something that is technically sweet, you go ahead and do it.
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
      >
        Now I am become Death, the destroyer of worlds.
      </motion.div>
    </div>
  )
}
