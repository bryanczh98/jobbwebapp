import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import Layout from './components/Layout';
import { Tabs, Tab } from 'react-bootstrap';
import JobSeekerProfile from './components/JobSeekerProfile';
import SearchJob from './components/SearchJob';



export default class Jobseeker extends Component {
    render() {
        return (
            <div>
                <Jumbotron title="Job Seeker" subtitle="Look for your dream job with your dream organisation here!" />
                <Layout>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="profile" title="Profile">
                            <JobSeekerProfile />
                        </Tab>
                        <Tab eventKey="searchjob" title="Search Job">
                            <SearchJob />
                        </Tab>
                    </Tabs>
                </Layout>
            </div>
        );
    }
}
