var fs = require('fs');
let client = require('./AipOcrClient');
var image = fs.readFileSync("../../assets/wechat.jpg").toString("base64");

// 调用通用文字识别, 图片参数为本地图片
client.generalBasic(image).then(function(result) {
	console.log(JSON.stringify(result));
}).catch(function(err) {
	// 如果发生网络错误
	console.log(err);
});

// 如果有可选参数
var options = {};
options["language_type"] = "CHN_ENG";
options["detect_direction"] = "true";
options["detect_language"] = "true";
options["probability"] = "true";

// 带参数调用通用文字识别, 图片参数为本地图片
client.generalBasic(image, options).then(function(result) {
	console.log(JSON.stringify(result));
}).catch(function(err) {
	// 如果发生网络错误
	console.log(err);
});

var url = "https://pics1.baidu.com/feed/3812b31bb051f819d8784cf9f73b4c" +
	"e82f73e7bc.jpeg?token=afb080f818c2d903680b57f50c859ddc&s=F8B877D9D6F7B3CC4AFD0A1F030050D6";

// 调用通用文字识别, 图片参数为远程url图片
client.generalBasicUrl(url).then(function(result) {
	console.log(JSON.stringify(result));
}).catch(function(err) {
	// 如果发生网络错误
	console.log(err);
});

// 如果有可选参数
options = {};
options["language_type"] = "CHN_ENG";
options["detect_direction"] = "true";
options["detect_language"] = "true";
options["probability"] = "true";

// 带参数调用通用文字识别, 图片参数为远程url图片
client.generalBasicUrl(url, options).then(function(result) {
	console.log(JSON.stringify(result));
}).catch(function(err) {
	// 如果发生网络错误
	console.log(err);
});

