var fs = require('fs');
let client = require('@/common/js/AipOcrClient.js');

// var image = fs.readFileSync("../../assets/wechat.jpg").toString("base64");

// 如果有可选参数
var options = {};
options["language_type"] = "CHN_ENG";
options["detect_direction"] = "true";
options["detect_language"] = "true";
options["probability"] = "true";
/**
 * 
 * 调用通用文字识别, 图片参数为本地图片
 * @param {*string} image  图片的base64编码
 */
function generalCharBasic(image, options = options) {
	console.log(image,options);
	client.generalBasic(image, options).then(function (result) {
		console.log("AAA",JSON.stringify(result));
	}).catch(function (err) {
		// 如果发生网络错误
		console.log(err);
	});
}
// var url = "https://pics1.baidu.com/feed/3812b31bb051f819d8784cf9f73b4c" +
// 	"e82f73e7bc.jpeg?token=afb080f818c2d903680b57f50c859ddc&s=F8B877D9D6F7B3CC4AFD0A1F030050D6";
function generalCharBasicUrl(url, options = options) {
	client.generalBasicUrl(url, options).then(function (result) {
		console.log(JSON.stringify(result));
	}).catch(function (err) {
		// 如果发生网络错误
		console.log(err);
	});
}
module.exports = {
	generalCharBasic,
	generalCharBasicUrl
}




