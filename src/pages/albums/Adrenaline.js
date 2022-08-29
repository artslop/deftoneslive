import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';

import '../../App.css';

function Adrenaline() {
    return (
        <div className="App" >
            <Header />
            <div id="common">
                <h2>Adrenaline</h2>
                <div id="albumDetails">
                    <div class="album-art">
                        <img src="../albumcovers/Adrenaline.jpg" alt="Adrenaline" />
                    </div>
                    <div class="track-list">
                        <ol>
                            <li>Bored</li>
                            <li>Minus Blindfold</li>
                            <li>One Weak</li>
                            <li>Nosebleed</li>
                            <li>Lifter</li>
                            <li>Root</li>
                            <li>7 Words</li>
                            <li>Birthmark</li>
                            <li>Engine No. 9</li>
                            <li>Fireal</li>
                            <li>Fist (hidden track)</li>
                        </ol>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Adrenaline;