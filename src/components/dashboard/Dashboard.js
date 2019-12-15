import React from 'react';
import Notifications from './Notifications';
import Projectlist from '../projects/Projectlist';
import { connect } from 'react-redux';

const Dashboard = (props) => {
    //console.log(props)
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <Projectlist projects={props.projects} />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps, null)(Dashboard);
