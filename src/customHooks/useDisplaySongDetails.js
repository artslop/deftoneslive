import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allSongs, addSongDetails, toggleFromShows } from "../features/shows/showsSlice"
import '../App.css';

export default function useDisplaySongDetails() {
    const allSongData = useSelector(allSongs)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const displayDetails = (e) => {
        const track = e.target.id.toLowerCase();
        const songData = allSongData.filter((songs) => {
            return songs.name.toLowerCase() === track
        })
        dispatch(
            toggleFromShows({
                fromShows: false
            }))
        dispatch(
            addSongDetails(track, songData[0]?.album, songData[0]?.lyrics)
        )

        navigate("../songdetails");
    }

    return { displayDetails }
}
