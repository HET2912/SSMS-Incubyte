const Sweet = require('./sweet.js');

class SweetShopManagementSystem {
    #availableSweets = [];
    #soldSweets = [];

    // Get a list of available sweets
    getAvailableSweets() {
        return [...this.#availableSweets];
    }
    // Get a list of sold sweets
    getSoldSweets() {
        return [...this.#soldSweets];
    }
    // Add a sweet to the shop
    addSweet(sweet) {
        if (this.#validateSweetName(sweet.name)) {
            this.#availableSweets.push(sweet);
            console.log(`Sweet "${sweet.name}" added successfully!`);
        }
    }
  // Private method to Check if the title is null or an empty string, throws an error
    #validateSweetName(name) {
        if (name === null) {
            throw new Error("Sweet name cannot be null!");
        } else if (name.trim() === "") {
            throw new Error("Sweet name cannot be empty");
        }
        return true;
    }

}
module.exports = SweetShopManagementSystem;