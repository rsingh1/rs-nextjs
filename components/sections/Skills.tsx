import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section className="mb-6">
      <SectionTitle>Skills</SectionTitle>
      <div className="flex flex-wrap gap-2">
        {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js'].map((s) => (
          <span key={s} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-800">
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}