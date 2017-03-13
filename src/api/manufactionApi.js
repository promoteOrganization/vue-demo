import { manufactionApi } from './api'
import axios from 'axios'

export default {
  getManufaction () {
    return axios({
      method: 'get',
      url: manufactionApi.manufactionUrl(),
      withCredentials: true
    }
    )
  }
}
