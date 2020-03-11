import React, { Component } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import ShowAll from './search/ShowAll';
import ShowSearch from './search/ShowSearch';

export default class SearchJob extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: false,
            searchString: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        //if else statement to check if textbox is empty for setting search state
        if (this.state.searchString) {
            this.setState({
                search: true,
                searchString: this.state.searchString
            })
        } else{
            this.setState({
                search: false,
                searchString: this.state.searchString
            })
        }


    }

    handleChange(event) {
        this.setState({
            searchString: event.target.value
        })

    }

    render() {
        return (
            <React.Fragment>
                <h2 className="mt-4">Search Job</h2>
                <br />
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                value={ this.state.searchString }
                                placeholder="Search"
                                onChange={this.handleChange}
                                className="mr-sm-2" />
                        </Col>
                        <Col>
                            <Button type="submit" value="submit" variant="outline-success">Search</Button>
                        </Col>
                    </Row>
                </Form>
                <br />
                {this.state.search ? <ShowSearch searchString={this.state.searchString} /> : <ShowAll />}
            </React.Fragment >
        );
    }

}