import ajax from '../config/ajax'
import {isNull,getStore} from '../config/tools'
/**
 查询可预约时间和工位   接口 1
 */


export const selectlist = (stationNum,brandId,orderDate) => ajax('station/info/'+stationNum+ '/' +brandId+ '/'+orderDate,{
  orderDate
})

// Request URL: http://10.216.114.67:9162/v2/api-docs/v1/maintenance/order/station/info/2300068/3/2019-04-27?orderDate=2019-04-27
//              http://10.216.114.67:9162/v1/maintenance/order/station/info/2300068/3/2018-07-11


/**
 预约校验接口      接口 2
 */
export const verify = (vin,stationNum,brandId,orderStartDate,orderEndDate) => ajax('station/usability/'+ vin +'/'+ stationNum +'/'+brandId,{
  orderStartDate,
  orderEndDate
})


/**
   提交预约    接口 3  v1/maintenance/order/send
 */

export const submit = (parmas) => ajax('send',parmas,'POST')


/**
   查询预约历史   接口 4
 */

export const orderhistory = (parmas) => ajax('history',parmas,'POST')


/**
   查询预约历史详情
 */
export const detail = (orderNum,idpUserId) => ajax('info/'+ orderNum,{
  idpUserId
})


/**
   提交评价  idpUserId
 */
export const ratingSubmit = (orderNum,serviceAttitude,repairLevel,partsQuality,orderComments,images,stationName,preType,idpUserId) => ajax('comments',{
	orderNum:orderNum,
	serviceAttitude:serviceAttitude,
	repairLevel:repairLevel,
	partsQuality:partsQuality,
	orderComments:orderComments,
	images:images,
  stationName: stationName,
  preType: preType,
  idpUserId
},'POST')

/**
   评价查询   comments/{orderNum}
 */
export const ratingInfo = (orderNum,idpUserId) => ajax('comments/'+ orderNum,{
  idpUserId
})


/**
 预约取消/修改
 */
export const update = (parmas) => ajax('update',parmas,'POST')
