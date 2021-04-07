import React from "react"
import { Route } from "react-router-dom"
import { BlasterDetail } from "./blasters/blasterDetail"
import { BlasterList } from "./blasters/blasterList"
import { BlasterProvider } from "./blasters/blasterProvider"


export const ApplicationViews = (props) => {

    return (
        <BlasterProvider>
            <Route exact path="/">
                <BlasterList />
            </Route>
            <Route path="/blaster/:blaster_name" render={
                props => <BlasterDetail {...props} />
            } />
        </BlasterProvider>
    )
}