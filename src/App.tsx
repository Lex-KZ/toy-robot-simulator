import { computeHeadingLevel } from '@testing-library/react';
import React from 'react';
import { Interface } from 'readline';
import './App.css';


class Table {
  private leftLimit: number
  private rightLimit: number
  private upperLimit: number
  private lowerLimit: number

  constructor() {
    this.leftLimit = 0
    this.rightLimit = 4
    this.upperLimit = 4
    this.lowerLimit = 0
  }

  isEdge() {
    console.log("edge")
  }
}

class Robot {
  private position: number[]
  private direction: string

  constructor() {
    this.position = [0, 0]
    this.direction = "NORTH"
  }

  public executeCommand(command: string) {
    //to do: determine if safe
    
    switch (command) {
      case "LEFT": {
        switch (this.direction) {
          case "NORTH": {
            this.direction = "WEST"
            break
          }
          case "EAST": {
            this.direction = "NORTH"
            break
          }
          case "SOUTH": {
            this.direction = "EAST"
            break
          }
          case "WEST": {
            this.direction = "SOUTH"
            break
          }
        }
        break
      }
      case "RIGHT": {
        switch (this.direction) {
          case "NORTH": {
            this.direction = "EAST"
            break
          }
          case "EAST": {
            this.direction = "SOUTH"
            break
          }
          case "SOUTH": {
            this.direction = "WEST"
            break
          }
          case "WEST": {
            this.direction = "NORTH"
            break
          }
        }
        break
      }
      case "MOVE": {
        switch (this.direction) {
          case "NORTH": { 
            this.position[1]++
            break
          }
          case "EAST": {
            this.position[0]++
            break
          }
          case "SOUTH": {
            this.position[1]--
            break
          }
          case "WEST": {
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

  executePlace(placeX: number, placeY: number, direction: string){
    this.position[0] = placeX
    this.position[1] = placeY
    this.direction = direction
  }
}


class App extends React.Component<{}, IState>{
  
  constructor(props: {}) {
    super(props);

    this.state = {
      robot: new Robot(),
      currentCommand: "",
      commands: [],
      currentDirection: "",
      currentCoordinateX: 0,
      currentCoordinateY: 0
    }
  }

  PlaceInputFields(currentCommand: string) {
    if (currentCommand === "PLACE") {
      return (
        <div>
          <label htmlFor="placeX">Coordinate X:</label>
          <input type="number" name="placeX" min="0" max="4" value={this.state.currentCoordinateX} onChange={ 
            e => this.setState({currentCoordinateX: parseInt(e.target.value)})
          } required></input>
          <label htmlFor="placeY">Coordinate Y:</label>
          <input type="number" name="placeY" min="0" max="4" value={this.state.currentCoordinateY} onChange={ 
            e => this.setState({currentCoordinateY: parseInt(e.target.value)})
          }required></input>
          <label htmlFor="directionF">Direction:</label>
          <input type="text" name="directionF" value={this.state.currentDirection.toUpperCase()} onChange={
            e => this.setState({currentDirection: e.target.value.toUpperCase()})
          } required></input>
        </div>
      )
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
    } else if (this.state.currentCommand === "PLACE") {
      console.log("PLACE")
      this.state.robot.executePlace(this.state.currentCoordinateX, this.state.currentCoordinateY, this.state.currentDirection)
    }else {
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
            {
              this.PlaceInputFields(this.state.currentCommand)
            }
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
  currentDirection: string;
  currentCoordinateX: number;
  currentCoordinateY: number;
}

export default App;
