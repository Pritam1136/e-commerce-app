import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae
            similique! Illo repellendus molestiae atque sequi porro, fugit nulla
            ut corporis quidem consequuntur soluta quaerat quis vel.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Kalyan road, Punnamada, Kottankulangra, kolkata, west bengal
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 0123456789</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: store@jsdev.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphone</span>
          <span className="text">Smart watch</span>
          <span className="text">bluetooth speaher</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            store 2023 created by pritam. premium e-commerce solutions.
          </div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
