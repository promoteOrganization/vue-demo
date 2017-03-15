import { manufactionApi } from './api'
import axios from 'axios'

export default {
  getManufaction (level, status, timeType, startTime, endTime, limit, offset) {
    let url = manufactionApi.manufactionUrl() + '?level=' + level + '&status=' + status + '&timeType=' + timeType + '&startTime=' + startTime + '&endTime=' + endTime + '&limit=' + limit + '&offset=' + offset
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    })
  },
  addManufaction () {
    return axios({
      method: 'post',
      url: manufactionApi.addManufactionUrl(),
      withCredentials: true
    })
  },
  updateManufaction (id) {
    let url = manufactionApi.updateManufactionUrl() + '?id=' + id
    return axios({
      method: 'put',
      url: url,
      withCredentials: true
    })
  },
  deleteManufaction (id) {
    let url = manufactionApi.deleteManufactionUrl() + '?id=' + id
    return axios({
      method: 'delete',
      url: url,
      withCredentials: true
    })
  },
  getSingleManufaction (id) {
    let url = manufactionApi.getSingleManufactionUrl() + '?id=' + id
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    })
  },
  handleManufactionStart (id) {
    let url = manufactionApi.handleManufactionStartUrl() + '?id=' + id
    return axios({
      method: 'put',
      url: url,
      withCredentials: true
    })
  },
  handleManufactionConfirm (id) {
    let url = manufactionApi.handleManufactionConfirmUrl() + '?id=' + id
    return axios({
      method: 'put',
      url: url,
      withCredentials: true
    })
  }
}
