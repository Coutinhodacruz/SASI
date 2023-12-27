import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import HomePage from "../../../styles/homepage/HomePage.css";
import sasi from "../../../assets/image/sasi.jpg";


const HomPage = () => {
  return (
      <section className="home">
        <header className="header">
          {/* <div class="bx bx-menu" id="menu-icon"><span class="animate" style="--i:2;"></span></div> */}
        <div className="logo">
          <Link to="home" spy={true} smooth={true} duration={300}>
            <img src={sasi} alt="Logo" />
          </Link>
        </div>
          <div className="main">
            <nav className="navbar">
              <Link to="home" spy={true} smooth={true} duration={300} className="active">
                Home
              </Link>
              <Link to="about" spy={true} smooth={true} duration={300}>
                About
              </Link>
              <Link to="event" spy={true} smooth={true} duration={500}>
                Event
              </Link>
              <Link to="contact" spy={true} smooth={true} duration={500}>
                Contact
              </Link>
            </nav>
          </div>
        </header>
        <div className="content">
          <h2>
            Save The <span className="child">Children</span>
          </h2>
          <span className="ch">
            For The new <span className="ch2">world</span>
          </span>{" "}
          <br />
          <p className="par">
            There are many variations of passages of Lorem Ipsum available, <br />
            but the majority have suffered alteration in some form.
            <br />
          </p>
          <button className="cn">
            <a href="#">Donate Now</a>
          </button>
        </div>
      </section>
    );
};

export default HomPage;
