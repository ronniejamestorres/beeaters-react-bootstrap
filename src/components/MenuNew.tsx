import React from "react";

const MenuNew: React.FC = () => {
  return (
    <div className="menu-featured">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 mb-4">
          <div className="card  bg-white rounded shadow-sm">
            <img
              src="https://ronniejamestorres.github.io/restaurant-css-framework/img/menu/white1.jpg"
              alt=""
              className="img-fluid card-img-top"
            />
            <div className="p-4">
              <h5>
                <a href="#" className="text-dark">
                  Chicken potaito basilico
                </a>
              </h5>
              <p className="small text-muted mb-0">
                Chicken, potatoes, basil, fresh oregano, hot sauce, tomatoes
              </p>
              <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                <p className="small mb-0">
                  <i className="fa fa-picture-o mr-2"></i>
                  <span className="font-weight-bold">7€</span>
                </p>
                <div className="badge bg-success text-white px-3 rounded-pill">
                  New
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-6 mb-4">
          <div className="card  bg-white rounded shadow-sm">
            <img
              src="https://ronniejamestorres.github.io/restaurant-css-framework/img/menu/white2.jpg"
              alt=""
              className="img-fluid card-img-top"
            />
            <div className="p-4">
              <h5>
                <a href="#" className="text-dark">
                  Chicken potaito pineapple
                </a>
              </h5>
              <p className="small text-muted mb-0">
                Chicken, potatoes, pineapple, tomatoes, oregano
              </p>
              <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                <p className="small mb-0">
                  <i className="fa fa-picture-o mr-2"></i>
                  <span className="font-weight-bold">8€</span>
                </p>
                <div className="badge bg-success text-white px-3 rounded-pill">
                  New
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuNew;
