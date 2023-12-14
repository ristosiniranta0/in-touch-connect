/* 
   File Name: Sophisticated_Code.js
   Description: This code demonstrates an advanced implementation of a Sudoku Solver using Backtracking algorithm.
*/

// Define an empty sudoku grid
let board = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

// Function to check if a number is valid in the given row
function isNumberValidInRow(number, row) {
  for (let col = 0; col < 9; col++) {
    if (board[row][col] === number) {
      return false;
    }
  }
  return true;
}

// Function to check if a number is valid in the given column
function isNumberValidInCol(number, col) {
  for (let row = 0; row < 9; row++) {
    if (board[row][col] === number) {
      return false;
    }
  }
  return true;
}

// Function to check if a number is valid in the given 3x3 box
function isNumberValidInBox(number, startRow, startCol) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row + startRow][col + startCol] === number) {
        return false;
      }
    }
  }
  return true;
}

// Function to check if a number is valid at a given position
function isNumberValid(number, row, col) {
  const startRow = row - (row % 3);
  const startCol = col - (col % 3);
  
  return isNumberValidInRow(number, row)
    && isNumberValidInCol(number, col)
    && isNumberValidInBox(number, startRow, startCol);
}

// Function to solve the sudoku using backtracking algorithm
function solveSudoku() {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let number = 1; number <= 9; number++) {
          if (isNumberValid(number, row, col)) {
            board[row][col] = number;
            
            if (solveSudoku()) {  // Recursive call
              return true;
            } else {
              board[row][col] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

// Function to display the solved sudoku
function displaySudoku() {
  for (let row = 0; row < 9; row++) {
    console.log(board[row]);
  }
}

// Solve and display the sudoku
console.log("Solving Sudoku...");
solveSudoku();
console.log("Sudoku Solved:");
displaySudoku();