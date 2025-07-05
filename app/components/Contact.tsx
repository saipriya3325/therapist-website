'use client';

export default function Contact() {
  return (
    <section className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <form
        className="max-w-xl mx-auto space-y-4"
        action="https://formspree.io/f/mnqedwlk" // Replace with your own Formspree form ID
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 rounded border"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 rounded border"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 rounded border h-32"
          required
        />
        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}