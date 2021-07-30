import React, { Component } from 'react';
import axios from 'axios';

class GetQuote extends Component {
    state = {
        advice: ''
    };

    componentDidMount() {
        this.fetchAdvice();
 
        
    };

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then(response => {
                const { advice } = response.data.slip;
                if(advice.includes("â€˜")) {
                    advice.replace(/â€˜/g, "'");
                    this.setState({ advice: advice.replace(/â€˜/g, "'") });
                } else {
                    this.setState({ advice });
                }
            })
            .catch(error => {
                console.log('There was an error fetching the advice', error);
            });
    };

    render() {
        const { advice } = this.state;

        console.log(this.state.quotes);
        return (
            <div className="quoteCardContainer">
                <div className="quoteCard">{ advice }</div>
            </div>
        );
    };
}

export default GetQuote;