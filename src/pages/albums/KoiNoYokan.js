import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import { useSelector } from "react-redux";
import { allSongs } from "../../features/shows/showsSlice"
import SongDetails from '../SongDetails';
import Albums from "../../components/Albums.js";

import '../../App.css';

function KoiNoYokan() {
    return (
        <div className="App" >
            <Albums />
            <div id="common">
                <h2>Koi No Yokan</h2>
                <ol>
                    <li>Swerve City</li>
                    <li>Romantic Dreams</li>
                    <li>Leathers</li>
                    <li>Poltergeist</li>
                    <li>Entombed</li>
                    <li>Graphic Nature</li>
                    <li>Tempest</li>
                    <li>Gauze</li>
                    <li>Rosemary</li>
                    <li>Goon Squad</li>
                    <li>What Happened to You?</li>
                </ol>
            </div>
        </div>

    )
}

export default KoiNoYokan;