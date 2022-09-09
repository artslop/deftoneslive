import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import { useSelector } from "react-redux";
import { allSongs } from "../../features/shows/showsSlice"
import SongDetails from '../SongDetails';
import Albums from "../../components/Albums.js";

import '../../App.css';

function Gore() {
    return (
        <div className="App" >
            <Albums />
            <div id="common">
                <h2>Gore</h2>
                <ol>
                    <li>Prayers / Triangles</li>
                    <li>Acid Hologram</li>
                    <li>Doomed User</li>
                    <li>Geometric Headdress</li>
                    <li>Hearts / Wires</li>
                    <li>Pittura Infamante</li>
                    <li>Xenon</li>
                    <li>(L)MIRL</li>
                    <li>Gore</li>
                    <li>Phantom Bride</li>
                    <li>Rubicon</li>
                </ol>
            </div>
        </div>

    )
}

export default Gore;