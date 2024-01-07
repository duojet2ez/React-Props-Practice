import React from "react"


export default function Card(props){
    const itemData = props.item;
    console.log(itemData);
    let badgeText;
    if(itemData.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if(itemData.location === "Online"){
        badgeText = "ONLINE";
    }
    return (
        <>
        <div className="card">
            {badgeText && <div className="card--badge"> {badgeText} </div>}
            <img src={itemData.coverImg}></img>
            <div className="card--stats">
                <img src="/assets/images/star.png" className="card--star"></img>
                <span>{itemData.stats.rating}</span>
                <span className="gray">({itemData.stats.reviewCount}) • </span>
                <span className="gray">{itemData.location}</span>
            </div>
            <p>{itemData.title}</p>
            <p><span className="bold">From ${itemData.price} </span> / person</p>
        </div>
        </> 
    )
}