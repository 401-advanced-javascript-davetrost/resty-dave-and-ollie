export const apiCall = (url, method, body) => {
  return fetch(`${url}`)
    .then(res => res.json());
};
