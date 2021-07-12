import React, { useState } from 'react';
import { render, fireEvent, getByLabelText } from '@testing-library/react';
import App from '../App';
import {Robot} from '../Robot'
import '@testing-library/jest-dom/extend-expect'
import { mockComponent } from 'react-dom/test-utils';

test('Instructions render correctly', () => {
  const application = render(<App />);
  const instructionsElement = application.getByTestId("instructions");

  expect(instructionsElement.textContent).toContain("Please enter the following PLACE command, then one of the following commands:")
})

test('Input box visible when rendered', () =>{
  const { getByTestId } = render(<App />);
  const inputField = getByTestId("command-input")

  expect(inputField).toBeVisible
})

test('Place field invisible when rendered', () => {
  const { getByTestId } = render(<App />);
  const inputField = getByTestId("place-input")

  expect(inputField).toBeDisabled
})

test('Input box capitalizes values', () => {
  const { getByTestId } = render(<App />);
  const inputField = getByTestId("command-input") as HTMLInputElement;

  fireEvent.change(inputField, {
    target: {
      value: "place"
    }
  });
  expect(inputField.value).toBe("PLACE")
})

test ('PLACE input renders when input value is PLACE', () => {
  const { getByTestId } = render(<App />);
  const inputField = getByTestId("command-input") as HTMLInputElement;
  const placeInputField = getByTestId("place-input")  as HTMLInputElement;

  fireEvent.change(inputField, {
    target: {
      value: "PLACE"
    }
  });
  expect(placeInputField).toBeVisible
})

describe('robot', () => {
  const robot = new Robot 
  test("Robot should start at 0,0 and face North", () => {
    expect(robot.position).toStrictEqual([0,0])
    expect(robot.direction).toBe("NORTH")
  })

  test("", () => {
    robot.executeCommand("MOVE")
    robot.executeCommand("RIGHT")
    robot.executeCommand("REPORT")
    expect(robot.position).toStrictEqual([0,1])
    expect(robot.direction).toBe("EAST")
  })
})
