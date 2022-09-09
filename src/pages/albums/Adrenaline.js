import { useState } from 'react';
import { nanoid } from 'nanoid'
import { useSelector } from "react-redux";
import { allSongs } from "../../features/shows/showsSlice"
import SongDetails from '../SongDetails';
import '../../App.css';

function Adrenaline() {
    const [isShowingSongDetails, setIsShowingSongDetails] = useState(false);
    const [songData, setSongData] = useState([]);
    const allSongData = useSelector(allSongs)


    const handleDisplaySongDetails = (e) => {
        const track = e.target.id;
        console.log('track', track)
        const filteredSongData = allSongData.filter((songs) => {
            return songs.name === track
        })

        setIsShowingSongDetails(true)
        setSongData(filteredSongData)
    }

    const handleGoBack = () => {
        setIsShowingSongDetails(false)
    }

    return (
        <div className="App" >

            {isShowingSongDetails ?
                songData.map((data) => (
                    <div key={nanoid()} style={{ width: '950px', margin: '0 auto' }}>
                        <SongDetails song={data.name} album={data.album} lyrics={data.lyrics} />
                        <button style={{ display: 'flex', margin: "30px auto" }} onClick={handleGoBack}>Go Back</button>
                    </div>
                ))
                :
                <div id="common">
                    <h2>Adrenaline</h2>
                    <div id="albumDetails">
                        <div class="album-art">
                            <img src="../albumcovers/Adrenaline.jpg" alt="Adrenaline" />
                        </div>
                        <div className="track-list">
                            <ol style={{ cursor: 'pointer' }}>
                                <li id="Bored" onClick={handleDisplaySongDetails}>Bored</li>
                                <li id="Minus Blindfold" onClick={handleDisplaySongDetails}>Minus Blindfold</li>
                                <li id="One Weak" onClick={handleDisplaySongDetails}>One Weak</li>
                                <li id="Nosebleed" onClick={handleDisplaySongDetails}>Nosebleed</li>
                                <li id="Lifter" onClick={handleDisplaySongDetails}>Lifter</li>
                                <li id="Root" onClick={handleDisplaySongDetails}>Root</li>
                                <li id="7 Words" onClick={handleDisplaySongDetails}>7 Words</li>
                                <li id="Birthmark" onClick={handleDisplaySongDetails}>Birthmark</li>
                                <li id="Engine #9" onClick={handleDisplaySongDetails}>Engine No. 9</li>
                                <li id="Fireal" onClick={handleDisplaySongDetails}>Fireal</li>
                                <li id="Fist" onClick={handleDisplaySongDetails}>Fist (hidden track)</li>
                            </ol>
                        </div>
                    </div>
                </div>
            }
        </div >

    )
}

export default Adrenaline;