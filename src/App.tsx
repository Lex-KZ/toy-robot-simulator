import { computeHeadingLevel } from '@testing-library/react';
import React from 'react';
import { Interface } from 'readline';
import './App.css';

class Robot extends React.Component {
  constructor(props: {}) {
    super(props);
    // const exceptedCommands: Array<string> = ["MOVE", "LEFT", "RIGHT", "REPORT"];
    this.state = {
      position: [0, 0],
      expectedCommands: ["MOVE", "LEFT", "RIGHT", "REPORT"],
      direction: "North"
    }
  }

  move() {
    console.log("MOVE")
  }

  left() {
    console.log("LEFT")
  }

  right() {
    console.log("RIGHT")
  }

  report() {
    console.log("REPORT")
  }

  place() {
    console.log("PLACE")
  }
}


class App extends React.Component<{}, IState, Robot>{
  
  limit = [0, 4];

  constructor(props: {}) {
    super(props);

    this.state = {
      
      currentCommand: "",
      commands: []
      
    }
  }

  

  
  handleSubmit(e: any): void {
    e.preventDefault();
    // if (this.state.currentCommand === Robot.this.exceptedCommands )

    
    this.setState({
      currentCommand: (""),
      
      commands: [
        this.state.currentCommand.toUpperCase(),
        ...this.state.commands
      ]
      
    })
    console.log(this.state.currentCommand)
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
    return "I don't know that one"
  }

  render(): JSX.Element {
    // console.log(this.state)
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
  // direction: Array<number>;
  // safe: boolean;
  // currentDirection: string;
  // currentPlace: {};
  currentCommand: string;
  commands: Array<string>;
  // com: string;
  // table: Array<Array<null>>
}

export default App;
