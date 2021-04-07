import React, { useState } from "react"

export const BlasterContext = React.createContext()

export const BlasterProvider = (props) => {
    const [Blasters, setBlasters] = useState([])

    const getBlasters = () => {
        return fetch("http://localhost:8088/blasters")
            .then(res => res.json())
            .then(setBlasters)
    }
    
    // const getBlasterByName = (id) => {
    //     return fetch(`http://localhost:8088/animals/${ id }?_expand=location&_expand=customer`)
    //         .then(res => res.json())
    // }

    
    return (
        <BlasterContext.Provider value={{
            Blasters, setBlasters, getBlasters
        }}>
            {props.children}
        </BlasterContext.Provider>

    )
    

}