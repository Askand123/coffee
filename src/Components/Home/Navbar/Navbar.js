import React from 'react';
import './Navbar.css';
import logo from './Assets/logo.jpeg';

export default function Navbar() {
    return (
        <div className="nav">
            <navbar className="nav">
                <div className="Left">
                <img className="logo" src={logo} alt="Logo"/>
                </div>
                <div className="right">
                    <ul>
                        <li className="navlinks">Home</li>
                        <li className="navlinks">About</li>
                        <li className="navlinks">Prodct</li>
                        <li className="navlinks">Contact</li>
                        <li className="navlinks"><i class="fas fa-user"></i></li>
                        <li className="navlinks"><i class="fas fa-shopping-cart"></i></li>
                    </ul>
                </div>
            </navbar>
        </div>
    )
}
