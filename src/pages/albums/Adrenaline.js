import { useState } from 'react'
import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from "react-redux"
import { allSongs, addSongDetails, toggleFromShows } from "../../features/shows/showsSlice"
import { useNavigate } from "react-router-dom";
import '../../App.css'

function Adrenaline() {
    // TODO: Create custom hook to reuse this logic in all other albums
    const allSongData = useSelector(allSongs)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDisplaySongDetails = (e) => {
        const track = e.target.id;
        const songData = allSongData.filter((songs) => {
            return songs.name === track
        })
        dispatch(
            toggleFromShows({
                fromShows: false
            }))
        dispatch(
            addSongDetails(track, songData[0].album, songData[0].lyrics)
        )

        navigate("../songdetails");
    }

    return (
        <div className="App" >
            <div id="common">
                <h2>Adrenaline</h2>
                <div id="albumDetails">
                    <div className="album-art">
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

        </div >

    )
}

export default Adrenaline;