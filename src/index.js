import './style.css';
import {
  getLikes, createLike, getComments, getReservations,
} from './modules/involvementApi.js';
import { getMeals } from './modules/mealDb.js';
// import {  getLikes, createLike, getComments, createComment, getReservations, createReservation,}
import whiteHeart from './icons/whiteHeart.png';
import redHeart from './icons/redHeart.png';

const section = document.getElementsByTagName('section')[0];
const header = document.getElementsByTagName('header')[0];
const MEALS_CATEGORY = 'Seafood';
const getInvolvementData = async () => {
  const response = await getLikes(); // Promise.all([getLikes()]);
  return response;
  // let [likes, comments] = await  Promise.all([getLikes(), getComments()]);
  // return [likes, comments];
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

const getCommentsById = async (itemId) => {
  const comments = await getComments(itemId);
  const countComments = (comments === undefined) ? 0 : comments.length;
  return { countComments, comments };
};

const getReservationsById = async (itemId) => {
  const reservations = await getReservations(itemId);
  const countReservations = (reservations === undefined) ? 0 : reservations.length;
  return { countReservations, reservations };
};
const getMealsCount = async (category) => {
  let mealsCount = 0;
  const meals = await getMeals(category);
  if (meals !== undefined) {
    const data = Object.values(meals)[0];
    mealsCount = data.length;
  }
  return mealsCount;
};

const showCommentsInfo = async (event) => {
  const button = event.target;
  const { countComments, comments } = await getCommentsById(button.id);
  let firstComment = '';
  if (countComments > 0) {
    const comment = comments[0];
    firstComment = `First comment: ${comment.creation_date} ${comment.username} ${comment.comment} `;
  }
  alert(`Comments: (${countComments}) \r\n ${firstComment}`);
};
const showReservationsInfo = async (event) => {
  const button = event.target;
  const { countReservations, reservations } = await getReservationsById(button.id);
  let firstReservation = '';
  if (countReservations > 0) {
    const reservation = reservations[0];
    firstReservation = `First reservation: ${reservation.username} (from ${reservation.date_start} to ${reservation.date_end}) `;
  }
  alert(`Reservations: (${countReservations}) \r\n ${firstReservation}`);
};

const getInitialData = async () => {
  let content = '';
  let mealsCount = 0;
  const meals = await getMeals(MEALS_CATEGORY);
  if (meals !== undefined) {
    const likes = await getInvolvementData();
    const data = Object.values(meals)[0];
    mealsCount = data.length;
    for (let index = 0; index < mealsCount; index += 1) {
      const meal = data[index];
      const like = likes.filter((l) => l.item_id === meal.idMeal);
      const likesCount = (like.length === 0) ? 0 : like[0].likes;
      const itemTemplate = `<div class='meal'><img class='dish' src='${meal.strMealThumb}' alt='${meal.strMeal} image' ><div class='description'><p>${meal.strMeal}</p><div class='likes'><input type="hidden" name="likesCount" value="${likesCount}"><img class='heart' id='${meal.idMeal}' src='${whiteHeart}' alt='likeImg' ></img><label for=''>${likesCount} likes</label></div></div><input class='newButton' type='submit' id='${meal.idMeal}' name='CommentsButton' value='Comments'> <input class='newButton' type='submit' id='${meal.idMeal}' name='ReservationsButton' value='Reservations'></div>`;
      content += itemTemplate;
    }
  }
  header.innerHTML = `<label>${MEALS_CATEGORY} (${mealsCount})</label>`;
  section.innerHTML = content;
  const heartCollection = document.getElementsByClassName('heart');
  const commentsButtonCollection = document.getElementsByName('CommentsButton');
  const reservationsButtonCollection = document.getElementsByName('ReservationsButton');
  [].forEach.call(heartCollection, (heart) => heart.addEventListener('click', addLike));
  [].forEach.call(commentsButtonCollection, (commentButton) => commentButton.addEventListener('click', showCommentsInfo));
  [].forEach.call(reservationsButtonCollection, (reservationButton) => reservationButton.addEventListener('click', showReservationsInfo));
};

window.addEventListener('load', () => {
  getInitialData();
});

module.exports = { getCommentsById, getReservationsById, getMealsCount };
