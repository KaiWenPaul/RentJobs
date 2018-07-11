import axios from 'axios'
import qs from 'qs'
axios.defaults.baseURL = process.env.API_ROOT
axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
   console.log(res.msg)
  }
  if (res.data && (!res.data.success)) {
  }
  return res
}

export default {
  post (url, data) {
    return axios({
      method: 'post',
      baseURL: process.env.NODE_ENV === 'production'?'http://zf.sudiny.ltd/zf/':'/api',
      // baseURL: 'http://192.168.2.200:8080/sw/',
      url,
      data: qs.stringify(data),
      timeout: 10000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  get (url, params) {
    return axios({
      method: 'get',
      baseURL:process.env.NODE_ENV === 'production'?'http://zf.sudiny.ltd/zf/':'/api',
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        // 'X-Requested-With': 'XMLHttpRequest',
         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },

  // url编码函数
  urlencode(clearString) 
{  
    var output = '';
    var x = 0;
     
    clearString = utf16to8(clearString.toString());
    var regex = /(^[a-zA-Z0-9-_.]*)/;
 
    while (x < clearString.length) 
    {
        var match = regex.exec(clearString.substr(x));
        if (match != null && match.length > 1 && match[1] != '') 
        {
            output += match[1];
            x += match[1].length;
        } 
        else
        {
            if (clearString[x] == ' ')
                output += '+';
            else
            {
                var charCode = clearString.charCodeAt(x);
                var hexVal = charCode.toString(16);
                output += '%' + ( hexVal.length < 2 ? '0' : '' ) + hexVal.toUpperCase();
            }
            x++;
        }
    }
    function utf16to8(str) 
    {
        var out, i, len, c;
 
        out = "";
        len = str.length;
        for(i = 0; i < len; i++) 
        {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) 
            {
                out += str.charAt(i);
            } 
            else if (c > 0x07FF) 
            {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            } 
            else
            {
                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
        }
        return out;
    }
    return output;
}


}