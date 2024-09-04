import React from "react";

type FeaturedMenuItem = {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  altText: string;
};

const featuredMenuItems: FeaturedMenuItem[] = [
  {
    name: "Hot-spicy pot",
    price: "6€",
    description: "Shrimp, broccoli, basil, carrots, potatoes, chili pepper",
    imageUrl:
      "https://ronniejamestorres.github.io/restaurant-css-framework/img/menu/yellow1.jpg",
    altText: "Hot-spicy pot",
  },
  {
    name: "Pickled pepper",
    price: "7€",
    description: "Chili pepper, asparagus, onion, snap peas, garlic",
    imageUrl:
      "https://ronniejamestorres.github.io/restaurant-css-framework/img/menu/yellow2.jpg",
    altText: "Pickled pepper",
  },
  {
    name: "Soup pot",
    price: "9€",
    description: "Mushrooms, broccoli, basil, carrots, potatoes, chili pepper",
    imageUrl:
      "https://ronniejamestorres.github.io/restaurant-css-framework/img/menu/green2.jpg",
    altText: "Soup pot",
  },
];

const MenuFeatured: React.FC = () => {
  return (
    <div className="menu-featured">
      <div className="row">
        {featuredMenuItems.map((item, index) => (
          <div key={index} className="col-xl-4 col-lg-4 col-md-4 mb-4">
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
                    <i className="fa fa-picture-o me-2"></i>
                    <span className="fw-bold">{item.price}</span>
                  </p>
                  <div className="badge bg-warning text-white px-3 rounded-pill">
                    Featured
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

export default MenuFeatured;
