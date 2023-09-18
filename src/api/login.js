import request from "./request"

export const Login = (params) => {
  return request({
    url: '/login',
    method: "POST",
    data:{
      username:params.username,
      password:params.password,
      token: '0'
    }
  })
}

