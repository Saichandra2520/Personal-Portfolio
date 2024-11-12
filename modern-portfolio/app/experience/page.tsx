'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const floatingWords = [
  { text: "Enthusiastic", x: -150, y: -120 },
  { text: "Quick Learner", x: 150, y: -120 },
  { text: "Team Player", x: -150, y: 120 },
  { text: "Problem Solver", x: 150, y: 120 },
  { text: "Hire Me!", x: 0, y: -180 }
]

export default function Experience() {
  const [isExploding, setIsExploding] = useState(false)
  const [particles, setParticles] = useState([])
  const controls = useAnimation()

  const createParticles = () => {
    const newParticles = []
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 5 + 1,
        color: `hsl(${Math.random() * 360}, 50%, 50%)`,
      })
    }
    setParticles(newParticles)
  }

  useEffect(() => {
    if (isExploding) {
      createParticles()
      const timer = setTimeout(() => setIsExploding(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [isExploding])

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }))
  }, [controls])

  return (
    <div className="space-y-8 py-8 overflow-hidden ">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Ready for New Opportunities
      </motion.h1>
      
      <div className="relative w-full h-[400px] flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 260, damping: 20 }}
          className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl"
        >
          <Image
            
            alt="Professional headshot"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-purple-500/50 to-indigo-500/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
        
        {floatingWords.map((word, index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2"
            initial={{ opacity: 0, x: word.x, y: word.y }}
            animate={{ 
              opacity: 1,
              x: word.x,
              y: word.y + Math.sin(index) * 10,
            }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                delay: index * 0.2
              },
              opacity: { duration: 0.5, delay: index * 0.2 }
            }}
          >
            <span className="text-lg font-semibold text-white whitespace-nowrap px-3 py-1 bg-purple-600 rounded-full shadow-md">
              {word.text}
            </span>
          </motion.div>
        ))}

        {isExploding && (
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full"
                initial={{ opacity: 1, scale: 0 }}
                animate={{ 
                  opacity: 0,
                  scale: 1,
                  x: (Math.random() - 0.5) * 400,
                  y: (Math.random() - 0.5) * 400,
                }}
                transition={{ duration: 1 }}
                style={{
                  left: particle.x,
                  top: particle.y,
                  width: particle.size,
                  height: particle.size,
                  backgroundColor: particle.color,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="text-center space-y-2">
        <motion.p 
          className="text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          custom={0}
        >
          As a fresh graduate, I'm excited to bring my enthusiasm, creativity, and strong foundation in software development to a dynamic team.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          custom={1}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
            onClick={() => setIsExploding(true)}
          >
            Hire Me!
          </Button>
        </motion.div>
      </div>

      <motion.div 
        className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2
            }
          }
        }}
      >
        {[
          'Passionate Coder',
          'Innovative Thinker',
          'Collaborative Spirit',
          'Continuous Learner',
          'Problem Solver',
          'Tech Enthusiast'
        ].map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1
              }
            }}
          >
            <h3 className="text-lg font-semibold mb-2 text-purple-600 dark:text-purple-400">{skill}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Bringing fresh perspectives and eager to contribute to innovative solutions.
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}