import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import { useSelector } from "react-redux";
import { allSongs } from "../../features/shows/showsSlice"
import SongDetails from '../../components/SongDetails';
import Albums from "../../components/Albums.js";

import '../../App.css';

function WhitePony() {
    return (
        <div className="App" >
            <Header />
            <Albums />
            <div id="common">
                <h2>White Pony</h2>
                <ol>
                    <li>Feiticeira</li>
                    <li>Digital Bath</li>
                    <li>Elite</li>
                    <li>Rx Queen</li>
                    <li>Street Carp</li>
                    <li>Teenager</li>
                    <li>Knife Prty</li>
                    <li>Korea</li>
                    <li>Passenger</li>
                    <li>Change (In the House of Flies)</li>
                    <li>Pink Maggit</li>
                </ol>
                <h3>Bonus Tracks</h3>
                <ol>
                    <li>Back to School (Mini Maggit)</li>
                    <li>The Boy's Republic</li>
                </ol>
            </div>
            <Footer />
        </div>

    )
}

export default WhitePony;