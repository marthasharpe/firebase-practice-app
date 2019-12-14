import React from 'react';
import Notifications from './Notifications';
import Projectlist from '../projects/Projectlist';

const Dashboard = () => {
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <Projectlist />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
