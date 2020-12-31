/*** api接口统一管理 */
import { get, post, put, axiosDelete } from './axios';

/**
 *
 * @param {string} params
 * 我们定义了一个index方法
 * 这个方法有一个参数params
 * params是我们请求接口时携带的参数对象
 * 而后调用了我们封装的post方法
 * post方法的第一个参数是我们的接口地址
 * 第二个参数是topics的params参数
 * 即请求接口时携带的参数对象
 * 最后通过export导出topics。
 */

/*
A、登录 + 侧边栏
* */

export const ApiLayoutNav = params => get('admin/Web/indexMenu', params); /*获取侧边栏 nav*/
export const ApiloginIn = params => post('admin/Web/login', params); /*登录*/
export const ApiloginOut = params => post('admin/Web/login_out', params); /*退出*/
export const ApiChangePass = params => post('admin/Web/update_password', params); /*修改密码*/
export const ApiTopSearch = params => post('admin/Member/getMemberInfo', params); /*HeaderTop 头部搜索*/


/* ==-- B、首页 --== */

/* ==-- B22、前台 --== */
/*1、登记*/
export const checkFaceApi    = params => post('admin/Web/match', params);         /*收支趋势*/


/*店铺授权*/
export const addStoreAuth    = params => post('/storeAuth/addStoreAuth', params);     /* 新增店铺授权 */
export const updateStoreAuth    = params => post('/storeAuth/updateStoreAuth', params);     /* 修改店铺授权 */
export const selectStoreAuth    = params => get('/storeAuth/selectStoreAuth', params);     /* 查询店铺授权列表 */
export const delStoreAuth    = params => post('/storeAuth/delStoreAuth', params);      /* 根据ID删除店铺授权 */
export const delStoreAuthList    = params => post('/storeAuth/delStoreAuthList', params);     /* 批量删除店铺授权 */



/*
staffAdd({
    userimage:userimage,
    information:2,
    zmtek_ver:2,
}).then(res => {
   console.log(res)
    if(res.status ==1){

    }
}).catch(res => {
    console.log(res);
});*/
