import React from "react";

const RestaurantPageServices: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className=" rounded p-5 bg-light border mb-5">
        <h2 className="text-center  mb-5">We can offer you more</h2>
        <div className="row text-center ">
          <div className="col-md ">
            <div className="card bg-light ">
              <img
                src="https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img-top rounded"
                alt="..."
              ></img>
              <div className="card-body text-center">
                <div className="h1 mb-3"></div>
                <h3 className="card-title mb-3">Events</h3>
                <p className="card-text">
                  Restaurant beEaters is the perfect place to host your events
                  in Louise, for leisure or business. By reservation only, from
                  10 to 100 guests, we welcome you to our unique and private
                  space for your parties, weddings, birthday parties, business
                  meetings, seminars, reunions or cocktails
                </p>
                <a
                  href="menu.html"
                  className="text-dark btn btn-outline-danger rounded-pill"
                >
                  Book online{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md">
            <div className="card bg-light ">
              <img
                src="https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img-top w-100"
                alt="..."
              ></img>
              <div className="card-body text-center">
                <div className="h1 mb-3"></div>
                <h3 className="card-title mb-3">We cook and deliver !</h3>
                <p className="card-text">
                  Have a look at our menu and let the feast begins !
                </p>
                <a
                  href="pictures.html"
                  className="text-dark btn btn-outline-danger rounded-pill"
                >
                  Order online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPageServices;
