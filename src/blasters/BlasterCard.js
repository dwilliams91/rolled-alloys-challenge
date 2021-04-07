import React from "react"
import { Link } from "react-router-dom"


export const BlasterCard = ({ singleblaster }) => {
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
                <p>Beam Color {singleblaster.beam}</p>
            </div>
        </>
    )
}
