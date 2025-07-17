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
        this.#validatePrice(sweet.price);
        this.#validateQuantity(sweet.quantity);

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


    // ✅ View a sweet by ID
    viewSweetById(id) {
        const sweet = this.#availableSweets.find(sweet => sweet.id === id);
        if (!sweet) {
            throw new Error(`Sweet with ID ${id} not found!`);
        }
        return { ...sweet }; // Return a copy (defensive)
    }


    // ✅ Delete a sweet by ID
    deleteSweetById(id) {
        const index = this.#availableSweets.findIndex(sweet => sweet.id === id);
        if (index === -1) {
            throw new Error(`Sweet with ID ${id} not found!`);
        }

        const deletedSweet = this.#availableSweets.splice(index, 1)[0];
        console.log(`Sweet "${deletedSweet.name}" with ID ${id} deleted successfully!`);
    }


    // ✅ Search sweets by name or category (case-insensitive)
    searchSweets({ name, category }) {
        return this.#availableSweets.filter(sweet => {
            const matchesName = name
                ? sweet.name.toLowerCase().includes(name.toLowerCase())
                : true;
            const matchesCategory = category
                ? sweet.category.toLowerCase() === category.toLowerCase()
                : true;

            return matchesName && matchesCategory;
        });
    }



    // ✅ Purchase a sweet by ID and quantity
    purchaseSweet(id, quantity) {
        if (typeof id !== 'number' || !Number.isInteger(id) || id <= 0) {
            throw new Error("Invalid sweet ID.");
        }

        if (typeof quantity !== 'number' || quantity <= 0 || !Number.isInteger(quantity)) {
            throw new Error("Purchase quantity must be a positive integer.");
        }

        const sweetIndex = this.#availableSweets.findIndex(s => s.id === id);
        if (sweetIndex === -1) {
            throw new Error(`Sweet with ID ${id} not found.`);
        }

        const sweet = this.#availableSweets[sweetIndex];

        if (sweet.quantity < quantity) {
            throw new Error(`Only ${sweet.quantity} units available for ${sweet.name}.`);
        }

        // Deduct quantity from available
        sweet.quantity -= quantity;

        // Add to sold list
        this.#soldSweets.push({
            id: sweet.id,
            name: sweet.name,
            category: sweet.category,
            quantity: quantity,
            price: sweet.price,
            totalAmount: quantity * sweet.price
        });

        console.log(`${quantity} ${sweet.name}(s) purchased successfully!`);
    }

}

module.exports = SweetShopManagementSystem;
