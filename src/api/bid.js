import request from "./request"

export const bid_add = (params) => {
  return request({
    url: '/bid/add',
    method: "POST",
    data:{
      username:params.username,
      service:params.service,
      address:params.address,
      date:params.date,
      comment:params.comment,
      tel:params.tel,
      money:params.money
    }
  })
}
