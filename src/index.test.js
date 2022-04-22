jest.mock('./index.js');
const { getCommentsById, getReservationsById, getMealsCount } = require('./index.js');

describe('Capstone items counter', () => {
  describe('Comments', () => {
    test('itemId with comments', () => {
      const { countComments, comments } = getCommentsById('52959');
      expect(countComments).toBeGreaterThan(0);
      expect(comments).toBeDefined();
    });

    test('itemId without comments', () => {
      const { countComments, comments } = getCommentsById('99999');
      expect(countComments).toBe(0);
      expect(comments).toBeUndefined();
    });
  });
  describe('Reservations', () => {
    test('itemId with reservations', () => {
      const { countReservations, reservations } = getReservationsById('52819');
      expect(countReservations).toBeGreaterThan(0);
      expect(reservations).toBeDefined();
    });

    test('itemId without reservations', () => {
      const { countReservations, reservations } = getReservationsById('99999');
      expect(countReservations).toBe(0);
      expect(reservations).toBeUndefined();
    });
  });
  describe('Meals', () => {
    test('count items for Seafood', () => {
      const MEALS_CATEGORY = 'Seafood';
      const countMeals = getMealsCount(MEALS_CATEGORY);
      expect(countMeals).toBeGreaterThan(0);
    });

    test('count items for inexistent category', () => {
      const MEALS_CATEGORY = 'Wine';
      const countMeals = getMealsCount(MEALS_CATEGORY);
      expect(countMeals).toBe(0);
    });
  });
});
