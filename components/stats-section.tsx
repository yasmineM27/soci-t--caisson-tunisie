"use client"

import type React from "react"
import { AnimatedCounter } from "@/components/animated-counter"
import { motion } from "framer-motion"

interface Stat {
  icon: React.ReactNode
  value: number
  label: string
  prefix?: string
  suffix?: string
}

interface StatsSectionProps {
  stats: Stat[]
}

export function StatsSection({ stats }: StatsSectionProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Caisson Tunisie en chiffres</h2>
          <p className="max-w-2xl mx-auto">
            Découvrez quelques chiffres qui témoignent de notre expertise et de notre engagement envers la qualité.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-primary-foreground/10 rounded-lg p-6 text-center hover:bg-primary-foreground/20 transition-colors"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-primary-foreground/20 p-3 rounded-full">{stat.icon}</div>
              </div>
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-primary-foreground/80">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
