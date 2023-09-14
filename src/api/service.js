import request from "./request"

export const get_Service_List = () => {
  return request({
    url: '/service/getItem',
    method: "GET",
  })
}

