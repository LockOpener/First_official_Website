import baseUrl from './config.js'
import utils from "./util.js"

export default (options) =>{
	
	return new Promise((resolve,reject)=>{
		let header = {
				// "token": "KSID4K3248NJHQAWYGWE112345HGBHAS", //测试token与后端约定的固定值，否则不可访问
				"Content-Type": "application/json; charset=UTF-8"
			}
		if(uni.getStorageSync('token')){
			header.token = uni.getStorageSync('token')
		}
		header.e = utils.encrypt()
		header.x = utils.encrypt2()
		header.uid = new Date().getTime();
		let lang = uni.getStorageSync('lang')? uni.getStorageSync('lang'): 'en'
		options.data = {...options.data, lang: lang}
		uni.request({
			url: baseUrl + options.url,//接口地址：前缀+方法中传入的地址
			method: options.method || 'GET',//请求方法：传入的方法或者默认是“GET”
			data: options.data || {},//传递参数：传入的参数或者默认传递空集合
			header: header,
			success:(res)=> {
				if(res.data.code != 0){
					if(res.data.code == 401){
						uni.removeStorageSync('token')
						return uni.reLaunch({
							url: "/pages/login/index"
						})
					}
					reject(res)
					// return uni.showToast({
					// 	title:'获取数据失败',
					// 	icon:'none'
					// })
				}
				
				// 如果不满足上述判断就输出数据
				resolve(res.data)
			},
			
			// 这里的接口请求，如果出现问题就输出接口请求失败
			fail: (err) => {
				reject(err)
			}
		})
	})
}
