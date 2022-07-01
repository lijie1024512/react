/*
 * @Description: 
 * @Author: 李思甜
 * @Date: 2022-07-01 13:43:22
 * @LastEditTime: 2022-07-01 13:46:03
 * @LastEditors: 李思甜
 */
module.exports = {
  "GET /api/mock": (req, res) => {
    console.log(req, res);
    res.send({
      msg: "登录成功"
    })
  }
}