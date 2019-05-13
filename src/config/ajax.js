import { isNull } from './tools';
import { baseUrl } from './env';
export default (url = '', data = {}, type = 'GET', async = true) => {
    let mweb_token = !isNull(sessionStorage.getItem('onstar_mweb_token')) ? sessionStorage.getItem('onstar_mweb_token') : '';
    return {
        then: function(resolve, reject) {
            requestAnimationFrame(function() {
                type = type.toUpperCase();
                let requestObj;
                if (window.XMLHttpRequest) {
                    requestObj = new XMLHttpRequest();
                } else {
                    requestObj = new ActiveXObject();
                }
                if (type == 'GET') {

                    // 数据拼接字符串
                    let dataStr = '';
                    Object.keys(data).forEach(key => {
                        dataStr += key + '=' + data[key] + '&';
                    });
                    dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
                    if (!isNull(dataStr)) {
                        url = url.indexOf('?') > -1 ? url + '&' + dataStr : url + '?' + dataStr;
                    }

                    url = baseUrl + '' + url;
                    requestObj.open(type, url, async);
                    requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                    requestObj.setRequestHeader('Authorization', mweb_token); // 自定义请求头部信息
                    requestObj.send();
                } else if (type == 'POST' || type == 'PUT') {
                    url = baseUrl + '' + url;
                    requestObj.open(type, url, async);
                    requestObj.setRequestHeader('Content-type', 'application/json');
                    requestObj.setRequestHeader('Authorization', mweb_token); // 自定义请求头部信息
                    requestObj.send(JSON.stringify(data));
                } else {
                    reject('error type');
                }
                requestObj.onreadystatechange = () => {
                    if (requestObj.readyState == 4) {
                        if (requestObj.status == 200) {
                            let obj = requestObj.response;
                            if (typeof obj !== 'object') {
                                obj = JSON.parse(obj);
                            }
                            resolve(obj);
                        } else {
                            if (reject) reject(requestObj);
                        }
                    }
                }
            })
        }
    }
}
