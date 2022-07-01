/*
 * @Description:
 * @Author: 李思甜
 * @Date: 2022-06-30 10:34:56
 * @LastEditTime: 2022-07-01 19:33:29
 * @LastEditors: 李思甜
 */
import React from "react";
import { connect } from "dva";
class IndexPage extends React.Component {

  handleName = () => {
    this.props.dispatch({
      type: 'index/setName',
      data: {
        name: '胖虎'
      }
    })
  }
  handleAsync = () => {
    console.log("async", this);
    setTimeout(() => {
      this.props.dispatch({
        type: 'index/setNameAsync',

      })
    }, 100)
  }
  handlenodeAsync = () => {
    setTimeout(() => {
      this.props.dispatch({
        type: 'index/setcNodeAsync',
      })
    }, 1000)
  }
  settur = () => {
    setTimeout(() => {
      this.props.dispatch({
        type: 'index/setTure',

      })
    }, 100)
  }
  render () {
    return (
      <>
        <div>我是首页</div>
        <div>{this.props.message}</div>
        <div>{this.props.name}</div>
        <button onClick={this.handleName}>重命名</button>
        <button onClick={this.handleAsync}>异步任务</button>
        <button onClick={this.handlenodeAsync}>cnode</button>
        <button onClick={this.settur}>setture</button>
      </>
    );
  }

}
// 映射当前组件 便于取值
const mapStateToProps = state => {
  console.log("state", state);
  return {
    message: "当前message",
    name: state.index.name,
    node: state.index.nodedata
  }
}

export default connect(mapStateToProps)(IndexPage);
