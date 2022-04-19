import './style.css';
import {
  getLikes, createLike, getComments, createComment, getReservations, createReservation,
} from './modules/involvementApi.js';

const getInitialData = async () => {
  getLikes();
  getComments();
  getReservations();
};

const setData = async () => {
  createLike(1);
  createComment();
  createReservation();
};
window.addEventListener('load', () => {
  getInitialData();
  setData();
});
