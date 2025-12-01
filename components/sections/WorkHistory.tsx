import SectionTitle from "./SectionTitle";

export default function WorkHistory() {
  return (
    <section className="mb-6">
      <SectionTitle>Work History</SectionTitle>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm text-gray-600">
            <strong>Senior Specialist — Credera - Remote</strong>
            <span>01/2023 — Current</span>
          </div>
          <div className="text-sm text-gray-700 mt-1">
            <ul className="list-disc pl-5 space-y-1">
              <li>Led the architecture and delivery of enterprise-grade web applications, 99% on-time releases and 15% uplift in revenue.</li>
              <li>Optimized performance by reducing page load times from 2.5 sec to 1.2 sec via Next.js optimization and Azure CDN.</li>
              <li>Worked alongside a team, overseeing sprint planning, code reviews, and production deployments in agile workflows.</li>
              <li>Integrated Adobe AEM for content delivery, and implemented Azure Kubernetes Service for scalable CI/CD pipelines.</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm text-gray-600">
            <strong>Associate Lead — Nagarro - Gurugram</strong>
            <span>12/2017 — 08/2022</span>
          </div>
          <div className="text-sm text-gray-700 mt-1">
            <ul className="list-disc pl-5 space-y-1">
              <li>Delivered a real-time crew roster management system for a leading European airline, reducing scheduling conflicts by 40%.</li>
              <li>Built a real-time manufacturing operations dashboard, reducing incident detection time from 15 mins to under 2 mins.</li>
              <li>Migrated legacy systems from on-premises to IBM Private Cloud, improving uptime and reducing infrastructure costs.</li>
              <li>Mentored junior developers on coding best practices, increasing code quality and reducing defects by 30%.</li>
              <li>Awarded Employee of the Quarter and received multiple client recognitions for high-quality, on-time delivery.</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm text-gray-600">
            <strong>Software Engineer II — MAQ Software - Hyderabad</strong>
            <span>10/2015 — 12/2017</span>
          </div>
          <div className="text-sm text-gray-700 mt-1">
            <ul className="list-disc pl-5 space-y-1">
              <li>Worked as a core member of the service team responsible for the reporting framework dedicated to Microsoft.</li>
              <li>Built an application to fetch data from several upstream sources, warehousing the data using SSIS, SSAS, and MSSQL, and creating Power BI dashboards integrated into an AngularJS and Vanilla JS application.</li>
              <li>Increased client revenue by up to 25% through improved business decision support.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
