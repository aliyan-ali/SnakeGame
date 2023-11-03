import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, score } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
  if (gameOver) {
    if (confirm(' your score was:   '+ score +'\n Press ok to restart.')) {
        window.location = '/'

    }
    return
  }


  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}





// function update() {
//   updateSnake()
//   if (snakeEatsFood()) {
//     updateScore(10); // Increase the score when the snake eats food
//     updateFood()
//   }
//   checkDeath()
// }

// // Add a function to check if the snake eats food
// function snakeEatsFood() {
//   const head = getSnakeHead();
//   if (head.x === food.x && head.y === food.y) {
//     return true;
//   }
//   return false;
// }

// // Function to update and display the score
// function updateScore(points) {
//   score += points;
//   scoreDisplay.textContent = score; // Update the displayed score
// }