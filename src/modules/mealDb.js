// import ApiAccess from './apiAccess.js';
// const ApiAccess = require('./apiAccess.js');
import { getData } from './apiAccess.js';

const MEAL_DB_URL = 'https://www.themealdb.com/api/json/v1/1';
// const apiAccess = new ApiAccess(MEAL_DB_URL);

const getMeals = async (categoryId) => {
  let answer = [];
  const meals = await getData(MEAL_DB_URL, `filter.php?c=${categoryId}`);
  answer = meals;
  return answer;
};
const getCategories = () => {};

export { getMeals, getCategories };