import StoreService from './storeService'
const callbacks: any = {}

import {Error, Options, Responce} from './interface'

export default class HttpInspectors {
  public static setConfig(options: Options) {
    const token = StoreService.getToken()
    const headers: any = {
      'X-Request-Token': token
    }
    if (options && options.header) {
      Object.keys(options.header).forEach((i: string) => {
        headers[i] = options.header[i]
      })
    }
    return headers
  }

  public static handleResponse(response: Responce, resolve: any, reject: any) {
    if (response.data.result || response.data.status === 200 || response.data.statusCode === 200) {
      return resolve(response.data)
    }
    if (response.data.statusCode === 4002 || response.data.statusCode === 4001) {
      if (callbacks.needLogin) {
        callbacks.needLogin(response.data)
      }
      return reject(response.data)
    }
    if (response.data) {
      return resolve(response.data)
    }
  }

  public static handleError(error: any, reject: any) {
    let errorInfo: Error = {
      errorStatus: '',
      errorMessage: ''
    }
    if (error.response) {
      switch (error.response.status) {
        case 404:
          errorInfo = {
            errorStatus: 404,
            errorMessage: '找不到请求的地址'
          }
          break
        case 401:
          errorInfo = {
            errorStatus: 401,
            errorMessage: '当前用户没有权限'
          }
          break
        case 403:
          errorInfo = {
            errorStatus: 403,
            errorMessage: '访问被拒绝'
          }
          break
        case 500:
          errorInfo = {
            errorStatus: 500,
            errorMessage: '服务器出现问题'
          }
          break
        case 400:
          errorInfo = {
            errorStatus: 400,
            errorMessage: '请求参数错误'
          }
          break
        case 405:
          errorInfo = {
            errorStatus: 405,
            errorMessage: '请求方法错误'
          }
          break
        default:
          errorInfo = {
            errorStatus: -2,
            errorMessage: '未知错误'
          }
          break
      }
    } else {
      errorInfo = {
        errorStatus: -3,
        errorMessage: '网络错误'
      }
    }

    if (callbacks.httpError) {
      callbacks.httpError(errorInfo)
    }

    reject(errorInfo)   // 返回处理后的错误信息
  }

   /*@param key  'httpError' 'needLogin'
   * @param value
   */
  public static setCallback(key: string, value: any) {
    callbacks[key] = value
  }
}
