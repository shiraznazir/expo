"use client";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      interval={3000}
      showStatus={false}
    >
      <div>
        <Image
          src={img1}
          alt="Slide 1"
          width={800}
          height={400}
          priority
          layout="intrinsic"
        />
      </div>
      <div>
        <Image
          src={img2}
          alt="Slide 2"
          width={800}
          height={400}
          layout="intrinsic"
        />
      </div>
      <div>
        <Image
          src={img3}
          alt="Slide 3"
          width={800}
          height={400}
          layout="intrinsic"
        />
      </div>
    </Carousel>
  );
};

export default ImageSlider;
