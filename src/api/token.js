import request from "./request"

export const token_add = (params) => {
  return request({
    url: '/login/add_token',
    method: "POST",
    data: {
      username: params.username
    }
  })
}

export const get_token = (params) => {
  return request({
    url: '/login/get_token',
    method: "GET",
    params
  })
}