import React, { useContext, useEffect } from "react"
import { BlasterCard } from "./BlasterCard"
import { BlasterContext } from "./blasterProvider"
import "./blaster.css"

export const BlasterList=()=>{
    // allow this module to use the provider
    const {getBlasters, Blasters}=useContext(BlasterContext)
    // get the data on render
    useEffect(()=>{
        getBlasters()
    },[])

    return(
        <>
        
        <h2>Blasters</h2>
        <div >
            {Blasters.map(singleBlaster=>{
                return <BlasterCard key={"singleBlaster"+singleBlaster.name} singleblaster={singleBlaster}></BlasterCard>
            })}
        </div>
        </>
    )

}