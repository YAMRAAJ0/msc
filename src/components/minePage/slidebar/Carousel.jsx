import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'
import image1 from '../image/Screenshot 2024-06-03 124013.png';
import image2 from '../image/Screenshot 2024-06-03 124305.png';
import image3 from '../image/Screenshot 2024-06-03 124459.png';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-full mx-auto shadow-xl mt-16">
      <Slider {...settings}>
        <div className="slide">
          <img src={image1} alt="Slide 1" className="w-full" />
        </div>
        <div className="slide">
          <img src={image2} alt="Slide 2" className="w-full" />
        </div>
        <div className="slide">
          <img src={image3} alt="Slide 3" className="w-full" />
        </div>
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute right-0 transform -translate-y-1/2 top-1/2 bg-blue-500 rounded-full p-2 z-10`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-0 transform -translate-y-1/2 top-1/2 bg-blue-500 rounded-full p-2 z-10`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

export default Carousel;
