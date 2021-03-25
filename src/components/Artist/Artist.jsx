import react, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import { artistActions } from '../../redux/actions/artistActions'
import './Artist.css'

class Artist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artist_id: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ artist_id: event.target.value });
    }

    handleSubmit(event) {
        alert('An ID was submitted: ' + this.state.artist_id);
        event.preventDefault();
        this.props.fetchArtistInfos(this.state.artist_id)
    }

    // uppermost: 58UpHBCQ1Jj67DJsR7Qyqg

    render() {

        const ArtistDetails = () => ( 
            <div>
                <p className="artist-name">{ this.props.artistName }</p>
            </div>
        );

        return (
            <div>
                <Navbar />
                <div className="artist_search">
                    <h2>Artist page component</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Please enter the artist ID
                            <input type="text" value={this.state.artist_id} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" >
                        </input>
                    </form>
                </div>

                { ArtistDetails }
            </div>
        )
    }

}

function mapState(state) {
    //const { token } = state.authentication;
    //return { token };
};

const actionCreators = {
    fetchArtistInfos: artistActions.fetchArtistInfos,
};

export default connect(mapState, actionCreators)(Artist);