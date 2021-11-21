import React from 'react'
import user1 from './assets/pic-1.png'
import user2 from './assets/pic-2.png'
import user3 from './assets/pic-3.png'
import './Testimonials.css'



export default function Testimonials() {
    return (
        <div className="TestimonialsSection">
            <h1 className="heading">Testi<span className="headingspan">Monials</span></h1>
        
        <div className="TestBox">
            <div className="Stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star bigstar"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <div className="image">
                <i class="fab fa-facebook"></i>
                <img src={user1} alt="user"/>
                <i class="fab fa-instagram"></i>
            </div>
            <div className="Comment">
                <h1>Wonder Full Website</h1>
                <p>The website was very beautiful and Awesome And the service provided by Dark horse Coffee is Mind blowing, order delivered in just 5 to 6 working hours Loved this website </p>
            </div>
        </div>
        </div>
    )
}
