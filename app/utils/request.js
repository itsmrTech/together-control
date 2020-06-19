import axios from 'axios';
import vars from './vars';
const sendRequest = async (url, data, method = 'GET', options = {}) =>
  await axios({
    method,
    url,
    data,
    ...options,
  });
export const requestAPI = async (
  path = '/',
  data,
  method = 'GET',
  options = {
    headers:{}
  },
) => await sendRequest(`${vars.hostname}${path}`, data, method, {...options,
  headers:{
    ...options.headers,
    "x-access-token":localStorage.getItem("token")
  }});
export default sendRequest;
