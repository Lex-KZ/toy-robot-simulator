import React, { useRef, useState } from 'react';
import './App.css';
import robotSprite from './robotSprite.png'

const tableX = 500
const tableY = 500
const robotStart = [0,0]
const scale = 5

function App() {
  const tableRef = useRef(null)
  const [robot, setRobot] = useState(robotStart)
  const [direction, setDirection] = useState(0)
  const [safe, setSafe] = useState(true)



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
      <form>

        <button onClick={''} className="runButton">Run</button>
      </form>
      
      <img src={robotSprite} alt="Robot Sprite" width="80"></img>
      <canvas className="Table" ref={tableRef} width={`${tableX}px`} height={`${tableY}px`} />
      
    </div>
  )
  
}

export default App;
