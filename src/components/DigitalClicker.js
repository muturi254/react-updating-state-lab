// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0,
        }
    }

    handleClick = () => {
        this.setState(prev => {
            return {
                timesClicked: prev.timesClicked+1
            }
        })
    }

    render() {
        return (
           <div>
                <p>Clicked {this.state.timesClicked} times!</p>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
           </div>
        );
    }
}

export default DigitalClicker;