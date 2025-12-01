import React from 'react'

export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-semibold mb-3">{children}</h2>
}