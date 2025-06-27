import React from 'react';

const ContactUs = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-green-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-green-800 mb-4">📞 Contact</h2>
    <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
      Have questions, ideas, or just want to say hello? We'd love to hear from you!
    </p>

    <div className="p-6 border border-green-100 rounded-lg bg-white shadow hover:shadow-lg transition duration-300 max-w-xl mx-auto text-left">
      <h3 className="text-xl font-semibold text-green-700 mb-2">Email Us</h3>
      <p className="text-gray-600 mb-2">
        You can reach us anytime at:{" "}
        <a
          href="mailto:haricare@gmail.com"
          className="text-green-700 underline hover:text-green-900"
        >
          haricare@gmail.com
        </a>
      </p>
      <p className="text-gray-600">
        We typically respond within 24 hours.
      </p>
    </div>
  </div>
</section>

    );
};

export default ContactUs;