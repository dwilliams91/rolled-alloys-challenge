import React, { useRef, useState } from "react"

export const LaserSaberDetail=(props)=>{
    // if each laserSaber had an id, JSON-server could make an easy call to get the individual laserSaber. 
    // however, since each item does not have an ID, I'm working off of one fetchcall and passing the data around with state
    const laserSaberName = props.location.state.chosenLaserSaberName
    const laserSaberPrice=props.location.state.chosenLaserSaberPrice
    const laserSaberColor=props.location.state.chosenLaserSaberColor
    const laserSaberBladeCount=props.location.state.chosenLaserSaberBladeCount


    // set the state for the quantity
    const [quantity, setQuantity] =useState()

    // the function that handles when the input field is changed
    const handleInputChange=(event)=>{
        setQuantity(event.target.value)
    }

    // the condition display button for ordering
    const displayButton=()=>{
        return(
            <>
            <p>Total Cost: ${quantity*laserSaberPrice}</p>
            <button onClick={()=>props.history.push("/laserSabers")}>Order Now</button>
            </>
        )
    }

    return(
        <>
        <div className="laserSaberForm">
        <h2>{laserSaberName}</h2>
        <p>${laserSaberPrice}</p>
        <p>Color: {laserSaberColor} </p>
        <p>Blade Count: {laserSaberBladeCount}</p>
        <label>Quantity</label> 
        <input value={quantity} onChange={handleInputChange}></input>
        {quantity>0 ? displayButton(): <></>}
        </div>
        </>
    )
}