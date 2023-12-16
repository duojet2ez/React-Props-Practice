import React from 'react';
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Card from "./Card.jsx"; 
import data from "../assets/scripts/utils/data.js"

export default function App(){
    console.log(data[0]);
    return(
        <div>
            <Navbar />
            <Hero />
            <Card
                img = "../assets/images/katie.png"
                rating = "5.0"
                reviewCount = {6}
                country = "USA"
                title = "Life Lessons with Katie Zaferes"
                price = {138}
            />
        </div>
    )
}