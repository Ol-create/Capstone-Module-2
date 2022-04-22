// MealsDB API method access
import { getData } from './apiAccess.js';

const MEAL_DB_URL = 'https://www.themealdb.com/api/json/v1/1';

const getMeals = async (categoryId) => {
  let answer = [];
  const meals = await getData(MEAL_DB_URL, `filter.php?c=${categoryId}`);
  answer = meals;
  return answer;
};
const getCategories = () => {};

export { getMeals, getCategories };