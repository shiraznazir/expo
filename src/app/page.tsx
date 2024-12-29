// import Image from "next/image";
import Navbar from "./components/Home/Navbar";
import Header from "./components/Home/Header";
import ImageSlider from "./components/Helper/ImageSlider";
import About from "./components/About/About";
import Works from "./components/Offers/Works";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <ImageSlider />
      <About />
      <Works />
    </div>
  );
}
