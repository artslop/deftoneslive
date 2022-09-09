import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import SongDetails from '../pages/SongDetails';
import { allSongs } from "../features/shows/showsSlice"
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

function AllTracks({ showTrackList, encore1, encore2, info, goBack }) {
    const [isShowingSongDetails, setIsShowingSongDetails] = useState(false);
    const [songData, setSongData] = useState([]);
    const allSongData = useSelector(allSongs)
    // let navigate = useNavigate();

    const handleDisplaySongDetails = (song) => {
        const filteredSongData = allSongData.filter((track) => {
            return track.name === song
        })

        setIsShowingSongDetails(true)
        setSongData(filteredSongData)
    }



    return (
        <div>
            {isShowingSongDetails ?
                songData.map((data) => (
                    <div key={nanoid()} style={{ width: '950px', margin: '0 auto' }}>
                        <SongDetails song={data.name} album={data.album} lyrics={data.lyrics} />
                    </div>
                ))
                :
                <div className="tablecontain">
                    <div className="setlist__container">
                        <div>
                            <h4>Main Set</h4><button className='btn__goBack' onClick={goBack}>Go Back</button>

                            {
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
                            }
                        </div>
                        <div className="encore">
                            {encore1.length > 0 &&
                                <h4>Encore 1</h4>
                            }

                            {
                                encore1.map((encore, idx) => {
                                    return (
                                        <div key={nanoid()} className="allTracks">
                                            <li>{`${showTrackList.length + (idx + 1)}. ${encore}`}</li>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="encore">
                            {encore2.length > 0 &&
                                <h4>Encore 2</h4>
                            }

                            {
                                encore2.map((encore2, idx) => {
                                    let numOfTracks = showTrackList.length + encore1.length;
                                    return (
                                        <div key={nanoid()} className="allTracks">
                                            <li>{`${numOfTracks + (idx + 1)}. ${encore2}`}</li>
                                        </div>
                                    )
                                })
                            }
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
            }
        </div>
    )
}

export default AllTracks;