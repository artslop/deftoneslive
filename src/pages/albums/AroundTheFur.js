import Albums from "../../components/Albums.js";
import useDisplaySongDetails from "../../customHooks/useDisplaySongDetails"
import '../../App.css'

import '../../App.css';

function AroundTheFur() {
    const { displayDetails } = useDisplaySongDetails();
    return (
        <div className="App" >
            <Albums />
            <div id="common">
                <h2>Around The Fur</h2>
                <div id="albumDetails">
                    <div className="album-art">
                        <img src="../albumcovers/AroundTheFur.jpg" alt="Around the Fur Album cover" />
                    </div>
                    <div className="track-list">
                        <ol style={{ cursor: 'pointer' }}>
                            <li id="My Own Summer (Shove It)" onClick={(e) => displayDetails(e)}>My Own Summer (Shove It)</li>
                            <li id="Lhabia" onClick={(e) => displayDetails(e)}>Lhabia</li>
                            <li id="Mascara" onClick={(e) => displayDetails(e)}>Mascara</li>
                            <li id="Around the Fur" onClick={(e) => displayDetails(e)}>Around the Fur</li>
                            <li id="Rickets" onClick={(e) => displayDetails(e)}>Rickets</li>
                            <li id="Be Quiet and Drive (Far Away)" onClick={(e) => displayDetails(e)}>Be Quiet and Drive (Far Away)</li>
                            <li id="Lotion" onClick={(e) => displayDetails(e)}>Lotion</li>
                            <li id="Dai the Flu" onClick={(e) => displayDetails(e)}>Dai the Flu</li>
                            <li id="Headup" onClick={(e) => displayDetails(e)}>Headup</li>
                            <li id="MX" onClick={(e) => displayDetails(e)}>MX</li>
                            <li id="Damone (hidden track)" onClick={(e) => displayDetails(e)}>Damone (hidden track)</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AroundTheFur;