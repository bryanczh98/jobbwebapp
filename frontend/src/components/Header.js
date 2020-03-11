import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div style={{ padding: 20 }}>
                <h1>Job Seeking Web Application</h1>
                <Nav justify variant="tabs" defaultActiveKey="/home" style={{ padding: 10 }}>
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/employer">Employer</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/jobseeker">Job Seeker</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }

}
