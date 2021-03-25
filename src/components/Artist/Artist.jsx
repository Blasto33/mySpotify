import react, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import './Artist.css'
import store from '../../redux/store';

class Artist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artistName: "",
            artistImage: "",
            artistGenres: [],
        }
    }

    componentDidMount() {

        /* Redirect the user if he tries to manually redirect to artist's page */
        if (!store.getState().artist.artist.name)
            window.location.href = "http://localhost:3000/home"

        if (localStorage.getItem('artist')) {
            console.log(store.getState().artist.artist)
            let artist = store.getState().artist.artist;

            this.setState({
                artistName: artist.name,
                artistImage: artist.images[0].url,
                artistGenres: artist.genres
            });

        }
    }

    // Make a map of the genres
    
    render() {

        return (
            <div>
                <Navbar />
                <div className="artist">
                    <h2>{ this.state.artistName }</h2>
                    <img src={ this.state.artistImage } height="160" width="160"/>
                    { this.state.artistGenres[0]+ " " + this.state.artistGenres[1] }
                </div>
            </div>
        )
    }

}

export default Artist;