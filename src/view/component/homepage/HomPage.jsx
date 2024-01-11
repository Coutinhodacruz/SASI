import React, { useState } from "react";
import "../../../styles/homepage/HomePage.css";
import { Link } from "react-scroll";
import sasi from "../../../assets/image/sasi.jpg";

const HomPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="home">
      <header className={`header ${isMenuOpen ? "mobile-menu-open" : ""}`}>
        <div className="home-logo">
          <Link to="home" spy={true} smooth={true} duration={300}>
            <img src={sasi} alt="Logo" />
          </Link>
        </div>
        <div className="main">
          <nav id="navbar" className={isMenuOpen ? "open" : ""}>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={300}
              className="active"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={300}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="event"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Event
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
          <div className="nav-btn" onClick={toggleMenu} style={{ color: "white" }}>
            ☰
          </div>
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
          <a href="#d">Donate Now</a>
        </button>
      </div>
    </section>
  );
};

export default HomPage;
