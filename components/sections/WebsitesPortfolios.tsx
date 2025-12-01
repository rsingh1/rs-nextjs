import SectionTitle from "./SectionTitle";

export default function WebsitesPortfolios() {
  return (
    <section className="mb-6">
      <SectionTitle>Websites & Portfolio</SectionTitle>
      <ul className="text-sm text-blue-600 space-y-1">
        <li><a href="#" className="underline">Portfolio</a></li>
        <li><a href="#" className="underline">GitHub</a></li>
        <li><a href="#" className="underline">Blog</a></li>
      </ul>
    </section>
  )
}