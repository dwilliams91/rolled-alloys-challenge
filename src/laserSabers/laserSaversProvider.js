import React, { useState } from "react"

export const LaserSaberContext = React.createContext()

export const LaserSaberProvider = (props) => {
    const [LaserSabers, setLaserSaber] = useState([])

    const getLaserSabers = () => {
        return fetch("http://localhost:8088/laserSabers")
            .then(res => res.json())
            .then(setLaserSaber)
    }
    
    
    return (
        <LaserSaberContext.Provider value={{
            LaserSabers, setLaserSaber, getLaserSabers
        }}>
            {props.children}
        </LaserSaberContext.Provider>

    )
}