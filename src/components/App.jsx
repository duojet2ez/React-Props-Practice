import React from 'react';
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Card from "./Card.jsx"; 
import data from "../assets/scripts/utils/data.js"

export default function App(){
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id} //need this when using map function some sort of unique id per item
                item={item}
            />
        )
    })
    return(
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}