import React, { useState, useEffect } from "react";
import StacticStyle from '../../../styles/statistic/StatisticStyle.css';
import { Waypoint } from 'react-waypoint';  

const Statistic = () => {
  const [donations, setDonations] = useState(0);
  const [missionsDone, setMissionsDone] = useState(0);
  const [volunteers, setVolunteers] = useState(0);
  const [newProjects, setNewProjects] = useState(0);

  const generateRandomNumbers = () => {
    setDonations(getRandomNumber());
    setMissionsDone(getRandomNumber());
    setVolunteers(getRandomNumber());
    setNewProjects(getRandomNumber());
  };

  const getRandomNumber = () => {
    
    return Math.floor(Math.random() * (200 - 50 + 1)) + 50;
  };

  return (
    <section>
      <div class="funfact-area pt-120 pb-90">
        <div class="container">
          <Waypoint onEnter={generateRandomNumbers}>
            <div class="row">
              <div class="col-lg">
                <div class="project-count">
                  <h2 class="counter">{donations}</h2>
                  <span>Donations</span>
                </div>
              </div>
              <div class="col-lg">
                <div class="project-count">
                  <h2 class="counter">{missionsDone}</h2>
                  <span>Missions Done</span>
                </div>
              </div>
              <div class="col-lg">
                <div class="project-count">
                  <h2 class="counter">{volunteers}</h2>
                  <span>Volunteers</span>
                </div>
              </div>
              <div class="col-lg">
                <div class="project-count">
                  <h2 class="counter">{newProjects}</h2>
                  <span>New Projects</span>
                </div>
              </div>
            </div>
          </Waypoint>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
