import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'
import axios from 'axios'
import { Component } from 'react'

//https://accounts.spotify.com/authorize?client_id=8bb52c60c7a74c48a3eda862340af72c&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000"
  
class Login extends Component {

    constructor() {
        super()
        this.state = {
            token: ''
        }
        
    }

    componentDidMount() {
        window.location.href = "https://accounts.spotify.com/authorize?client_id=8bb52c60c7a74c48a3eda862340af72c&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000"
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }

    

}

export default Login;