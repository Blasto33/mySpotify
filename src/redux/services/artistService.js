import axios from "axios";
import store from '../store';

export const artistService = {
    fetchArtistInfos,
};

function fetchArtistInfos(artist_id) {

    // Axios.get

    //localStorage.setItem('artist', );

    let token = localStorage.getItem('token')
    let beartoken = 'Bearer ' + token
    console.log(beartoken)

    return axios({
        method: 'get',
        url: 'https://api.spotify.com/v1/artists/58UpHBCQ1Jj67DJsR7Qyqg',
        responseType: 'json',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Authorization': beartoken
        } 
    })
        .then(res => {
            console.log(res.data.login);

            return res.data;
    })
        .catch(err => {
            console.log(err);
    });
}