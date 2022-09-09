import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import { useSelector } from "react-redux";
import { allSongs } from "../../features/shows/showsSlice"
import SongDetails from '../SongDetails';
import Albums from "../../components/Albums.js";

import '../../App.css';

function SaturdayNightWrist() {
    return (
        <div className="App" >
            <Albums />
            <div id="common">
                <h2>Saturday Night Wrist</h2>
                <ol>
                    <li>Hole in the Earth</li>
                    <li>Rapture</li>
                    <li>Beware</li>
                    <li>Cherry Waves</li>
                    <li>Mein</li>
                    <li>U,U,D,D,L,R,L,R,A,B,Select,Start</li>
                    <li>Xerces</li>
                    <li>Rats!Rats!Rats!</li>
                    <li>Pink Cellphone</li>
                    <li>Combat</li>
                    <li>Kimdracula</li>
                    <li>Rivière</li>
                </ol>
                <h3>Bonus Tracks</h3>
                <ol>
                    <li>Drive (The Cars Cover)</li>
                </ol>
            </div>
        </div>

    )
}

export default SaturdayNightWrist;