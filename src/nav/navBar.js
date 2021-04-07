import React from "react"
import { Link } from "react-router-dom"
import "./navBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Blaster</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/laserSabers">Laser Sabers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Cart</Link>
            </li>
        </ul>
    )
}