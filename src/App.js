import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate
} from "react-router-dom";
import Header from './components/header/Header';
import TwoDGames from './components/2d_games/TwoDGames';


function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path="/2d-games" element={<TwoDGames />} />
          </Routes>
        </Router>
        <p>Hola Mundo</p>
      </div>
    </>
    
  );
}

export default App;
