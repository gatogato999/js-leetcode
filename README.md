# JavaScript Coding Exercises

This repository contains a collection of JavaScript coding exercises categorized by difficulty: Easy, Medium, Hard, and Impossible. Each file (`easy.js`, `medium.js`, `hard.js`, `impossible.js`) contains over 200 problem descriptions, designed to be solved using Node.js.

## Table of Contents
- [Project Structure](#project-structure)
- [Exercise Format](#exercise-format)
- [Difficulty Guidelines](#difficulty-guidelines)
- [Getting Started](#getting-started)
- [Usage](#usage)

## Project Structure
- `easy.js`: Simple logic problems (loops, arrays, strings, conditionals, math, etc.)
- `medium.js`: Intermediate algorithmic problems (sorting, searching, basic recursion, hash maps, etc.)
- `hard.js`: Advanced problems (dynamic programming, backtracking, graphs, advanced recursion, complex data structures)
- `impossible.js`: Very challenging or research-level problems (non-trivial optimization, bitwise tricks, theoretical puzzles, simulations, or custom algorithm design)

## Exercise Format
Each exercise is provided as a comment block with the following template:

```javascript
/*
* Problem Name
* Description: [clear and concise explanation of the problem]
* Input: [input format and constraints]
* Output: [output format]
* Example: [one or more usage examples]
*/
```

After every problem block, there is a single blank line to visually separate it from the next problem.

## Difficulty Guidelines
- **Easy**: Focuses on fundamental JavaScript concepts and basic problem-solving techniques.
- **Medium**: Requires a deeper understanding of algorithms and data structures, often involving more complex logic.
- **Hard**: Challenges with advanced algorithms, complex data structures, and often requires optimized solutions.
- **Impossible**: Designed for extreme challenges, including non-trivial optimizations, theoretical puzzles, and problems that might require custom algorithm design or research-level approaches.

## Getting Started
To get started with these exercises, you will need Node.js installed on your machine.

1. **Clone the repository (or download the files):**
   ```bash
   git clone https://github.com/gatogato999/js-leetcode.git
   cd js-leetcode
   ```


## Usage
Each exercise is presented as a comment. To solve an exercise, you would typically:

1. **Choose a problem:** Open one of the `.js` files (e.g., `easy.js`).
2. **Read the problem description:** Understand the problem, input, output, and examples.
3. **Write your solution:** Implement your JavaScript code below the problem comment block.
4. **Test your solution:** Run your code using Node.js.

Example of how you might structure your solution in `easy.js`:

```javascript
/*
* Problem Name: Sum of Two Numbers
* Description: Given two integers, return their sum.
* Input: Two integers, a and b.
* Output: The sum of a and b.
* Example: a = 5, b = 3 -> 8
*/

function sumTwoNumbers(a, b) {
  // Your solution here
  return a + b;
}

// Test cases
console.log(sumTwoNumbers(5, 3)); // Expected: 8
console.log(sumTwoNumbers(-1, 10)); // Expected: 9


/*
* Problem Name: Reverse a String
* Description: Given a string, return its reverse.
* Input: A string s.
* Output: The reversed string.
* Example: s = "hello" -> "olleh"
*/

// Your solution for Reverse a String goes here
```

Feel free to contribute your solutions or add new problems following the specified format!