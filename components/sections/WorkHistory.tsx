import SectionTitle from "./SectionTitle";

export default function WorkHistory() {
  return (
    <section className="mb-6">
      <SectionTitle>Work History</SectionTitle>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm text-gray-600">
            <strong>Senior Engineer — Company A</strong>
            <span>2020 — Present</span>
          </div>
          <p className="text-sm text-gray-700 mt-1">Key achievements: built X, improved Y, reduced Z.</p>
        </div>

        <div>
          <div className="flex justify-between text-sm text-gray-600">
            <strong>Engineer — Company B</strong>
            <span>2017 — 2020</span>
          </div>
          <p className="text-sm text-gray-700 mt-1">Contributed to A, B, and C.</p>
        </div>
      </div>
    </section>
  )
}