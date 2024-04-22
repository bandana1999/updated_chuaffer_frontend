import React from "react";
import image1 from "../cab_images/logo.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../CssStyle/Headers.css";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setIsLogin(true);
      console.log("islogin", isLogin);
    } else {
      setIsLogin(false);
      console.log("islogin", isLogin);
    }
  }, []);

  const handleLogin = () => {
    if (isLogin) {
      localStorage.removeItem("token");
      setIsLogin(false);
    } else {
      navigate("./login");
    }
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container customheader">
          <a class="navbar-brand" href="#">
            <img src={image1} alt="not found" className="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-4 mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              {/* disabled class remove from li to enable routing */}
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/history">
                  History
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link "
                  href="/about"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  {" "}
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="/help"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  {" "}
                  Help us
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="/services"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Services
                </a>
              </li>
              <li class="nav-item">
              <a
                  class="nav-link "
                  href="/cities"
                  // tabindex="-1"
                  // aria-disabled="true"
                >
                  Cities
                </a>
              </li>
            </ul>
            <form class="d-flex sign-form">
              
            <button className="sign-in-btn" onClick={handleLogin}>
                {isLogin ? "Logout" : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container customheader">
            <a className="navbar-brand" href="/">
              <img
                src={image1}
                alt="not found"
                className="logo"
                // onClick={() => navigate("/")}
              />
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/history">
                    History
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/help">
                    Help
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/cities">
                    Cities
                  </a>
                </li>
                <li className="nav-item">
                  <button className="sign-in-btn" onClick={handleLogin}>
                    {isLogin ? "Logout" : "Sign In"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
      {/* <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container nav-custom customheader">
          <a class="navbar-brand" href="/">
            <img
              src={image1}
              alt="not found"
              className="logo"
              onClick={() => navigate("/")}
            />
          </a>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="active">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>

              <li>
                <a class="nav-link" href="/history">
                  History
                </a>
              </li>

              <li>
                <a class="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li>
                <a class="nav-link" href="/help">
                  Help
                </a>
              </li>
              <li>
                <a class="nav-link" href="/services">
                  Services
                </a>
              </li>
              <li>
                <a class="nav-link" href="/cities">
                  Cities
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <button className="sign-in-btn" onClick={handleLogin}>
                {isLogin ? "Logout" : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default Header;
