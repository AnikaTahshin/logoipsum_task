import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="container-fluid hero mt-5">
        <div className="left-side">
          <div>
            <ul className="ul-list">
              <li>
                <a className="title-footer" href="">
                  Products
                </a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Enterprice</a>
              </li>
              <li>
                <a href="">Innovation</a>
              </li>
              <li>
                <a href="">Offline</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="ul-list">
              <li>
                <a className="title-footer" href="">
                  Company
                </a>
              </li>
              <li>
                <a href="">About</a>
              </li>

              <li>
                <a href="">Our Story</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="ul-list">
              <li>
                <a className="title-footer" href="">
                  Support
                </a>
              </li>
              <li>
                <a href="">Documentation</a>
              </li>
              <li>
                <a href="">Community</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="right-side">
          <img src="../../../assets/blacklogo.png" alt="" />
          <p>
            Tristique senectus et netus
            <br /> et malesuada fames
          </p>
          <p style={{ fontWeight: "300", fontSize: "15px" }}>
            ©2023 Logoipsum. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
