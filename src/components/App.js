import React, { Component } from 'react';

import './App.css';

import Header from './Header';
import Purchase from './Purchase';
import PurchasesDisplayContainer from './PurchasesDisplayContainer';


class App extends Component {

    state= {
        purchases: [
            {
                id: 1,
                date: "7/22/2021",
                category: 'gas',
                transaction: 'Speedway @ Middletown',
                cost: 23.64
            },
            {
                id: 2,
                date: "7/22/2021",
                category: 'groceries',
                transaction: 'Walmart @ Westport rd',
                cost: 112.78
            },
            {
                id: 3,
                date: "7/23/2021",
                category: 'restaurant',
                transaction: 'Chipotle',
                cost: 8.06
            },
            {
                id: 4,
                date: "7/24/2021",
                category: 'appearl',
                transaction: 'Amazon',
                cost: 31.44
            },
            {
                id: 5,
                date: "7/24/2021",
                category: 'pet',
                transaction: 'Speedway @ Middletown',
                cost: 26.11
            }
        ]
    }

    // retrieveCategoryTotal() {

    // }

    render() {
        console.log(this.state.purchases);
        return (
            <div className="appWrapper">
                <Header />
                <PurchasesDisplayContainer
                    purchases={this.state.purchases}
                />
            </div>
        );
    }
}

export default App;