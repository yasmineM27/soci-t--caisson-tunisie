"use client"
import { useState } from "react"
import type React from "react"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Simuler l'inscription à la newsletter
      setTimeout(() => {
        setSubscribed(true)
        setEmail("")
      }, 500)
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-6 md:flex md:flex-wrap md:justify-between lg:px-8">
        <motion.div
          className="space-y-8 md:w-1/2 lg:w-1/3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-2xl font-bold">Société Caisson Tunisie</h2>
            <p className="mt-2 text-sm">
              Spécialiste en fabrication de produits en polystyrène expansé (EPS) depuis 2020
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 group">
              <div className="bg-primary-foreground/10 p-2 rounded-full">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="text-sm group-hover:text-white/90 transition-colors">
              zone industrielle-Technopole 5036 ,Monastir, Tunisie
              </span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="bg-primary-foreground/10 p-2 rounded-full">
                <Phone className="h-5 w-5" />
              </div>
              <span className="text-sm group-hover:text-white/90 transition-colors">+216 93 642 505</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="bg-primary-foreground/10 p-2 rounded-full">
                <Mail className="h-5 w-5" />
              </div>
              <span className="text-sm group-hover:text-white/90 transition-colors">Caissontunisie20@gmail.com</span>
            </div>
          </div>
          <div className="flex space-x-4">
            {[
              { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61566954398857" },
              { icon: Instagram, href: "https://instagram.com/caissontunisie" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/ste-caisson-tunisie-b89763201/" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{social.icon.name}</span>
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8 md:mt-0 md:w-1/2 lg:w-1/3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-semibold mb-4">Produits</h3>
              <ul role="list" className="space-y-3">
                {[
                  { name: "Coffrets tunnel", href: "/produits/coffrets-tunnel" },
                  { name: "Panneaux isolants", href: "/produits/panneaux-isolants" },
                  { name: "Fish Box", href: "/produits/fish-box" },
                  { name: "Tous les produits", href: "/produits" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="text-sm hover:text-white flex items-center group">
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-6">Société</h3>
              <ul role="list" className="space-y-3">
                {[
                  { name: "À propos", href: "/a-propos" },
                  { name: "Services", href: "/services" },
                  { name: "Projets", href: "/projets" },
                  { name: "Contact", href: "/contact" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="text-sm hover:text-white flex items-center group">
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold mb-2">Newsletter</h3>
            <p className="text-xs mb-3 text-primary-foreground/80">Restez informé de nos dernières actualités et offres</p>
            {subscribed ? (
              <div className="bg-primary-foreground/10 p-2 rounded-md text-center">
                <p className="text-xs">Merci pour votre inscription!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 text-xs h-8"
                />
                <Button 
                  type="submit" 
                  variant="secondary"
                  size="sm"
                  className="h-8 px-3 text-xs"
                >
                  S'inscrire
                </Button>
              </form>
            )}
          </div>
        </motion.div>

        <motion.div
  className="mt-8 md:mt-0 md:w-full lg:w-1/3"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.4 }}
>
  <h3 className="text-sm font-semibold mb-4">Notre emplacement</h3>
  <div className="mt-2 h-64 rounded-lg overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.123456789012!2d10.7560129!3d35.7245437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020d523c895777%3A0x46638e037bd253ea!2sSCT!5e0!3m2!1sen!2stn!4v1650000000000!5m2!1sen!2stn"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Emplacement SCT"
      className="rounded-lg"
    ></iframe>
  </div>
</motion.div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-primary-foreground/10 px-6 py-6 text-center">
        <p className="text-xs">&copy; {new Date().getFullYear()} Société Caisson Tunisie. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
