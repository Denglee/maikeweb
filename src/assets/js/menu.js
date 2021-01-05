let menu = {
    status: 1,
    info: "获取成功",
    data: [
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
        {
            id: "150",
            name: "店铺管理",
            fonts: "el-icon-circle-check",
            sub_menu: [
                {
                    id: "1511",
                    action: "StoreAuthorize",
                    controller: "StoreManage",
                    name: "店铺授权"

                },
            ]
        },
        // {
        //     id: "151",
        //     name: "仓库管理",
        //     fonts: "el-icon-circle-check",
        //     sub_menu: [
        //         {
        //             id: "1511",
        //             action: "FBAInventory",
        //             controller: "WarehouseManage",
        //             name: "FBA库存"
        //
        //         },
        //     ]
        // },
        {
            id: "152",
            name: "财务管理",
            fonts: "el-icon-shopping-bag-1", 
            sub_menu: [
                {
                    id: "1521",
                    action: "SettlementDetails",
                    controller: "Finance",
                    name: "结算明细"
                },
            ]
        },
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
    ]
};

export {menu};
