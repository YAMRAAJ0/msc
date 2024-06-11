import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Nav";
import "./Results.css";
import image1 from './image/Screenshot 2024-06-03 120606.png';
import image2 from './image/Screenshot 2024-06-03 120404.png';
import image3 from './image/Screenshot 2024-06-03 120650.png';
import image4 from './image/Screenshot 2024-06-03 120755.png';
const rankersData = [
  { id: 1, rank: 15, name: "Murikinati Sai Divya Teja Reddy", regNo: "00006840499", imageUrl: "/path/to/image1.jpg" },
  { id: 2, rank: 19, name: "Rishi Shekher Shukla", regNo: "00005711409", imageUrl: "/path/to/image2.jpg" },
  { id: 3, rank: 25, name: "Rachit Aggarwal", regNo: "00002599034", imageUrl: "/path/to/image3.jpg" },
  { id: 4, rank: 34, name: "JEE Ranker 4", regNo: "00003456789", imageUrl: "/path/to/image4.jpg" },
  { id: 5, rank: 65, name: "JEE Ranker 5", regNo: "00006543210", imageUrl: "/path/to/image5.jpg" },
  { id: 6, rank: 72, name: "JEE Ranker 6", regNo: "00007234567", imageUrl: "/path/to/image6.jpg" },
  { id: 7, rank: 81, name: "JEE Ranker 7", regNo: "00008123456", imageUrl: "/path/to/image7.jpg" },
  { id: 8, rank: 34, name: "JEE Ranker 4", regNo: "00003456789", imageUrl: "/path/to/image4.jpg" },
  { id: 9, rank: 65, name: "JEE Ranker 5", regNo: "00006543210", imageUrl: "/path/to/image5.jpg" },
  { id: 10, rank: 72, name: "JEE Ranker 6", regNo: "00007234567", imageUrl: "/path/to/image6.jpg" },
  { id: 11, rank: 81, name: "JEE Ranker 7", regNo: "00008123456", imageUrl: "/path/to/image7.jpg" },
  { id: 12, rank: 34, name: "JEE Ranker 4", regNo: "00003456789", imageUrl: "/path/to/image4.jpg" },
  { id: 13, rank: 65, name: "JEE Ranker 5", regNo: "00006543210", imageUrl: "/path/to/image5.jpg" },
  { id: 14, rank: 72, name: "JEE Ranker 6", regNo: "00007234567", imageUrl: "/path/to/image6.jpg" },
  { id: 14, rank: 81, name: "JEE Ranker 7", regNo: "00008123456", imageUrl: "/path/to/image7.jpg" },
  { id: 15, rank: 34, name: "JEE Ranker 4", regNo: "00003456789", imageUrl: "/path/to/image4.jpg" },
  { id: 16, rank: 65, name: "JEE Ranker 5", regNo: "00006543210", imageUrl: "/path/to/image5.jpg" },
  { id: 17, rank: 72, name: "JEE Ranker 6", regNo: "00007234567", imageUrl: "/path/to/image6.jpg" },
  { id: 18, rank: 81, name: "JEE Ranker 7", regNo: "00008123456", imageUrl: "/path/to/image7.jpg" },
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
  }, []);

  const images = [image1, image2, image3, image4];

  return (
    <>
    
      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={sliderRef}>
          {images.map((img, index) => (
            <div className="item" key={index}>
              <img src={img} alt={`Slide ${index + 1}`} />
              {/* <div className="content">
                <div className="author">LUNDEV</div>
                <div className="title">DESIGN SLIDER</div>
                <div className="topic">ANIMAL</div>
                <div className="des">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                </div>
                <div className="buttons">
                  <button>SEE MORE</button>
                  <button>SUBSCRIBE</button>
                </div>
              </div> */}
            </div>
          ))}
        </div>

        <div className="thumbnail" ref={thumbnailRef}>
          {images.map((img, index) => (
            <div className="item" key={index}>
              <img src={img} alt={`Thumbnail ${index + 1}`} />
              <div className="content">
                <div className="title">Name Slider</div>
                <div className="description">Description</div>
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
