import { NavLink } from "react-router-dom";
import SongTable from "../components/SongsDataTable.js";
import Albums from "../components/Albums.js";

import '../App.css';



function Songs() {
    return (
        <div className="App" >
            <div id="common">
                <Albums />
                <SongTable />
            </div>
        </div>
    )
}

export default Songs;