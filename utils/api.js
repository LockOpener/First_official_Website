import http from './request.js'

//测试api
function testApi(params) {
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/test/test",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

//语言页获取推广图标链接
function getSpread(params) {
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/index/getSpread",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function createSecretKey(params) {
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/user/createSecretKey",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function createWallet(params) {
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/user/createWallet",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function keyRecovery(params) {
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/user/keyRecovery",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function handGameList(params){
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/hand_with_game/handGameList",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function handGameDetail(params){
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/hand_with_game/handGameDetail",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function handGameInfoUpdate(){
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/hand_with_game/handGameInfoUpdate",
			method: 'POST',
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function handBuy(params){
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/hand_with_game/handBuy",
			method: 'POST',
			data: params
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function getActiveUsers(){
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/user/getActiveUsers",
			method: 'POST',
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function userBaseInfo(){
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/user/userBaseInfo",
			method: 'POST',
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function airDropList(){
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/air_drop/airDropList",
			method: 'POST',
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function receiveAirDrop(params){
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/air_drop/receiveAirDrop",
			method: 'POST',
			data: params
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function couponList(params){
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/coupon/couponList",
			method: 'POST',
			data: params
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function receiveCoupon(params){
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/coupon/receiveCoupon",
			method: 'POST',
			data: params
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function getArticle(params){
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/index/getArticle",
			method: 'POST',
			data: params
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function verifyPassword(params){
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/user/verifyPassword",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function getVersion(params){
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/index/getVersion",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function updateUserInfo(params){
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/user/updateUserInfo",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function userStatistics(params){
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/user/userStatistics",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function moneyLog(params){
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/wallet/moneyLog",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function withdrawCash(params){
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/wallet/withdrawCash",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function getTeamInfo(params) {
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/team/getTeamInfo",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function taskList(params) {
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/task/taskList",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function taskFulfill(params) {
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/task/taskFulfill",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function getPropsList(params) {
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/props/getPropsList",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function propsInitiate(params) {
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/props/propsInitiate",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function propsCancel(params) {
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/props/propsCancel",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function propsParticipation(params) {
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/props/propsParticipation",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function propsAchieve(params) {
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/props/propsAchieve",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}


function bindUser(params) {
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/user/bindUser",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function userThirdParty(params) {
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/user/userThirdParty",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function mapUsers(params) {
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/user/mapUsers",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

function mapUserInfo(params) {
	return new Promise((resolve, reject)=>{
		http({
			url: "/api/user/mapUserInfo",
			method: 'POST',
			data: params,
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

//声明函数，可以被引用
export {
	testApi,
	getSpread,
	createSecretKey,
	createWallet,
	keyRecovery,
	handGameList,
	handGameDetail,
	handGameInfoUpdate,
	handBuy,
	getActiveUsers,
	userBaseInfo,
	airDropList,
	receiveAirDrop,
	couponList,
	receiveCoupon,
	getArticle,
	verifyPassword,
	getVersion,
	updateUserInfo,
	userStatistics,
	moneyLog,
	withdrawCash,
	getTeamInfo,
	taskList,
	taskFulfill,
	getPropsList,
	propsInitiate,
	propsCancel,
	propsParticipation,
	propsAchieve,
	bindUser,
	userThirdParty,
	mapUsers,
	mapUserInfo
}