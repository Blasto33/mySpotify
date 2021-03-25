import { artistConstants } from '../constants/artistConstants';
import { artistService } from '../services/artistService';

export const artistActions = {
    fetchArtistInfos,
};

export function fetchArtistInfos(artist_id) {

    return dispatch => {
        dispatch(request(artist_id));

        artistService.fetchArtistInfos(artist_id)
            .then(
                artist =>  {
                    dispatch(success(artist));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(artist) { return { type: artistConstants.ARTIST_REQUEST, artist } }
    function success(artist) { return { type: artistConstants.ARTIST_SUCCESS, artist } }
    function failure(error) { return { type: artistConstants.ARTIST_FAILURE, error } }
}