import './style.css';
import {
  getLikes, createLike, getComments, createComment, getReservations, createReservation,
} from './modules/involvementApi.js';

import { getMeals } from './modules/mealDb.js';
const section = document.getElementsByTagName('section')[0];
const categoryId = '';
const getInitialData = async () => {
  let content = '';
  //let rowTemplate=`<div class='mealsRow'>${rowContent}</div>`;

  const meals = await getMeals('Seafood');
  if (meals !== undefined) {

    // meals.forEach((meal) => {
    //   let itemTemplate = `<div class='meal'><img src='${meal.strMealThumb}' alt='${meal.strMeal} image' ><p>${meal.strMeal}</p><input type='button' value='Comments'> <input type='button' value='Reservations'></div>`;
    //   content=content + itemTemplate;
    // });
    let data=Object.values(meals)[0];
    for (let index = 0; index < data.length; index = index + 1) {
      const meal = data[index]; 
      let itemTemplate = `<div class='meal'><img class='dish' src='${meal.strMealThumb}' alt='${meal.strMeal} image' ><p>${meal.strMeal}</p><input type='button' value='Comments'> <input type='button' value='Reservations'></div>`;
      content += itemTemplate;
    }
  }
  // getLikes();
  // getComments(1);
  // getReservations(1);
  section.innerHTML = content;
};

const setData = async () => {
//  const like= await createLike(1);
//  const comment=await createComment(1, '', '');
//  const reservation=await createReservation(1, new Date(2022, 04, 20), new Date(2022, 04, 20));
};
window.addEventListener('load', () => {
  getInitialData();
  setData();
});
