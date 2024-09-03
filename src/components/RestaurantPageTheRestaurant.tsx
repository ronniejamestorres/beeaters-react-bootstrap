import React from "react";

const RestaurantPageTheRestaurant: React.FC = () => {
  return (
    <div className="container-fluid ">
      <div className="row align-items-center">
        <div className="col-md-12 col-lg-12 ">
          <div className="card bg-light">
            <div className="card-body text-center p-5">
              <img
                src="https://images.pexels.com/photos/1055058/pexels-photo-1055058.jpeg?auto=compress&cs=tinysrgb&w=800"
                height="400px"
                className="rounded mb-5 img-fluid "
                alt=""
              ></img>
              <div className="container border p-5  ">
                <h3 className="mb-5">The restaurant</h3>

                <p>
                  Seasonal cuisine, varied and creative, mainly Belgian and
                  French, which evolves with the seasons and meetings with
                  producers. The quality product and the short circuit are at
                  the center of the kitchen.
                </p>

                <a href="https://twitter.com/GordonRamsay?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                  <i className="bi bi-twitter dark mx-1"></i>
                </a>
                <a href="https://fr-fr.facebook.com/gordonramsay/">
                  <i className="bi bi-facebook dark mx-1"></i>
                </a>
                <a href="https://www.instagram.com/gordongram/">
                  <i className="bi bi-instagram dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPageTheRestaurant;
