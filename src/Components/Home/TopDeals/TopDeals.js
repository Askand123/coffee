import React from 'react'
import './TopDeals.css'
import deal1 from './assets/menu-1.png'
import deal2 from './assets/menu-2.png'
import deal3 from './assets/menu-3.png'
import deal4 from './assets/menu-4.png'
import deal5 from './assets/menu-5.png'
import deal6 from './assets/menu-6.png'

export default function TopDeals() {
    return (
        <div className="DealSection">
            <h1 className="heading">Top <span className="headingspan">Deals</span> of <span className="headingspan">Day</span></h1>
            <div className="Topdeal1">
                <div className="boxdeal">
                    <img src={deal1} alt="Deal 1" />
                    <h2 className="headingspan">Normal coffee</h2>
                    <h4>Price - ₹ 500</h4>
                    <button>Add To cart</button>
                </div>
                <div className="boxdeal">
                    <img src={deal2} alt="Deal 2" />
                    <h2 className="headingspan">Designer Coffee</h2>
                    <h4>Price - ₹ 500</h4>
                    <button>Add To cart</button>
                </div>
                <div className="boxdeal">
                    <img src={deal3} alt="Deal 3" />
                    <h2 className="headingspan">Heart Coffee</h2>
                    <h4>Price - ₹ 500</h4>
                    <button>Add To cart</button>
                </div>
            </div>
            <div className="Topdeal2">
                <div className="boxdeal">
                    <img src={deal4} alt="Deal 4" />
                    <h2 className="headingspan">Strong Coffee</h2>
                    <h4>Price - ₹ 500</h4>
                    <button>Add To cart</button>
                </div>
                <div className="boxdeal">
                    <img src={deal5} alt="Deal 5" />
                    <h2 className="headingspan">Chocolate Coffee</h2>
                    <h4>Price - ₹ 500</h4>
                    <button>Add To cart</button>
                </div>
                <div className="boxdeal">
                    <img src={deal6} alt="Deal 6" />
                    <h2 className="headingspan">Creamy Coffee</h2>
                    <h4>Price - ₹ 500</h4>
                    <button>Add To cart</button>
                </div>
            </div>
        </div>
    )
}
