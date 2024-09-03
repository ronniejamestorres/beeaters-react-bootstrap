import React from "react";

const MenuTrending: React.FC = () => {
  return (
    <div className="menu-page">
      <div className="container"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 mb-4">
            <div className="card bg-white rounded shadow-sm">
              <img
                src="https://ronniejamestorres.github.io/restaurant-css-framework/img/menu/red1.jpg"
                alt=""
                className="img-fluid card-img-top"
              />
              <div className="p-4">
                <h5>
                  <a href="#" className="text-dark">
                    Tomato
                  </a>
                </h5>
                <p className="small text-muted mb-0">
                  Tomatos, yellow onions, garlic, basil, sugar, black pepper
                </p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0">
                    <span className="font-weight-bold">6€</span>
                  </p>
                  <div className="badge bg-danger text-white px-3 rounded-pill">
                    Trending
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 mb-4">
            <div className="card bg-white rounded shadow-sm">
              <img
                src="https://ronniejamestorres.github.io/restaurant-css-framework/img/menu/red2.jpg"
                alt=""
                className="img-fluid card-img-top"
              />
              <div className="p-4">
                <h5>
                  <a href="#" className="text-dark">
                    Spicy and hot
                  </a>
                </h5>
                <p className="small text-muted mb-0">
                  Chili pepper, aromatic vegetables, tomato, potatoes
                </p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0">
                    <span className="font-weight-bold">7€</span>
                  </p>
                  <div className="badge bg-danger text-white px-3 rounded-pill">
                    Trending
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 mb-4">
            <div className="card bg-white rounded shadow-sm">
              <img
                src="https://ronniejamestorres.github.io/restaurant-css-framework/img/menu/brown1.jpg"
                alt=""
                className="img-fluid card-img-top"
              />
              <div className="p-4">
                <h5>
                  <a href="#" className="text-dark">
                    Spicy beef
                  </a>
                </h5>
                <p className="small text-muted mb-0">
                  Sliced beef, chili pepper, corn, mushrooms, carrots, zucchini
                </p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0">
                    <span className="font-weight-bold">6€</span>
                  </p>
                  <div className="badge bg-danger text-white px-3 rounded-pill">
                    Trending
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 mb-4">
            <div className="card bg-white rounded shadow-sm">
              <img
                src="https://ronniejamestorres.github.io/restaurant-css-framework/img/menu/brown2.jpg"
                alt=""
                className="img-fluid card-img-top"
              />
              <div className="p-4">
                <h5>
                  <a href="#" className="text-dark">
                    Mashroom
                  </a>
                </h5>
                <p className="small text-muted mb-0">
                  Mushrooms, carots, potatoes, chili pepper, onions
                </p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0">
                    <span className="font-weight-bold">7€</span>
                  </p>
                  <div className="badge bg-danger text-white px-3 rounded-pill">
                    Trending
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuTrending;
