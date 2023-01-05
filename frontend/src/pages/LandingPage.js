import React from "react";
import HeroImg from "../Images/heroSection.gif";

const LandingPage = () => {
  return (
    <>
      <div className="container-fluid bg-white">
        <div className="row row-cols-1 row-cols-lg-2">
          <div className="col px-0 d-flex align-self-center order-2 order-lg-1">
            <div className="px-5 m-5 ">
              <h1 className="fs-1 fw-bold primary-text text-uppercase lh-lg">
                eXotracker
              </h1>
              <h3 className="fs-3 fw-semibold gray-text lh-lg">
                Track your Fitness Routine
              </h3>
              <p className="text-muted ">
                eXotracker for anyone looking to improve their physical fitness
                and overall health. Track, Update, and Save your data on one go.
              </p>
            </div>
          </div>
          <div className="col px-0 order-lg-2 order-2 d-flex justify-content-center">
            <img className="img-fluid" src={HeroImg} />
          </div>
        </div>
      </div>
      <footer className="gray-bg py-3 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-4 text-center">
              <div className="fw-light text-white">
                Follow us on other Social media platforms
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-white text-center">
                <i className="fa-brands fa-facebook fa-xl m-2"></i>
                <i className="fa-brands fa-instagram fa-xl m-2"></i>
                <i className="fa-brands fa-discord fa-xl m-2"></i>
                <i className="fa-brands fa-twitter fa-xl m-2"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
