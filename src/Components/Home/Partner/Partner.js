import React from 'react'
import './Partner.css'
import Partner1 from './assets/505px-Apple_logo_grey.svg.png';
import Partner2 from './assets/600px-Tesla_logo.png';
import Partner3 from './assets/Benz logo.png';
import Partner4 from './assets/Coca_Cola-Logo-PNG1.png';
import Partner5 from './assets/Ford_logo_PNG1.png';
import Partner6 from './assets/Google_2015_logo.svg.png';
import Partner7 from './assets/Lamborghini_logo_PNG1.png';
import Partner8 from './assets/Starbucks.png';

export default function Partner() {
    return (
        <div className="PartnerSection">
            <h1 className="heading">Our <span className="headingspan">Partners</span></h1>

        <div className="PartnerContainer">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={Partner1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src={Partner2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src={Partner3} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src={Partner4} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src={Partner5} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src={Partner6} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src={Partner7} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src={Partner8} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
        </div>
    )
}
