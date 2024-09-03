import React from "react";

const HomePageSecondSection: React.FC = () => {
  return (
    <div className="menu-featured  ">
      <div className="container-fluid">
        <div className="col-md d-block mt-4">
          <div className="row text-center mt-4">
            <div className="col-md ">
              <div className="card bg-light ">
                <img
                  src="https://ronniejamestorres.github.io/restaurant-css-framework/img/menu/07a38869938119.5b923390de81a.png"
                  className="card-img-top"
                  alt="..."
                ></img>

                <div className="card-body text-center">
                  <div className="h1 mb-3"></div>
                  <h3 className="card-title mb-3">
                    Soup of the day : Spicy & hot
                  </h3>
                  <p className="card-text">Fire will reign.</p>
                  <a
                    href="menu.html"
                    className="text-dark btn btn-outline-danger rounded-pill"
                  >
                    Menu
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card bg-light ">
                <img
                  src="https://images.pexels.com/photos/4915541/pexels-photo-4915541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="card-img-top w-100"
                  alt="..."
                ></img>
                <div className="card-body text-center">
                  <div className="h1 mb-3"></div>
                  <h3 className="card-title mb-3">Come by and have a seat !</h3>
                  <p className="card-text">Our place is waiting for you.</p>
                  <a
                    href="pictures.html"
                    className="text-dark btn btn-outline-danger rounded-pill"
                  >
                    Pictures
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card bg-light ">
                <img
                  src="https://ronniejamestorres.github.io/restaurant-css-framework/img/menu/yellowf3136569938119.5b923390e1628.png"
                  className="card-img-top w-100"
                  alt="..."
                ></img>
                <div className="card-body text-center">
                  <div className="h1 mb-3"></div>
                  <h3 className="card-title mb-3">
                    Most ordered : Pickeled pepper
                  </h3>
                  <p className="card-text">A must taste.</p>
                  <a
                    href="#"
                    className="text-dark btn btn-outline-danger rounded-pill"
                  >
                    Menu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSecondSection;
