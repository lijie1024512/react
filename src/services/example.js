/*
 * @Description: 注册接口
 * @Author: 李思甜
 * @Date: 2022-06-30 10:34:56
 * @LastEditTime: 2022-07-01 13:50:11
 * @LastEditors: 李思甜
 */
import request from '../utils/request';

export function query () {
  return request('/api/users')
}

export function mock () {
  return request('/api/mock')
}