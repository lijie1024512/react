/*
 * @Description: 
 * @Author: 李思甜
 * @Date: 2022-07-01 09:44:36
 * @LastEditTime: 2022-07-01 19:37:00
 * @LastEditors: 李思甜
 */
import * as apis from '../services/example'
export default {
  namespace: 'index',
  state: {
    name: "model的msg",
    nodedata: []
  },
  reducers: {
    setName (state, { data }) {
      console.log(state);
      console.log("data", data);
      // 返回个新的state
      return { ...state, ...data }
    },
    setNode (state, data) {
      console.log("state", state);
      console.log("data", data);
      // let _state = JSON.parse(JSON.stringify(state))
      // _state.nodedata = data
      // return _state
      return [...state.nodedata, ...data]
    }
  },
  effects: {
    *setNameAsync ({ payload }, { put, call }) {
      console.log("ssssss");
      yield console.log('payload');
      //  put 发aciton 修改state
      yield put({
        type: 'setName',
        data: {
          name: '蓝胖子'
        }
      })
    },
    *setcNodeAsync ({ payload }, { put, call }) {
      console.log(payload);
      // call 发接口
      let res = yield call(apis.query);
      if (res.data) {
        console.log(res.data.users);
        yield put({
          type: 'setNode',
          data1: res.data.users
        })
      }
    },
    *setTure ({ payload }, { put, call }) {
      yield console.log("run");
    }
  }
  // subscription: {
  //   hello (dispatch, history) {
  //     console.log("sub订阅监听");
  //     history.listener((pathname) => {
  //       if (pathname === '/user') {
  //         dispatch({
  //           type: 'mocktest'
  //         })
  //       }
  //     })
  //   }
  // }
}
