"use client"

import { useEffect, useState } from "react"

interface StructuredDataProps {
  type: "Product" | "Article" | "FAQPage" | "Organization" | "LocalBusiness" | "BreadcrumbList" | string
  data: Record<string, any>
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
