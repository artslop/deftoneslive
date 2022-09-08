import { NavLink } from "react-router-dom";

function Albums() {
    return (
        <div id="albums" className="container">
            <div className="albumgroup">
                <div>
                    <NavLink
                        to="/Adrenaline">
                        <img src="../albumcovers/Adrenaline.jpg" alt="Adrenaline" />
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/AroundTheFur">
                        <img src="../albumcovers/AroundTheFur.jpg" alt="Around The Fur" />
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/WhitePony">
                        <img src="../albumcovers/WhitePonyGrey.jpg" alt="White Pony" />
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/Deftones">
                        <img src="../albumcovers/Deftones.jpg" alt="Deftones" />
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/SaturdayNightWrist">
                        <img src="../albumcovers/SaturdayNightWrist.jpg" alt="Saturday Night Wrist" />
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/DiamondEyes">
                        <img src="../albumcovers/DiamondEyes.jpg" alt="Diamond Eyes" />
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/KoiNoYokan">
                        <img src="../albumcovers/KoiNoYokan.jpg" alt="Koi No Yokan" />
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/Gore">
                        <img src="../albumcovers/Gore.jpg" alt="Gore" />
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/Ohms">
                        <img src="../albumcovers/Ohms.jpg" alt="Ohms" />
                    </NavLink>
                </div>
                <div>
                <NavLink
                        to="/BsidesRarities">
                        <img src="../albumcovers/BsidesAndRarities.jpg" alt="B-sides & Rarities" />
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/Covers">
                        <img src="../albumcovers/Covers.jpg" alt="Covers" />
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/BlackStallion">
                        <img src="../albumcovers/BlackStallion.jpg" alt="Black Stallion" />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Albums;