const SweetShopManagementSystem = require('../src/SweetShopManagementSystem');
const Sweet = require('../src/sweet');

describe('SweetShopManagementSystem Tests', () => {
    let shop;
    let availableSweets;
    let soldSweets;

    beforeEach(() => {
        shop = new SweetShopManagementSystem();
        availableSweets = shop.getAvailableSweets();
        soldSweets = shop.getSoldSweets();
    });

    // ✅ Test 1: Add a valid sweet
    test('addSweetTest', () => {
        const sweet = new Sweet("Gulab Jamun", "Milk Sweet", 25, 100);
        shop.addSweet(sweet);
        const updatedAvailableSweets = shop.getAvailableSweets();
        expect(updatedAvailableSweets).toHaveLength(1);
        expect(updatedAvailableSweets).toContainEqual(sweet);
    });

    // ✅ Test 2: Add a sweet with an empty name - should throw error
    test('addSweetWithEmptyNameTest', () => {
        const sweet = new Sweet('', 'Dry Sweet', 30, 50);
        expect(() => shop.addSweet(sweet)).toThrow('Sweet name cannot be empty');

    });
    test('addSweetWithNullNameTest', () => {
        const sweet = new Sweet(null, 'Dry Sweet', 30, 50);
        expect(() => shop.addSweet(sweet)).toThrow('Sweet name cannot be null!');
    });
    // Test to ensure adding a sweet with an empty category throws an error
    test('addSweetWithEmptyCategoryTest', () => {
        const sweet = new Sweet('Ladoo', '', 20, 50);
        expect(() => shop.addSweet(sweet)).toThrow('Sweet category cannot be empty!');
    });

    // Test to ensure adding a sweet with a null category throws an error
    test('addSweetWithNullCategoryTest', () => {
        const sweet = new Sweet('Ladoo', null, 20, 50);
        expect(() => shop.addSweet(sweet)).toThrow('Sweet category cannot be null!');
    });


});
