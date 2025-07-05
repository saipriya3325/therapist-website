'use client';

export default function About() {
  return (
    <section className="p-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Meet Dr. Serena Blake</h2>
    <img
        src="/dr-serena.png"
        alt="Dr. Serena"
        className="w-40 h-40 mx-auto rounded-full border-4 border-blue-300 mb-4"
    />
      <p className="text-gray-700 max-w-2xl mx-auto text-lg">
        I’m Dr. Serena Blake — a licensed therapist who helps people heal from anxiety, trauma, and burnout. I believe therapy should be warm, empowering, and practical. I offer virtual sessions tailored to your needs and goals.
      </p>
    </section>
  );
}