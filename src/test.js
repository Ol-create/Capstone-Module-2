//import { getCommentsById, getReservationsById, getMealsCount } from './index.js';
const { getCommentsById, getReservationsById, getMealsCount } = require("./index.js");
describe('Capstone items counter', () => {
    describe('Comments', () => {
        test('itemId with comments', () => {
            let { countComments, comments } = await getCommentsById('52959');
            expect(countComments).toBeGreaterThan(0);
        });

        test('itemId without comments', () => {
            let { countComments, comments } = await getCommentsById('99999');
            expect(countComments).toBe(0);
        });
    });
    describe('Reservations', () => {
        test('itemId with reservations', () => {
            let { countReservations, reservations } = await getReservationsById('52819');
            expect(countReservations).toBeGreaterThan(0);
        });

        test('itemId without reservations', () => {
            let { countReservations, reservations } = await getReservationsById('99999');
            expect(countReservations).toBe(0);
        });
    });

    describe('Meals', () => {
        test('count items for Seafood', () => {
            const MEALS_CATEGORY = 'Seafood';
            let countMeals = await getMealsCount(MEALS_CATEGORY);
            expect(countMeals).toBeGreaterThan(0);
        });

        test('count items for  Vegan', () => {
            const MEALS_CATEGORY = 'Vegan';
            let countMeals = await getMealsCount(MEALS_CATEGORY);
            expect(countMeals).toBeGreaterThan(0);
        });

        test('count items for inexistent category', () => {
            const MEALS_CATEGORY = 'Wine';
            let countMeals = await getMealsCount(MEALS_CATEGORY);
            expect(countMeals).toBe(0);
        });
    });

});
