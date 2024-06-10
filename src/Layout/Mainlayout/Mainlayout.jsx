// import { Outlet } from "react-router-dom";

import Banner from "../../Components/Banner";
import Contact from "../../Components/Contact";
import FeaturedArtist from "../../Components/FeaturedArtist";
import FeaturedServices from "../../Components/FeaturedServices";
import Footer from "../../Components/Footer";
import StreamingServices from "../../Components/StreamingServices";


const Mainlayout = () => {
  return (
    <div>
      <Banner></Banner>
      <StreamingServices></StreamingServices>
      <FeaturedServices></FeaturedServices>
      <FeaturedArtist></FeaturedArtist>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Mainlayout;
