import Albums from "../../components/Albums.js";
import useDisplaySongDetails from "../../customHooks/useDisplaySongDetails"
import '../../App.css'

function Adrenaline() {
    const { displayDetails } = useDisplaySongDetails();
    return (
        <div className="App" >
            <Albums />
            <div id="common">
                <h2>Adrenaline</h2>
                <div id="albumDetails">
                    <div className="album-art">
                        <img src="../albumcovers/Adrenaline.jpg" alt="Adrenaline" />
                    </div>
                    <div className="track-list">
                        <ol style={{ cursor: 'pointer' }}>
                            <li id="Bored" onClick={e => displayDetails(e)}>Bored</li>
                            <li id="Minus Blindfold" onClick={e => displayDetails(e)}>Minus Blindfold</li>
                            <li id="One Weak" onClick={e => displayDetails(e)}>One Weak</li>
                            <li id="Nosebleed" onClick={e => displayDetails(e)}>Nosebleed</li>
                            <li id="Lifter" onClick={e => displayDetails(e)}>Lifter</li>
                            <li id="Root" onClick={e => displayDetails(e)}>Root</li>
                            <li id="7 Words" onClick={e => displayDetails(e)}>7 Words</li>
                            <li id="Birthmark" onClick={e => displayDetails(e)}>Birthmark</li>
                            <li id="Engine #9" onClick={e => displayDetails(e)}>Engine No. 9</li>
                            <li id="Fireal" onClick={e => displayDetails(e)}>Fireal</li>
                            <li id="Fist" onClick={e => displayDetails(e)}>Fist (hidden track)</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Adrenaline;