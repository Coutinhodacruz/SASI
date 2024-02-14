import React from "react";
import "../../../styles/event/EventStyle.css";
// import eventpc1 from "../../../assets/image/eventpc1.jpg";
import eventpc2 from "../../../assets/image/eventpc2.jpg";
import eventpc3 from "../../../assets/image/sasi-image/give.JPG";
import picture from "../../../assets/image/sasi-image/p14.jpg";

const Event = () => {
  return (
    <section className="event" id="event">
      <h2 className="event-heading">Event</h2>
      <div className="event-content">
        {/* <h3>Latest Causes</h3> */}
        <p className="p">
          SASI we take great pride in our commitment to serving communities in
          need and making a positive <br />
          impact on the lives of those facing adversity. Over the years, we've
          had the privilege of organizing <br />
          various events and initiatives aimed at bringing hope, support, and
          opportunities to marginalized groups.
        </p>
      </div>
      <div className="row">
        <div className="sec-row">
          <div className="single-cause mb-30">
            <img src={eventpc2} alt="" />
            <div className="cause-info2">
              <h3>
                <a href="">The Mokoko Community</a>
              </h3>
              <p>
                In 2022 We collaborated to community development <br />
                led us to the Mokoko community where we implemented <br />
                a series of sustainable initiatives <br />
                aimed at improving livelihoods and fostering self-reliance.
              </p>
              {/* Makoko- We collaborated with the Makoko Dream Foundation to provide writing materials for the students and a large-sized canoe to transport students freely to and from school, bridging the barrier to quality education. Over 120 students from multiple schools on the waterfront benefits from this gesture on the average. */}
              <div className="cause-meta">
                <div className="dollar-target f-left">
                  <h4>
                    Fill up : <span>N250,000</span>
                  </h4>
                </div>
                <div className="dollar-target f-right">
                  <h4>
                    Target : <span>N500,000</span>
                  </h4>
                </div>
                <button className="button theme-bg">Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-row">
          <div className="single-cause">
            <img src={picture} alt="" />
            <div className="cause-info1">
              <h3>
                <a href="">Supporting the Blind School</a>
              </h3>
              <p>
                In 2023, we partnered with Pacelli School for the Blind to
                provide crucial <br />
                resources and support to visually impaired students. <br />
                Through our fundraising efforts and generous donations
              </p>
              <div className="cause-meta">
                <div className="dollar-target f-left">
                  <h4>
                    Fill up : <span>N510,000</span>
                  </h4>
                </div>
                <div className="dollar-target f-right">
                  <h4>
                    Target : <span>N100,000,00</span>
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
                In 2024 we collaborated with Wesley School for the
                <br /> Hearing Impaired to address the unique <br />
                challenges faced by deaf and hard-of-hearing students. <br />
                we provided sign language training for teachers.
              </p>
              <div className="cause-meta">
                <div className="dollar-target f-left">
                  <h4 className="h4">
                    Fill up : <span>N1.4million</span>
                  </h4>
                </div>
                <div className="dollar-target f-right">
                  <h4 className="h4">
                    Target : <span>N5million</span>
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
