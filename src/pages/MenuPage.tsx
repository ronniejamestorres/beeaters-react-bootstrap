import React from "react";
import ButtonDark from "../components/ButtonDark";
import MenuListed from "../components/MenuListed";
import MenuTrending from "../components/MenuTrending";
import MenuFeatured from "../components/MenuFeatured";
import MenuNew from "../components/MenuNew";

const MenuPage: React.FC = () => {
  return (
    <div className="menu-page">
      <h1 className="text-center m-5">Menu</h1>
      <MenuTrending />
      <MenuFeatured />
      <MenuNew />
      <MenuListed />
      <ButtonDark />
    </div>
  );
};

export default MenuPage;
