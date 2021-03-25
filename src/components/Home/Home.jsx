import react, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { artistActions } from '../../redux/actions/artistActions'
import "./Home.css"

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artist_id: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // uppermost: 58UpHBCQ1Jj67DJsR7Qyqg

    handleChange(event) {
        this.setState({ artist_id: event.target.value });
    }

    handleSubmit(event) {
        alert('An ID was submitted: ' + this.state.artist_id);
        event.preventDefault();
        this.props.fetchArtistInfos(this.state.artist_id)
        //window.location.href = "http://localhost:3000/artist"
    }

    render() {
        return(
            <div>
                <Navbar />
                <div className="home">
                    <h1>Home component</h1>
                    <div className="artist_search">
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Please enter the artist ID
                                <input type="text" value={this.state.artist_id} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
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

export default connect(mapState, actionCreators)(Home);