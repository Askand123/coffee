import React from 'react'
import './TopProducts.css';
import prod1 from './assets/product-1.png'
import prod2 from './assets/product-2.png'
import prod3 from './assets/product-3.png'

export default function TopProduct() {
    return (
        <div className="TopProd">
            <h1 className="heading">Top <span className="headingspan">Products</span> of <span className="headingspan">Day </span></h1>
        <div className="Top-Products">
            <div className="box">
                <img src={prod1} alt="Product 1"></img>
                <h3 className="headingspan">Nicaragua Coffee</h3>
                <button>shop</button>
            </div>
            <div className="box">
                <img src={prod2} alt="Product 1"></img>
                <h3 className="headingspan">Columbia Coffee</h3>
                <button>shop</button>
            </div>
            <div className="box">
                <img src={prod3} alt="Product 1"></img>
                <h3 className="headingspan">Peru Coffee</h3>
                <button>shop</button>
            </div>
        </div>
        </div>
    )
}
