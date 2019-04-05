import axios from 'axios'
import HttpInspectors from './httpInspectors'
import {Message} from 'gs-ui'

import {Error, Options} from './interface'

HttpInspectors.setCallback('httpError', (error: Error) => {
  Message.error({type: 'error', content: error.errorMessage})
})

const http = (
              method: string | undefined,
              url: string,
              queryParams: object | undefined,
              data: object | undefined,
              options: Options
            ) => {
  const headers = HttpInspectors.setConfig(options)
  const promise = axios({
    headers,
    method,
    url,
    params: queryParams,
    data
  })
  return new Promise((resolve, reject) => {
    return promise.then((response) => {
      HttpInspectors.handleResponse(response, resolve, reject)
    }, (error) => {
      HttpInspectors.handleError(error, reject)
    })
  })
}

const httpService = {
  get(options: Options) {
    return http('get', options.url, options.queryParams, options.data, options)
  },
  post(options: Options) {
    return http('post', options.url, options.queryParams, options.data, options)
  },
  put(options: Options) {
    return http('put', options.url, options.queryParams, options.data, options)
  },
  create(options: Options) {
    return http(options.method, options.url, options.queryParams, options.data, options)
  }
}

export default httpService
