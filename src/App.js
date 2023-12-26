import './App.css';
// import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import LandingPage  from './view/component/landingpage/LandingPage.jsx'
import About from './view/component/about/About';
import HomPage from './view/component/homepage/HomPage';
import Event from './view/component/event/Event';
import Statistic from './view/component/statistic/Statistic';
import Donate from './view/component/donate/Donate';
import Contact from './view/component/contact/Contact';

function App() {
  return (
    <div className="App">
      {/* <LandingPage/> */}
      
      <HomPage />
      <About />
      <Event />
      <Statistic />
      <Donate />
      <Contact />
    </div>
  );
}

export default App;


{/* <Router>
    <Routes>
      <Route path="/home" component={HomPage} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/donate" component={Donate} />
      <Route path="/" component={LandingPage} />
    </Routes>
  </Router> */}