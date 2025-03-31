'use client'

import { useState, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { Group } from 'three'
import { inSphere } from 'maath/random'

interface StarBackgroundProps {
  [key: string]: unknown
}

function StarBackground(props: StarBackgroundProps) {
  const ref = useRef<Group | null>(null)
  const [sphere] = useState(
    () => inSphere(new Float32Array(5000 * 3), { radius: 1.2 }) as Float32Array,
  )
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
      ref.current.position.x = mouse.x * 0.1
      ref.current.position.y = mouse.y * 0.1
    }
  })

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <Points positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color='#fff' size={0.002} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto fixed inset-0 z-[20]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarBackground />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
