import React, { Component } from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import workImage from '../assets/workImage.jpeg';

const Styles = styled.div`
    .jumbo{
        background: url(${workImage}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay{
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

`;

export default class Jumbotron extends Component {
    render() {
        return (
            <Styles>
                <Jumbo fluid className="jumbo">
                    <div className="overlay"></div>
                    <Container>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.subtitle}</p>
                    </Container>
                </Jumbo>
            </Styles>
        );
    }
}