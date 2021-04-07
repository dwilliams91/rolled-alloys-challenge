import React from "react"
import { Link } from "react-router-dom"


export const LaserSaberCard = ({ singleLaserSaber }) => {
    // create the items that are being displayed in the list. The state changes on line 14-16 I'll explain in blasterDetil.js
    return (
        <>
            <div className="laserSaberCard">
                <h5>
                    <Link to={{
                        pathname:`/laserSaber/${singleLaserSaber.name}`,
                        state:{
                            chosenLaserSaberName: singleLaserSaber.name,
                            chosenLaserSaberPrice: singleLaserSaber.price,
                            chosenLaserSaberColor: singleLaserSaber.color,
                            chosenLaserSaberBladeCount: singleLaserSaber.bladeCount

                        }
                    }}>
                        {singleLaserSaber.name}
                    </Link>
                    
                </h5>
                <p>${singleLaserSaber.price}</p>
            </div>
        </>
    )
}