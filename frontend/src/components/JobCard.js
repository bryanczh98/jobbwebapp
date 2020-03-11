import React, { Component } from 'react';
import { Button, Card, Collapse } from 'react-bootstrap';
import { Icon } from 'react-icons-kit';
import { location } from 'react-icons-kit/icomoon/location';
import styled from 'styled-components';

const Styles = styled.div`
    .card{
        float: left;
        width: 48%;
        margin-right: 30px;
        margin-bottom: 20px;
    }

    .card-title{
        color:blue;
    }

    .applybutton{
        margin-top: 5px;
    }

`;

export default class JobCard extends Component {
    state = {
        open: false
    }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.jobDesc = this.jobDesc.bind(this);
    }

    render() {
        return (
            <Styles>
                <Card style={{ width: '500px' }}>
                    <Card.Body>
                        <Card.Title>{this.props.jobpost.position}</Card.Title>
                        <Card.Subtitle className="mb-2">{ this.props.jobpost.employer.name } </Card.Subtitle>
                        <Card.Text className="text-muted">
                            <Icon icon={location} /> { this.props.jobpost.location}
                        </Card.Text>
                        <this.jobDesc />
                        <br />
                        <Button className="applybutton">
                            Apply
                        </Button>
                    </Card.Body>
                </Card>
            </Styles>
        );
    }

    handleClick() {
        this.setState(state => ({
            open: !this.state.open
        }));
    }

    jobDesc() {
        return (
            <>
                <Button
                    onClick={this.handleClick}
                    aria-controls="example-collapse-text"
                    aria-expanded={this.state.open}
                    variant="info"
                >
                    Job Description
                </Button>
                <Collapse in={this.state.open}>
                    <div className="mt-4" id="example-collapse-text">
                        { this.props.jobpost.description}
                    </div>
                </Collapse>
            </>
        );
    }
}