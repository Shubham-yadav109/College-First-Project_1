import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
// import PlantsGrow from "./PlantsGrow/PlantsGrow";
import AboutUs from "./AboutUs/AboutUs";
import RewardsClub from "./RewardsClub/RewardsClub";
import HappyPlantParents from "./HappyPlantParents/HappyPlantParents";
import PlantSubscription from "./PlantSubscription/PlantSubscription";
import WhyTreeSewa from "./WhyTreeSewa/WhyTreeSewa";
import ShoptheLook from "./ShoptheLook/ShoptheLook";
import Bestsellers from "./Bestsellers/Bestsellers";
import YourBestPicks from "./YourBestPicks/YourBestPicks";
import PlantCategories from "./PlantCategories/PlantCategories";
import ImageSlider from "./ImageSlider/ImageSlider";
import GetOffer from "./GetOffer/GetOffer";
import Check from "./Check/Check";

const Home = () => {
  return (
    <>
      <Navbar />
      <Check />
      <GetOffer />
      <ImageSlider />
      <PlantCategories />
      <YourBestPicks />
      <Bestsellers />
      <ShoptheLook />
      <WhyTreeSewa />
      <PlantSubscription />
      <HappyPlantParents />
      <RewardsClub />
      <AboutUs />
      {/* <PlantsGrow /> */}
      <Footer />
    </>
  );
};

export default Home;
