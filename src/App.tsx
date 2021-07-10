import { computeHeadingLevel } from '@testing-library/react';
import React, { useRef, useState, FC, InputHTMLAttributes } from 'react';
import { Interface } from 'readline';
import './App.css';
import robotSprite from './robotSprite.png'
import useInterval from './useInterval';

    const tableX = 500
    const tableY = 500
    // const robotStart = 
    const scale = 5


class App extends React.Component<{}, IState>{

  constructor(props: {}) {
    super(props);

    this.state = {
      // tableRef: null,
      robot: [[0],[0]],
      direction: [0, -1],
      safe: true,
      currentDirection: "",
      currentPlace: {X: 0, Y: 0, F: "North"},
      currentCommand: "",
      commands: [],
      com: ""
    }
  }

  handleSubmit(e: any): void {
    e.preventDefault();
    this.setState({
      currentCommand: "",
      com: this.state.currentCommand,
      commands: [
        ...this.state.commands,
        this.state.currentCommand.toUpperCase()
      ]
    })
  }

  renderCommands(): JSX.Element[] {
    return this.state.commands.map((command: string, index: number) => {
      return (
        <div key={index}>{command}</div>
      )
    });
  }

  robotAction() {
    // if (this.state.com = "PLACE"){
    //   console.log("PLACE")
    // } else {
    //   switch(this.state.com) {
    //     case "MOVE":
    //       console.log("MOVE")
    //       break
    //     case "LEFT":
    //       console.log("LEFT")
    //       break
    //     case "RIGHT":
    //       console.log("RIGHT")
    //       break
    //     case "REPORT":
    //       console.log("REPORT")
    //       break
    //     default:
    //       return "I don't know that one"
    //   }
    // }
  }

  checkCliff(destination: number[]) {
    
  }

  // runRobot() {
  //   const newRobot = this.robot
  //   const newRobotHead = [newRobot[0][0] + this.direction[0]]
  //   newRobot.unshift(newRobotHead)
  //   // if (checkCliff(newRobotHead)) {
  //   //   setSafe(false)
  //   // }
  // }

  render(): JSX.Element {
    console.log(this.state)
    return(
      <div className="App">
        <div className="instructions">
          Please enter one of the following commands:
          <ul>
            <li>PLACE X,Y,Z - where X,Y is a position on the table and F is a cardinal direction(North, South, East, West)</li>
            <li>MOVE - move forward the way it is facing</li>
            <li>LEFT - rotate 90 degrees anti-clockwise</li>
            <li>RIGHT - rotate 90 degrees clockwise</li>
            <li>REPORT - announce the X,Y,F position of the robot</li>
          </ul>
        </div>
        <div className="command">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input 
            type="text" 
            placeholder="Type command here" 
            value={this.state.currentCommand.toUpperCase()}
            onChange={
              e => this.setState({ currentCommand: e.target.value })
            }/>
            <button type='submit'>Run</button>
          </form>
        </div>
        <section>
          {this.renderCommands()} 
          {this.robotAction()}
        </section>
        {/* <div onEvent={(e) => move(e)}>
          <img src={robotSprite} alt="Robot Sprite" width="80"></img>
          <canvas className="Table"  width={`${tableX}px`} height={`${tableY}px`} />
          {!this.safe && <div className="tableWarning">I don't want to go off the edge!</div>}
        </div> */}
      </div>
    )
  }
  
}

interface IState {
  robot: Array<[number]>;
  direction: Array<number>;
  safe: boolean;
  currentDirection: string;
  currentPlace: {};
  currentCommand: string;
  commands: Array<string>;
  com: string;
}


// ref={tableRef}
export default App;
