import axios from 'axios';
import { message } from 'antd';

if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = 'http://localhost:8080/api/';
}
if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'http://localhost:8080/api/';
}

axios.defaults.timeout = 10000;

axios.interceptors.request.use((config) => {
  //Set request body
  return config;
});

// Response interceptor
axios.interceptors.response.use(
  (response) => {
    // If the returned status code is 200, the interface request is successful and the data can be obtained normally
    // Otherwise, an error will be thrown
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // The server status code does not start with 2
  // Here you can negotiate a unified error status code with your background developers
  // Then according to the returned status code, some operations are carried out, such as login expiration prompt, error prompt and so on
  // Several common operations are listed below, and other requirements can be expanded by themselves
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: Not logged in
        // If you do not log in, you will jump to the login page and carry the path of the current page
        // Return to the current page after successful login. This step needs to be operated in the login page.
        case 401:
          console.log(401);
          break;

        // 403 token be overdue
        // Prompt the user when the login is expired
        // Clear local token And empty vuex in token object
        // Jump to login page
        case 403:
          console.log(403);
          break;

        // 404 The request does not exist
        case 404:
          message.success('请求不存在', 10);
          break;
        // Other errors, directly throw error prompt
        default:
          message.success('接口错误，请稍后重试', 10);
      }
      return Promise.reject(error.response);
    }
  }
);

export function httpGet(url: string, params?: any) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function httpPost(url: string, params?: any) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function httpDelete(url: string, params?: any) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
