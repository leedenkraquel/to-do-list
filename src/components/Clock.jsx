import React from 'react';
import './Clock.css';

/*
* Name: Clock
* Author(s): Leeden Raquel
* Inputs: 
*   props - standard information passed to all children
* Description: displays the current time
* Returns:
*   render - the output component that represents the clock for the local time and date
*/
export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()}; // represents the local time and date
    }

    /*
    * Name: componentDidMount
    * Author(s): Leeden Raquel
    * Inputs:
    *   none
    * Description: when the clock is rendered update state every second
    * Returns:
    *   none
    */
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    /*
    * Name: componentWillUnmount
    * Author(s): Leeden Raquel
    * Inputs:
    *   none
    * Description: when the clock is unrendered stop the timer
    * Returns:
    *   none
    */  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    

    /*
    * Name: tick
    * Author(s): Leeden Raquel
    * Inputs:
    *   none
    * Description: update the local date and time
    * Returns:
    *   none
    */
    tick() {
      this.setState({
        date: new Date()
      });
    }

    render () {
        return <div className="clock">
          <p className="time">{this.state.date.toLocaleTimeString().slice(0, -6) + this.state.date.toLocaleTimeString().slice(-2)}</p>      
          <p className="date">{this.state.date.toLocaleDateString()}</p>
        </div>
    }
}