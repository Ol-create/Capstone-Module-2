import ApiAccess from './apiAccess.js';

const INVOLVEMENT_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const apiAccess = new ApiAccess(INVOLVEMENT_API_URL);

const getLikes = async () => {
  let answer = [];
  const data = await apiAccess.getData('url/');
  answer = data.result;

  return answer;
};
const createLike = async (itemId) => {
  let answer = '';
  const data = { item_id: `${itemId}` };
  const response = await apiAccess.postData('url/', data);
  answer = response.result;
  return answer;
};

const getComments = async () => apiAccess.getData();
const createComment = async () => { apiAccess.postData(); };

const getReservations = async () => apiAccess.getData();
const createReservation = async () => { apiAccess.postData(); };

export {
  getLikes, createLike, getComments, createComment, getReservations, createReservation,
};
