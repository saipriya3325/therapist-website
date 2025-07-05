'use client';

export default function Services() {
  return (
    <section className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Services</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Individual Therapy</h3>
          <p className="text-gray-600 mb-2">Explore anxiety, stress, and life transitions.</p>
          <p className="font-semibold">₹1200 / 50 min</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Trauma Counseling</h3>
          <p className="text-gray-600 mb-2">Healing past emotional wounds through support.</p>
          <p className="font-semibold">₹1400 / 50 min</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Online Sessions</h3>
          <p className="text-gray-600 mb-2">Flexible, secure video therapy sessions (Mon–Fri).</p>
          <p className="font-semibold">Available across India</p>
        </div>
      </div>
    </section>
  );
}