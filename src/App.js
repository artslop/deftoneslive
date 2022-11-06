import './App.css';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import AdminPage from './pages/AdminPage.js';
import Shows from './pages/Shows.js';
import Songs from './pages/Songs.js';
import SongDetails from './pages/SongDetails.js';
import About from './pages/About.js';
import Adrenaline from './pages/albums/Adrenaline.js';
import AroundTheFur from './pages/albums/AroundTheFur.js';
import WhitePony from './pages/albums/WhitePony.js';
import Deftones from './pages/albums/Deftones.js';
import SaturdayNightWrist from './pages/albums/SaturdayNightWrist.js';
import DiamondEyes from './pages/albums/DiamondEyes.js';
import KoiNoYokan from './pages/albums/KoiNoYokan.js';
import Gore from './pages/albums/Gore.js';
import Ohms from './pages/albums/Ohms.js';
import Covers from './pages/albums/Covers.js';
import BsidesAndRarities from './pages/albums/BsidesAndRarities.js';
import BlackStallion from './pages/albums/BlackStallion.js';
import ContactForm from './components/ContactForm.js';
import Footer from './components/Footer.js';
import {
  BrowserRouter as Router, Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App" >
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />

          <Route path="adminPage" element={<AdminPage />} />
          <Route path="shows" element={<Shows />} />
          <Route path="songs" element={<Songs />} />
          <Route path="songdetails" element={<SongDetails />} />
          <Route path="about" element={<About />} />
          <Route path="adrenaline" element={<Adrenaline />} />
          <Route path="aroundthefur" element={<AroundTheFur />} />
          <Route path="whitepony" element={<WhitePony />} />
          <Route path="deftones" element={<Deftones />} />
          <Route path="saturdaynightwrist" element={<SaturdayNightWrist />} />
          <Route path="diamondeyes" element={<DiamondEyes />} />
          <Route path="koinoyokan" element={<KoiNoYokan />} />
          <Route path="gore" element={<Gore />} />
          <Route path="ohms" element={<Ohms />} />
          <Route path="bsidesandrarities" element={<BsidesAndRarities />} />
          <Route path="covers" element={<Covers />} />
          <Route path="blackstallion" element={<BlackStallion />} />
          <Route path="contact" element={<ContactForm />} />
        </Routes>

        <Footer />
      </Router>
    </div >
  );
}

export default App;
