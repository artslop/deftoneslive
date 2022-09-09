import React, { useState, useEffect } from 'react';
import Albums from "../components/Albums.js";



function SongDetails({ song, album, lyrics }) {
    return (
        <div style={{ marginTop: '30px' }}>
            <Albums />
            <div style={{ color: 'white' }}><strong>Song</strong>: {song}</div>
            <br />
            <div style={{ color: 'white' }}><strong>Album</strong>: {album}</div>
            <br />

            <div style={{ color: 'white' }}><strong>Lyrics</strong>: {lyrics}</div>
        </div >

    )
}

export default SongDetails;