import React from 'react';
import './Clock.css';

/*
* Name: Clock
* Author(s): Leeden Raquel
* Inputs: 
*   None
* Description: displays the current time
*/
export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }

    render () {
        return <div className="clock">
          <h1>{this.state.date.toLocaleTimeString().slice(0, -6) + this.state.date.toLocaleTimeString().slice(-2)}</h1>      
          <h2>{this.state.date.toLocaleDateString()}</h2>
        </div>
    }
}