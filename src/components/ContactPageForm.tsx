import React from "react";

const ContactPageForm: React.FC = () => {
  return (
    <div className="container border rounded p-5">
      <div className="row">
        <div className="col-lg-3 col-md-12 col-sm-12 mb-5"></div>

        <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
          <form>
            <div className="col-md">
              <div className="row mb-4">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form3Example1"
                      placeholder="..."
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example1">
                      First name
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-outline">
                    <input
                      type="email"
                      id="form3Example2"
                      placeholder="..."
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example2">
                      Email Address
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form3Example3"
                  placeholder="..."
                  className="form-control"
                />
                <label className="form-label" htmlFor="form3Example3">
                  Subject
                </label>
              </div>
              <div className="form-outline mb-4">
                <textarea
                  className="form-control"
                  id="form4Example3"
                  rows={4}
                ></textarea>
                <label className="form-label" htmlFor="form4Example3">
                  Message
                </label>
              </div>
              <div className="text-center text-md-start">
                <button type="submit" className="btn btn-primary mb-5 mb-md-0">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-lg-3 col-md-12 col-sm-12 mb-5"></div>
      </div>
    </div>
  );
};

export default ContactPageForm;
