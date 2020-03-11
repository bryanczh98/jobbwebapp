import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar-nav .nav-link{
        color:white;
    }

    .navbar-brand {
        color: red;
        margin-left: 10px;
    }
`;

export default class Navigationbar extends Component {
    render() {
        return (
            <Styles>
                <Navbar expand="lg" bg="dark">
                    <Navbar.Brand href="/">JOBB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/employer">Employer</Nav.Link>
                        <Nav.Link href="/jobseeker">Job Seeker</Nav.Link>
                    </Nav>
                </Navbar>
            </Styles>

        );
    }
}