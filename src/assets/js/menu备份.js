let menu = {
    status: 1,
    info: "获取成功",
    data: [
        {
            id: "147",
            pid: "0",
            name: "产品信息",
            app: "Admin",
            controller: "ProductInfo",
            action: "index0",
            type: "1",
            ajax: "0",
            width: "0",
            height: "0",
            fonts:'el-icon-s-marketing', //icon
            listorder: "95",
            status: "1",
            is_show: "0",
            zmtek_ver: "0",
            sub_menu: [
                {
                    id: "148",
                    action: "ClassifiedManage",
                    app: "Admin",
                    controller: "ProductInfo",
                    pid: "147",
                    parameter: "",
                    type: "1",
                    fonts: "el-icon-circle-check",
                    ajax: "0",
                    name: "分类管理"
                },
                {
                  id: "170",
                  action: "BrandManage",
                  app: "Admin",
                  controller: "ProductInfo",
                  pid: "147",
                  parameter: "",
                  type: "1",
                  fonts: "desktop",
                  ajax: "0",
                  name: "品牌管理"
                }
            ]
        },
        {
            id: "148",
            pid: "0",
            name: "仓库管理",
            app: "Admin",
            controller: "WarehouseManage",
            action: "index0",
            type: "1",
            ajax: "0",
            width: "0",
            height: "0",
            fonts: "el-icon-circle-check", //icon
            listorder: "95",
            status: "1",
            is_show: "0",
            zmtek_ver: "0",
            sub_menu: [
                {
                    id: "149",
                    action: "FBAInventory",
                    app: "Admin",
                    controller: "WarehouseManage",
                    pid: "147",
                    parameter: "",
                    type: "1",
                    fonts: "el-icon-circle-check",
                    ajax: "0",
                    name: "FBA库存"
                },
            ]
        },
        {
            id: "148",
            pid: "0",
            name: "财务管理",
            app: "Admin",
            controller: "Finance",
            action: "index0",
            type: "1",
            ajax: "0",
            width: "0",
            height: "0",
            fonts: "el-icon-shopping-bag-1", //icon
            listorder: "95",
            status: "1",
            is_show: "0",
            zmtek_ver: "0",
            sub_menu: [
                {
                    id: "149",
                    action: "SettlementDetails",
                    app: "Admin",
                    controller: "Finance",
                    pid: "147",
                    parameter: "",
                    type: "1",
                    fonts: "el-icon-circle-check",
                    ajax: "0",
                    name: "结算明细"
                },
            ]
        }
    ]
};

export {menu};
