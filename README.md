# Sweet Shop Management System 🍬

This is a simple Sweet Shop Management System built using JavaScript and tested using Jest. It follows the TDD (Test Driven Development) approach and includes full support for managing sweets, such as adding, updating, deleting, searching, purchasing, and restocking.

---

## Features

- ✅ Add new sweets with ID, name, category, price, and quantity
- 🔍 View all available and sold sweets
- ❌ Delete sweets by ID
- 🔎 Search sweets by name or category
- 💰 Purchase sweets with quantity validation
- 📦 Restock sweets by ID
- ⚠️ Proper input validation and error handling

---

## TDD (Test Driven Development)

This project was developed using Test Driven Development.

Three rules of TDD:
1. Write only enough code to make the test fail.
2. Write only enough code to make the test pass.
3. Refactor if necessary.

---

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone this repository:
   git clone https://github.com/HET2912/SSMS-Incubyte.git

2. Navigate to the project folder:
   cd sweet-shop-management

3. Install dependencies:
   npm install

---

## Running the Tests

To run all tests:
  npm test

To run specific test files:
  npx jest tests/addSweet.test.js
  npx jest tests/viewSweet.test.js
  npx jest tests/deleteSweet.test.js
  npx jest tests/searchSweet.test.js
  npx jest tests/purchaseSweet.test.js
  npx jest tests/restockSweet.test.js

---

## Built With

- JavaScript (Node.js)
- Jest (for testing)

---

## Author

Het Patel  
L.D. College of Engineering  
GitHub: https://github.com/HET2912
