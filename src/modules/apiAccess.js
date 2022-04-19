export default class ApiAccess {
 API_URL='';

 constructor(API_URL) {
   this.API_URL = API_URL;
 }

  postData = async (path = '', data = {}) => {
    const fullUrl = `${this.API_URL}/${path}`;
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

  getData = async (path) => {
    const fullUrl = `${this.API_URL}/${path}`;
    const response = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  };
}
