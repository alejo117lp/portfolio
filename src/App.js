import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
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
import PortalEmpleados from './pages/PortalEmpleados/PortalEmpleados';
import AsistenciaEventos from './pages/AsistenciaEventos/AsistenciaEventos';
import GestionContrataciones from './pages/GestionContrataciones/GestionContrataciones';


function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Header />
        <ScrollToTop />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Home />} />
            <Route path='/2d-games' element={<TwoDGames />} />
            <Route path='/3d-games' element={<ThreeDGames />} />
            <Route path='/frontend-pj' element={<Frontend />} />
            <Route path='/vr-mob-games' element={<VrMobGames />} />
            <Route path='/delivery-journey' element={<DeliveryJourney />} />
            <Route path='/harmony-master' element={<HarmonyMaster />} />
            <Route path='/mib-museum' element={<MenInBlackMuseum />} />
            <Route path='/robot-z' element={<RobotZ />} />
            <Route path='/tank-war' element={<TankWar />} />
            <Route path='/the-last-jump' element={<TheLastJump />} />
            <Route path='/tinac' element={<ThisIsNotAChildhood />} />
            <Route path='/portal-empleados' element={<PortalEmpleados />} />
            <Route path='/asistencia-eventos' element={<AsistenciaEventos />} />
            <Route path='/app-contrataciones' element={<GestionContrataciones />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
