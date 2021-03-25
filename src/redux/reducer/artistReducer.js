import { artistConstants } from '../constants/artistConstants';

let artist = localStorage.getItem('artist');
console.log("artist_reducer " + artist)

const initialState = artist ? { artist: artist } : {};

export default function fetchArtistInfos(state = initialState, action) {

  switch (action.type) {
    case artistConstants.ARTIST_REQUEST:
      return {
        requesting: true
      };
    case artistConstants.ARTIST_SUCCESS:
      return {
        artist: action.artist
      };
    case artistConstants.ARTIST_FAILURE:
      return {
        error: action.error
      };
    case artistConstants.ARTIST_LOGOUT:
      return {};
    default:
      return state
  }
}