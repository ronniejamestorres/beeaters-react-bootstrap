import React from "react";

type NewMenuItem = {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  altText: string;
};

const newMenuItems: NewMenuItem[] = [
  {
    name: "Chicken potaito basilico",
    price: "7€",
    description: "Chicken, potatoes, basil, fresh oregano, hot sauce, tomatoes",
    imageUrl:
      "https://ronniejamestorres.github.io/restaurant-css-framework/img/menu/white1.jpg",
    altText: "Chicken potaito basilico",
  },
  {
    name: "Chicken potaito pineapple",
    price: "8€",
    description: "Chicken, potatoes, pineapple, tomatoes, oregano",
    imageUrl:
      "https://ronniejamestorres.github.io/restaurant-css-framework/img/menu/white2.jpg",
    altText: "Chicken potaito pineapple",
  },
];

const MenuNew: React.FC = () => {
  return (
    <div className="menu-featured">
      <div className="row">
        {newMenuItems.map((item, index) => (
          <div key={index} className="col-xl-6 col-lg-6 col-md-6 mb-4">
            <div className="card bg-white rounded shadow-sm">
              <img
                src={item.imageUrl}
                alt={item.altText}
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
                    <i className="fa fa-picture-o mr-2"></i>
                    <span className="font-weight-bold">{item.price}</span>
                  </p>
                  <div className="badge bg-success text-white px-3 rounded-pill">
                    New
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuNew;
