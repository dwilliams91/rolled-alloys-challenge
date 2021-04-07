import React from "react"

export const BlasterCard=({singleblaster})=>{
    return(
        <>
        <h5>{singleblaster.name}</h5>
        <p>${singleblaster.price}</p>
        <p>Beam Color {singleblaster.beam}</p>
        </>
    )
}