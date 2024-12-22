import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from './components/Header/Header';
import TwoDGames from './pages/2d_games/TwoDGames';
import ThreeDGames from './pages/3d_games/ThreeDGames';
import VrMobGames from  './pages/VrMobGames/VrMobGames';
import Frontend from  './pages/Frontend/Frontend';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import DeliveryJourney from './pages/Games/DeliveryJourney';
import HarmonyMaster from './pages/Games/HarmonyMaster';
import MenInBlackMuseum from './pages/Games/MenInBlackMuseum';
import RobotZ from './pages/Games/RobotZ';
import TankWar from './pages/Games/TankWar';
import TheLastJump from './pages/Games/TheLastJump';
import ThisIsNotAChildhood from './pages/Games/ThisIsNotAChildhood';


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
            <Route path='/delivery-journey' element={<DeliveryJourney />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
