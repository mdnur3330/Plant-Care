

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import item1 from "../assets/soil-8080788_1920.jpg";
import item2 from "../assets/ai-generated-9016493_1920.jpg";
import item3 from "../assets/pexels-shvetsa-11286066.jpg";
import { Navigation } from "swiper/modules";

const slides = [
  {
    title: "Bring Nature Home",
    highlight: "Refresh Your Space with Indoor Plants",
    description:
      "Add a touch of nature to your home with beautiful, refreshing indoor plants. Not only do they enhance the beauty of your space, but also purify the air and boost your mood.",
    image: item1,
  },
  {
    title: "Plant Care Essentials",
    highlight: "Keep Your Plants Thriving",
    description:
      "Learn the fundamentals of proper plant care — watering, light, soil, and regular maintenance to help your greens thrive year-round.",
    image: item2,
  },
  {
    title: "Plant Diagnosis & Treatment",
    highlight: "Healthy Plants Start Here",
    description:
      "Identify common issues, apply the right treatments, and ensure your plants recover quickly and grow stronger every day.",
    image: item3,
  },
];

export default function Hero() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <div className="overflow-hidden bg-green-50">
            <div className="px-4 py-16 mx-auto max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row gap-8">
           
                <div className="w-full max-w-xl xl:w-7/12 text-center xl:text-left">
                  <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold leading-tight mb-4">
                    {slide.title}
                  </h2>
                  <h3 className="text-lg sm:text-xl text-green-700 font-semibold mb-6">
                    {slide.highlight}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {slide.description}
                  </p>
                </div>

        
                <div className="w-full max-w-xl xl:w-5/12">
                  <div className="relative bg-white rounded-xl shadow-xl p-5">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="rounded-lg object-cover w-full h-60 sm:h-80 lg:h-96"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
