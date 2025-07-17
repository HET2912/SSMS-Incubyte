const SweetShopManagementSystem = require('../src/SweetShopManagementSystem');
const Sweet = require('../src/sweet');

describe('SweetShopManagementSystem Tests', () => {
    let shop;

    beforeEach(() => {
        shop = new SweetShopManagementSystem();
    });

    // ✅ Test 1: Add a valid sweet
    test('addSweetTest', () => {
        const sweet = new Sweet(1,"Gulab Jamun", "Milk Sweet", 25, 100);
        shop.addSweet(sweet);
        const updatedAvailableSweets = shop.getAvailableSweets();
        expect(updatedAvailableSweets).toHaveLength(1);
        expect(updatedAvailableSweets).toContainEqual(sweet);
    });

    // ✅ Test 2: Add a sweet with an empty name - should throw error
    test('addSweetWithEmptyNameTest', () => {
        const sweet = new Sweet(2,'', 'Dry Sweet', 30, 50);
        expect(() => shop.addSweet(sweet)).toThrow('Sweet name cannot be null or empty');
    });

    // ✅ Test 3: Null name should throw error
    test('addSweetWithNullNameTest', () => {
        const sweet = new Sweet(3,null, 'Dry Sweet', 30, 50);
        expect(() => shop.addSweet(sweet)).toThrow('Sweet name cannot be null or empty!');
    });

    // ✅ Test 4: Empty category
    test('addSweetWithEmptyCategoryTest', () => {
        const sweet = new Sweet(4,'Ladoo', '', 20, 50);
        expect(() => shop.addSweet(sweet)).toThrow('Sweet category cannot be null or empty!');
    });

    // ✅ Test 5: Null category
    test('addSweetWithNullCategoryTest', () => {
        const sweet = new Sweet(5,'Ladoo', null, 20, 50);
        expect(() => shop.addSweet(sweet)).toThrow('Sweet category cannot be null or empty!');
    });
      // ✅ Test 6: Duplicate ID
    test('addSweetWithDuplicateIdTest', () => {
        const sweet1 = new Sweet(6, "Rasgulla", "Milk Sweet", 40, 15);
        const sweet2 = new Sweet(6, "Soan Papdi", "Dry Sweet", 20, 20); // Same ID as sweet1
        shop.addSweet(sweet1);
        expect(() => shop.addSweet(sweet2)).toThrow("Sweet with ID 6 already exists!");
    });
});
