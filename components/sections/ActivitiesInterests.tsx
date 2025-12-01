import SectionTitle from "./SectionTitle";

export default function ActivitiesInterests() {
  return (
    <section className="mb-6">
      <SectionTitle>Activities & Interests</SectionTitle>
      <ul className="list-disc list-inside text-sm text-gray-700">
        <li>Open-source contributions</li>
        <li>Running / fitness</li>
        <li>Technical blogging</li>
      </ul>
    </section>
  )
}