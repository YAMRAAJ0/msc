import Carousel from "./slidebar/Carousel";
import ContactForm from "./ContactForm";
import TestimonialSlider from './slidebar/TestimonialSlider';
import categories from '../data/data.json';
import courses from "../data/popularCourses.json";
import faqs from "../data/question.json"
import features from '../data/features.json'
import React, { useState } from 'react';
import image1 from "./image/building-icon.svg";
import image2 from "./image/teacher-icon.svg";
import image3 from "./image/engg-doc-icon.svg";
import image4 from "./image/Screenshot 2024-06-03 125118.png";
import image5 from './image/Screenshot 2024-06-05 151544.png';
import announcementsAndNews from '../data/announcementsAndNews.json'
import Results from '../data/Results.json';

const stats = [
  { img: image1, count: "300+", label: "Coaching Centers in India" },
  { img: image3, count: "122,000+", label: "math science classesians Qualified NEET & JEE in 2023" },
  { img: image2, count: "5000+", label: "Expert Faculty" }
];


const Home = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <>
      <Carousel />
      <div className="md:mx-32 mx-auto">
        <div className="bg-gray-100 py-12 my-8 shadow-xl text-center">
          <h3 className="text-xl font-bold text-blue-800">35+ Years of Legacy</h3>
          <div className="container max-w-7xl mx-auto px-4 flex flex-wrap justify-between text-center">
            {stats.map(({ img, count, label }, index) => (
              <div key={index} className="w-full sm:w-1/3 md:w-1/4 p-4">
                <img src={img} className="mx-auto" alt={label} />
                <h3 className="text-xl font-bold text-gray-800">{count}</h3>
                <p className="text-sm text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scholarships Section */}
        <div>
          <h1 className="text-center text-5xl my-8 font-bold text-red-600">Scholarships</h1>
          <img src={image4} className="mx-auto pb-8 w-full" alt="Scholarships" />
        </div>

        {/* Popular Courses Section */}
        <div className="popular-courses border border-gray-300 bg-blue-50 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-center mb-8 text-xl font-semibold pt-10 text-blue-800">Popular Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {courses.map(({ category, details }, index) => (
              <div key={index} className="course border border-gray-300 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 bg-blue-800 text-white text-center py-4 rounded-t-lg">{category}</h3>
                {details.map((detail, idx) => (
                  <p key={idx} className="mb-2 px-4"><span className="inline-block mr-2">&#8226;</span>{detail}</p>
                ))}
                <div className="mt-4">
                  <a href="#" className="block py-3 px-6 text-blue-800 border-t border-blue-200 rounded-md hover:bg-red-600 transition duration-300 text-center">Check More</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Announcements & News Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {announcementsAndNews.map(({ title, details }, index) => (
            <div key={index} className="course border border-gray-300 rounded-lg p-4 shadow-xl">
              <h3 className="text-lg font-semibold mb-4 bg-blue-800 text-white text-center py-4 rounded-t-lg">{title}</h3>
              {details.map((detail, idx) => (
                <p key={idx} className="mb-2"><span className="inline-block mr-2">&#8226;</span>{detail}</p>
              ))}
              <div className="mt-4">
                <a href="#" className="block py-3 px-6 text-blue-600 border-t border-blue-200 rounded-md hover:bg-red-600 transition duration-300 text-center">Check More</a>
              </div>
            </div>
          ))}
        </div>

        {/* Official Answer Keys & Solutions Section */}
        <div className="bg-blue-50 py-8 mb-8 px-4">
          <div className="container mx-auto my-8">
            <h2 className="text-3xl font-bold text-center mb-8">Official Answer Keys & Solutions</h2>
            <div className="flex justify-center space-x-4">
              {categories.map(({ title, links }, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-4 w-1/3">
                  <h3 className="text-xl font-semibold mb-4">{title}</h3>
                  <ul>
                    {links.map(({ name, download }, linkIndex) => (
                      <li key={linkIndex} className="mb-2">
                        <a href={download} className="text-blue-600 underline">
                          {name}
                        </a>
                      </li>
                    ))}
            </ul>
            <div className="text-center mt-4">
              <a href="#" className="text-blue-500 underline">
                See all answers/ solutions
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
        <div className="popular-courses border border-gray-300 bg-blue-50 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-center mb-8 text-xl font-semibold pt-10 text-blue-800">Outstanding Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            { Results.map(( Result, index) => (
              <div key={index} className="course border border-gray-300 rounded-lg ">
                <h3 className="text-lg font-semibold mb-4 bg-blue-800 text-white text-center py-4 rounded-t-lg">{ Result.category}</h3>
             <img src={image5}/>
                <div className="mt-4">
                  <a href="#" className="block py-3 px-6 text-blue-800 border-t border-blue-200 rounded-md hover:bg-red-600 transition duration-300 text-center">See all results</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <TestimonialSlider/>
        <ContactForm />
        <div className="bg-blue-100 py-8 mt-8 rounded-2xl">
      <h2 className="text-center text-2xl font-bold mb-8">
        Stay ahead with all-round performance in your chosen stream
      </h2>
      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
            <ul className="list-disc ml-8">
              {feature.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="max-w-4xl mx-auto p-4 mt-8">
      <h2 className="text-center text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left p-4 bg-white border border-gray-300 rounded-md focus:outline-none"
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="text-lg">{activeIndex === index ? '▲' : '▼'}</span>
            </div>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-gray-100 border border-gray-300 border-t-0 rounded-md">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
      </div>
    </>
  );
};

export default Home;
