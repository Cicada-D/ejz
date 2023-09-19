import request from "./request"

export const bid_add = (params) => {
  return request({
    url: '/bid/add',
    method: "POST",
    data: {
      username: params.username,
      service: params.service,
      address: params.address,
      date: params.date,
      comment: params.comment,
      tel: params.tel,
      money: params.money
    }
  })
}

export const get_all_bid = (params) => {
  return request({
    url: '/bid/getAll',
    method: "GET",
    params
  })
}

export const get_ok_bid = (params) => {
  return request({
    url: '/bid/get_ok',
    method: "GET",
    params
  })
}
export const get_cancell_bid = (params) => {
  return request({
    url: '/bid/get_cancell',
    method: "GET",
    params
  })
}
export const get_wait_bid = (params) => {
  return request({
    url: '/bid/get_wait',
    method: "GET",
    params
  })
}