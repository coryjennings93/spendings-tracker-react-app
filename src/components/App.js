import React, { Component } from 'react';

import './App.css';

import Header from './Header';
import PurchasesDisplayContainer from './PurchasesDisplayContainer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const App = () => {
    return (
            <div className="appWrapper">
                <Container>
                    <Row>
                        <Header />
                    </Row>
                   <Row>
                        <PurchasesDisplayContainer />
                   </Row>  
                </Container>
            </div>
    )
};

export default App;