import React, { useState, useEffect } from 'react';
import img1 from '../image/Screenshot 2024-06-05 165758.png'
import testimonials from '../../data/testimonials.json'

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoSlide);
  }, [length]);

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  const getVisibleTestimonials = () => {
    const startIndex = current;
    const visibleTestimonials = [];
    for (let i = 0; i < 3; i++) {
      visibleTestimonials.push(testimonials[(startIndex + i) % length]);
    }
    return visibleTestimonials;
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
      <div className="flex items-center justify-center relative">
        <button onClick={prevSlide} className="absolute left-0 text-2xl z-10 p-2">
          &#8249;
        </button>
        <div className="flex overflow-hidden w-full">
          {getVisibleTestimonials().map((testimonial) => (
            <div key={testimonial.id} className="w-1/3 p-4 transition-transform duration-500 ease-in-out transform">
              <div className="bg-white shadow-md rounded-md p-6 text-center">
                {/* <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                /> */}
                <img src={img1}/>
                <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{testimonial.course}</p>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <a href={testimonial.video} className="text-blue-500 underline">
                  Watch Video
                </a>
              </div>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="absolute right-0 text-2xl z-10 p-2">
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
