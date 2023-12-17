import './App.css';
import About from './view/component/about/About';
import HomPage from './view/component/homepage/HomPage';

function App() {
  return (
    <div className="App">
      <HomPage />
      <About />
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