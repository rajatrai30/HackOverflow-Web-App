import {useState, useEffect} from "react";
// import { NavBar } from "./NavBar";
import { NavBar } from "./NavBar";
import Footer from "./Footer";
import FaceGallery from "./FaceGallery/FaceGallery";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const GalleryLayout = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <>
      <NavBar />
      {windowSize[0] < 600 && <MobileNavbar />}
      <FaceGallery />
      <Footer />
    </>
  );
};

export default GalleryLayout;
