import React, { Component } from 'react';
import Header from './components/Header';

export default class Nomatch extends Component {
    render(){
        return (
            <div>
                <Header />  
                <h1>No Match</h1>
            </div>
        );
    }
}