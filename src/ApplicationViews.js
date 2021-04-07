import React from "react"
import { Route } from "react-router-dom"
import { BlasterDetail } from "./blasters/blasterDetail"
import { BlasterList } from "./blasters/blasterList"
import { BlasterProvider } from "./blasters/blasterProvider"
import { LaserSaberList } from "./laserSabers/laserSaberList"
import { LaserSaberProvider } from "./laserSabers/laserSaversProvider"
import {LaserSaberDetail} from "./laserSabers/laserSaberDetail"


export const ApplicationViews = (props) => {

    return (
        <LaserSaberProvider>
            <BlasterProvider>
                <Route exact path="/">
                    <BlasterList />
                </Route>
                <Route path="/blaster/:blaster_name" render={
                    props => <BlasterDetail {...props} />
                } />
                <Route exact path="/laserSabers">
                    <LaserSaberList />
                </Route>
                <Route path="/laserSaber/:laserSaber_name" render={
                    props => <LaserSaberDetail {...props} />
                } />
            </BlasterProvider>
        </LaserSaberProvider>
    )
}