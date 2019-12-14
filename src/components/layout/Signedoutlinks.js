import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

const Signedoutlinks = () => {
    return (
        <div>
            <ul className="right">
                <li>
                    <NavLink to="/">Signup</NavLink>
                </li>
                <li>
                    <NavLink to="/">Login</NavLink>
                </li> 
            </ul>
        </div>
    )
}

export default Signedoutlinks
