import stringToObject from './stringToObject';

export const apiCall = (url, method, body) => {
  const options = {
    headers: { 'Content-Type': 'application/json' },
  };
  
  if(method === 'post') {
    options.method = 'POST';
    options.body = JSON.stringify(stringToObject(body));
  }
  
  return fetch(`${url}`, options)
    .then(res => res.json());
};
