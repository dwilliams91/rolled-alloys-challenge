import React from "react"
import { Link } from "react-router-dom"


export const BlasterCard = ({ singleblaster }) => {
    // create the items that are being displayed in the list. The state changes on line 14-16 I'll explain in blasterDetil.js
    return (
        <>
            <div className="blasterCard">
                <h5>
                    <Link to={{
                        pathname:`/blaster/${singleblaster.name}`,
                        state:{
                            chosenBlasterName:singleblaster.name,
                            chosenBlasterPrice: singleblaster.price,
                            chosenBlasterBeam: singleblaster.beam

                        }
                    }}>
                        {singleblaster.name}
                    </Link>
                    
                </h5>
                <p>${singleblaster.price}</p>
            </div>
        </>
    )
}
