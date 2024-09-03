import React from "react";

const PicturesPageCarousel: React.FC = () => {
  return (
    <div className="card bg-light text-white ">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container mb-5">
              <div className="row">
                <div className="container">
                  <div className="row">
                    <div className="row justify-content-start">
                      <div className="col-lg-4 col-md-4 col-sm-8 d-flex ">
                        <div className="bg-white rounded shadow-sm">
                          <img
                            src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="img-fluid rounded-pill"
                          ></img>
                        </div>
                      </div>
                    </div>

                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-4 col-sm-8 d-flex ">
                        <div className="bg-white rounded shadow-sm">
                          <img
                            src="https://images.pexels.com/photos/4050976/pexels-photo-4050976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="img-fluid rounded-pill"
                          ></img>
                        </div>
                      </div>
                    </div>

                    <div className="row justify-content-end">
                      <div className="col-lg-4 col-md-4 col-sm-8 d-flex ">
                        <div className="bg-white rounded shadow-sm">
                          <img
                            src="https://images.pexels.com/photos/3217156/pexels-photo-3217156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="img-fluid rounded-pill"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container mb-5">
              <div className="row">
                <div className="container">
                  <div className="row">
                    <div className="row justify-content-start">
                      <div className="col-lg-4 col-md-4 col-sm-8 d-flex ">
                        <div className="bg-white rounded shadow-sm">
                          <img
                            src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="img-fluid rounded-pill"
                          ></img>
                        </div>
                      </div>
                    </div>

                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-4 col-sm-8 d-flex ">
                        <div className="bg-white rounded shadow-sm">
                          <img
                            src="https://images.pexels.com/photos/1813505/pexels-photo-1813505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 alt="
                            alt=""
                            className="img-fluid rounded-pill"
                          ></img>
                        </div>
                      </div>
                    </div>

                    <div className="row justify-content-end">
                      <div className="col-lg-4 col-md-4 col-sm-8 d-flex ">
                        <div className="bg-white rounded shadow-sm">
                          <img
                            src="https://images.pexels.com/photos/5953552/pexels-photo-5953552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="img-fluid rounded-pill"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container mb-5">
              <div className="row">
                <div className="container">
                  <div className="row">
                    <div className="row justify-content-start">
                      <div className="col-lg-4 col-md-4 col-sm-8 d-flex ">
                        <div className="bg-white rounded shadow-sm">
                          <img
                            src="https://images.pexels.com/photos/11157601/pexels-photo-11157601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="img-fluid rounded-pill"
                          ></img>
                        </div>
                      </div>
                    </div>

                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-4 col-sm-8 d-flex ">
                        <div className="bg-white rounded shadow-sm">
                          <img
                            src="https://images.pexels.com/photos/4686827/pexels-photo-4686827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="img-fluid rounded-pill"
                          ></img>
                        </div>
                      </div>
                    </div>

                    <div className="row justify-content-end">
                      <div className="col-lg-4 col-md-4 col-sm-8 d-flex ">
                        <div className="bg-white rounded shadow-sm">
                          <img
                            src="https://images.pexels.com/photos/6287235/pexels-photo-6287235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="img-fluid rounded-pill"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev custom-carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next custom-carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default PicturesPageCarousel;
