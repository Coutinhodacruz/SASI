import React from "react";
import EventStyle from "../../../styles/event/EventStyle.css";
import eventpc1 from "../../../assets/image/eventpc1.jpg";
import eventpc2 from "../../../assets/image/eventpc2.jpg"
import eventpc3 from "../../../assets/image/eventpc3.jpg"

const Event = () => {
  return (
    <section className="event" id="event">
      <h2 className="heading">Event</h2>
      <div className="event-content">
        <h3>Latest Causes</h3>
        <p className="p">
          There are many variations of azer duskam of Lorem Ipsum available, but
          the majority have <br /> suffered alteration in some form, by injected
          humour,
        </p>
      </div>
      <div className="row">
        <div className="sec-row">
          <div className="single-cause mb-30">
            <img  src={eventpc1} alt="" />
            <div className="cause-info1">
              <h3>
                <a href="">Children Safety</a>
              </h3>
              <p>
                There are many variations of passages of <br />Lorem Ipsum available,
                but the majority have <br />suffered alteration in some.
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
            <img src={eventpc2} alt="" />
            <div className="cause-info2">
              <h3>
                <a href="">Clean Water</a>
              </h3>
              <p>
                There are many variations of passages of <br />Lorem Ipsum available,
                but the majority have <br />suffered alteration in some.
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
                <a href="">Education help</a>
              </h3>
              <p>
                There are many variations of passages of <br />Lorem Ipsum available,
                but the majority have <br />suffered alteration in some.
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
