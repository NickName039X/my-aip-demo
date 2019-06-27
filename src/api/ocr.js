import request from './utils/request';
import qs from 'qs';

// 通用文字识别
export const getDetailApi = (image) => {
  let token = localStorage.getItem('accessToken')
  let i = image.split(',')

  return request({
    url: '/rest/2.0/ocr/v1/general_basic?access_token=' + token,
    method: 'post',
    data: qs.stringify({
      image: i[1]
    })
  });
};

// 通用文字识别（高精度版）
export const accurateBasic = (param) => {
  let token = localStorage.getItem('accessToken')
  let i = param.data.image.split(',')

  // return request({
  //   url: '/rest/2.0/ocr/v1/accurate_basic?access_token=' + token,
  //   // url: '/rest/2.0/ocr/v1/accurate_basic',
  //   method: 'post',
  //   data: qs.stringify({
  //     image: i[1]
  //   })
  // });

  request({
    url: '/rest/2.0/ocr/v1/accurate_basic?access_token=' + token,
    method: 'post',
    data: qs.stringify({
           image: i[1]
    }),
    call: param.call,
    fal: param.fal
  })
};
