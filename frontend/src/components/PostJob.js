import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class PostJob extends Component {
    
    render() {
        return (
            <div>
                <h2 className="mt-4">Job Posting</h2>
                <p>Post a job opening in your company and allow job seekers in JOBB to find out!</p>
                <Form className="mb-5">
                    <Form.Group controlId="employer">
                        <Form.Label>Employer Name</Form.Label>
                        <Form.Control placeholder="Enter Employer Name" />
                    </Form.Group>
                    <Form.Group controlId="position">
                        <Form.Label>Position</Form.Label>
                        <Form.Control placeholder="Enter Position" />
                    </Form.Group>
                    <Form.Group controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control placeholder="Enter Job Field Category" />
                    </Form.Group>
                    <Form.Group controlId="jobtype">
                        <Form.Label>Job Type</Form.Label>
                        <Form.Check
                            type="radio"
                            label="Full-time"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Check
                            type="radio"
                            label="Part-time"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                        />
                    </Form.Group>
                    <Form.Group controlId="location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control placeholder="Enter Location" />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="5" placeholder="Enter Job Description" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </div>

        );
    }
}
