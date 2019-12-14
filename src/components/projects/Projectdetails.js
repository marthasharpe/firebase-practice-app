import React from 'react'

const Projectdetails = (props) => {
    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>This is an awesome project.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Martha Sharpe</div>
                    <div>Date</div>
                </div>
            </div>
        </div>
    )
}

export default Projectdetails
