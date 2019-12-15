import React, { useState } from 'react';

const Createproject = () => {
    const [values, setValues] = useState({
        title: '',
        content: '',
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.id]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-4">Create New Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea className="materialize-textarea" type="text" id="content" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn amber grey-text text-darken-4">Create</button>
                </div>
            </form>
        </div>
    )
}

export default Createproject;