import React from "react"
import { Route } from "react-router-dom"
import { BlasterList } from "./blasters/blasterList"
import { BlasterProvider } from "./blasters/blasterProvider"


export const ApplicationViews=(props)=>{

    return(
        <BlasterProvider>
            <BlasterList></BlasterList>
        </BlasterProvider>
    )
}