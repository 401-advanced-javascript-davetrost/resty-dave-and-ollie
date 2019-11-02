export const apiCall = (url, method, body) => {
  let options = {};
  if(method === 'post') {
    options.method = 'POST';
    options.body = body;
    // options.mode = 'no-cors';
    // console.log(options.body);
  }
  
  return fetch(`${url}`, options)
    .then(res => res.json());
};
