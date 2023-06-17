import React from "react";
import "./Navbar.css";
import Button from "../../components/Button";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          {/*---------------- logo section ------------- */}

          <div>
            <img
              style={{ width: "202px", height: "40px", objectFit: "contain" }}
              src="../../../assets/logo.png"
              alt=""
            />
          </div>

          {/*---------------- logo section ------------- */}
          {/*---------------- product about contact section ------------- */}

          <div className="nav-content">
            <ul>
              <li>
                <a className="text1" href="">
                  Products <i class="fa-solid fa-caret-down"></i>
                </a>
              </li>
              <li>
                <a className="text1" href="">
                  About Us
                </a>
              </li>
              <li>
                <a className="text1" href="">
                  Contact
                </a>
              </li>
            </ul>
            {/* <div>Products</div>
            <div>About Us</div>
            <div>Contact</div> */}
          </div>

          {/*---------------- product about contact section ------------- */}

          <div className="d-flex">
            <div className="getStartBtn">
              {/* <p id="getStartTxt">Get Started</p> */}
              <Button title="Get Started" />
            </div>
            <div className="login">
              {/* <p>Login</p> */}
              <Button title="Login" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
