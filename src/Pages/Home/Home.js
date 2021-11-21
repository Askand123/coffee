import React from 'react'
import Branch from '../../Components/Home/Branch/Branch'
import Hero from '../../Components/Home/Hero/Hero'
import Navbar from '../../Components/Home/Navbar/Navbar'
import Testimonials from '../../Components/Home/Testimonials/Testimonials'
import TopDeals from '../../Components/Home/TopDeals/TopDeals'
import TopProduct from '../../Components/Home/TopProducts/TopProducs'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <TopProduct />
            <TopDeals />
            <Branch />
            <Testimonials />
        </div>
    )
}
