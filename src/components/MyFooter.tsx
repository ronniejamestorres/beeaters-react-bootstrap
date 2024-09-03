import React from "react";

const MyFooter: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row mt-4 ">
            <div className="col-lg-3 col-md pb-3 pt-3 bg-dark rounded">
              <img
                src="https://ronniejamestorres.github.io/restaurant-css-framework/img/logo/beeaterslogow-01.png"
                alt="beEaters Logo"
              />
              <p className="small text-secondary">
                We are committed to delighting our customers by creating quick,
                tasty and healthy dishes of fresh high-quality ingredients.
              </p>
              <p className="small text-muted mb-0">
                &copy; Copyrights. All rights reserved.{" "}
                <a className="text-light" href="index.html">
                  beEaters
                </a>
              </p>
            </div>

            <div className="col-lg-3 col-md pb-3 pt-3 border rounded">
              <div className="row">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-map"></i> Cantersteen 12, 1000 Bruxelles
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-phone"></i> +02 234 67 89
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-envelope"></i> info@beeaters.org
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md pb-3 pt-3 border rounded">
              <h5 className="text-dark">Newsletter</h5>
              <p className="small text-muted">Get the latest news</p>
              <form action="#">
                <div className="input-group pt-1">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Email"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon1"
                  />
                  <button
                    className="btn border text-danger"
                    id="button-addon1"
                    type="button"
                  >
                    <i className="bi bi-forward-fill"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-3 col-md pb-3 pt-3 border rounded">
              <h5 className="text-dark">Newsletter</h5>
              <p className="small text-muted">Get the latest news</p>
              <form action="#">
                <div className="input-group pt-1">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Email"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon1"
                  />
                  <button
                    className="btn border text-danger"
                    id="button-addon1"
                    type="button"
                  >
                    <i className="bi bi-forward-fill"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MyFooter;
