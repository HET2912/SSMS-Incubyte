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
        if (
            this.#validateSweetName(sweet.name) &&
            this.#validateSweetCategory(sweet.category)
        ) {
            this.#availableSweets.push(sweet);
            console.log(`Sweet "${sweet.name}" added successfully!`);
        }
    }

    #validateSweetCategory(category) {
        if (category === null) throw new Error("Sweet category cannot be null!");
        if (category.trim() === "") throw new Error("Sweet category cannot be empty!");
        return true;
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