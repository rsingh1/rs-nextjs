"use client"
import React, { useState } from 'react'
import ProfessionalSummary from '../../components/sections/ProfessionalSummary'
import WorkHistory from '../../components/sections/WorkHistory'
import Education from '../../components/sections/Education'
import ActivitiesInterests from '../../components/sections/ActivitiesInterests'
import WebsitesPortfolios from '../../components/sections/WebsitesPortfolios'
import Skills from '../../components/sections/Skills'
import Contact from '../../components/sections/Contact'
export default function HomePage() {
  const [mobilePage, setMobilePage] = useState(0)

  return (
    <div className="max-w-5xl mx-auto">
      <div className="md:hidden flex justify-center gap-2 my-4">
        <button
          onClick={() => setMobilePage(0)}
          className={`px-4 py-2 rounded ${mobilePage === 0 ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}
        >
          Page 1
        </button>
        <button
          onClick={() => setMobilePage(1)}
          className={`px-4 py-2 rounded ${mobilePage === 1 ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}
        >
          Page 2
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div
          className={`bg-white rounded shadow p-6 md:flex-[7] md:pr-6 transition-all ${
            mobilePage === 0 ? 'block' : 'hidden md:block'
          }`}
        >
          <ProfessionalSummary />
          <WorkHistory />
          <Education />
          <ActivitiesInterests />
        </div>

        <aside
          className={`bg-white rounded shadow p-6 md:flex-[3] md:pl-6 transition-all ${
            mobilePage === 1 ? 'block' : 'hidden md:block'
          }`}
        >
          <Contact />
          <WebsitesPortfolios />
          <Skills />
        </aside>
      </div>
    </div>
  )
}
