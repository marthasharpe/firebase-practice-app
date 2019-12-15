import React from 'react'
import Projectsummary from './Projectsummary';

const Projectlist = (props) => {
    return (
        <div className="project-list section">
            { props.projects && props.projects.map(project => {
                return (
                    <Projectsummary project={project} key={project.id}/>
                )
            })}
        </div>
    )
}

export default Projectlist
