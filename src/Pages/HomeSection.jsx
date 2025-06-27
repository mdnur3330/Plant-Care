




import React from "react";
import item4 from "../assets/item-instagram-2.jpg";

const HomeSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Text Content */}
          <div className="lg:pr-12">
            <div className="mb-5">
              <div className="flex items-center justify-start w-14 h-14 rounded-full bg-green-100">
                <svg
                  className="w-8 h-8 text-green-600 mx-auto"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>

            <h2 className="mb-4 text-4xl font-bold text-gray-800 leading-tight">
              Decorate your <br className="hidden md:block" />
              home{" "}
              <span className="text-green-600 inline-block">
                with plants
              </span>
            </h2>

            <p className="mb-6 text-gray-600 text-lg leading-relaxed">
              Add a touch of nature to your home with beautiful, refreshing indoor plants.
              Not only do they enhance the beauty of your space, but they also purify
              the air and create a calm, peaceful atmosphere. Whether it's a cozy corner
              or your work desk, plants bring life, color, and freshness wherever they're placed.
              Make your home feel more alive — naturally.
            </p>

            <hr className="mb-6 border-t border-gray-300" />
          </div>

          {/* Image Content */}
          <div>
            <img
              className="w-full h-60 sm:h-96 object-cover rounded-xl shadow-lg"
              src={item4}
              alt="Decorative plant"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

