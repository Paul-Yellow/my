import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/artificialCorrection/list',
    method: 'get',
    params
  })
}
