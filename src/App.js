import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import HomPage from './view/component/homepage/HomPage';
import LandingPage  from './view/component/landingpage/LandingPage.jsx'
import About from './view/component/about/About';
import Event from './view/component/event/Event.jsx'
import Statistic from './view/component/statistic/Statistic.jsx';
import Donate from './view/component/donate/Donate.jsx';
import Contact from './view/component/contact/Contact.jsx'

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/sasi' element={
          <>
            <HomPage/>
            <About/>
            <Event />
            <Statistic />
            <Donate />
            <Contact />
          </>
        }>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


