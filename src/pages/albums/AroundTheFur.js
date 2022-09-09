import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import { useSelector } from "react-redux";
import { allSongs } from "../../features/shows/showsSlice"
import SongDetails from '../SongDetails';
import Albums from "../../components/Albums.js";

import '../../App.css';

function AroundTheFur() {
    return (
        <div className="App" >
            <Albums />
            <div id="common">
                <h2>Around The Fur</h2>
                <ol>
                    <li>My Own Summer (Shove It)</li>
                    <li>Lhabia</li>
                    <li>Mascara</li>
                    <li>Around the Fur</li>
                    <li>Rickets</li>
                    <li>Be Quiet and Drive (Far Away)</li>
                    <li>Lotion</li>
                    <li>Dai the Flu</li>
                    <li>Headup</li>
                    <li>MX</li>
                    <li>Damone (hidden track)</li>
                </ol>
            </div>
        </div>

    )
}

export default AroundTheFur;