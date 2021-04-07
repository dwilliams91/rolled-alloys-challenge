import React from "react"
import { Link } from "react-router-dom"


export const BlasterCard=({singleblaster})=>{
    return(
        <>
        <div className="blasterCard">
        <h5><Link to={`/blaster/${singleblaster.name}`}>{singleblaster.name}</Link></h5>
        <p>${singleblaster.price}</p>
        <p>Beam Color {singleblaster.beam}</p>
        </div>
        </>
    )
}