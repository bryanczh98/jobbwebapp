import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { user } from 'react-icons-kit/icomoon/user';
import {calendar} from 'react-icons-kit/icomoon/calendar'
import {venusMars} from 'react-icons-kit/fa/venusMars'
import {mail2} from 'react-icons-kit/icomoon/mail2'

export default class JobSeekerProfile extends Component {
    state = {}
    render() {
        return (
            <div className="mb-5">
                <h2 className="mt-4">Job Seeker Profile</h2>
                <br />
                <div>
                    <h4><Icon icon={user} /> Name</h4>
                    <p>Kevin Lebrowski</p>
                    <br />
                    <h4><Icon icon={calendar} /> Age</h4>
                    <p>25</p>
                    <br />
                    <h4><Icon icon={venusMars} /> Gender</h4>
                    <p>Information Technology</p>
                    <br />
                    <h4><Icon icon={mail2} /> email</h4>
                    <p>kev.leb@email.com</p>
                </div>

            </div>
        );
    }
}
