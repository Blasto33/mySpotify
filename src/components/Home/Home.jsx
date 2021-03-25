import react, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import "./Home.css"

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <Navbar />
                <div className="home">
                    <h1>Home component</h1>
                </div>
            </div>
        )
    }
}

export default Home;