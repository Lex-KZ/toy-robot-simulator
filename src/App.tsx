import { computeHeadingLevel } from '@testing-library/react';
import React from 'react';
import { Interface } from 'readline';
import './App.css';
import { Robot } from './Robot';



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
    this.state.robot.placeFirst(this.state.currentCommand)
    if (this.state.robot.placed === true ) {
      if (this.state.currentCommand === "MOVE") {
        this.state.robot.executeCommand(this.state.currentCommand)
      } else if (this.state.currentCommand === "LEFT") {
        this.state.robot.executeCommand(this.state.currentCommand)
      } else if (this.state.currentCommand === "RIGHT"){
        this.state.robot.executeCommand(this.state.currentCommand)
      } else if (this.state.currentCommand === "REPORT"){
        this.state.robot.executeCommand(this.state.currentCommand)
      } else if (this.state.currentCommand === "PLACE") {
        this.state.robot.executePlace(this.state.currentCoordinateX, this.state.currentCoordinateY, this.state.currentDirection)
      } else {
        this.state.robot.unknownInput()
      }
    } else {

    }
    
   
    this.setState({
      currentCommand: (""),
      commands: [
        this.state.currentCommand.toUpperCase(),
        ...this.state.commands
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

  incorrectInput(error: boolean) {
    if (error === true){
      return(
        <div>I don't know that one. Please type one of the above commands</div>
      )
    }
  }

  edgeError(edge: boolean) {
    if (edge === true) {
      return(
        <div>Not off the table please</div>
      )
    }
  }

  renderReport(report: boolean) {
    if (report === true) {
      return this.state.robot.executeReport()
    }
  }

  notPlaced(placed: boolean) {
    if (placed === false){
      return (
        <div>Please use the PLACE command</div>
      )
    }
  }
  

  render(): JSX.Element {
    return(
      <div className="App">
        <div className="instructions" data-testid="instructions">
          Please enter the following PLACE command, then one of the following commands:
          <ul>
            <li>PLACE X,Y,Z - Please type PLACE then fill out the fields that appear. X,Y is a position on the table and F is a cardinal direction(North, South, East, West)</li>
            <li>MOVE - move forward the way it is facing</li>
            <li>LEFT - rotate 90 degrees anti-clockwise</li>
            <li>RIGHT - rotate 90 degrees clockwise</li>
            <li>REPORT - announce the X,Y,F position of the robot</li>
          </ul>
        </div>
        <div className="command">
          <section>
            {this.edgeError(this.state.robot.edge)}
            {this.incorrectInput(this.state.robot.inputUnknown)}
            {this.notPlaced(this.state.robot.placed)}
          </section>
          <form onSubmit={(e) => {
            this.handleSubmit(e)
            }}>
            
            <input
            data-testid="command-input" 
            type="text" 
            placeholder="Type command here" 
            value={this.state.currentCommand.toUpperCase()}
            onChange={
              e => this.setState({ currentCommand: e.target.value.toUpperCase() })
            }/>
            <div data-testid="place-input">
            {
              this.PlaceInputFields(this.state.currentCommand)
            }
            </div>
            <button type='submit'>Run</button>
          </form>
        </div>
        <section>
          {this.renderReport(this.state.robot.report)}
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
