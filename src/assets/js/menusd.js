let menu = {
    status: 1,
    info: "获取成功",
    data: [


        /*角色权限管理*/
        {
            path: "PowerManage",
            meta: {
                title: "角色权限管理",
                icon: 'el-icon-s-tools',
            },
            children: [
                {
                    path: "PowerManage",
                    name: "业务系统角色",
                },
            ]
        },

        /*店铺管理*/
        {
            path: "StoreManage",
            meta: {
                title: "店铺管理",
                icon: 'el-icon-s-bag-1',
            },
            children: [
                {
                    path: "StoreAuthorize",
                    name: "店铺授权"
                },
                {
                    path: "AdjustEntity",
                    name: "店铺核算主体"
                },
                {
                    path: "AdjustStore",
                    name: "财务核算店铺"
                },
                {
                    path: "StoreEmail",
                    name: "店铺邮箱"
                },
            ]
        },

        /*应用设置*/
        {
            path: "Parameter",
            meta: {
                title: "参数设置",
                icon: 'el-icon-s-postcard',
            },
            children: [
                {
                    path: "ApplyManage",
                    name: "应用管理"
                },
                {
                    path: "ExchangeManage",
                    name: "汇率管理"
                },
                {
                    path: "CountryManage",
                    name: "国家管理"
                },
                {
                    path: "RegionManage",
                    name: "区域管理"
                },
                {
                    path: "SiteManage",
                    name: "站点管理"
                },
                {
                    path: "BusinessConfig",
                    name: "业务配置"
                },
            ]
        },

        /*页面管理*/
        {
            path: "PageManage",
            meta: {
                title: "页面管理",
                icon: 'el-icon-circle-check',
            },
            children: [
                {
                    path: "BusinessSystem",
                    name: "业务系统页面"
                },
            ]
        },

        /*文档管理*/
        {
            path: "PageManage",
            meta: {
                title: "文档管理",
                icon: 'el-icon-folder',
            },
            children: [
                {
                    path: "File",
                    name: "文件档案"
                },
            ]
        },

        /*日志管理*/
        {
            path: "LogManage",
            meta: {
                title: "日志管理",
                icon: 'el-icon-s-cooperation',
            },
            children: [
                {
                    path: "LogLogin",
                    name: "登录日志"
                },
            ]
        },

        /*账户中心*/
        {
            path: "AccountCenter",
            meta: {
                title: "账户中心",
                icon: 'el-icon-set-up',
            },
            children: [
                {
                    path: "PersonalInfo",
                    name: "个人信息"
                },
                {
                    path: "AccountSetup",
                    name: "账户设置"
                },
            ]
        },

        /*消息中心*/
        {
            path: "MessageCenter",
            meta: {
                title: "消息中心",
                icon: 'el-icon-bell',
            },
            children: [
                {
                    path: "MessageList",
                    name: "消息列表"
                },
            ]
        },

        /*产品信息*/
        // {
        //     path: "ProductInfo",
        //     meta: {
        //         title: "产品信息",
        //         icon: 'el-icon-s-marketing',
        //     },
        //     children: [
        //         {
        //             path: "ClassifiedManage",
        //             name: "分类管理"
        //         },
        //         {
        //           path: "BrandManage",
        //           name: "品牌管理"
        //         }
        //     ]
        // },


        /*业务工具*/
        {
            path: "BusinessTools",
            meta: {
                title: "业务工具",
                icon: 'el-icon-video-camera',
            },
            children: [
                {
                    path: "EvaluateMonitor",
                    name: "评价监控"
                },
                {
                    path: "SellWith",
                    name: "跟卖监控"
                },
                {
                    path: "KeywordRank",
                    name: "关键词排名"
                },
                {
                    path: "CompeteMonitor",
                    name: "竞品监控"
                },
            ]
        },

        /*销售管理*/
        {
            path: "SalesManage",
            meta: {
                title: "销售管理",
                icon: 'el-icon-video-camera',
            },
            children: [
                {
                    path: "Listing",
                    name: "Listing"
                },
                {
                    path: "OrderList",
                    name: "订单列表"
                },
                {
                    path: "ReturnOrder",
                    name: "退货订单"
                },
                {
                    path: "RemoveOrder",
                    name: "移除订单"
                },
                {
                    path: "PromotionOrder",
                    name: "促销订单"
                },
                {
                    path: "AmazonShipping",
                    name: "亚马逊配送货件"
                },
                {
                    path: "UserList",
                    name: "用户列表"
                },
            ]
        },

       /*仓库管理*/
        {
            path: "WarehouseManage",
            meta: {
                title: "仓库管理",
                icon: 'el-icon-circle-check',
            },
            children: [
                {
                    path: "WarehouseList",
                    name: "仓库列表",
                },
                {
                    path: "FBAInventory",
                    name: "FBA库存",
                },
            ]
        },

        /*财务管理*/
        {
            path: "Finance",
            meta: {
                title: "财务管理",
                icon: 'el-icon-shopping-bag-1',
            },
            children: [
                {
                    path: "AccountFunds",
                    name: "账户资金"
                },
                {
                    path: "RemittanceRecords",
                    name: "回款记录"
                },
                {
                    path: "SettlementDetails",
                    name: "结算明细"
                },
            ]
        },

        /*报表中心*/
        /*广告报表*/
        {
            path: "ReportsCenter",
            meta: {
                title: "广告报表",
                icon: 'el-icon-s-bag',
            },
            children: [
                {
                    path: "ADReports",
                    name: "广告活动报表"
                },
            ]
        },

    ]
};

export {menu};
