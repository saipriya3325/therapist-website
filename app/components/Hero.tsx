'use client';

export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4 text-blue-900">
        Helping You Heal, Grow & Thrive
      </h1>
      <p className="text-xl mb-6 text-blue-700 max-w-2xl">
        Online therapy with Dr. Serena Blake — compassionate care from the comfort of your home.
      </p>
      <button className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition">
        Book a Free Consult
      </button>
    </section>
  );
}