import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const Signedinlinks = (props) => {
    return (
        <div>
            <ul className="right">
                <li>
                    <NavLink to="/create">New Project</NavLink>
                </li>
                <li>
                    <NavLink to="/signin" onClick={props.signOut}>Log Out</NavLink>
                </li>
                <li>
                    <NavLink to="/" className="btn btn-floating amber grey-text text-darken-3">MS</NavLink>
                </li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(Signedinlinks);
