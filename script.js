// Define HTML elements
const board =document.getElementById('game-board');

// Define game variables
const gridSize=20;
let snake=[{x:10,y:10}];
let food=genarateFood();
let direction='right';
let gameInterval;

// Draw game map,snake,food
function draw(){
    board.innerHTML='';
    drawSnake();
    drawFood();
}

// Draw snake
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake');
        // Add code here to append snakeElement to the game board
        setPosition(snakeElement,segment);
        board.appendChild(snakeElement);
    });
}

function createGameElement(tag,className){
    const element=document.createElement(tag);
    element.className=className;
    return element;
}

// Set the position of the snake or food
function setPosition(element,position){
    element.style.gridColumn=position.x;
    element.style.gridRow=position.y;
     
}
// Testing draw function

draw();

// draw food function
function drawFood(){
    const foodElement=createGameElement('div','food');
    setPosition(foodElement,food);
    board.appendChild(foodElement);
}
// Genarate food
function genarateFood(){
    const x=Math.floor(Math.random()*gridSize) +1;
    const y=Math.floor(Math.random()*gridSize) +1;
    return {x,y};
}
// Moving the snake
function move(){
    const head={...snake[0]};
    switch(direction){
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
        case 'right':
            head.x++;
            break;
        // case 'left':
        //     head.x--;
        //     break;
    

    }
    snake.unshift(head);
    //   snake.pop();
    if(head.x===food.x && head.y===food.y){
        food=genarateFood();
        clearInterval();
        gameInterval=setInterval(()=>{
            move();
            draw();
        }
    }
}
// setInterval(()=>{
//    move();
//    draw();
// }, 200);