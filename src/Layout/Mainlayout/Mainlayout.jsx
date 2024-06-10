// import { Outlet } from "react-router-dom";

import Banner from "../../Components/Banner";
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
      <Footer></Footer>
    </div>
  );
};

export default Mainlayout;
