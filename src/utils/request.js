/*
 * @Description: 
 * @Author: 李思甜
 * @Date: 2022-06-30 10:34:56
 * @LastEditTime: 2022-07-01 14:04:16
 * @LastEditors: 李思甜
 */
import fetch from 'dva/fetch';

function parseJSON (response) {
  return response.json();
}

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request (url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}
