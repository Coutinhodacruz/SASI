import React, { useState } from "react";
import AboutStyle from "../../../styles/about/AboutStyle.css";
import grow from "../../../assets/image/grow.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        About <span>Us</span>
      </h2>
      <div className="about-content">
        <h3>
          Grow Up Humanity
        </h3>
      <p className="p">
        There are many variations of azer duskam of Lorem Ipsum available, but
        the majority have <br /> suffered alteration in some form, by injected
        humour,
      </p>
      </div>
      <div className="about-p">
        <p>
          <h1>Who We Are</h1>
          There are many variations of passages of Lorem Ipsum available,There
          are <br /> many variations of passages of Lorem Ipsum available,many
          variations <br /> passages of Lorem available, and they try to hard
          work.
        </p>
      </div>
      <div className="about-p2">
        <p>
          <h1>Our Vission</h1>
          There are many variations of passages of Lorem Ipsum available,There
          are <br /> many variations of passages of Lorem Ipsum available,many
          variations <br /> passages of Lorem available, and they try to hard
          work.
        </p>
      </div>
      <div className="about-p3">
        <p>
          <h1>Our Mission</h1>
          There are many variations of passages of Lorem Ipsum available,There
          are <br /> many variations of passages of Lorem Ipsum available,many
          variations <br /> passages of Lorem available, and they try to hard
          work.
        </p>
      </div>
      <div className="btn-box btns">
        <img src={grow} alt="" />
      </div>
    </section>
  );
};

export default About;
