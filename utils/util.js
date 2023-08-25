import JSEncrypt from 'jsencrypt'
// import Encrypt from 'encryptlong'

/**
 * 文字中间省略显示
 */
function textEllipses(str, position = "center") {

	let length = str.length
	if (length > 15) {
		let firstStr = str.slice(0, 6)
		let lastStr = str.slice(-6)
		return firstStr + '......' + lastStr
	} else {
		return str
	}

}

/**
 * 复制文字
 */
function copy(text, successText, failText) {
	uni.setClipboardData({
		data: text,
		showToast: false,
		success() {
			uni.showToast({
				title: successText,
				icon: 'none',
				duration: 1500
			})
		},
		fail() {
			uni.showToast({
				title: failText,
				icon: 'none',
				duration: 1500
			})
		}
	});
}

/**
 * 时间格式化
 */
function formatData(num, type = true) {
	//  //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	num = parseInt(num) * 1000;
	let date = new Date(num);

	let y = date.getFullYear();
	let MM = date.getMonth() + 1;
	MM = MM < 10 ? ('0' + MM) : MM; //月补0
	let d = date.getDate();
	d = d < 10 ? ('0' + d) : d; //天补0
	let h = date.getHours();
	h = h < 10 ? ('0' + h) : h; //小时补0
	let m = date.getMinutes();
	m = m < 10 ? ('0' + m) : m; //分钟补0
	let s = date.getSeconds();
	s = s < 10 ? ('0' + s) : s; //秒补0
	// return y + '-' + MM + '-' + d + ' ' + h + ':' + m+ ':' + s;

	if (type == 'Y-m-d') {
		return y + '/' + MM + '/' + d
	}

	if (type == 'H:i:s') {
		return h + ':' + m + ':' + s
	}

	if (type == 'H:i') {
		return h + ':' + m
	}

	return y + '/' + MM + '/' + d + ' ' + h + ':' + m + ':' + s;


}

function dateCountDown(num) {
	const hours = Math.floor(num / 3600);
	const minutes = Math.floor((num % 3600) / 60);
	const remainingSeconds = num % 60;

	const lefth = String(hours).padStart(2, '0');
	const leftm = String(minutes).padStart(2, '0');
	const lefts = String(remainingSeconds).padStart(2, '0');
	return {
		hour: lefth,
		minute: leftm,
		second: lefts
	}
}

function scanCode() {
	return new Promise((resolve, reject) => {
		uni.scanCode({
			success: function(res) {
				resolve(res.result)
				// console.log('条码类型：' + res.scanType);
				// console.log('条码内容：' + res.result);
			},
			fail() {
				reject('')
			}
		});
	})
}

function openLink(url) {
	if (!url || url == '') {
		return
	}
	// #ifdef H5
	window.open(url,'_blank')
	// #endif

	// #ifdef APP || APP-NVUE || APP-PLUS || APP-PLUS-NVUE
	plus.runtime.openWeb(url)
	// #endif
}

function back() {
	// #ifdef APP || APP-NVUE || APP-PLUS || APP-PLUS-NVUE
	plus.nativeUI.toast = (function(str) {
		if (str == "再按一次退出应用") {
			str = "Press again to exit"
			uni.showToast({
				title: str,
				icon: 'none',
			})
		}
	})
	// #endif
}

function encrypt(data) {
	let PUBLIC_KEY =
		"-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwM2JQQ2bBd6e/mf60lob\nDKtTIBwo4BBFYMmJh3N8yF7Wnz/B13ZXP93reZtYRY868n1LVd0RNqO4ujTPAJDB\nQei5b1K29FeczcQedsuOpGf733AwEXLCLRTQbqyjTb1+jWlC8GQ658ZpD/9nP6tW\nfS/Vx7gcInnG5dfizF6q9zNcenn+4XVeopLlzizt8pt4UFFeuPReUBDx7wj8lAgk\nx7ryATqMcPBSqrd2uf3njD/YIxE3+xihRLjfHPqlpk4QLl7+MqYhWwK7e/AZnCHq\nK4Af5NuyVD77orIQHiNRXPEfpMEUFuZdkOva2b4aacHQVGoARkIMzRU0fnk2kfzX\nzwIDAQAB\n-----END PUBLIC KEY-----"
	let encryptor = new JSEncrypt()
	encryptor.setPublicKey(PUBLIC_KEY)
	let result = encryptor.encrypt("972c0e02b254de66cbce549a2b12ff4c")
	// console.log(123, result)
	// console.log(123, encodeURIComponent(result))
	return encodeURIComponent(result)
}

function encrypt2(data) {
	let PUBLIC_KEY =
		"-----BEGIN PUBLIC KEY-----\nMFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJUO4zBDQcGPmYDC+aBXwYrGvEl2VyYx\nmgj3Rcmu0IjXcXudg+RlBSdhvifMc2tKmmJ0RggN2al3NKurf6CTRbcCAwEAAQ==\n-----END PUBLIC KEY-----"
	let encryptor = new JSEncrypt()
	encryptor.setPublicKey(PUBLIC_KEY)
	let result = encryptor.encrypt("虚假加密")
	// console.log(123, result)
	// console.log(123, encodeURIComponent(result))
	return encodeURIComponent(result)
}

//声明函数，可以被引用
export default {
	textEllipses,
	copy,
	formatData,
	scanCode,
	openLink,
	back,
	encrypt,
	encrypt2,
	dateCountDown
}