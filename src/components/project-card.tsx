import Image from 'next/image'

interface Props {
  src: string
  title: string
  description: string
  link: string
}

export default function ProjectCard({ src, title, description, link }: Props) {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group flex-1'>
      <div className='overflow-hidden'>
        <a href={link} target='_blank' className='cursor-pointer'>
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className='w-full object-contain transform transition-transform duration-300 ease-in-out group-hover:scale-110'
          />
        </a>
      </div>

      <div className='relative p-4'>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
        <p className='mt-2 text-gray-300'>{description}</p>
      </div>
    </div>
  )
}
