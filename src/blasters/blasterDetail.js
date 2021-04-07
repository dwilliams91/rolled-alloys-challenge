import React, { useRef, useState } from "react"

export const BlasterDetail=(props)=>{
    // if each blaster had an id, JSON-server could make an easy call to get the individual blaster. 
    // however, since each item does not have an ID, I'm working off of one fetchcall and passing the data around with state
    const blasterName = props.location.state.chosenBlasterName
    const blasterPrice=props.location.state.chosenBlasterPrice
    const blasterBeam=props.location.state.chosenBlasterBeam

    // set the state for the quantity
    const [quantity, setQuantity] =useState()

    // the function that handles when the input field is changed
    const handleInputChange=(event)=>{
        setQuantity(event.target.value)
    }

    // the condition display button for ordering
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
        <p>Color: {blasterBeam} </p>
        <label>Quantity</label> 
        <input value={quantity} onChange={handleInputChange}></input>
        {quantity>0 ? displayButton(): <></>}
        </div>
        </>
    )
}