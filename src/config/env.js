/**
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 */

let baseUrl = '';
if (location.href.indexOf('localhost') > -1 || location.href.indexOf('idt7') > -1) {
	baseUrl = location.protocol + '//idt7.onstar.com.cn/mweb/mweb-main-rest/api/v1/dealer/order/';
} else {
	baseUrl = location.protocol + '//' + location.host + '/mweb/mweb-main-rest/api/v1/dealer/order/';
}

export {
	baseUrl
}
