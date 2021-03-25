import react, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    // Get User Name, Profile Picture, premium?, recently played tracks

    render() {
        return (
            <div>
                <Navbar />
                <h1>User component</h1>
            </div>
        )
    }

}

export default User;