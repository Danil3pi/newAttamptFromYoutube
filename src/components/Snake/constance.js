const CANVAS_SIZE = [600, 600];
const SNAKE_START = [
    {x : 8, y : 7},
    {x: 8, y : 8}
];
const APPLE_START = {x : 8, y : 3};
const SCALE = 20;
const SPEED = 150;
const DIRECTIONS = {
    38: {xSpeed: 0, ySpeed: -1}, // up
    40: {xSpeed: 0, ySpeed:1}, // down
    37: {xSpeed: -1, ySpeed: 0}, // left
    39: {xSpeed: 1, ySpeed:0} // right
};

export {
    CANVAS_SIZE,
    SNAKE_START,
    APPLE_START,
    SCALE,
    SPEED,
    DIRECTIONS
};