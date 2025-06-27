import React from 'react';

const Support = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-green-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-green-800 mb-4">🛠️ Support</h2>
    <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
      Need help using HariCare? We're here to make your experience smooth and simple.
    </p>

    <div className="p-6 border border-green-100 rounded-lg bg-white shadow hover:shadow-lg transition duration-300 max-w-xl mx-auto text-left">
      <h3 className="text-xl font-semibold text-green-700 mb-2">Support Email</h3>
      <p className="text-gray-600 mb-2">
        Facing a bug or having trouble with features? Let us know at:{" "}
        <a
          href="mailto:support@haricare.com"
          className="text-green-700 underline hover:text-green-900"
        >
          support@haricare.com
        </a>
      </p>
      <p className="text-gray-600">
        Our support team is active Sunday–Thursday, 10am–6pm (GMT+6).
      </p>
    </div>
  </div>
</section>

    );
};

export default Support;