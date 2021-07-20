import React from 'react';




export class Robot {
  public position: number[];
  public direction: string;
  public edge: boolean;
  public report: boolean;
  public inputUnknown: boolean;
  public placed: boolean;
  public obstacle: boolean;

  constructor() {
    this.position = [0, 0];
    this.direction = "NORTH";
    this.edge = false;
    this.report = false;
    this.inputUnknown = false;
    this.placed = false;
    this.obstacle = false;
  }

  public executeCommand(command: string) {
    switch (command) {
      case "LEFT": {
        switch (this.direction) {
          case "NORTH": {
            this.direction = "WEST";
            break;
          }
          case "EAST": {
            this.direction = "NORTH";
            break;
          }
          case "SOUTH": {
            this.direction = "EAST";
            break;
          }
          case "WEST": {
            this.direction = "SOUTH";
            break;
          }
        }
        this.reset();
        break;
      }
      case "RIGHT": {
        switch (this.direction) {
          case "NORTH": {
            this.direction = "EAST";
            break;
          }
          case "EAST": {
            this.direction = "SOUTH";
            break;
          }
          case "SOUTH": {
            this.direction = "WEST";
            break;
          }
          case "WEST": {
            this.direction = "NORTH";
            break;
          }
        }
        this.reset();
        break;
      }
      case "MOVE": {
        switch (this.direction) {
          case "NORTH": {
            if (this.position[1]+1 === 2){
              this.obstacle = true;
            } else if (this.position[1] < 4) {
              this.position[1]++;
              this.edge = false;
              this.obstacle = false;
            } else {
              this.edge = true;
              this.obstacle = false;
            }
            break;
          }
          case "EAST": {
            if (this.position[0]+1 === 2){
              this.obstacle = true;
            } else if (this.position[0] < 4) {
              this.position[0]++;
              this.edge = false;
            } else {
              this.edge = true;
            }
            break;
          }
          case "SOUTH": {
            if (this.position[1]-1 === 2){
              this.obstacle = true;
            } else if(this.position[1] > 0) {
              this.position[1]--;
              this.edge = false;
            } else {
              this.edge = true;
            }
            break;
          }
          case "WEST": {
            if (this.position[0]-1 === 2){
              this.obstacle = true;
            } else if(this.position[0] > 0) {
              this.position[0]--;
              this.edge = false;
            } else {
              this.edge = true;
            }
            break;
          }
        }
        this.report = false;
        this.inputUnknown = false;
        break;
      }
      case "REPORT": {
        this.report = true;
        this.edge = false;
        this.inputUnknown = false;
        this.obstacle = false;
      }
    }
  }

  executeReport() {
    return <div>{`Output: Place ${this.position}, ${this.direction}`}</div>;
  }

  executePlace(placeX: number, placeY: number, direction: string) {
    this.position[0] = placeX;
    this.position[1] = placeY;
    this.direction = direction;
  }

  unknownInput() {
    this.inputUnknown = true;

  }

  reset() {
    this.edge = false;
    this.report = false;
    this.inputUnknown = false;
  }

  placeFirst(command: string) {
    if (command === "PLACE") {
      this.placed = true;
    }
  }

}
