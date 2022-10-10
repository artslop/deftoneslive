import { nanoid } from 'nanoid'
import { allSongs, toggleFromShows, addSongDetails } from "../features/shows/showsSlice"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function AllTracks({ showTrackList, encore1, encore2, info, goBack }) {
    const allSongData = useSelector(allSongs)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDisplaySongDetails = (song) => {
        const songData = allSongData.filter((track) => {
            return track.name.toLowerCase() === song.toLowerCase();
        })
        dispatch(
            toggleFromShows({
                fromShows: true
            }))
        dispatch(
            addSongDetails(song, songData[0]?.album, songData[0]?.lyrics)
        )

        navigate("../songdetails");
    }

    let trackList =
        showTrackList
            .map((track, idx) => {
                return (
                    <div key={nanoid()} className="allTracks" >
                        <li onClick={() => { handleDisplaySongDetails(track) }}>
                            {`${idx + 1}. ${track}`}
                        </li>
                    </div>
                )
            })

    let encoreOne = encore1.map((encore, idx) => {
        return (
            <div key={nanoid()} className="allTracks">
                <li>{`${showTrackList.length + (idx + 1)}. ${encore}`}</li>
            </div>
        )
    })

    let encoreTwo = encore2.map((encore2, idx) => {
        let numOfTracks = showTrackList.length + encore1.length;
        return (
            <div key={nanoid()} className="allTracks">
                <li>{`${numOfTracks + (idx + 1)}. ${encore2}`}</li>
            </div>
        )
    })

    return (
        <div>
            <div className="tablecontain">
                <div className="setlist__container">
                    <div>
                        <h4>Main Set</h4><button className='btn__goBack' onClick={goBack}>Go Back</button>
                        {trackList}
                    </div>
                    <div className="encore">
                        {encore1.length > 0 &&
                            <h4>Encore 1</h4>
                        }
                        {encoreOne}
                    </div>
                    <div className="encore">
                        {encore2.length > 0 &&
                            <h4>Encore 2</h4>
                        }
                        {encoreTwo}
                        {
                            info !== undefined &&
                            <>
                                <h4>Info</h4>
                                <div className="allTracks">{info}</div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllTracks;