import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section className="mb-6">
      <SectionTitle>Contact</SectionTitle>
      <div className="text-sm text-gray-700 space-y-1">
        <div>Email: you@example.com</div>
        <div>Phone: +1 123 456 7890</div>
        <div>Location: City, Country</div>
      </div>
    </section>
  )
}