import React, { useContext, useEffect } from "react"
import { BlasterCard } from "./BlasterCard"
import { BlasterContext } from "./blasterProvider"

export const BlasterList=()=>{
    const {getBlasters, Blasters}=useContext(BlasterContext)
    useEffect(()=>{
        getBlasters()
    },[])

    return(
        <>
        <h2>Blasters</h2>
        <div>
            {Blasters.map(singleBlaster=>{
                return <BlasterCard key={"singleBlaster"+singleBlaster.name} blaster={singleBlaster}></BlasterCard>
            })}
        </div>
        </>
    )

}