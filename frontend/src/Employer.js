import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import Layout from './components/Layout';
import PostJob from './components/PostJob';
import EmployerProfile from './components/EmployerProfile'
import { Tabs, Tab } from 'react-bootstrap';


export default class Employer extends Component {
    render() {
        return (
            <div>
                <Jumbotron title="Employer" subtitle="Post a job here in JOBB and hire the best employees for your organisation!" />
                <Layout>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="profile" title="Employer Profile">
                            <EmployerProfile />
                        </Tab>
                        <Tab eventKey="postjob" title="Job Posting">
                            <PostJob />
                        </Tab>
                    </Tabs>
                </Layout>
            </div>
        );
    }
}
