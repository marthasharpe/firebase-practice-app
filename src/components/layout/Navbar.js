import React from 'react';
import { Link } from 'react-router-dom';
import Signedinlinks from './Signedinlinks';
import Signedoutlinks from './Signedoutlinks';

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">MyEdu</Link>
                <Signedinlinks />
                <Signedoutlinks />
            </div>
        </nav>
    )
}

export default Navbar;



