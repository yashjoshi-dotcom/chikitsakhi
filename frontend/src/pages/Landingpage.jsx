import React from 'react';
// import 'font-awesome/css/font-awesome.min.css';
import './Style.css'; // Import your custom CSS file
import { Navigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
const image1 = require("./images/section-4.jpeg");
const image2 = require("./images/map2.png");
const image3 = require("./images/mobile-chat-760.jpg");
const image4 = require("./images/reward.jpg");

const Landingpage = () => {
    const navigate = useNavigate();
    const handleScrollDown = () => {
        const documentHeight = document.documentElement.scrollHeight;
        const scrollDistance = documentHeight * 0.58; // 150% of document height
        window.scrollTo({
          top: scrollDistance,
          behavior: 'smooth', // You can use 'auto' for instant scroll
        });
      };
      const handleclick=()=>{
        navigate("/chatbot");
      }
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a href="#" className="navbar-brand p-3">
            Chikitsakhi
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="d-flex justify-content-center collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav w-75 mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./Chatbot">
                  ChatBot
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleScrollDown}>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 pr-3 my-lg-0">
              <button className="btn menu-right-btn border" type="submit" onClick={handleclick}>
                Request A Chat
              </button>
            </form>
          </div>
        </nav>
      </header>

      <main>
        <div className="container-fluid p-0">
          <div className="site-content">
            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column text-center">
                <h1 className="site-title">Chikatsakhi</h1>
                <p className="site-desc">
                  your personalized healthcare solution one chat away
                </p>
                <div className="">
                  {/* <input type="button" value="Learn More" className="btn site-btn1 px-4 py-3 mr-4 btn-primary" /> */}
                  <input type="button" value="Services" onClick={handleclick} className="btn site-btn2 px-4 py-3 mr-4 btn-light" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-1">
          <div className="container text-center">
            <h1 className="heading-1">Fantastic Features</h1>
            {/* <h1 className="heading-2">Different Types of Template</h1> */}
            {/* <p className="para-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p> */}

            <div className="row justify-content-center text-center">
              <div className="col-md-4">
                <div className="card">
                  <img src={image2} alt="image" className="card-image-top" />
                  <div className="card-body">
                    <h4 className="card-title">Data Analysis & Visualization</h4>
                    <p className="card-text">
                    A user-driven data visualization dashboard creates scatter plots from collected data, pinpointing healthcare pain points for targeted problem-solving and improved patient care outcomes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src={image3} alt="image" className="card-image-top" />
                  <div className="card-body">
                    <h4 className="card-title">Personalized Healtcare Assistance</h4>
                    <p className="card-text">
                    
A machine learning-powered chatbot, connected to AbhaID for patient medical histories, provides comprehensive healthcare support. By accessing past records, it offers personalized assistance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src={image4} alt="image" className="card-image-top" />
                  <div className="card-body">
                    <h4 className="card-title">Rewards and Incentive Solution</h4>
                    <p className="card-text">
                    "Unleash your potential on our website, where exciting rewards await those who embrace challenges. Complete tasks, unlock treasures, and turn your efforts into amazing prizes. The journey begins now!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-2">
          <div className="container-fluid">
            <div className="d-flex justify-content-end">
              <div className="d-flex flex-column m-4">
                <h1 className="heading-1">Data Visualization</h1>
                <p className="para">
                  shows insight based on the large data collected and provide solution.
                </p>
                <a href="">
                <input type="button" name="show" value="Show" className="btn btn-light" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-3">
          <div className="container">
            <h1 className="heading-1 text-center">Our Services</h1>
            <hr className="hr-line-1" />
            <div className="row">
              <div className="col-md-4">
                <div className="d-flex flex-row">
                  <i className="fas fa-pencil-ruler fa-2x m-2"></i>
                  <div className="d-flex flex-column">
                    <h4 className="m-2">ChatBot</h4>
                    <p className="m-2">
                      The Future is based on Bootstrap Framework, which makes it a nice template for any purpose.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex flex-row">
                  <i className="fas fa-tv fa-2x m-2"></i>
                  <div className="d-flex flex-column">
                    <h4 className="m-2">AbhaID Healtcare Support</h4>
                    <p className="m-2">
                      The Future looks great on any screen resolution and on any device due to its responsiveness.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex flex-row">
                  <i className="fas fa-city fa-2x m-2"></i>
                  <div className="d-flex flex-column">
                    <h4 className="m-2">Personalized Challenges</h4>
                    <p className="m-2">
                      Event calendar, bookings, and schedule are just some of the tools that come on board.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4">
                <div className="d-flex flex-row">
                  <i className="fas fa-home fa-2x m-2"></i>
                  <div className="d-flex flex-column">
                    <h4 className="m-2">Dashboard</h4>
                    <p className="m-2">
                      Huge number of content layouts allow to assemble unique pages with great flexibility.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex flex-row">
                  <i className="far fa-edit fa-2x m-2"></i>
                  <div className="d-flex flex-column">
                    <h4 className="m-2">Rewards</h4>
                    <p className="m-2">
                      The Future is crafted by top industry leaders with love, care, and customer needs in mind.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex flex-row">
                  <i className="fas fa-magic fa-2x m-2"></i>
                  <div className="d-flex flex-column">
                    <h4 className="m-2">Ease of Access</h4>
                    <p className="m-2">
                      Our template was built for speed. Get the best results at GTmetrix and Google PageSpeed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-4">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-md-5 ">
                <img src={image1} alt="section-4" width="100%" height="100%" />
              </div>
              <div className="col-md-7">
                <h3 className="heading-1">Our Mission</h3>
                <hr className="h-line-1" />
                <br />
                <p className="para-1">
                  We aim to solve a large scale healthcare problem on both individual level and a community level by providing personalized health care solution using abhaID a centralized medical record of every individual to give suggestion and medical guidance.
                </p>
                <div className="d-flex flex-row">
                  <div className="col-md-6">
                    <div className="d-flex flex-row">
                      <i className="fas fa-pencil-ruler fa-2x m-2"></i>
                      <div className="d-flex flex-column">
                        <h4 className="m-2">Individual Level</h4>
                        <p className="m-2">The Future is based on Bootstrap Framework, which makes it a nice template for any purpose.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex flex-row">
                      <i className="far fa-edit fa-2x m-2"></i>
                      <div className="d-flex flex-column">
                        <h4 className="m-2">Community Level</h4>
                        <p className="m-2">The Future is crafted by top industry leaders with love, care, and customer needs in mind.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="section-5 text-center">
          {/* <h4 className="footer-heading-2">Get Templates from Dev Online</h4> */}
          <h4 className="my-4">If You Need any Help</h4>

          <div className="form-inline d-flex justify-content-center">
            <input type="text" name="Email" id="email" placeholder="Email" size="40px;" className=" form-control w-25 px-4 py-2" />
            <input type="button" value="Contact Us" className="btn btn-light px-4 py-2" />
          </div>

          <div className="social">
            <div className="d-flex flex-row justify-content-center">
              <i className="fab fa-facebook-f m-2"></i>
              <i className="fab fa-twitter m-2"></i>
              <i className="fab fa-instagram m-2"></i>
              <i className="fab fa-youtube m-2"></i>
              <i className="fab fa-linkedin m-2"></i>
            </div>

            <hr />
            <h5 className="footer-heading">Chikitsakhi &copy;</h5>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landingpage;
