import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Albums from "../components/Albums.js";
import { selectedSong, selectedAlbum, lyrics, fromShows } from "../features/shows/showsSlice"
import { useNavigate } from "react-router-dom";

function SongDetails() {
    const song = useSelector(selectedSong)
    const album = useSelector(selectedAlbum)
    const songLyrics = useSelector(lyrics)
    const navigatedFromShows = useSelector(fromShows)
    let navigate = useNavigate();

    const handleGoBack = () => {
        navigatedFromShows.fromShows ? navigate("../shows") : navigate("../songs");
    }

    return (
        <div>
            <Albums />
            <div style={{ color: 'white' }}><strong>Song</strong>: {song.selectedSong}</div>
            <br />
            <div style={{ color: 'white' }}><strong>Album</strong>: {album.selectedAlbum}</div>
            <br />
            <div style={{ color: 'white' }}><strong>Lyrics</strong>: {songLyrics.lyrics}</div>
            <button style={{ display: 'flex', margin: "30px auto" }} onClick={handleGoBack}>Go Back</button>
        </div >

    )
}

export default SongDetails;