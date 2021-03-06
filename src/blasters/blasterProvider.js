import React, { useState } from "react"

export const BlasterContext = React.createContext()

export const BlasterProvider = (props) => {
    const [Blasters, setBlasters] = useState([])

    const getBlasters = () => {
        return fetch("http://localhost:8088/blasters")
            .then(res => res.json())
            .then(setBlasters)
    }
    
    
    return (
        <BlasterContext.Provider value={{
            Blasters, setBlasters, getBlasters
        }}>
            {props.children}
        </BlasterContext.Provider>

    )
}