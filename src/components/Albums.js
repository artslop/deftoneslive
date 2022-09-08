import { NavLink } from "react-router-dom";

function Albums() {
    return (
        <div id="albums" className="container">
            <div className="albumgroup">
                <div>
                    <NavLink
                        to="/adrenaline">
                        <img src="../albumcovers/Adrenaline.jpg" alt="Adrenaline" />
                    </NavLink>
                </div>
                <div>
                    <img src="../albumcovers/AroundTheFur.jpg" alt="Around The Fur" />
                </div>
                <div>
                    <img src="../albumcovers/WhitePonyGrey.jpg" alt="White Pony" />
                </div>
                <div>
                    <img src="../albumcovers/Deftones.jpg" alt="Deftones" />
                </div>
                <div>
                    <img src="../albumcovers/SaturdayNightWrist.jpg" alt="Saturday Night Wrist" />
                </div>
                <div>
                    <img src="../albumcovers/DiamondEyes.jpg" alt="Diamond Eyes" />
                </div>
                <div>
                    <img src="../albumcovers/KoiNoYokan.jpg" alt="Koi No Yokan" />
                </div>
                <div>
                    <img src="../albumcovers/Gore.jpg" alt="Gore" />
                </div>
                <div>
                    <img src="../albumcovers/Ohms.jpg" alt="Ohms" />
                </div>
                <div>
                    <img src="../albumcovers/BsidesAndRarities.jpg" alt="B-sides & Rarities" />
                </div>
                <div>
                    <img src="../albumcovers/Covers.jpg" alt="Covers" />
                </div>
                <div>
                    <img src="../albumcovers/BlackStallion.jpg" alt="Black Stallion" />
                </div>
            </div>
        </div>
    )
}

export default Albums;