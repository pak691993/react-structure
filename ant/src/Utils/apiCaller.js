import axios from "axios";
import { Modal } from "antd";
import { LOGIN_URL, API_URL, TOKEN_KEY } from "../GlobalConstants";
import { getCookie } from "./Helpers";
import { history } from "./";

const instance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    if (!config.headers.Authorization) {
      const token = getCookie(TOKEN_KEY);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

let isShowModalExpiry = false;
// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // token expiry
    if (error.response && error.response.status === 401 && !isShowModalExpiry) {
      isShowModalExpiry = true;
      Modal.warning({
        title: "Token expiry time",
        content: "Please login again",
        onOk: () => {
          // clear token
          // removeToken();
          // redirect to login page
          history.push(LOGIN_URL);
        },
        onCancel: () => {
          // clear token
          // removeToken();
          // redirect to login page
          history.push(LOGIN_URL);
        },
      });
    }

    // call api without token
    // if (error.response && error.response.status === 403) {
    //   history.push(LOGIN_URL);
    // }

    // Do something with response error
    if (error.response) {
      return Promise.reject(error.response);
    }
    if (error.request) {
      return Promise.reject(error.request);
    }
    return Promise.reject(error.message);
  }
);

export async function fetchApi(
  endPoint,
  method = "GET",
  body,
  params = {},
  sourceToken = null
) {
  return instance({
    method: method,
    data: body,
    params: params,
    sourceToken: sourceToken,
  });
}

export async function downloadFile(
  endpoint,
  method = "POST",
  body,
  params = {},
  sourceToken = null
) {
  return instance({
    method: method,
    url: endpoint,
    data: body,
    params: params,
    cancelToken: sourceToken,
    responseType: "arraybuffer",
  });
}

export async function fetchAllApi(requests = []) {
  return axios.all(requests);
}
