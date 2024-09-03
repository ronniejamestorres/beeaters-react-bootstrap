import React from "react";

const MenuFeatured: React.FC = () => {
  return (
    <div className="menu-featured">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 mb-4">
          <div className="card bg-white rounded shadow-sm">
            <img
              src="https://ronniejamestorres.github.io/restaurant-css-framework/img/menu/yellow1.jpg"
              alt="Hot-spicy pot"
              className="img-fluid card-img-top"
            />
            <div className="p-4">
              <h5>
                <a href="#" className="text-dark">
                  Hot-spicy pot
                </a>
              </h5>
              <p className="small text-muted mb-0">
                Shrimp, broccoli, basil, carrots, potatoes, chili pepper
              </p>
              <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                <p className="small mb-0">
                  <i className="fa fa-picture-o me-2"></i>
                  <span className="fw-bold">6€</span>
                </p>
                <div className="badge bg-warning text-white px-3 rounded-pill">
                  Featured
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-4 mb-4">
          <div className="card bg-white rounded shadow-sm">
            <img
              src="https://ronniejamestorres.github.io/restaurant-css-framework/img/menu/yellow2.jpg"
              alt="Pickled pepper"
              className="img-fluid card-img-top"
            />
            <div className="p-4">
              <h5>
                <a href="#" className="text-dark">
                  Pickled pepper
                </a>
              </h5>
              <p className="small text-muted mb-0">
                Chili pepper, asparagus, onion, snap peas, garlic
              </p>
              <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                <p className="small mb-0">
                  <i className="fa fa-picture-o me-2"></i>
                  <span className="fw-bold">7€</span>
                </p>
                <div className="badge bg-warning text-white px-3 rounded-pill">
                  Featured
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-4 mb-4">
          <div className="card bg-white rounded shadow-sm">
            <img
              src="https://ronniejamestorres.github.io/restaurant-css-framework/img/menu/green2.jpg"
              alt="Soup pot"
              className="img-fluid card-img-top"
            />
            <div className="p-4">
              <h5>
                <a href="#" className="text-dark">
                  Soup pot
                </a>
              </h5>
              <p className="small text-muted mb-0">
                Mushrooms, broccoli, basil, carrots, potatoes, chili pepper
              </p>
              <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                <p className="small mb-0">
                  <i className="fa fa-picture-o me-2"></i>
                  <span className="fw-bold">9€</span>
                </p>
                <div className="badge bg-warning text-white px-3 rounded-pill">
                  Featured
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuFeatured;
