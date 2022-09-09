import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import { useSelector } from "react-redux";
import { allSongs } from "../../features/shows/showsSlice"
import SongDetails from '../SongDetails';
import Albums from "../../components/Albums.js";

import '../../App.css';

function Deftones() {
    return (
        <div className="App" >
            <Albums />
            <div id="common">
                <h2>Deftones</h2>
                <ol>
                    <li>Hexagram</li>
                    <li>Needles and Pins</li>
                    <li>Minerva</li>
                    <li>Good Morning Beautiful</li>
                    <li>Deathblow</li>
                    <li>When Girls Telephone Boys</li>
                    <li>Battle-Axe</li>
                    <li>Lucky You</li>
                    <li>Bloody Cape</li>
                    <li>Anniversary of an Uninteresting Event</li>
                    <li>Moana</li>
                </ol>
            </div>
        </div>

    )
}

export default Deftones;