import ProfessionalSummary from "@/components/sections/ProfessionalSummary"
import WorkHistory from "@/components/sections/WorkHistory"
import Education from "@/components/sections/Education"
import ActivitiesInterests from "@/components/sections/ActivitiesInterests"
import WebsitesPortfolios from "@/components/sections/WebsitesPortfolios"
import Skills from "@/components/sections/Skills"
import Contact from "@/components/sections/Contact"


export function ResumePrimary() {
  return (
    <>
      <ProfessionalSummary />
      <WorkHistory />
      <Education />
      <ActivitiesInterests />
    </>
  )
}


export function ResumeSecondary() {
  return (
    <>
      <Contact />
      <WebsitesPortfolios />
      <Skills />
    </>
  )
}


export default function ResumePage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        <div className="lg:col-span-7 bg-white rounded shadow p-6">
          <ResumePrimary />
        </div>
        <div className="lg:col-span-3 bg-white rounded shadow p-6">
          <ResumeSecondary />
        </div>
      </div>
    </div>
  )
}