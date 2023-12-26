import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import HomPage from './view/component/homepage/HomPage';
import LandingPage  from './view/component/landingpage/LandingPage.jsx'
import About from './view/component/about/About';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/sasi' element={
          <>
            <HomPage/>
            <About/>
          </>
        }>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


