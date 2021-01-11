const Layout = () => import(/* webpackChunkName: "Layout" */ '@/components/Layout/Layout')

const staticRoute222 = [
    {
        path: '/',
        redirect: '/BasicInfo/CompanyInfo',
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
                component: () => import('@/views/BasicInfo/CompanyInfo'),
                meta: {title: '企业信息',keepAlive: true},
            },
            {
                path: 'BasicInfo/OrganManage',  /*组织机构管理*/
                name: 'OrganManage',
                component: () => import('@/views/BasicInfo/OrganManage'),
                meta: {title: '组织机构管理',keepAlive: true},
            },
            // {
            //     path: 'BasicInfo/PeopleManage',  /*人员管理*/
            //     name: 'PeopleManage',
            //     component: () => import('@/views/BasicInfo/PeopleManage'),
            //     meta: {title: '组织机构管理',keepAlive: true},
            // },
            // {
            //     path: 'BasicInfo/ApplyAuthorize',  /*应用授权*/
            //     name: 'ApplyAuthorize',
            //     component: () => import('@/views/BasicInfo/ApplyAuthorize'),
            //     meta: {title: '组织机构管理',keepAlive: true},
            // },

            /* PowerManage 角色权限管理*/
            {
                path: 'PowerManage/PowerManage',  /*业务系统角色*/
                name: 'PowerManage',
                component: () => import('@/views/PowerManage/PowerManage'),
                meta: {title: '业务系统角色',keepAlive: true},
            },


            /*StoreManage 店铺管理*/
            {
                path: 'StoreManage/StoreAuthorize',  /* 店铺授权 */
                name: 'StoreAuthorize',
                component: () => import('@/views/StoreManage/StoreAuthorize'),
                meta: {title: '店铺授权',keepAlive: true},
            },
            {
                path: 'StoreManage/AdjustEntity',  /* 店铺核算主体 */
                name: 'AdjustEntity',

                component: () => import('@/views/StoreManage/AdjustEntity'),
                meta: {title: '核算主体',keepAlive: true},
            },
            {
                path: 'StoreManage/AdjustStore',  /* 财务核算店铺 */
                name: 'AdjustStore',
                component: () => import('@/views/StoreManage/AdjustStore'),
                meta: {title: '财务核算店铺',keepAlive: true},
            },

            {
                path: 'StoreManage/StoreEmail',  /* 店铺邮箱 */
                name: 'StoreEmail',
                component: () => import('@/views/StoreManage/StoreEmail'),
                meta: {title: '店铺邮箱',keepAlive: true},
            },

            /*Parameter 参数设置*/
            {
                path: 'Parameter/ApplyManage',  /* 应用管理 */
                name: 'ApplyManage',
                component: () => import('@/views/Parameter/ApplyManage'),
                meta: {title: '应用管理',keepAlive: true},
            },


            /*PageManage 页面管理*/
            {
                path: 'PageManage/BusinessSystem',  /* 业务系统页面 */
                name: 'BusinessSystem',
                component: () => import('@/views/PageManage/BusinessSystem'),
                meta: {title: '业务系统页面',keepAlive: true},
            },


            /*MessageCenter 消息中心*/
            {
                path: 'MessageCenter/MessageList',  /*消息列表*/
                name: 'MessageList',
                component: () => import('@/views/MessageCenter/MessageList'),
                meta: {title: '消息列表',keepAlive: true},
            },


            /*AccountCenter 账户中心*/
            {
                path: 'AccountCenter/PersonalInfo',  /*个人信息*/
                name: 'PersonalInfo',
                component: () => import('@/views/AccountCenter/PersonalInfo'),
                meta: {title: '个人信息',keepAlive: true},
            },
            {
                path: 'AccountCenter/AccountSetup',  /*账户设置*/
                name: 'AccountSetup',
                component: () => import('@/views/AccountCenter/AccountSetup'),
                meta: {title: '账户设置',keepAlive: true},
            },


            /*ProductInfo 产品信息*/
            {
                path: 'ProductInfo/BrandManage',  /*品牌管理*/
                name: 'BrandManage',
                component: () => import('@/views/ProductInfo/BrandManage'),
                meta: {title: '品牌管理',keepAlive: true},
            },
            {
                path: 'ProductInfo/ClassifiedManage',  /*分类管理*/
                name: 'ClassifiedManage',
                component: () => import('@/views/ProductInfo/ClassifiedManage'),
                meta: {title: '分类管理',keepAlive: true},
            },




            /*WarehouseManage 仓库管理*/
            {
                path: 'WarehouseManage/FBAInventory', /*FBA库存*/
                name: 'FBAInventory',
                component: () => import('@/views/WarehouseManage/FBAInventory'),
                meta: {title: 'FBA库存',keepAlive: true},
            },




            /* Finance 财务*/
            {
                path: 'Finance/SettlementDetails',  /*结算明细*/
                name: 'SettlementDetails',
                component: () => import('@/views/Finance/SettlementDetails'),
                meta: {title: '财务明细',keepAlive: true},
            },


            /*ManageCenter  后台管理中心*/


        ],

    },

    {
        name: 'Error',
        path: '/error',
        component: () => import( /* webpackChunkName: "error" */ '../views/Error'),
        children: [
            {
                path: '401',
                component: () => import('@/views/Error/401'),
            },
            {
                path: '403',
                component: () => import('@/views/Error/403'),
            },
            {
                path: '404',
                component: () => import('@/views/Error/404'),
            },
            {
                path: '500',
                component: () => import('@/views/Error/500'),
            },
        ]
    },
    {
        name: '*',
        path: '*',
        redirect: '/error/404'
    },


];
export default staticRoute222