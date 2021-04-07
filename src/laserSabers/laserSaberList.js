import React, { useContext, useEffect } from "react"
import "./laserSaber.css"
import { LaserSaberContext } from "./laserSaversProvider"
import { LaserSaberCard } from "./laserSaberCard"

export const LaserSaberList=()=>{
    // allow this module to use the provider
    const {getLaserSabers, LaserSabers}=useContext(LaserSaberContext)
    // get the data on render
    useEffect(()=>{
        getLaserSabers()
    },[])

    return(
        <>
        
        <h2>Laser Sabers</h2>
        <div >
            {LaserSabers.map(singleLaserSaber=>{
                return <LaserSaberCard key={"singleSaber"+singleLaserSaber.name} singleLaserSaber={singleLaserSaber}></LaserSaberCard>
            })}
        </div>
        </>
    )

}