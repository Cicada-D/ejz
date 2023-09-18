import request from "./request"

export const address_add = (params) => {
  return request({
    url: '/address/add',
    method: "POST",
    data:{
      username:params.username,
      name:params.name,
      tel:params.tel,
      address:params.address,
      tag:params.tag
    }
  })
}

export const get_address = (params) => {
  return request({
    url: '/address/getAdress',
    method: "GET",
    params
  })
}

