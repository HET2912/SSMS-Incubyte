const Sweet = require('./sweet.js');

class SweetShopManagementSystem {
    #availableSweets = [];
    #soldSweets = [];

    // ✅ Get a list of available sweets
    getAvailableSweets() {
        return [...this.#availableSweets]; // Defensive copy
    }

    // ✅ Get a list of sold sweets
    getSoldSweets() {
        return [...this.#soldSweets]; // Defensive copy
    }

    // ✅ Add a sweet to the shop
    addSweet(sweet) {
        this.#validateSweetId(sweet.id);
        this.#validateSweetName(sweet.name);
        this.#validateSweetCategory(sweet.category);
        this.#validatePrice(sweet.pricePerUnit);
        this.#validateQuantity(sweet.quantityInStock);

        this.#availableSweets.push(sweet); // Add sweet to available sweets
        
        console.log(`Sweet "${sweet.name}" added successfully!`);
    }

    // ✅ Validate ID (must be unique and a positive number)
    #validateSweetId(id) {
        if (typeof id !== 'number' || id <= 0 || !Number.isInteger(id)) {
            throw new Error("Sweet ID must be a positive integer!");
        }
        const idExists = this.#availableSweets.some(sweet => sweet.id === id);
        if (idExists) {
            throw new Error(`Sweet with ID ${id} already exists!`);
        }
    }

    // ✅ Validate sweet name (non-null and non-empty)
    #validateSweetName(name) {
        if (name === null || typeof name !== 'string' || name.trim() === '') {
            throw new Error("Sweet name cannot be null or empty!");
        }
    }

    // ✅ Validate sweet category (non-null and non-empty)
    #validateSweetCategory(category) {
        if (category === null || typeof category !== 'string' || category.trim() === '') {
            throw new Error("Sweet category cannot be null or empty!");
        }
    }

    // ✅ Validate price (must be positive number)
    #validatePrice(price) {
        if (typeof price !== 'number' || isNaN(price) || price <= 0) {
            throw new Error("Price must be a valid positive number!");
        }
    }

    // ✅ Validate quantity (must be integer >= 0)
    #validateQuantity(quantity) {
        if (typeof quantity !== 'number' || !Number.isInteger(quantity) || quantity < 0) {
            throw new Error("Quantity must be a non-negative integer!");
        }
    }
}

module.exports = SweetShopManagementSystem;
