import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Nav";
import "./Results.css";
import image1 from './image/Screenshot 2024-06-03 120606.png';
import image2 from './image/Screenshot 2024-06-03 120404.png';
import image3 from './image/Screenshot 2024-06-03 120650.png';
import image4 from './image/Screenshot 2024-06-03 120755.png';
import image5 from './image/Screenshot 2024-06-11 131416.png';

const rankersData = [
  { id: 1, rank: 15, name: "Murikinati Sai Divya Teja Reddy", regNo: "00006840499", imageUrl: image1 },
  { id: 2, rank: 19, name: "Rishi Shekher Shukla", regNo: "00005711409", imageUrl: image2 },
  { id: 3, rank: 25, name: "Rachit Aggarwal", regNo: "00002599034", imageUrl: image3 },
  { id: 4, rank: 34, name: "JEE Ranker 4", regNo: "00003456789", imageUrl: image4 },
  // Add more rankers as needed
];

function Results() {
  const [timeoutId, setTimeoutId] = useState(null);
  const [autoNextId, setAutoNextId] = useState(null);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);

  useEffect(() => {
    const timeRunning = 3000;
    const timeAutoNext = 7000;

    const showSlider = (type) => {
      if (!sliderRef.current || !thumbnailRef.current) return;

      const sliderItems = sliderRef.current.querySelectorAll(".item");
      const thumbnailItems = thumbnailRef.current.querySelectorAll(".item");

      if (type === "next") {
        sliderRef.current.appendChild(sliderItems[0]);
        thumbnailRef.current.appendChild(thumbnailItems[0]);
        carouselRef.current.classList.add("next");
      } else {
        sliderRef.current.prepend(sliderItems[sliderItems.length - 1]);
        thumbnailRef.current.prepend(thumbnailItems[thumbnailItems.length - 1]);
        carouselRef.current.classList.add("prev");
      }

      clearTimeout(timeoutId);
      setTimeoutId(setTimeout(() => {
        carouselRef.current.classList.remove("next");
        carouselRef.current.classList.remove("prev");
      }, timeRunning));

      clearTimeout(autoNextId);
      setAutoNextId(setTimeout(() => {
        showSlider('next');
      }, timeAutoNext));
    };

    const nextDom = document.getElementById("next");
    const prevDom = document.getElementById("prev");

    nextDom.onclick = () => showSlider("next");
    prevDom.onclick = () => showSlider("prev");

    setAutoNextId(setTimeout(() => {
      showSlider('next');
    }, timeAutoNext));

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(autoNextId);
    };
  }, [timeoutId, autoNextId]);

  return (
    <>
      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={sliderRef}>
          {rankersData.map((ranker, index) => (
            <div className="item" key={index}>
              <img src={ranker.imageUrl} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="thumbnail" ref={thumbnailRef}>
          {rankersData.map((ranker, index) => (
            <div className="item" key={index}>
              <img src={ranker.imageUrl} alt={`Thumbnail ${index + 1}`} />
              <div className="content">
                <div className="title">{ranker.name}</div>
                <div className="description">Rank: {ranker.rank}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev">{"<"}</button>
          <button id="next">{">"}</button>
        </div>

        <div className="time"></div>
      </div>

      <div className="container mx-auto p-4">
        <h2 className="text-center text-2xl font-bold mb-4">Our Top Rankers in JEE (Main) 2024</h2>
        <p className="text-center mb-6">All the results are All India Ranking (AIR*)</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rankersData.slice(0, 3).map(ranker => (
            <div key={ranker.id} className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
              <img src={ranker.imageUrl} alt={ranker.name} className="w-24 h-24 rounded-full mx-auto mb-2" />
              <h3 className="text-center text-2xl">{ranker.rank}<sup>th</sup></h3>
              <p className="text-center font-semibold">{ranker.name}</p>
              <p className="text-center">Classroom</p>
              <p className="text-center">Reg No: {ranker.regNo}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          {rankersData.slice(3).map(ranker => (
            <div key={ranker.id} className="bg-white text-gray-800 p-4 rounded-lg shadow-lg">
              <img src={ranker.imageUrl} alt={ranker.name} className="w-16 h-16 rounded-full mx-auto mb-2" />
              <h3 className="text-center text-xl">{ranker.rank}<sup>th</sup></h3>
              <p className="text-center font-semibold">{ranker.name}</p>
              <p className="text-center">Classroom</p>
              <p className="text-center">Reg No: {ranker.regNo}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Results;
