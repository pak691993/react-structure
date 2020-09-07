import axios from 'axios';
import { API_URL, TOKEN_KEY, LOGIN_URL } from '../Constants';
import {
  // setCookie,
  getCookie,
  // removeCookie
} from './Helpers';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  config => {
    if (!config.headers.Authorization) {
      const token = getCookie(TOKEN_KEY);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error => Promise.reject(error)
);

let isShowModalExpried = false;
instance.interceptors.response.use(
  response => response.data,
  error => {
    if (error?.response?.status === 401 && !isShowModalExpried) {
      isShowModalExpried = true;
      // Modal.warning({
      //   title: 'Token expiry time',
      //   content: 'Please login again',
      //   onOk: () => {
      //     // clear token
      //     // removeToken();
      //     // redirect to login page
      //     history.push(LOGIN_URL);
      //   },
      // });
    }
    if (error.response) {
      return Promise.reject(error.response);
    }
    if (error.request) {
      return Promise.reject(error.request);
    }
    return Promise.reject(error.message);
  }
);

export const fetchApi = async (
  endpoint,
  method = 'GET',
  body,
  params = {},
  sourceToken = null
) => {
  return instance({
    method: method,
    url: endpoint,
    data: body,
    params: params,
    cancelToken: sourceToken,
  });
};

export const downloadFile = async (
  endpoint,
  method = 'POST',
  body,
  params = {},
  sourceToken = null
) => {
  return instance({
    method: method,
    url: endpoint,
    data: body,
    params: params,
    cancelToken: sourceToken,
    responseType: 'arraybuffer',
  });
};

export async function fetchAllApi(requests = []) {
  return axios.all(requests);
}
