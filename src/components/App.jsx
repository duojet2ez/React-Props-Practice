import React from 'react';
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Card from "./Card.jsx"; 
import data from "../assets/scripts/utils/data.js"

export default function App(){
    const cards = data.map(item => {
        return (
            <Card 
                img={item.coverImg}
                rating={item.rating}
                reviewCount={item.reviewCount}
                country={item.country}
                title={item.title}
                price={item.price}
            />
        )
    })
    return(
        <div>
            <Navbar />
            <Hero />
            {cards}
        </div>
    )
}