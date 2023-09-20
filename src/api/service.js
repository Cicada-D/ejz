import request from "./request"

export const get_Service_List = () => {
  return request({
    url: '/service/getItem',
    method: "GET",
    params
  })
}

export const get_first_Service_List = () => {
  return request({
    url: '/service/get_first_Item',
    method: "GET",
    params
  })
}


export const get_second_List = () => {
  return request({
    url: '/service/get_second_Item',
    method: "GET",
    params
  })
}
