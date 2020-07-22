// import axios from "../../utils/request/index"
// 默认创建的账号
const userList = [{
  name: "admin",
  pass: "vvmily",
  typeCode: "ADMIN",
  typeName: "管理员",
  userId: "001",
  token: "admin"
},
{
  name: "reader",
  pass: "vvmily",
  typeCode: "READER",
  typeName: "普通读者",
  userId: "002",
  token: "reader"
}, {
  name: "123",
  pass: "123",
  typeCode: "123",
  typeName: "123",
  userId: "123",
  token: "123"
}]
// token验证
export function getToken(name, pass) {
  let item = userList.find(item => item.name === name && item.pass === pass) || {}
  return {
    code: item.token ? 200 : 500,
    message: item.token ? "验证成功" : '账号或者密码不正确',
    result: item.token ? {
      token: item.token
    } : {}
  }
}
// 请求用户信息
export function getUserInfo(token, data) {
  let item = userList.find(item => item.token === token)
  return {
    code: 200,
    message: "验证成功",
    result: item
  }
}

export function logout(data) {
  return {
    code: 200,
    message: "退出成功",
    result: data
  }
}