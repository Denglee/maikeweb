const Layout = () => import(/* webpackChunkName: "Layout" */ '@/components/Layout/Layout')

const staticRoute = [
    {
        path: '/',
        redirect: '/StoreManage/StoreAuthorize',
    },

    {
        path: '/Index',
        component: Layout,
        children: [
            {
                path: '',
                name:'index',
                component: () => import(/* webpackChunkName: "Index" */ '../views/Index/index'),
                meta: {title: '首页'}
            },
        ]
    },
    {
        path: '/',
        component: Layout,
        children: [
            // component: () => import('@/views/example/list'),
            /*基础信息*/
            {
                path: 'BasicInfo/CompanyInfo',  /*企业信息*/
                name: 'CompanyInfo',
                component: () => import(/* webpackChunkName: "CompanyInfo" */ '../views/BasicInfo/CompanyInfo'),
                meta: {title: '企业信息',keepAlive: true},
            },
            {
                path: 'BasicInfo/OrganManage',  /*组织机构管理*/
                name: 'OrganManage',
                component: () => import(/* webpackChunkName: "OrganManage" */ '../views/BasicInfo/OrganManage'),
                meta: {title: '组织机构管理',keepAlive: true},
            },
            {
                path: 'BasicInfo/PeopleManage',  /*人员管理*/
                name: 'PeopleManage',
                component: () => import('../views/BasicInfo/PeopleManage'),
                meta: {title: '组织机构管理',keepAlive: true},
            },
            {
                path: 'BasicInfo/ApplyAuthorize',  /*应用授权*/
                name: 'ApplyAuthorize',
                component: () => import('../views/BasicInfo/ApplyAuthorize'),
                meta: {title: '组织机构管理',keepAlive: true},
            },


            /* PowerManage 角色权限管理*/
            {
                path: 'PowerManage/PowerManage',  /*业务系统角色*/
                name: 'PowerManage',
                component: () => import(/* webpackChunkName: "PowerManage" */ '../views/PowerManage/PowerManage'),
                meta: {title: '业务系统角色',keepAlive: true},
            },


            /*StoreManage 店铺管理*/
            {
                path: 'StoreManage/StoreAuthorize',  /* 店铺授权 */
                name: 'StoreAuthorize',
                component: () => import(/* webpackChunkName: "StoreAuthorize" */ '../views/StoreManage/StoreAuthorize'),
                meta: {title: '店铺授权',keepAlive: true},
            },
            {
                path: 'StoreManage/AdjustEntity',  /* 店铺核算主体 */
                name: 'AdjustEntity',

                component: () => import(/* webpackChunkName: "AdjustEntity" */ '../views/StoreManage/AdjustEntity'),
                meta: {title: '核算主体',keepAlive: true},
            },
            {
                path: 'StoreManage/AdjustStore',  /* 财务核算店铺 */
                name: 'AdjustStore',
                component: () => import(/* webpackChunkName: "AdjustEntity" */ '../views/StoreManage/AdjustStore'),
                meta: {title: '财务核算店铺',keepAlive: true},
            },

            {
                path: 'StoreManage/StoreEmail',  /* 店铺邮箱 */
                name: 'StoreEmail',
                component: () => import(/* webpackChunkName: "StoreEmail" */ '../views/StoreManage/StoreEmail'),
                meta: {title: '店铺邮箱',keepAlive: true},
            },


            /*Parameter 参数设置*/
            {
                path: 'Parameter/ApplyManage',  /* 应用管理 */
                name: 'ApplyManage',
                component: () => import(/* webpackChunkName: "ApplyManage" */ '../views/Parameter/ApplyManage'),
                meta: {title: '应用管理',keepAlive: true},
            },
            {
                path: 'Parameter/ExchangeManage',  /* 汇率管理 */
                name: 'ExchangeManage',
                component: () => import(/* webpackChunkName: "ExchangeManage" */ '../views/Parameter/ExchangeManage'),
                meta: {title: '汇率管理',keepAlive: true},
            },
            {
                path: 'Parameter/CountryManage',  /*国家管理*/
                name: 'CountryManage',
                component: () => import(/* webpackChunkName: "CountryManage" */ '../views/Parameter/CountryManage'),
                meta: {title: '国家管理',keepAlive: true},
            },
            {
                path: 'Parameter/RegionManage',  /*区域管理*/
                name: 'RegionManage',
                component: () => import(/* webpackChunkName: "RegionManage" */ '../views/Parameter/RegionManage'),
                meta: {title: '区域管理',keepAlive: true},
            },
            {
                path: 'Parameter/SiteManage',  /*站点管理*/
                name: 'SiteManage',
                component: () => import(/* webpackChunkName: "SiteManage" */ '../views/Parameter/SiteManage'),
                meta: {title: '站点管理',keepAlive: true},
            },
            {
                path: 'Parameter/BusinessConfig',  /*业务配置*/
                name: 'BusinessConfig',
                component: () => import(/* webpackChunkName: "BusinessConfig" */ '../views/Parameter/BusinessConfig'),
                meta: {title: '业务配置',keepAlive: true},
            },


            /*PageManage 页面管理*/
            {
                path: 'PageManage/BusinessSystem',  /* 业务系统页面 */
                name: 'BusinessSystem',
                component: () => import(/* webpackChunkName: "ApplyManage" */ '../views/PageManage/BusinessSystem'),
                meta: {title: '业务系统页面',keepAlive: true},
            },

            /*PageManage 文档管理*/
            {
                path: 'PageManage/File',  /* 文件档案 */
                name: 'File',
                component: () => import(/* webpackChunkName: "File" */ '../views/PageManage/File'),
                meta: {title: '文件档案',keepAlive: true},
            },

            /*LogMessage 日志管理*/
            {
                path: 'LogManage/LogLogin',  /*登录日志*/
                name: 'LogLogin',
                component: () => import(/* webpackChunkName: "LogLogin" */ '../views/LogManage/LogLogin'),
                meta: {title: '登录日志',keepAlive: true},
            },

            /*MessageCenter 消息中心*/
            {
                path: 'MessageCenter/MessageList',  /*消息列表*/
                name: 'MessageList',
                component: () => import(/* webpackChunkName: "MessageList" */ '../views/MessageCenter/MessageList'),
                meta: {title: '消息列表',keepAlive: true},
            },


            /*AccountCenter 账户中心*/
            {
                path: 'AccountCenter/PersonalInfo',  /*个人信息*/
                name: 'PersonalInfo',
                component: () => import(/* webpackChunkName: "PersonalInfo" */ '../views/AccountCenter/PersonalInfo'),
                meta: {title: '个人信息',keepAlive: true},
            },
            {
                path: 'AccountCenter/AccountSetup',  /*账户设置*/
                name: 'AccountSetup',
                component: () => import(/* webpackChunkName: "AccountSetup" */ '../views/AccountCenter/AccountSetup'),
                meta: {title: '账户设置',keepAlive: true},
            },


            /*ProductInfo 产品信息*/
            {
                path: 'ProductInfo/BrandManage',  /*品牌管理*/
                name: 'BrandManage',
                component: () => import(/* webpackChunkName: "BrandManage" */ '../views/ProductInfo/BrandManage'),
                meta: {title: '品牌管理',keepAlive: true},
            },
            {
                path: 'ProductInfo/ClassifiedManage',  /*分类管理*/
                name: 'ClassifiedManage',
                component: () => import(/* webpackChunkName: "ClassifiedManage" */ '../views/ProductInfo/ClassifiedManage'),
                meta: {title: '分类管理',keepAlive: true},
            },


            /*WarehouseManage 仓库管理*/
            {
                path: 'WarehouseManage/FBAInventory', /*FBA库存*/
                name: 'FBAInventory',
                component: () => import(/* webpackChunkName: "FBAInventory" */ '../views/WarehouseManage/FBAInventory'),
                meta: {title: 'FBA库存',keepAlive: true},
            },




            /* Finance 财务*/
            {
                path: 'Finance/SettlementDetails',  /*结算明细*/
                name: 'SettlementDetails',
                component: () => import(/* webpackChunkName: "SettlementDetails" */ '../views/Finance/SettlementDetails'),
                meta: {title: '财务明细',keepAlive: true},
            },


            /*ManageCenter  后台管理中心*/



            /*====== 业务中心 ======*/
            /*ManageCenter  业务工具 */
            {
                path: 'BusinessTools/EvaluateMonitor',  /*评价监控*/
                name: 'EvaluateMonitor',
                component: () => import(/* webpackChunkName: "EvaluateMonitor" */ '../views/BusinessTools/EvaluateMonitor'),
                meta: {title: '评价监控',keepAlive: true},
            },
            {
                path: 'BusinessTools/SellWith',  /*跟卖监控*/
                name: 'SellWith',
                component: () => import(/* webpackChunkName: "SellWith" */ '../views/BusinessTools/SellWith'),
                meta: {title: '跟卖监控',keepAlive: true},
            },
            {
                path: 'BusinessTools/KeywordRank',  /*关键词排名*/
                name: 'KeywordRank',
                component: () => import(/* webpackChunkName: "KeywordRank" */ '../views/BusinessTools/KeywordRank'),
                meta: {title: '关键词排名',keepAlive: true},
            },
            {
                path: 'BusinessTools/CompeteMonitor',  /*结算明细*/
                name: 'CompeteMonitor',
                component: () => import(/* webpackChunkName: "CompeteMonitor" */ '../views/BusinessTools/CompeteMonitor'),
                meta: {title: '竞品监控',keepAlive: true},
            },


           /*销售管理*/
            {
                path: 'SalesManage/Listing',  /*Listing*/
                name: 'Listing',
                component: () => import(/* webpackChunkName: "Listing" */ '../views/SalesManage/Listing'),
                meta: {title: 'Listing',keepAlive: true},
            },
            {
                path: 'SalesManage/OrderList',  /*订单列表*/
                name: 'OrderList',
                component: () => import(/* webpackChunkName: "OrderList" */ '../views/SalesManage/OrderList'),
                meta: {title: '订单列表',keepAlive: true},
            },
            {
                path: 'SalesManage/ReturnOrder',  /*退货订单*/
                name: 'ReturnOrder',
                component: () => import(/* webpackChunkName: "ReturnOrder" */ '../views/SalesManage/ReturnOrder'),
                meta: {title: '退货订单',keepAlive: true},
            },
            {
                path: 'SalesManage/RemoveOrder',  /*移除订单*/
                name: 'RemoveOrder',
                component: () => import(/* webpackChunkName: "RemoveOrder" */ '../views/SalesManage/RemoveOrder'),
                meta: {title: '移除订单',keepAlive: true},
            },
            {
                path: 'SalesManage/PromotionOrder',  /*促销订单*/
                name: 'PromotionOrder',
                component: () => import(/* webpackChunkName: "PromotionOrder" */ '../views/SalesManage/PromotionOrder'),
                meta: {title: '促销订单',keepAlive: true},
            },
            {
                path: 'SalesManage/AmazonShipping',  /*亚马逊配送货件*/
                name: 'AmazonShipping',
                component: () => import(/* webpackChunkName: "AmazonShipping" */ '../views/SalesManage/AmazonShipping'),
                meta: {title: '亚马逊配送货件',keepAlive: true},
            },
            {
                path: 'SalesManage/UserList',  /*用户列表*/
                name: 'UserList',
                component: () => import(/* webpackChunkName: "UserList" */ '../views/SalesManage/UserList'),
                meta: {title: '用户列表',keepAlive: true},
            },

        ],

    },

    {
        name: 'Error',
        path: '/error',
        component: () => import( /* webpackChunkName: "error" */ '../views/Error'),
        children: [
            {
                path: '401',
                component: () => import(/* webpackChunkName: "401" */ '../views/Error/401'),
            },
            {
                path: '403',
                component: () => import(/* webpackChunkName: "403" */ '../views/Error/403'),
            },
            {
                path: '404',
                component: () => import(/* webpackChunkName: "404" */ '../views/Error/404'),
            },
            {
                path: '500',
                component: () => import(/* webpackChunkName: "500" */ '../views/Error/500'),
            },
        ]
    },
    {
        name: '*',
        path: '*',
        redirect: '/error/404'
    },


];
export default staticRoute