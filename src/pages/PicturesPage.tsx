import React from "react";
import PicturesPageCarousel from "../components/PicturesPageCarousel";

const PicturesPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-center m-5">Pictures</h1>
      <PicturesPageCarousel />
    </div>
  );
};

export default PicturesPage;
