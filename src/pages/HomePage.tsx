import React from "react";

import MyCarousel from "../components/HomePageCarousel";
import HomePageSecondSection from "../components/HomePageSecondSection";

const HomePage: React.FC = () => {
  return (
    <div className="welcome-page text-center">
      <MyCarousel />
      <HomePageSecondSection />
    </div>
  );
};

export default HomePage;
