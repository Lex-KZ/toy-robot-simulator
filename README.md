# Toy Robot Simulator

## Description
This is a simulator of a toy robot on a square table. It is free to traverse the table without fear of obstacles. The robot should not go off the table at any point or it will be destroyed. It should in fact ignore any commands that would lead to its doom. 

## Parameters 
1. Table is 5x5 units
2. There are no obstacles
3. Robot must not "fall off" the table. Any instruction that would make it fall off must be prevented
4. Robot must understand these commands: 
    - **PLACE X,Y,Z** - where X,Y is a position on the table and F is a cardinal direction(North, South, East, West)
    - **MOVE** - move forward the way it is facing 
    - **LEFT** - rotate 90 degrees anti-clockwise
    - **RIGHT** - rotate 90 degrees clockwise
    - **REPORT** - announce the X,Y,F position of the robot
5. Robot can not execute any commands until the PLACE command has been given and executed

## Stack:
- TypeScript
- React
- Jest
- React Testing Library
- Prettier

## Getting Started:
You should have the latest versions of Yarn, Node and Git installed on your machine. To check the versions you have installed run:
~~~
$ yarn --version

$ node --version

$ git --version
~~~

Clone the project repository:
~~~
$ git clone https://github.com/Lex-KZ/toy-robot-simulator.git
~~~

Move into the project directory and install npm package:
~~~
$ cd toy-robot-simulator

$ yarn
~~~

Finally, start the local server and go to http://localhost:3000 or the port you specified:
~~~
$ yarn start
~~~

To build the application for production run:
~~~
$ yarn build
~~~

To run tests run:
~~~
$ npm test
~~~