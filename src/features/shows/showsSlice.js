import { createSlice, nanoid } from "@reduxjs/toolkit";
import JSON from '../../json/deftones-setlists.json';
import songJSON from '../../json/deftones-songs.json';


const showsWithReformattedDate = JSON.map((showObj) => {
    let date = showObj.eventDate;
    let result = date.split('-').reverse().join('-');
    return {
        ...showObj,
        id: nanoid(),
        eventDate: result
    };
})

const songsWithReformattedDate = songJSON.map((songData) => {
    const date = songData.timestamp;
    const removedCode = date.split('T').slice(0, -1)
    const newDate = removedCode
    return {
        ...songData,
        id: nanoid(),
        timestamp: newDate
    };
})

const initialState = {
    selectedSong: "",
    selectedAlbum: "",
    lyrics: "",
    navigatedFromShows: null,
    shows: showsWithReformattedDate,
    songs: songsWithReformattedDate,
    columnData: [
        { dataField: 'eventDate', text: 'Date', sort: true, headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
        { dataField: 'venue.name', text: 'Venue', headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
        { dataField: 'venue.city.name', text: 'City', headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
        { dataField: 'venue.city.state', text: 'State', headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
        { dataField: 'venue.city.country.name', text: 'Country', headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
        { dataField: 'tour.name', text: 'Tour', headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } }
    ],
    columnSongData: [
        { dataField: 'timestamp', text: 'Date', hidden: true, sort: true, headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
        { dataField: 'name', text: 'Name', headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
        { dataField: 'album', text: 'Album', headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
        { dataField: 'lyrics', text: 'Lyrics', hidden: true, headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
    ],
}

const showsSlice = createSlice({
    name: 'shows',
    initialState,
    reducers: {
        addSongDetails: {
            reducer(state, action) {
                state.selectedSong = action.payload
                state.selectedAlbum = action.payload
                state.lyrics = action.payload
            },
            prepare(selectedSong, selectedAlbum, lyrics) {
                return {
                    payload: {
                        selectedSong,
                        selectedAlbum,
                        lyrics
                    }
                }
            }
        },
        toggleFromShows(state, action) {
            state.navigatedFromShows = action.payload;
        }
    }
})

// TODO: create separate slice for columnData and other table related data
export const { addSongDetails } = showsSlice.actions;
export const { toggleFromShows } = showsSlice.actions;
export const allShows = (state) => state.shows;
export const allSongs = (state) => state.songs;
export const columnData = (state) => state.columnData;
export const selectedSong = (state) => state.selectedSong;
export const selectedAlbum = (state) => state.selectedAlbum;
export const lyrics = (state) => state.lyrics;
export const columnSongData = (state) => state.columnSongData;
export const fromShows = (state) => state.navigatedFromShows;

export default showsSlice.reducer;


