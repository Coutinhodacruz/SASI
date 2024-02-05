import React from "react";
import "../../../styles/event/EventStyle.css";
import eventpc1 from "../../../assets/image/eventpc1.jpg";
import eventpc2 from "../../../assets/image/eventpc2.jpg";
import eventpc3 from "../../../assets/image/eventpc3.jpg";
import picture from "../../../assets/image/sasi-image/IMG-20240202-WA0064.jpg";

const Event = () => {
  return (
    <section className="event" id="event">
      <h2 className="event-heading">Event</h2>
      <div className="event-content">
        {/* <h3>Latest Causes</h3> */}
        <p className="p">
          [SASI] we take great pride in our commitment to serving communities in
          need and making a positive <br />
          impact on the lives of those facing adversity. Over the years, we've
          had the privilege of organizing <br />
          various events and initiatives aimed at bringing hope, support, and
          opportunities to marginalized groups.
        </p>
      </div>
      <div className="row">
        <div className="sec-row">
          <div className="single-cause">
            <img src={picture} alt="" />
            <div className="cause-info1">
              <h3>
                <a href="">Supporting the Blind School</a>
              </h3>
              <p>
                In [Year], we partnered with [Name of Blind School] to provide
                crucial <br />
                resources and support to visually impaired students. <br />
                Through our fundraising efforts and generous donations
              </p>
              {/* In [Year], we partnered with [Name of Blind School] to provide crucial resources and support to visually <br /> impaired students.  Through our fundraising efforts and generous donations from supporters like you, <br /> we were able to supply the school with essential equipment such as Braille books, <br /> specialized learning tools, and assistive devices. <br />Additionally, we organized volunteer-led workshops and recreational <br /> activities to promote inclusion and empower students to reach their full potential. */}
              <div className="cause-meta">
                <div className="dollar-target f-left">
                  <h4>
                    Fill up : <span>$250,000</span>
                  </h4>
                </div>
                <div className="dollar-target f-right">
                  <h4>
                    Target : <span>$300,000</span>
                  </h4>
                </div>
                <button className="button theme-bg">Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-row">
          <div className="single-cause mb-30">
            <img src={eventpc2} alt="" />
            <div className="cause-info2">
              <h3>
                <a href="">Empowering the Mokoko Community</a>
              </h3>
              <p>
                Our commitment to community development led us to the Mokoko
                community <br />
                where we implemented a series of sustainable initiatives <br />
                aimed at improving livelihoods and fostering self-reliance. From
                [Year] to [Year],
              </p>
              <div className="cause-meta">
                <div className="dollar-target f-left">
                  <h4>
                    Fill up : <span>$250,000</span>
                  </h4>
                </div>
                <div className="dollar-target f-right">
                  <h4>
                    Target : <span>$30,000</span>
                  </h4>
                </div>
                <button className="button theme-bg">Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-row">
          <div className="single-cause mb-30">
            <img src={eventpc3} alt="" />
            <div className="cause-info3">
              <h3>
                <a href="">Supporting the Deaf School</a>
              </h3>
              <p>
                In [Year], we collaborated with [Name of Deaf School] to address
                the unique <br />
                challenges faced by deaf and hard-of-hearing students. <br />
                we provided sign language training for teachers.
              </p>
              <div className="cause-meta">
                <div className="dollar-target f-left">
                  <h4 className="h4">
                    Fill up : <span>$250,000</span>
                  </h4>
                </div>
                <div className="dollar-target f-right">
                  <h4 className="h4">
                    Target : <span>$30,000</span>
                  </h4>
                </div>
                <button className="button theme-bg">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
