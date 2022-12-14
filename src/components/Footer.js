import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <div id="footer">
            <a href="/about">About DeftonesLive</a>
            <NavLink to="/contact">Contact</NavLink>
            <a rel="noopener noreferrer" href="https://www.facebook.com/DeftonesLiveArchive/" target="_blank">
                Facebook
            </a> -
            <a href="https://www.instagram.com/deftoneslive_/" target="_blank">
                Instagram
            </a> - <a rel="noopener noreferrer" href="https://www.youtube.com/c/DeftonesLiveChannel" target="_blank">
                YouTube
            </a>
        </div>
    )
}

export default Footer;