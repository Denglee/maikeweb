const Layout = () => import(/* webpackChunkName: "Layout" */ '@/components/Layout/Layout')

const staticRoute = [
    {
        path: '/',
        redirect: '/Index',
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

            /*产品信息*/
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

            /*仓库管理*/
            {
                path: 'WarehouseManage/FBAInventory', /*FBA库存*/
                name: 'FBAInventory',
                component: () => import(/* webpackChunkName: "FBAInventory" */ '../views/WarehouseManage/FBAInventory'),
                meta: {title: 'FBA库存',keepAlive: true},
            },

            /*财务*/
            {
                path: 'Finance/SettlementDetails',  /*结算明细*/
                name: 'SettlementDetails',
                component: () => import(/* webpackChunkName: "SettlementDetails" */ '../views/Finance/SettlementDetails'),
                meta: {title: '财务明细',keepAlive: true},
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