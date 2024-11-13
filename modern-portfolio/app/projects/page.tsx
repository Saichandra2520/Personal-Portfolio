'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "DSA Sheets",
    description: "Progressive Web App for mastering Data Structures and Algorithms",
    image: "/assests/dsa.png",
    technologies: ["HTML", "CSS", "ReactJS", "PWA"],
    details: [
      "Interactive interface with real-time progress tracking",
      "Offline access and data persistence",
      "Responsive design for all device types"
    ],
    github: "https://github.com/Saichandra2520/DSA-Checklist",
    live: "https://www.dsasheets.online/",
    livedemo: true
  },
  {
    title: "Aakruthi 2023",
    description: "Front-end for national-level technical symposium",
    image: "/assests/aakruthi.png",
    technologies: ["HTML", "CSS", "JavaScript", "Social Media APIs"],
    details: [
      "Integrated social media APIs for real-time sharing",
      "Responsive layout using Flexbox and Grid",
      "Enhanced user interactivity with dynamic content rendering"
    ],
    github: "https://github.com/Saichandra2520/AAKRUTHI2024",
    live: "https://aakruthi2023.example.com",
    livedemo: false
  },
  {
    title: "ShopEasy",
    description: "Full-stack e-commerce platform with microservices architecture",
    image: "/assests/shopeasy1.png",
    technologies: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "AWS", "Docker", "Ansible"],
    details: [
      "User authentication, product browsing, cart management, and order processing",
      "Integrated RazorPay for secure payments",
      "Comprehensive admin panel",
      "Refactored to microservices architecture",
      "Deployed on AWS EC2 with Ansible and Docker"
    ],
    github: "https://github.com/Saichandra2520/ecommerce-backend",
    live: "https://shopeasy-phi.vercel.app/",
    livedemo: false
  },
  
]

const ongoingProject = {
  title: "Discover Bio Insights",
  description: "Digitizing emergency department workflows to enhance patient care pathways and streamline hospital operations.",
  image: "/placeholder.svg?height=400&width=600",
  technologies: ["Microsoft Azure", "React", "Node.js", "MySQL", "Cloud Architecture"],
  details: [
    "Optimized cloud architecture for real-time, low-latency data processing, ensuring immediate access to patient information and treatment protocols.",
    "Role-based access control, providing secure and compliant access tailored to different staff roles, including doctors, nurses, and administrative personnel.",
    "Intelligent data insights and analytics for emergency department workflows, enabling hospital staff to make informed decisions and enhance patient care efficiency.",
    "Automated data backup and failover systems using Azure to ensure high availability and reliability, minimizing downtime in critical care environments.",
    "A scalable infrastructure that supports growing data and user demands without compromising on speed or security, facilitating seamless integration with other hospital systems.",
    "Integration with IoT medical devices and monitoring systems to streamline data flow from patient monitors directly to the application, reducing manual entry and error.",
    "Customized dashboards for real-time monitoring of patient flow, triage status, and staff activity, providing a comprehensive overview to improve response times in emergencies."
  ],
  progress: 25
}


export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('completed')

  const toggleProjectDetails = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title)
  }

  return (
    <div className="space-y-12 py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects 
      </motion.h1>

      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {['completed', 'ongoing'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === tab
                  ? 'text-white bg-gradient-to-r from-purple-600 to-indigo-600'
                  : 'text-gray-900 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
              } border border-gray-200 dark:border-gray-600 ${
                tab === 'completed' ? 'rounded-l-lg' : tab === 'ongoing' ? 'rounded-r-lg' : ''
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'completed' && (
          <motion.div
            key="completed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden h-full flex flex-col">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <AnimatePresence>
                    {expandedProject === project.title && (
                      <motion.ul
                        className="list-disc list-inside space-y-2 mb-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {project.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                  <div className="flex justify-between items-center mt-4">
                    <Button variant="outline" size="sm" onClick={() => toggleProjectDetails(project.title)}>
                      {expandedProject === project.title ? (
                        <>
                          <ChevronUp className="mr-2 h-4 w-4" />
                          Less Details
                        </>
                      ) : (
                        <>
                          <ChevronDown className="mr-2 h-4 w-4" />
                          More Details
                        </>
                      )}
                    </Button>
                    <div className="space-x-2">
                      <Button size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      { project.livedemo ? <Button size="sm" variant="outline" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button> : ''}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        )}

        {activeTab === 'ongoing' && (
          <motion.div
            key="ongoing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden">
             
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{ongoingProject.title}</CardTitle>
                <CardDescription>{ongoingProject.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {ongoingProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-semibold mb-2">Current Progress:</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2.5 rounded-full" 
                    style={{ width: `${ongoingProject.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {ongoingProject.progress}% Complete
                </p>
                <h3 className="font-semibold mb-2">Key Features in Development:</h3>
                <ul className="list-disc list-inside space-y-2">
                  {ongoingProject.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        )}

        
      </AnimatePresence>
    </div>
  )
}