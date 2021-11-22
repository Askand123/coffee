import React from 'react';  
import './Social.css';

export default function Social() {
    return (
        <div className="SocialSection">
        <h1 className="heading">Follow <span className="headingspan">us !</span></h1>
        <div className="SocialIcons">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram-square"></i>
            <i class="fab fa-youtube"></i>
            <i class="fab fa-telegram"></i>
            <i class="fab fa-twitter"></i>
            <i class="fas fa-phone-alt"></i>
        </div>
        </div>
    )
}
