import './style.css';
import { getLikes, createLike } from './modules/involvementApi.js';
// import {  getLikes, createLike, getComments, createComment, getReservations, createReservation,}
import whiteHeart from './icons/whiteHeart.png';
import redHeart from './icons/redHeart.png';

import { getMeals } from './modules/mealDb.js';

const section = document.getElementsByTagName('section')[0];

const getInvolvementData = async () => {
  const response = await getLikes(); // Promise.all([getLikes()]);
  return response;
  // let [likes, comments, reservations] = await
  // Promise.all([getLikes(), getComments(), getReservations()]);
  // return [likes, comments, reservations];
};
const addLike = async (event) => {
  const heart = event.target;
  const response = await createLike(heart.id);
  if (response === true) {
    heart.src = redHeart;
    const container = heart.parentElement;
    const hidden = container.childNodes[0];
    const previous = hidden.value;
    const actual = parseInt(previous, 10) + 1;
    hidden.value = actual;
    const label = container.childNodes[2];
    label.innerText = `${actual} likes`;
  }
};
const getInitialData = async () => {
  let content = '';
  const meals = await getMeals('Seafood');
  if (meals !== undefined) {
    const likes = await getInvolvementData();

    const data = Object.values(meals)[0];
    for (let index = 0; index < data.length; index += 1) {
      const meal = data[index];
      const like = likes.filter((l) => l.item_id === meal.idMeal);
      const likesCount = (like.length === 0) ? 0 : like[0].likes;
      const itemTemplate = `<div class='meal'><img class='dish' src='${meal.strMealThumb}' alt='${meal.strMeal} image' ><div class='description'><p>${meal.strMeal}</p><div class='likes'><input type="hidden" name="likesCount" value="${likesCount}"><img class='heart' id='${meal.idMeal}' src='${whiteHeart}' alt='likeImg' ></img><label for=''>${likesCount} likes</label></div></div><input type='submit' id='${meal.idMeal}' value='Comments'> <input type='submit' id='${meal.idMeal}' value='Reservations'></div>`;
      content += itemTemplate;
    }
  }
  section.innerHTML = content;
  const heartCollection = document.getElementsByClassName('heart');
  [].forEach.call(heartCollection, (heart) => heart.addEventListener('click', addLike));
};

window.addEventListener('load', () => {
  getInitialData();
});
