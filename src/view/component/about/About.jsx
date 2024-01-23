import React from "react";
import "../../../styles/about/AboutStyle.css";
import grow from "../../../assets/image/grow.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about-heading">
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
          SASI (Share a Smile Initiative) is an expression of Joshiverse, that leverages the goodwill 
          of our community, partners, and supporters, <br />
          channeling their generosity towards enabling the disadvantaged to access quality education, 
          encouraging them to grow holistically, and empowering them to lead!

        </p>
      </div>
      <div className="about-p2">
        <p>
          <h1>Our Vission</h1>
          We are always delighted to support these schools with variety of materials to enhance the learning experience of the learners,<br />
          expand their educational horizon, and boost their fighting chance for a bright future and afford them a competitive advantage in these 
          technological times.

        </p>
      </div>
      <div className="about-p3">
        <p>
          <h1>Our Mission</h1>
          We run our outreaches on a yearly basis, with this being our third edition - we have had the privilege of contributing to the Makoko community, the Pacelli School for the Blind, and the Wesley School for the Hearing Impaired.
          We want them to know that we and many others are rooting for them; we believe in them; and we will keep cheering them on as they progress towards greater heights beyond societal limitations.❤️💯
        </p>
      </div>
      <div className="about-image">
        <img src={grow} alt="" />
      </div>
    </section>
  );
};

export default About;
