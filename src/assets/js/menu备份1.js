let menu = {
    status: 1,
    info: "获取成功",
    data: [
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
                // {
                //     id: "1512",
                //     action: "AdjustEntity",
                //     controller: "StoreManage",
                //     name: "店铺核算主体"
                // },
                // {
                //     id: "1514",
                //     action: "AdjustStore",
                //     controller: "StoreManage",
                //     name: "财务核算店铺"
                // },
                // {
                //     id: "1513",
                //     action: "StoreEmail",
                //     controller: "StoreManage",
                //     name: "店铺邮箱"
                // },
            ]
        },
    ],
};

export {menu};
