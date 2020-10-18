import axios from 'axios'

const isDev = process.env.NODE_ENV === 'development';
const baseUrl = isDev ? '':'/instr-analysis-service'
const headers = { //头部参数
    auth: '07b509406799d61f94f482f3c95ea0f8',
    'Content-Type': "application/json;charset=utf-8"
}
// 返回一个Promise(发送post请求)
export function post (url, params) {
    return new Promise((resolve, reject) => {
        axios.post(baseUrl+url, params, {headers})
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
            .catch((error) => {
               reject(error)
            })
    })
}
/// /返回一个Promise(发送get请求)
// 因为new Promise声明的是异步函数，而且是为了ajax请求嵌套严重，而更加规范的一种书写方式;这里将Promise作为返回值给我们的公用函数
export function get (url, params) {
    return new Promise((resolve, reject) => {
        axios.get(baseUrl+url, { params: params, headers })
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}