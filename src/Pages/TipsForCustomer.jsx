
import React from 'react';

const TipsForCustomer = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-green-50 via-green-100 to-green-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6 tracking-tight">
                    🌿 Essential Plant Care Tips for Beginners
                </h2>
                
                {/* Description */}
                <p className="text-gray-700 mb-14 max-w-3xl mx-auto text-lg leading-relaxed">
                    Whether you're nurturing your first succulent or planning a full indoor jungle, these practical tips will ensure your plants stay healthy and vibrant.
                </p>

                {/* Tips Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">

                    {/* Tip 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
                        <h3 className="text-xl font-semibold text-green-800 mb-3">🪴 Know Your Plant</h3>
                        <p className="text-gray-600">
                            Every plant is different. Learn about its sunlight, water, and soil preferences.
                        </p>
                    </div>

                    {/* Tip 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
                        <h3 className="text-xl font-semibold text-green-800 mb-3">💧 Don’t Overwater</h3>
                        <p className="text-gray-600">
                            Too much water can be worse than too little. Check soil moisture before watering.
                        </p>
                    </div>

                    {/* Tip 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
                        <h3 className="text-xl font-semibold text-green-800 mb-3">☀️ Light Matters</h3>
                        <p className="text-gray-600">
                            Place plants where they get the right amount of natural light for their type.
                        </p>
                    </div>

                    {/* Tip 4 */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
                        <h3 className="text-xl font-semibold text-green-800 mb-3">🧴 Clean the Leaves</h3>
                        <p className="text-gray-600">
                            Dust buildup blocks sunlight. Gently wipe leaves with a soft damp cloth.
                        </p>
                    </div>

                    {/* Tip 5 */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
                        <h3 className="text-xl font-semibold text-green-800 mb-3">🔄 Rotate Regularly</h3>
                        <p className="text-gray-600">
                            Turn your plants every week so all sides get equal light and grow evenly.
                        </p>
                    </div>

                    {/* Tip 6 */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
                        <h3 className="text-xl font-semibold text-green-800 mb-3">🌿 Use Proper Pots</h3>
                        <p className="text-gray-600">
                            Ensure pots have drainage holes to avoid root rot from water buildup.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TipsForCustomer;