// import { Outlet } from "react-router-dom";

import Banner from "../../Components/Banner";
import FeaturedServices from "../../Components/FeaturedServices";
import Footer from "../../Components/Footer";


const Mainlayout = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedServices></FeaturedServices>
      <Footer></Footer>
    </div>
  );
};

export default Mainlayout;
