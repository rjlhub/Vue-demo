import axios from "axios";
import { promises } from "fs";
import { resolve } from "path";

console.log(process.env.NODE_ENV,'process环境的切换')
// 环境
if (process.env.NODE_ENV == 'development') {
  // imgBaseUrl = '/img/'
}else if(process.env.NODE_ENV == 'production') {
  // baseURL = '//elm.cangdu.org';
  // imgBaseUrl = '//elm.cangdu.org/img'
}
const instance = axios.create({
  baseURL:'http://api.javaswing.cn',
  timeout: 1500
});


// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded' //设置header覆盖content-type
    }
    // console.log('我是拦截器:'config)
    return config;
  },error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(function(response){
  // 对响应数据做点什么
  // console.log('我是相应器'response)

  // if(response.code === 200){
  //   return Promise.resolve(response)
  // }else{
  //   return Promise.reject(response)
  // }
  return response;
},function(error) {
  return Promise.reject(error)
})

/** 
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
*/

export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    instance.get(url,{
      params: params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}

/** 
 * 封装post方法
 * @param url
 * @param data
 * @returns {Promise}
*/

export function post(url,data={}){
  return new Promise((resolve,reject) => {
    instance.post(url,data)
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}

export default instance
