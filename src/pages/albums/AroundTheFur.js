import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allSongs, addSongDetails, toggleFromShows } from "../../features/shows/showsSlice"
import Albums from "../../components/Albums.js";

import '../../App.css';

function AroundTheFur() {

    const allSongData = useSelector(allSongs)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDisplaySongDetails = (e) => {
        const track = e.target.id.toLowerCase();
        const songData = allSongData.filter((songs) => {
            return songs.name.toLowerCase() === track
        })
        dispatch(
            toggleFromShows({
                fromShows: false
            }))
        dispatch(
            addSongDetails(track, songData[0]?.album, songData[0]?.lyrics)
        )

        navigate("../songdetails");
    }
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
                            <li id="My Own Summer (Shove It)" onClick={handleDisplaySongDetails}>My Own Summer (Shove It)</li>
                            <li id="Lhabia" onClick={handleDisplaySongDetails}>Lhabia</li>
                            <li id="Mascara" onClick={handleDisplaySongDetails}>Mascara</li>
                            <li id="Around the Fur" onClick={handleDisplaySongDetails}>Around the Fur</li>
                            <li id="Rickets" onClick={handleDisplaySongDetails}>Rickets</li>
                            <li id="Be Quiet and Drive (Far Away)" onClick={handleDisplaySongDetails}>Be Quiet and Drive (Far Away)</li>
                            <li id="Lotion" onClick={handleDisplaySongDetails}>Lotion</li>
                            <li id="Dai the Flu" onClick={handleDisplaySongDetails}>Dai the Flu</li>
                            <li id="Headup" onClick={handleDisplaySongDetails}>Headup</li>
                            <li id="MX" onClick={handleDisplaySongDetails}>MX</li>
                            <li id="Damone (hidden track)" onClick={handleDisplaySongDetails}>Damone (hidden track)</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AroundTheFur;