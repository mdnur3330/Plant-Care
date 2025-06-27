
import React from "react";
import product1 from "../assets/product-item-1.jpg";
import product8 from "../assets/product-item-17.jpg";
import product2 from "../assets/product-item-2.jpg";
import product3 from "../assets/product-item-20.jpg";
import product4 from "../assets/product-item-21.jpg";
import product5 from "../assets/product-item-4.jpg";
import product6 from "../assets/product-item-6.jpg";
import product7 from "../assets/product-item-7.jpg";

const TopRatingBestSelling = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            🌟 Top Rating & Best Selling
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Show off your green style with beautiful plant stands. Elevate your indoor garden with stylish, sturdy, and decorative stands that inspire creativity. Add height, dimension, and personality to any space — and turn your plants into living art.
          </p>
        </div>


        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[product1, product2, product3, product4, product5, product6, product7, product8].map(
            (product, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden transition-transform duration-300 transform rounded-xl shadow-md hover:-translate-y-1 hover:shadow-xl bg-white"
              >
                <img
                  className="object-cover w-full h-60 md:h-64 xl:h-80 transition duration-500 hover:scale-105"
                  src={product}
                  alt={`Product ${idx + 1}`}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TopRatingBestSelling;

