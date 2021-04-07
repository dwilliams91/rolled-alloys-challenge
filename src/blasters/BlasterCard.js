import React from "react"

export const BlasterCard=(blaster)=>{
    return(
        <>
        <h5>{blaster.name}</h5>
        <p>${blaster.price}</p>
        <p>Beam Color {blaster.beam}</p>
        </>
    )
}