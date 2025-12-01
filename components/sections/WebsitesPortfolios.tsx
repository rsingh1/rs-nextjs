import SectionTitle from "./SectionTitle";

export default function WebsitesPortfolios() {
  return (
    <section className="mb-6">
      <SectionTitle>Websites & Portfolio</SectionTitle>

      <ul className="text-sm text-blue-600 space-y-1">
        <li>
          <a href="https://www.linkedin.com/in/raghufullstack/" className=" hover:underline">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/rsingh1" className=" hover:underline">
            GitHub
          </a>
        </li>

      </ul>
    </section>
  )
}