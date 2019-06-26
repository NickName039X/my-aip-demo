import request from './utils/request';

// 初始化-获取数据接口
const getDetailApi = (data) => {
  return request({
    url: 'rest/2.0/ocr/v1/general_basic',
    method: 'get',
    params: {
      registerApp: data.registerApp,      //注册app
      channelCode: data.channelCode,      //标识
      sendCode: data.sendCode,            //发送标识
      messageType: data.messageType       //1为注册页， 2为下载页
    }
  });
};

export { 

};
