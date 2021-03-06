import React from 'react'
import Projectsummary from './Projectsummary';
import { Link } from 'react-router-dom';

const Projectlist = (props) => {
    return (
        <div className="project-list section">
            { props.projects && props.projects.map(project => {
                return (
                    <Link to={'/project/' + project.id} key={project.id}>
                        <Projectsummary project={project}/>
                    </Link>
                )
            })}
        </div>
    )
}

export default Projectlist
