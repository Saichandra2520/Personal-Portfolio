'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, Star } from 'lucide-react'

const achievements = [
  {
    title: "FlipKart GRiD 5.0",
    description: "Qualified for second round of Software Development Track",
    icon: Trophy
  },
  {
    title: "TCS iON NQT - IT exam",
    description: "Scored 83.19%",
    icon: Star
  },
  {
    title: "EAMCET",
    description: "Secured a rank of 1201 among 1.2 Lakh students",
    icon: Trophy
  },
  {
    title: "GeeksforGeeks",
    description: "Overall Coding Score of 900",
    icon: Award
  },
  {
    title: "HackerRank",
    description: "Earned a Java Basic Certificate",
    icon: Award
  },
  {
    title: "Coding Ninjas",
    description: "Completed Advanced Web Development Course with Excellence",
    icon: Star
  },
  {
    title: "IEEE Student Branch",
    description: "Active member and contributor to technical projects",
    icon: Trophy
  },
]

export default function Achievements() {
  return (
    <div className="space-y-12 py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Achievements & Certifications
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center">
                  {achievement.icon && <achievement.icon className="mr-2 h-5 w-5 text-purple-600" />}
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{achievement.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}