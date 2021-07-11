import { computeHeadingLevel } from '@testing-library/react';
import React from 'react';
import { Interface } from 'readline';
import './App.css';

class Robot {
  private position: number[]
  private direction: string

  constructor() {
    this.position = [0, 0]
    this.direction = "North"
  }

  public executeCommand(command: string) {
    //to do: determine if safe
    
    switch (command) {
      case "LEFT": {
        switch (this.direction) {
          case "North": {
            this.direction = "West"
            break
          }
          case "East": {
            this.direction = "North"
            break
          }
          case "South": {
            this.direction = "East"
            break
          }
          case "West": {
            this.direction = "South"
            break
          }
        }
        break
      }
      case "RIGHT": {
        switch (this.direction) {
          case "North": {
            this.direction = "East"
            break
          }
          case "East": {
            this.direction = "South"
            break
          }
          case "South": {
            this.direction = "West"
            break
          }
          case "West": {
            this.direction = "North"
            break
          }
        }
        break
      }
      case "MOVE": {
        switch (this.direction) {
          case "North": { 
            this.position[1]++
            break
          }
          case "East": {
            this.position[0]++
            break
          }
          case "South": {
            this.position[1]--
            break
          }
          case "West": {
            this.position[0]--
            break
          }
        }
        break
      }
      case "REPORT": {
        return console.log(`Output: Place ${this.position}, ${this.direction}`)
      }
    }
  }
}


class App extends React.Component<{}, IState>{
  
  limit = [0, 4];
  
  constructor(props: {}) {
    super(props);
    // const robot = new Robot({});
    this.state = {
      robot: new Robot(),
      currentCommand: "",
      commands: [],
      command: ""
      
    }
  }

  

  handleSubmit(e: any): void {
    e.preventDefault();
    if (this.state.currentCommand === "MOVE") {
      this.state.robot.executeCommand(this.state.currentCommand)
    } else if (this.state.currentCommand === "LEFT") {
      this.state.robot.executeCommand(this.state.currentCommand)
    } else if (this.state.currentCommand === "RIGHT"){
      this.state.robot.executeCommand(this.state.currentCommand)
    } else if (this.state.currentCommand === "REPORT"){
      this.state.robot.executeCommand(this.state.currentCommand)
    } else {
      return this.incorrectInput()
    }
    this.setState({
      currentCommand: (""),
      commands: [
        this.state.currentCommand.toUpperCase(),
        ...this.state.commands
      ]
    })
  }

  interpretInput(){
    console.log("input")
  }

  translateInput(){
    console.log("command")
  }

  renderCommands(): JSX.Element[] {
    return this.state.commands.map((command: string, index: number) => {
      return (
        <div key={index}>{command}</div>
      )
    });
  }

  incorrectInput() {
    console.log("I don't know that one")
  }
  

  render(): JSX.Element {
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
          {}
          <form onSubmit={(e) => {
            this.handleSubmit(e)
            }}>
            <input 
            type="text" 
            placeholder="Type command here" 
            value={this.state.currentCommand.toUpperCase()}
            onChange={
              e => this.setState({ currentCommand: e.target.value.toUpperCase() })
            }/>
            <button type='submit'>Run</button>
          </form>
        </div>
        <section>
          {this.renderCommands()} 
        </section>
      </div>
    )
  }
  
}

interface IState {
  robot: Robot;
  currentCommand: string;
  commands: Array<string>;
  command: string;
}

export default App;
