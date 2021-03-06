import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import { firestoreConnect, withFirestore } from 'react-redux-firebase';
import { compose } from 'redux';

const Signin = (props) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.id]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.signIn(values)
    }

    const { authError, auth } = props;
    if (auth.uid) return <Redirect to='/' />
    
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-4">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn amber grey-text text-darken-4">Login</button>
                </div>
                <div className="red-text center">
                    { authError ? <p>{authError}</p> : null }
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default compose(
    // firestoreConnect([
    //     { collection: 'users' }
    // ]),
    withFirestore,
    connect(mapStateToProps, mapDispatchToProps)
)(Signin);
