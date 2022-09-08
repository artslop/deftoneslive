import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { NavLink } from "react-router-dom";
import SongTable from "../components/SongsDataTable.js";
import Albums from "../components/Albums.js";

import '../App.css';

function Songs() {
    return (
        <div className="App" >
            <Header />
            <div id="common">
                <Albums />
                <SongTable />
            </div>
            <Footer />
        </div>

    )
}

export default Songs;