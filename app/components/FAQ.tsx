

'use client';

export default function FAQ() {
  return (
    <section className="p-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto text-left space-y-6">
        <div>
          <h4 className="font-semibold text-lg">Do you accept insurance?</h4>
          <p className="text-gray-600">No, but I can provide invoices for reimbursement.</p>
        </div>
        <div>
          <h4 className="font-semibold text-lg">Are sessions confidential?</h4>
          <p className="text-gray-600">Yes — all sessions follow strict confidentiality protocols.</p>
        </div>
        <div>
          <h4 className="font-semibold text-lg">How do I schedule a session?</h4>
          <p className="text-gray-600">Click the “Book a Free Consult” button or email me at <strong>contact@drserenablake.com</strong>.</p>
        </div>
      </div>
    </section>
  );
}