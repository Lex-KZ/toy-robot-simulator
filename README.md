# Toy Robot Simulator

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
5. 