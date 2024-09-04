import React from "react";

type TrendingMenuItem = {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
};

const trendingMenuItems: TrendingMenuItem[] = [
  {
    name: "Tomato",
    price: "6€",
    description: "Tomatos, yellow onions, garlic, basil, sugar, black pepper",
    imageUrl:
      "https://ronniejamestorres.github.io/restaurant-css-framework/img/menu/red1.jpg",
  },
  {
    name: "Spicy and hot",
    price: "7€",
    description: "Chili pepper, aromatic vegetables, tomato, potatoes",
    imageUrl:
      "https://ronniejamestorres.github.io/restaurant-css-framework/img/menu/red2.jpg",
  },
  {
    name: "Spicy beef",
    price: "6€",
    description:
      "Sliced beef, chili pepper, corn, mushrooms, carrots, zucchini",
    imageUrl:
      "https://ronniejamestorres.github.io/restaurant-css-framework/img/menu/brown1.jpg",
  },
  {
    name: "Mashroom",
    price: "7€",
    description: "Mushrooms, carrots, potatoes, chili pepper, onions",
    imageUrl:
      "https://ronniejamestorres.github.io/restaurant-css-framework/img/menu/brown2.jpg",
  },
];

const MenuTrending: React.FC = () => {
  return (
    <div className="menu-page">
      <div className="container"></div>
      <div className="container-fluid">
        <div className="row">
          {trendingMenuItems.map((item, index) => (
            <div key={index} className="col-xl-3 col-lg-3 col-md-3 mb-4">
              <div className="card bg-white rounded shadow-sm">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="img-fluid card-img-top"
                />
                <div className="p-4">
                  <h5>
                    <a href="#" className="text-dark">
                      {item.name}
                    </a>
                  </h5>
                  <p className="small text-muted mb-0">{item.description}</p>
                  <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                    <p className="small mb-0">
                      <span className="font-weight-bold">{item.price}</span>
                    </p>
                    <div className="badge bg-danger text-white px-3 rounded-pill">
                      Trending
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuTrending;
