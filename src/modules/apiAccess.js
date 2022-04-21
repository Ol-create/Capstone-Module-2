const postData = async (url, path = '', data = {}) => {
  const fullUrl = `${url}/${path}`;
  const response = await fetch(fullUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const answer = await response.json();
  return answer;
};

const getData = async (url, path) => {
  const fullUrl = `${url}/${path}`;
  const response = await fetch(fullUrl);
  const data = await response.json();
  return data;
};

export { postData, getData };
