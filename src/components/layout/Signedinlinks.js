import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

const Signedinlinks = () => {
    return (
        <div>
            <ul className="right">
                <li>
                    <NavLink to="/">New Project</NavLink>
                </li>
                <li>
                    <NavLink to="/">Log Out</NavLink>
                </li>
                <li>
                    <NavLink to="/" className="btn btn-floating pink lighten-1">MS</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Signedinlinks
