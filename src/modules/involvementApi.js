// Involvement API methods access
import { postData, getData } from './apiAccess.js';

const INVOLVEMENT_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const apiId = 'mJ38T1cF1k53CeEkLunA';
const getLikes = async () => {
  let answer = [];
  const data = await getData(INVOLVEMENT_API_URL, `apps/${apiId}/likes`);
  answer = data;

  return answer;
};
const createLike = async (itemId) => {
  const data = { item_id: `${itemId}` };
  const response = await postData(INVOLVEMENT_API_URL, `apps/${apiId}/likes`, data);
  return response;
};

const getComments = async (itemId) => {
  let answer = [];
  const data = await getData(INVOLVEMENT_API_URL, `apps/${apiId}/comments?item_id=${itemId}`);
  answer = data;
  return answer;
};

const getReservations = async (itemId) => {
  let answer = [];
  const data = await getData(INVOLVEMENT_API_URL, `apps/${apiId}/reservations?item_id=${itemId}`);
  answer = data;

  return answer;
};

export {
  getLikes, createLike, getComments, getReservations,
};
