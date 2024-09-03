import React from "react";
import RestaurantPageTheChef from "../components/RestaurantPageTheChef";
import RestaurantPageTheRestaurant from "../components/RestaurantPageTheRestaurant";
import RestaurantPageMap from "../components/RestaurantPageMap";
import RestaurantPageServices from "../components/RestaurantPageServices";

const RestaurantPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-center m-5">Restaurant</h1>
      <RestaurantPageTheChef />
      <RestaurantPageTheRestaurant />
      <RestaurantPageMap />
      <RestaurantPageServices />
    </div>
  );
};

export default RestaurantPage;
