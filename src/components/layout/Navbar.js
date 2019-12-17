import React from 'react';
import { Link } from 'react-router-dom';
import Signedinlinks from './Signedinlinks';
import Signedoutlinks from './Signedoutlinks';
import { connect } from 'react-redux';

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo left">MySchool</Link>
                <Signedinlinks />
                <Signedoutlinks />
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(Navbar);



