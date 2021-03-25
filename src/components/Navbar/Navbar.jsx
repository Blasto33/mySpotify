import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';
import "./Navbar.css";

class Navbar extends Component {

    render() {
        return (
            <div className="sidebar">
                <ul className="navLinks">
                    <li>
                        <Button variant="success">
                            <Link to="/home">Home</Link>
                        </Button>
                    </li>
                    <li>
                        <Button variant="success">
                            <Link to="/artist">Artist</Link>
                        </Button>
                    </li>
                    <li>
                        <Button variant="success">
                            <Link to="/profile">Profile</Link>
                        </Button>
                    </li>
                    <li>
                        <Button variant="danger" className="logout">
                            <Link to="/logout">Logout</Link>
                        </Button>
                    </li>
                </ul>
            </div>
        )
    }

}

export default Navbar;