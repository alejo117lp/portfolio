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
