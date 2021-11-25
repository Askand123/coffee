import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div>
            <footer>
                <h2 className="footerheading">Dark <span className="Footerspan">Horse</span> Coffee</h2>
                <h6 className="footerheading">Our Coffee is Not for Everyone</h6>
                <hr />
                <div className="FooterListContainer">
                    <ul className="FooterList">
                        <h4>Pages</h4>
                        <li>Home</li>
                        <li>About</li>
                        <li>Products</li>
                        <li>Contact</li>
                        <li>Sign Up</li>
                    </ul>
                    <ul className="FooterList">
                        <h4>Branch</h4>
                        <li>India</li>
                        <li>United States of America</li>
                        <li>Australia</li>
                        <li>Mexico</li>
                        <li>United Arab Emirates</li>
                    </ul>
                    <ul className="FooterList">
                        <h4>Social</h4>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>YouTube</li>
                        <li>Phone - 99999 99999</li>
                    </ul>
                    <ul className="FooterList">
                        <h4>Partner</h4>
                        <li>CafeCoffeeDay</li>
                        <li>Starbucks</li>
                        <li>Rolls Royce</li>
                        <li>Coca Cola</li>
                        <li>Tata group</li>
                    </ul>
                </div>
                <div className="FooterFooter">
                    <h6>© Dark Horse Coffe - All Rights Reserved | Created by A.S. developers</h6>
                </div>
            </footer>
        </div>
    )
}
