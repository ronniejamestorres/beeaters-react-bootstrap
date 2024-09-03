import React from "react";

const RestaurantPageMap: React.FC = () => {
  return (
    <div className="container-fluid card mb-5 mt-5">
      <h3 className="text-center m-5">Where to find us</h3>
      <div className="row">
        <div className="col-lg-6 col-md-12 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.223542053035!2d4.3530529307946635!3d50.84554461406421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c47fd1dbb93d%3A0x571578c102c821e5!2sCantersteen%2012%2C%201000%20Bruxelles!5e0!3m2!1sfr!2sbe!4v1671793912802!5m2!1sfr!2sbe"
            className="h-100 w-100 rounded-2"
            style={{ border: "none" }} /* Corrected style */
            allowFullScreen /* Corrected attribute */
            loading="lazy"
          ></iframe>
        </div>

        <div className="card col-lg-6 col-md-12 ">
          <div className="row">
            <div className="col-md">
              <div className="card-body text-center">
                <h3>OPENING HOURS</h3>
                <h5>MONDAY TO FRIDAY</h5>
                11AM - 10PM
                <h5>SATURDAY</h5>
                11:30AM - 10PM
                <h5>SUNDAY</h5>
                5PM - 10PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPageMap;
