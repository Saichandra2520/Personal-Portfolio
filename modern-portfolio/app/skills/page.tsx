'use client'

import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    name: "Programming Languages & Frameworks",
    skills: ["Core Java", "JavaScript", "Python", "HTML/CSS", "ReactJS", "NodeJS", "ExpressJS"]
  },
  {
    name: "Database & Concepts",
    skills: ["SQL", "MongoDB", "DBMS", "Data Structures", "Object-Oriented Programming"]
  },
  {
    name: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "AWS EC2", "Ansible", "Shell Scripting", "Linux", "Terraform","Azure"]
  },
  {
    name: "Architecture",
    skills: ["Microservices"]
  },
  {
    name: "Version Control",
    skills: ["Git", "GitHub"]
  }
]

export default function Skills() {
  return (
    <div className="space-y-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1 px-2">
                      {skill}
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