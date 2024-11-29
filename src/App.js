import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from './components/header/Header';
import TwoDGames from './components/2d_games/TwoDGames';
import ThreeDGames from './components/3d_games/ThreeDGames';
import VrMobGames from  './components/vr_mob_games/VrMobGames';
import Frontend from  './components/frontend/Frontend';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';


function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Header />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Home />} />
            <Route path='/2d-games' element={<TwoDGames />} />
            <Route path='/3d-games' element={<ThreeDGames />} />
            <Route path='/frontend-pj' element={<Frontend />} />
            <Route path='/vr-mob-games' element={<VrMobGames />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
