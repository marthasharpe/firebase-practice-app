import React from 'react';

const Projectsummary = (props) => {
    return (
        <div>
            <div className="card project-summary">
                <div className="card-content grey-text text-darken-4">
                    <span className="card-title">{props.project.title}</span>
                    <p>Posted by Martha Sharpe</p>
                    <p className="grey-text">Date</p>
                </div>
            </div>
        </div>
    )
}

export default Projectsummary;
