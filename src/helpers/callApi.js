// import { getConfig } from '../env';
import axios from 'axios'

export const getHeader = () => {
  let token = window.localStorage.getItem('token')
  if (token === null) {
    return {}
  }
  let Authorization = 'Bearer ' + token
  return Authorization
}

export const callApi = (data, options) => {
  const { endpoint, method } = options
  const config = {
    // withCredentials: true,
    // credentials: 'include',
    method: method || 'POST',
    headers: {
      // 'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: getHeader()
    },
    data:
      method === 'POST' || method === 'PUT'
        ? JSON.stringify({
            ...data
          })
        : undefined,
    // url: `${getConfig('API_SERVER')}/${endpoint}`
    url: `http://localhost:8000/api/${endpoint}`
  }
  /*eslint-disable-next-line*/
  return axios({ ...config })
    .then(response => {
      return response.data
    })
    .catch(err => {
      return { errorMessage: err }
    })
}
