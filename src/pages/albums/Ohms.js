import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import { useSelector } from "react-redux";
import { allSongs } from "../../features/shows/showsSlice"
import SongDetails from '../../components/SongDetails';
import Albums from "../../components/Albums.js";

import '../../App.css';

function Ohms() {
    return (
        <div className="App" >
            <Header />
            <Albums />
            <div id="common">
                <h2>Ohms</h2>
                <ol>
                    <li>Genesis</li>
                    <li>Ceremony</li>
                    <li>Urantia</li>
                    <li>Error</li>
                    <li>The Spell of Mathematics</li>
                    <li>Pompeji</li>
                    <li>This Link Is Dead</li>
                    <li>Radiant City</li>
                    <li>Headless</li>
                    <li>Ohms</li>
                </ol>
            </div>
            <Footer />
        </div>

    )
}

export default Ohms;