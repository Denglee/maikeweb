let menu = {
    status: 1,
    info: "获取成功",
    data: [
        /*基本信息*/
        {
            id: "100",
            name: "基本信息",
            fonts:'el-icon-s-marketing',
            sub_menu: [
                {
                    id: "101",
                    action: "CompanyInfo",
                    controller: "BasicInfo",
                    name: "企业信息"
                },
                {
                  id: "102",
                  action: "OrganManage",
                  controller: "BasicInfo",
                  name: "组织机构管理"
                },
                {
                    id: "103",
                    action: "PeopleManage",
                    controller: "BasicInfo",
                    name: "人员管理"
                },
                {
                    id: "102",
                    action: "ApplyAuthorize",
                    controller: "BasicInfo",
                    name: "应用授权"
                },
            ]
        },

        /*角色权限管理*/
        {
            id: "110",
            name: "角色权限管理",
            fonts: "el-icon-s-tools",
            sub_menu: [
                {
                    id: "1111",
                    action: "PowerManage",
                    controller: "PowerManage",
                    name: "业务系统角色",
                },
            ]
        },

        /*店铺管理*/
        {
            id: "150",
            name: "店铺管理",
            fonts: "el-icon-shopping-bag-1",
            sub_menu: [
                {
                    id: "1511",
                    action: "StoreAuthorize",
                    controller: "StoreManage",
                    name: "店铺授权"
                },
                {
                    id: "1512",
                    action: "AdjustEntity",
                    controller: "StoreManage",
                    name: "店铺核算主体"
                },
                {
                    id: "1514",
                    action: "AdjustStore",
                    controller: "StoreManage",
                    name: "财务核算店铺"
                },
                {
                    id: "1513",
                    action: "StoreEmail",
                    controller: "StoreManage",
                    name: "店铺邮箱"
                },
            ]
        },

        /*应用设置*/
        {
            id: "150",
            name: "参数设置",
            fonts: "el-icon-postcard",
            sub_menu: [
                {
                    id: "1511",
                    action: "ApplyManage",
                    controller: "Parameter",
                    name: "应用管理"
                },
                {
                    id: "1512",
                    action: "ExchangeManage",
                    controller: "Parameter",
                    name: "汇率管理"
                },
                {
                    id: "1513",
                    action: "CountryManage",
                    controller: "Parameter",
                    name: "国家管理"
                },
                {
                    id: "1514",
                    action: "RegionManage",
                    controller: "Parameter",
                    name: "区域管理"
                },
                {
                    id: "1515",
                    action: "SiteManage",
                    controller: "Parameter",
                    name: "站点管理"
                },
                {
                    id: "1516",
                    action: "BusinessConfig",
                    controller: "Parameter",
                    name: "业务配置"
                },
            ]
        },

        /*页面管理*/
        {
            id: "150",
            name: "页面管理",
            fonts: "el-icon-circle-check",
            sub_menu: [
                {
                    id: "1511",
                    action: "BusinessSystem",
                    controller: "PageManage",
                    name: "业务系统页面"
                },
            ]
        },

        /*文档管理*/
        {
            id: "150",
            name: "文档管理",
            fonts: "el-icon-folder",
            sub_menu: [
                {
                    id: "1511",
                    action: "File",
                    controller: "PageManage",
                    name: "文件档案"
                },
            ]
        },

        /*日志管理*/
        {
            id: "160",
            name: "日志管理",
            fonts: "el-icon-s-cooperation",
            sub_menu: [
                {
                    id: "1611",
                    action: "LogLogin",
                    controller: "LogManage",
                    name: "登录日志"
                },
            ]
        },

        /*账户中心*/
        {
            id: "201",
            name: "账户中心",
            fonts: "el-icon-set-up",
            sub_menu: [
                {
                    id: "2011",
                    action: "PersonalInfo",
                    controller: "AccountCenter",
                    name: "个人信息"
                },
                {
                    id: "2012",
                    action: "AccountSetup",
                    controller: "AccountCenter",
                    name: "账户设置"
                },
            ]
        },

        /*消息中心*/
        {
            id: "202",
            name: "消息中心",
            fonts: "el-icon-bell",
            sub_menu: [
                {
                    id: "2021",
                    action: "MessageList",
                    controller: "MessageCenter",
                    name: "消息列表"
                },
            ]
        },

        /*产品信息*/
        // {
        //     id: "147",
        //     name: "产品信息",
        //     fonts:'el-icon-s-marketing',
        //     sub_menu: [
        //         {
        //             id: "148",
        //             action: "ClassifiedManage",
        //             controller: "ProductInfo",
        //             name: "分类管理"
        //         },
        //         {
        //           id: "170",
        //           action: "BrandManage",
        //           controller: "ProductInfo",
        //           name: "品牌管理"
        //         }
        //     ]
        // },


        /*业务工具*/
        {
            id: "200",
            name: "业务工具",
            fonts: "el-icon-video-camera",
            sub_menu: [
                {
                    id: "2001",
                    action: "EvaluateMonitor",
                    controller: "BusinessTools",
                    name: "评价监控"
                },
                {
                    id: "2002",
                    action: "SellWith",
                    controller: "BusinessTools",
                    name: "跟卖监控"
                },
                {
                    id: "2003",
                    action: "KeywordRank",
                    controller: "BusinessTools",
                    name: "关键词排名"
                },
                {
                    id: "2004",
                    action: "CompeteMonitor",
                    controller: "BusinessTools",
                    name: "竞品监控"
                },
            ]
        },

        /*销售管理*/
        {
            id: "220",
            name: "销售管理",
            fonts: "el-icon-video-camera",
            sub_menu: [
                {
                    id: "2201",
                    action: "Listing",
                    controller: "SalesManage",
                    name: "Listing"
                },
                {
                    id: "2202",
                    action: "OrderList",
                    controller: "SalesManage",
                    name: "订单列表"
                },
                {
                    id: "2202",
                    action: "ReturnOrder",
                    controller: "SalesManage",
                    name: "退货订单"
                },
                {
                    id: "2202",
                    action: "RemoveOrder",
                    controller: "SalesManage",
                    name: "移除订单"
                },
                {
                    id: "2202",
                    action: "PromotionOrder",
                    controller: "SalesManage",
                    name: "促销订单"
                },
                {
                    id: "2202",
                    action: "AmazonShipping",
                    controller: "SalesManage",
                    name: "亚马逊配送货件"
                },
                {
                    id: "2202",
                    action: "UserList",
                    controller: "SalesManage",
                    name: "用户列表"
                },
            ]
        },

       /*仓库管理*/
        {
            id: "151",
            name: "仓库管理",
            fonts: "el-icon-circle-check",
            sub_menu: [
                {
                    id: "1511",
                    action: "WarehouseList",
                    controller: "WarehouseManage",
                    name: "仓库列表",

                },
                {
                    id: "1511",
                    action: "FBAInventory",
                    controller: "WarehouseManage",
                    name: "FBA库存",

                },
            ]
        },

        /*财务管理*/
        {
            id: "152",
            name: "财务管理",
            fonts: "el-icon-shopping-bag-1",
            sub_menu: [
                {
                    id: "1521",
                    action: "AccountFunds",
                    controller: "Finance",
                    name: "账户资金"
                },
                {
                    id: "1521",
                    action: "RemittanceRecords",
                    controller: "Finance",
                    name: "回款记录"
                },
                {
                    id: "1521",
                    action: "SettlementDetails",
                    controller: "Finance",
                    name: "结算明细"
                },
            ]
        },

        /*广告报表*/
        /*财务管理*/
        {
            id: "152",
            name: "广告报表",
            fonts: "el-icon-shopping-bag-1",
            sub_menu: [
                {
                    id: "1521",
                    action: "ADReports",
                    controller: "ReportsCenter",
                    name: "广告活动报表"
                },
            ]
        },

    ]
};

export {menu};
