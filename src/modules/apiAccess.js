const postData = async (url, path = '', data = {}) => {
  const fullUrl = `${url}/${path}`;
  const response = await fetch(fullUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const answer = await response.ok;
  return answer;
};

const getData = async (url, path) => {
  let data = [];
  const fullUrl = `${url}/${path}`;
  const response = await fetch(fullUrl)
  .catch(error => console.log(error));
   if (response.ok) {
    data = await response.json();
  }
  return data;
};
export { postData, getData };
