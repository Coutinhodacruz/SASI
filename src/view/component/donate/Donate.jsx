import React from "react";
import hand from "../../../assets/image/hand.png";
import help from "../../../assets/image/help.jpg";
import "../../../styles/donate/DonateStyle.css";
import { FaWallet, FaUser, FaGift, FaCamera } from "react-icons/fa";

const Donate = () => {
  const iconStyle = { color: "#777", opacity: 0.4 };

  return (
    <section className="donate">
      <div className="container">
        <div className="section-title">
          <h2>How Can You Help</h2>
          <div className="icon-img">
            <img src={hand} alt="" />
          </div>
          <p className="p">
            There are many variations of azer duskam of Lorem Ipsum available,
          </p>
        </div>
        <div className="col-help">
          <div className="help-banner">
            <img src={help} alt="" />
          </div>
        </div>
        <div className="column1">
          <div className="single-service">
            <FaWallet size={40} style={iconStyle} />
            <h3>Send Donation </h3>
            <p>
              There are many variations of passages <br /> of Lorem Ipsum
              available,
            </p>
          </div>
        </div>
        <div className="column2">
          <div className="single-service">
            <FaUser size={40} style={iconStyle} />
            <h3>Become Volunteer</h3>
            <p>
              There are many variations of passages <br /> of Lorem Ipsum
              available,
            </p>
          </div>
        </div>
        <div className="column-sec1">
          <div className="single-service">
            <FaGift size={40} style={iconStyle} />
            <h3>Make A Gift</h3>
            <p>
              There are many variations of passages <br /> of Lorem Ipsum
              available,
            </p>
          </div>
        </div>
        <div className="column-sec2">
          <div className="single-service">
            <FaCamera size={40} style={iconStyle} />
            <h3>Through Media</h3>
            <p>
              There are many variations of passages <br /> of Lorem Ipsum
              available,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
