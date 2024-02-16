import { React, useState } from "react";
import { Link } from "react-router-dom";
import Joshiverse from "../../../assets/joshiverse.jpeg";
import ImageIcon from "../../../assets/image/sasi-icon.png";
import BackgroundImage from "../../../assets/mission.jpg";
import Image1 from "../../../assets/image/sasi-image/busola.JPG";
import newimage from "../../../assets/image/newimage.jpg";
import Image2 from "../../../assets/image/sasi-image/p10.JPG";
import Image3 from "../../../assets/image/sasi-image/p13.JPG";
import Facebook from "../../../assets/facebook.png";
import Youtube from "../../../assets/youtube.png";
import Instagram from "../../../assets/instagram.png";
import Twitter from "../../../assets/x.png";
import ScrollButton from "./ScrollButton";
import Image4 from "../../../assets/image/sasi-image/p1.jpg";
import Image5 from "../../../assets/image/sasi-image/p7.jpg";
import Image6 from "../../../assets/image/sasi-image/p15.JPG";
import Image7 from "../../../assets/image/sasi-image/p9.jpg";
import Image8 from "../../../assets/image/sasi-image/p12.JPG";
import Image9 from "../../../assets/image/sasi-image/p11.JPG";
import Image10 from "../../../assets/image/sasi-image/p14.jpg";
import Image11 from "../../../assets/image/sasi-image/p6.jpg";
import Image12 from "../../../assets/image/sasi-image/p16.jpg";
import Image13 from "../../../assets/image/sasi-image/p23.JPG";
import Image14 from "../../../assets/image/sasi-image/p5.jpg";
import Image15 from "../../../assets/image/sasi-image/p21.jpg";
import Image16 from "../../../assets/image/sasi-image/p20.jpg";
import Image17 from "../../../assets/image/sasi-image/p19.JPG";
import Image18 from "../../../assets/image/sasi-image/p18.jpg";
import Image19 from "../../../assets/image/sasi-image/aboutUs.jpg";
import Image20 from "../../../assets/image/sasi-image/give.JPG";
import Image21 from "../../../assets/image/sasi-image/p22.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../../styles/landingpage/LandingPage.css";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const year = () => {
    const date = new Date();
    return date.getFullYear();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <main>
      <div id="nav-bar">
        <div id="logo">
          <a href="#hero-section">
            <img
              src={Joshiverse}
              alt="Icon"
              style={{ height: "90px", width: "80px", borderRadius: "10px" }}
            />
          </a>
        </div>
        <div id="nav" className={isMenuOpen ? "open" : ""}>
          <a className="nav-a" href="#about" onClick={toggleMenu}>
            About
          </a>
          <a className="nav-a" href="#gallery" onClick={toggleMenu}>
            Gallery
          </a>
          <a className="nav-a" href="#sasi-intro" onClick={toggleMenu}>
            SASI
          </a>
          <a className="nav-a" href="#footer" onClick={toggleMenu}>
            Contact
          </a>
        </div>
        <div className="nav-btn" onClick={toggleMenu}>
          ☰
        </div>
        {isMenuOpen && (
          <div id="nav-burger">
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#sasi-intro">SASI</a>
            <a href="#footer">Contact</a>
          </div>
        )}
      </div>
      <div id="hero-section">
        <h2>
          Help The <span>People</span>
        </h2>
        <h1>
          Grow up <span>humanity</span> & <span>kindness</span>
        </h1>
        {/* <p>There are many variations of passages of Lorem Ipsum available,</p>
        <p>but the majority have suffered alteration in some form.</p> */}
      </div>
      <ScrollButton
        className="scroll"
        targetIds={["about", "gallery", "footer"]}
      />
      <div id="about">
        <div id="about-heading">
          <h2 className="headings">About Joshiverse</h2>
          <p>
            Joshiverse is both an advocacy for continuous learning and a
            community of people <br />
            who are passionate about learning, growth and leadership. We believe
            that everyone, <br /> irrespective of their socioeconomic status
            deserves access to opportunities that enables these key areas.
          </p>
        </div>
        <div className="vision-mission">
          <div>
            <div className="vision-mission-header">
              <p className="clicked-text-head">Our Mission</p>
              <p className="p">
                To empower passionate learners, enable them to grow
                professionally <br /> and build leadership competence.
              </p>
            </div>
            <div className="vision-mission-header">
              <p className="clicked-text-head">Our Vision</p>
              <p className="p">
                Enablers of continuous decentralized learning without barriers
              </p>
            </div>
          </div>

          <img src={BackgroundImage} alt="mission-icon" />
        </div>
      </div>
      <ScrollButton
        className="scroll"
        targetIds={["about", "gallery", "footer"]}
      />
      <div id="gallery">
        <div id="gallery-first">
          <h2 className="headings">Joshiverse Gallery</h2>
          <p>
            Welcome to the gallery section of JOSHIVERSE where we share visual
            stories of hope, <br />
            resilience, and positive change. Explore the images below to see the
            impact of our work in action:
          </p>
        </div>
        <div id="gallery-second">
          <Slider {...settings}>
            <div className="gallery-slide">
              <div className="gallery">
                {/* <img src={Image1} alt=''/> */}
                <img src={newimage} alt="" />
                <img src={Image2} alt="" />
                <img src={Image3} alt="" />
              </div>
            </div>

            <div className="gallery-slide">
              <div className="gallery">
                <img src={Image4} alt="" />
                <img src={Image5} alt="" />
                <img src={Image6} alt="" />
              </div>
            </div>

            <div className="gallery-slide">
              <div className="gallery">
                <img src={Image7} alt="" />
                <img src={Image8} alt="" />
                <img src={Image9} alt="" />
              </div>
            </div>

            <div className="gallery-slide">
              <div className="gallery">
                <img src={Image10} alt="" />
                <img src={Image11} alt="" />
                <img src={Image12} alt="" />
              </div>
            </div>

            <div className="gallery-slide">
              <div className="gallery">
                <img src={Image13} alt="" />
                <img src={Image14} alt="" />
                <img src={Image15} alt="" />
              </div>
            </div>

            <div className="gallery-slide">
              <div className="gallery">
                <img src={Image16} alt="" />
                <img src={Image17} alt="" />
                <img src={Image18} alt="" />
              </div>
            </div>

            <div className="gallery-slide">
              <div className="gallery">
                <img src={Image19} alt="" />
                <img src={Image20} alt="" />
                <img src={Image21} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <ScrollButton
        className="scroll"
        targetIds={["about", "gallery", "footer", "sasi-intro"]}
      />
      <div id="sasi-intro">
        <div id="inner-sasi">
          <h2 className="headings">
            SA<span>SI</span>
          </h2>
          <img style={{ borderRadius: "10px" }} src={ImageIcon} alt="" />
        </div>
        <p>
          SASI (Share a Smile Initiative) is an expression of Joshiverse, that
          leverages the goodwill of our community, partners, and supporters,
          channeling their generosity towards enabling the disadvantaged to
          access quality education, encouraging them to grow holistically, and
          empowering them to lead!
        </p>

        <Link to="/sasi">
          <button id="sasi-button">Read More...</button>
        </Link>
      </div>
      <ScrollButton
        className="scroll"
        targetIds={["about", "gallery", "footer"]}
      />
      <div id="footer">
        <div id="first-footer">
          <div id="first-column-footer">
            <h4>
              ABOUT <span>Joshiverse</span>
            </h4>
            <p>
              Joshiverse is both an advocacy for continuous learning and a
              community of people who are passionate about learning, growth and
              leadership.
            </p>
            <div>
              <button>
                <img src={Facebook} alt="" />
              </button>
              <button>
                <img src={Youtube} alt="" />
              </button>
              <button>
                <img src={Instagram} alt="" />
              </button>
              <button>
                <img src={Twitter} alt="" />
              </button>
            </div>
          </div>
          <div id="second-column-footer">
            <h4>IMPORTANT INFO</h4>
            <div>
              <a href="#about">About Joshiverse</a>
              <a href="#nav">Annual Reports</a>
              <a href="#nav">Mission & Vision</a>
              <a href="#nav">Statistics</a>
            </div>
          </div>
          <div id="third-column-footer">
            <h4>IMPORTANT LINKS</h4>
            <div>
              <a href="#nav">Donate</a>
              <a href="#gallery">Media Resources</a>
              <a href="#nav">Quick Contact</a>
              <a href="#nav">Address</a>
            </div>
          </div>
        </div>
        <div id="second-footer">
          <hr></hr>
          <p>Copyright © Trust {year()} . ALL Right Reserved .</p>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
