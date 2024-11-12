'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Tech Innovators Inc.",
    location: "San Francisco, CA",
    duration: "May 2023 - August 2023",
    responsibilities: [
      "Developed and maintained RESTful APIs using Node.js and Express",
      "Collaborated with the front-end team to integrate APIs with React applications",
      "Participated in code reviews and implemented feedback to improve code quality",
      "Assisted in the migration of legacy systems to modern microservices architecture"
    ],
    technologies: ["Node.js", "Express", "React", "MongoDB", "Docker"]
  },
  {
    title: "Junior Data Analyst (Part-time)",
    company: "DataDrive Solutions",
    location: "New York, NY",
    duration: "January 2023 - April 2023",
    responsibilities: [
      "Analyzed large datasets using SQL and Python to extract meaningful insights",
      "Created data visualizations using Tableau to present findings to stakeholders",
      "Assisted in the development of predictive models for customer behavior analysis",
      "Contributed to the optimization of data processing pipelines, improving efficiency by 20%"
    ],
    technologies: ["Python", "SQL", "Tableau", "Pandas", "Scikit-learn"]
  }
]

export default function Experience() {
  return (
    <div className="space-y-12 py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Professional Experience
      </motion.h1>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Briefcase className="mr-2 h-6 w-6" />
                  {exp.title}
                </CardTitle>
                <div className="text-lg font-semibold">{exp.company}</div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  {exp.location}
                  <span className="mx-2">•</span>
                  <Calendar className="mr-1 h-4 w-4" />
                  {exp.duration}
                </div>
              </CardHeader>
              <CardContent className="mt-4">
                <h3 className="font-semibold mb-2">Key Responsibilities:</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
                <h3 className="font-semibold mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}