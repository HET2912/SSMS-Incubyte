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

Make sure the following are installed on your system:
- Node.js
- npm (Node Package Manager)

### Installation Steps

1. Download or clone the project using this link:
   https://github.com/HET2912/SSMS-Incubyte.git

2. Open a terminal/command prompt and go to the project folder.

3. Type the command to install all the required packages:
   (This will download everything the project needs to run.)
   → Run: `npm install`

---

## Running the Tests

### To run **all the tests** at once:
- Open the terminal in the project folder
- Type and run:
  → `npm test`

### To test specific features individually:

- ✅ To test adding sweets:
  → Run: `npx jest tests/addSweet.test.js`

- 🔍 To test viewing sweets:
  → Run: `npx jest tests/viewSweet.test.js`

- ❌ To test deleting sweets:
  → Run: `npx jest tests/deleteSweet.test.js`

- 🔎 To test searching sweets:
  → Run: `npx jest tests/searchSweet.test.js`

- 💰 To test purchasing sweets:
  → Run: `npx jest tests/purchaseSweet.test.js`

- 📦 To test restocking sweets:
  → Run: `npx jest tests/restockSweet.test.js`

(You can copy and paste any of the above commands into your terminal.)

---

## Built With

- JavaScript (Node.js) – Core application logic
- Jest – For writing and running tests

---

## Author

**Het Patel**  
L.D. College of Engineering  
GitHub: [https://github.com/HET2912](https://github.com/HET2912)
