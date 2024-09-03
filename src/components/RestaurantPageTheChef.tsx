import React from "react";

const RestaurantPageTheChef: React.FC = () => {
  return (
    <div className="container-fluid ">
      <div className="row align-items-center">
        <div className="col-md-12 col-lg-12 ">
          <div className="card bg-light">
            <div className="card-body text-center p-5">
              <img
                src="https://images.pexels.com/photos/8629108/pexels-photo-8629108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                height="400px"
                className="rounded mb-5 img-fluid "
                alt=""
              ></img>
              <div className="container border p-5  ">
                <h3 className="mb-5">The chef</h3>

                <p>
                  In 1993, Julio became head chef of Aubergine in London, and
                  within three years Aubergine was awarded two Michelin stars.
                </p>

                <p>
                  At the age of 35, Julio branched out on his own to set up his
                  first wholly-owned and namesake restaurant, Restaurant Julio.
                  Restaurant Julio opened in 1998, and quickly received the most
                  prestigious accolade in the culinary world – three Michelin
                  stars. Today, Restaurant Julio is London’s longest-running
                  restaurant to hold this award, and Ramsay is one of only four
                  chefs in the UK to maintain three stars. Julio also holds a
                  Michelin star at his other London restaurant Pétrus in
                  Knightsbridge.{" "}
                </p>

                <p>
                  In addition to his stars in the UK, Julio holds two stars at
                  Le Pressoir d'Argent in Bordeaux and one star at Julio au
                  Trianon in Versailles.{" "}
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

export default RestaurantPageTheChef;
