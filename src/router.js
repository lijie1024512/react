/*
 * @Description: 
 * @Author: 李思甜
 * @Date: 2022-06-30 10:34:56
 * @LastEditTime: 2022-07-01 16:44:31
 * @LastEditors: 李思甜
 */
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
// import Products from './routes/Products';
function RouterConfig ({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
