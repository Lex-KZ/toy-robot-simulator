import { computeHeadingLevel } from '@testing-library/react';
import React, { useRef, useState, FC, InputHTMLAttributes } from 'react';
import './App.css';
import robotSprite from './robotSprite.png'
import useInterval from './useInterval';

const tableX = 500
const tableY = 500
const robotStart = [[0],[0]]
const scale = 5

function App() {
  const tableRef = useRef(null)
  const [robot, setRobot] = useState(robotStart)
  const [direction, setDirection] = useState([0, -1])
  const [safe, setSafe] = useState(true)

  useInterval(() => runRobot(), 10)

  function checkCliff(destination: number[]) {

  }

  function runRobot() {
    const newRobot = [...robot]
    const newRobotHead = [newRobot[0][0] + direction[0]]
    newRobot.unshift(newRobotHead)
    if (checkCliff(newRobotHead)) {
      setSafe(false)
    }
  }

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
      <div>
        <form>
          <input type="text" placeholder="Type command here" />
          <button type='submit'>Run</button>
        </form>
      </div>
      <div onEvent={(e) => move(e)}>
        <img src={robotSprite} alt="Robot Sprite" width="80"></img>
        <canvas className="Table" ref={tableRef} width={`${tableX}px`} height={`${tableY}px`} />
        {!safe && <div className="tableWarning">I don't want to go off the edge!</div>}
      </div>
    </div>
  )
  
}

export default App;
