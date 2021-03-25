import axios from "axios";
import store from '../store';

export const artistService = {
    fetchArtistInfos,
};

function fetchArtistInfos(artist_id) {

    // Axios.get

    //localStorage.setItem('artist', );

    let bearertoken = 'Bearer ' + localStorage.getItem('token')
    let url = 'https://api.spotify.com/v1/artists/' + artist_id; 

    return axios({
        method: 'get',
        url: url,
        responseType: 'json',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Authorization': bearertoken
        } 
    })
        .then(res => {
            console.log("TRUC" + res.data);

            localStorage.setItem("artist", res.data)

            return res.data;
    })
        .catch(err => {
            //console.log(err.response.status);
            return "The artist couldn't be found";
    });
}