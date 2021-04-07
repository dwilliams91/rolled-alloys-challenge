import React, { useRef, useState } from "react"

export const BlasterDetail=(props)=>{
    const blasterName = props.location.state.chosenBlasterName
    const blasterPrice=props.location.state.chosenBlasterPrice
    const blasterBeam=props.location.state.chosenBlasterBeam
    console.log(blasterName)

    const [quantity, setQuantity] =useState()

    const handleInputChange=(event)=>{
        setQuantity(event.target.value)
    }

    const displayButton=()=>{
        return(
            <button>Order Now</button>
        )
    }

    return(
        <>
        <div className="blasterForm">
        <h2>{blasterName}</h2>
        <p>${blasterPrice}</p>
        <p>Color:{blasterBeam} </p>
        <label>Quantity</label> 
        <input value={quantity} onChange={handleInputChange}></input>
        {quantity>0 ? displayButton(): <></>}
        </div>
        </>
    )
}