'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ChevronDown, Download } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRef } from 'react'




export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToContent = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center py-12 md:py-24">
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Saichandra Vallakatla
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Full-Stack Developer & Cloud Enthusiast
          </p>
          <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Passionate about creating scalable web applications and exploring cloud technologies. 
            Final year student with hands-on experience in modern web development and microservices architecture.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            <Link href="https://www.linkedin.com/in/vallakatla-sai-chandra-1b0093206/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn profile</span>
              </Button>
            </Link>
            <Link href="https://github.com/Saichandra2520" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub profile</span>
              </Button>
            </Link>
            <Link href="mailto:saivallakatla1973@gmail.com">
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email contact</span>
              </Button>
            </Link>
            {/* <Link href="tel:+918341277302">
              <Button variant="outline" size="icon">
                <Phone className="h-4 w-4" />
                <span className="sr-only">Phone contact</span>
              </Button>
            </Link> */}
          </div>
          <div className="space-x-4">
            <Link href="/projects">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                View My Work
              </Button>
            </Link>
            <Link href="/Saichandra_vallakatla.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-4 w-4" /> Resume
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/assests/profile.jpg?height=400&width=400"
            alt="Saichandra Vallakatla"
            width={400}
            height={400}
            className="rounded-full shadow-lg border-4 border-purple-200 dark:border-purple-900"
          />
        </motion.div>
      </section>
      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button variant="ghost" onClick={scrollToContent} aria-label="Scroll to content">
          <ChevronDown className="h-6 w-6" />
        </Button>
      </motion.div>
      <section ref={scrollRef} className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Professional Overview
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">University College of Engineering, Osmania University</p>
                  <p>Bachelor of Engineering in Electronics and Communication</p>
                  <p>CGPA: 8.55</p>
                  <p>Dec 2020 - May 2024</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Key Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>Full-Stack Web Development</li>
                    <li>Cloud Technologies (AWS)</li>
                    <li>Microservices Architecture</li>
                    <li>DevOps & CI/CD</li>
                    <li>Database Management</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Leadership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">Convener, Aakruthi 2024</p>
                  <p>National Level Technical Symposium</p>
                  <p className="mt-2 font-semibold">Secretary, IETE OUCE Student Forum</p>
                  <p>2023-2024</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}