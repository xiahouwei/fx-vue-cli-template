export default [{
	path: '/',
	redirect: '/login'
}, {
	path: '/login',
	name: 'login',
	component: r => require.ensure([], function (require) { r(require('@/views/login/Index.vue')) }, 'login')
}, {
	path: '/print',
	name: 'print',
	component: r => require.ensure([], function (require) { r(require('@/views/print/Index.vue')) }, 'print')
}, {
	path: '/printInvocie',
	name: 'printInvocie',
	component: r => require.ensure([], function (require) { r(require('@/views/print-invoice/Index.vue')) }, 'printInvocie')
}, {
	path: '/main',
	component: r => require.ensure([], function (require) { r(require('@/views/index/Index.vue')) }, 'main'),
	children: [{
		path: '/',
		redirect: 'home'
	}, {
		// 首页
		path: 'home',
		name: 'home',
		component: r => require.ensure([], function (require) { r(require('@/views/home/Index.vue')) }, 'home')
	}, {
		// 基础档案-机构管理
		path: 'organManage',
		name: 'organManage',
		component: r => require.ensure([], function (require) { r(require('@/views/basic-archives_organ-manage/Index.vue')) }, 'organManage'),
		meta: { authModuleList: ['basic-archives_organ-manage', 'support-archives_financial-class'] }
	}, {
		// 基础档案-供货商管理
		path: 'supplierManage',
		name: 'supplierManage',
		component: r => require.ensure([], function (require) { r(require('@/views/basic-archives_supplier-manage/Index.vue')) }, 'supplierManage'),
		meta: { authModuleList: ['basic-archives_supplier-manage', 'support-archives_financial-class'] }
	}, {
		// 基础档案-员工档案
		path: 'employeeManage',
		name: 'employeeManage',
		component: r => require.ensure([], function (require) { r(require('@/views/basic-archives_employee-manage/Index.vue')) }, 'employeeManage'),
		meta: { authModuleList: ['basic-archives_employee-manage'] }
	}, {
		// 基础档案-客户管理
		path: 'customerManage',
		name: 'customerManage',
		component: r => require.ensure([], function (require) { r(require('@/views/basic-archives_customer-manage/Index.vue')) }, 'customerManage'),
		meta: { authModuleList: ['basic-archives_customer-manage', 'support-archives_financial-class'] }
	}, {
		// 基础档案-品项管理
		path: 'itemManage',
		name: 'itemManage',
		component: r => require.ensure([], function (require) { r(require('@/views/basic-archives_item-manage/Index.vue')) }, 'itemManage'),
		meta: { authModuleList: ['basic-archives_item-manage'] }
	}, {
		// 基础档案-权限管理
		path: 'roleManage',
		name: 'roleManage',
		component: r => require.ensure([], function (require) { r(require('@/views/basic-archives_role-manage/Index.vue')) }, 'roleManage'),
		meta: { authModuleList: ['basic-archives_role-manage'] }
	}, {
		// 基础档案-价格方案
		path: 'pricePlan',
		name: 'pricePlan',
		component: r => require.ensure([], function (require) { r(require('@/views/basic-archives_price-plan/Index.vue')) }, 'pricePlan'),
		meta: { authModuleList: ['basic-archives_price-plan'] }
	}, {
		// 基础档案-订货方案
		path: 'stockPlan',
		name: 'stockPlan',
		component: r => require.ensure([], function (require) { r(require('@/views/basic-archives_stock-plan/Index.vue')) }, 'stockPlan'),
		meta: { authModuleList: ['basic-archives_stock-plan'] }
	}, {
		// 基础档案-日志管理
		path: 'logManage',
		name: 'logManage',
		component: r => require.ensure([], function (require) { r(require('@/views/basic-archives_log-manage/Index.vue')) }, 'logManage')
	}, {
		// 基础档案-基础数据导入
		path: 'importManage',
		name: 'importManage',
		component: r => require.ensure([], function (require) { r(require('@/views/basic-archives_import-manage/Index.vue')) }, 'importManage'),
		meta: { authModuleList: ['basic-archives_import-manage'] }
	}, {
		// 基础档案-数据初始化
		path: 'dataInitialization',
		name: 'dataInitialization',
		component: r => require.ensure([], function (require) { r(require('@/views/basic-archives_data-initialization/Index.vue')) }, 'dataInitialization'),
		meta: { authModuleList: ['basic-archives_data-initialization'] }
	}, {
		// 基础档案-筛选条件设置
		path: 'filterSetting',
		name: 'filterSetting',
		component: r => require.ensure([], function (require) { r(require('@/views/basic-archives_filter-setting/Index.vue')) }, 'filterSetting'),
		meta: { authModuleList: ['basic-archives_filter-setting'] }
	}, {
		// 辅助档案-辅助分类
		path: 'supportClass',
		name: 'supportClass',
		component: r => require.ensure([], function (require) { r(require('@/views/support-archives_support-class/Index.vue')) }, 'supportClass'),
		meta: { authModuleList: ['support-archives_financial-class', 'support-archives_bussiness-type', 'support-archives_take-stock-class', 'support-archives_invoice-type', 'support-archives_inventory-profit-reason'] }
	}, {
		// 辅助档案-系统参数
		path: 'systemParams',
		name: 'systemParams',
		component: r => require.ensure([], function (require) { r(require('@/views/support-archives_system-params/Index.vue')) }, 'systemParams'),
		meta: { authModuleList: ['support-archives_system-params'] }
	}, {
		// 结转管理-会计期
		path: 'accountPeriod',
		name: 'accountPeriod',
		component: r => require.ensure([], function (require) { r(require('@/views/forward-manage_account-period/Index.vue')) }, 'accountPeriod'),
		meta: { authModuleList: ['forward-manage_account-period'] }

	}, {
		// 结转管理-月末结转
		path: 'carryForward',
		name: 'carryForward',
		component: r => require.ensure([], function (require) { r(require('@/views/forward-manage_carry-forward/Index.vue')) }, 'carryForward'),
		meta: { authModuleList: ['forward-manage_carry-forward'] }
	}, {
		// 采销管理-采购计划单
		path: 'stockPlanOrder',
		name: 'stockPlanOrder',
		component: r => require.ensure([], function (require) { r(require('@/views/stock-sale-manage_stock-plan-order/Index.vue')) }, 'stockPlanOrder'),
		meta: { authModuleList: ['stock-sale-manage_stock-plan-order', 'support-archives_bussiness-type', 'assign-manage_stock-plan'] }
	}, 	 {
		// 采销管理-采购订单
		path: 'stockOrder',
		name: 'stockOrder',
		component: r => require.ensure([], function (require) { r(require('@/views/stock-sale-manage_stock-order/Index.vue')) }, 'stockOrder'),
		meta: { authModuleList: ['stock-sale-manage_stock-order', 'support-archives_bussiness-type'] }
	}, 	{
		// 采销管理-销售订单
		path: 'saleOrder',
		name: 'saleOrder',
		component: r => require.ensure([], function (require) { r(require('@/views/stock-sale-manage_sale-order/Index.vue')) }, 'saleOrder'),
		meta: { authModuleList: ['stock-sale-manage_sale-order', 'support-archives_bussiness-type', 'assign-manage_in-store', 'assign-manage_out-store'] }
	}, 	{
		// 分派管理-入库分派
		path: 'inStoreAssign',
		name: 'inStoreAssign',
		component: r => require.ensure([], function (require) { r(require('@/views/assign-manage_in-store/Index.vue')) }, 'inStoreAssign'),
		meta: { authModuleList: ['assign-manage_in-store'] }
	}, 	{
		// 分派管理-出库分派
		path: 'outStoreAssign',
		name: 'outStoreAssign',
		component: r => require.ensure([], function (require) { r(require('@/views/assign-manage_out-store/Index.vue')) }, 'outStoreAssign'),
		meta: { authModuleList: ['assign-manage_out-store'] }
	}, {
		// 分派管理-采购计划单分派
		path: 'stockPlanAssign',
		name: 'stockPlanAssign',
		component: r => require.ensure([], function (require) { r(require('@/views/assign-manage_stock-plan/Index.vue')) }, 'stockPlanAssign'),
		meta: { authModuleList: ['assign-manage_stock-plan'] }
	}, {
		// 库存管理-入库单
		path: 'inStoreOrder',
		name: 'inStoreOrder',
		component: r => require.ensure([], function (require) { r(require('@/views/store-manage_in-store-order/Index.vue')) }, 'inStore'),
		meta: { authModuleList: ['store-manage_in-store-order', 'support-archives_bussiness-type'] }
	}, {
		// 库存管理-出库单
		path: 'outStoreOrder',
		name: 'outStoreOrder',
		component: r => require.ensure([], function (require) { r(require('@/views/store-manage_out-store-order/Index.vue')) }, 'outStoreOrder'),
		meta: { authModuleList: ['store-manage_out-store-order', 'support-archives_bussiness-type'] }
	}, {
		// 库存管理-调拨申请单
		path: 'moveOrder',
		name: 'moveOrder',
		component: r => require.ensure([], function (require) { r(require('@/views/store-manage_move-order/Index.vue')) }, 'moveOrder'),
		meta: { authModuleList: ['store-manage_move-order', 'support-archives_bussiness-type'] }
	}, {
		// 库存管理-盘点单
		path: 'takeStockOrder',
		name: 'takeStockOrder',
		component: r => require.ensure([], function (require) { r(require('@/views/store-manage_take-stock-order/Index.vue')) }, 'takeStockOrder'),
		meta: { authModuleList: ['store-manage_take-stock-order', 'support-archives_take-stock-class', 'support-archives_bussiness-type'] }
	}, {
		// 存货核算-BOM设置
		path: 'bomSet',
		name: 'bomSet',
		component: r => require.ensure([], function (require) { r(require('@/views/store-account_bom-set/Index.vue')) }, 'bomSet')
	}, {
		// 存货核算-BOM成本卡诊断
		path: 'bomDiagnosis',
		name: 'bomDiagnosis',
		component: r => require.ensure([], function (require) { r(require('@/views/store-account_bom-diagnosis/Index.vue')) }, 'bomDiagnosis')
	}, {
		// 发票管理-采购发票
		path: 'purchaseInvoice',
		name: 'purchaseInvoice',
		component: r => require.ensure([], function (require) { r(require('@/views/invoice-manage_purchase-invoice/Index.vue')) }, 'purchaseInvoice'),
		meta: { authModuleList: ['invoice-manage_purchase-invoice'] }
	}, {
		// 营业数据-销售区域
		path: 'salesArea',
		name: 'salesArea',
		component: r => require.ensure([], function (require) { r(require('@/views/business-data_sales-area/Index.vue')) }, 'salesArea'),
		meta: { authModuleList: ['business-data_sales-area'] }
	}, {
		// 营业数据-营业数据查询
		path: 'businessDataSearch',
		name: 'businessDataSearch',
		component: r => require.ensure([], function (require) { r(require('@/views/business-data_business-data-search/Index.vue')) }, 'businessDataSearch')
	}, {
		// 营业数据-菜品营业单据
		path: 'foodBusinessOrder',
		name: 'foodBusinessOrder',
		component: r => require.ensure([], function (require) { r(require('@/views/business-data_food-business-order/Index.vue')) }, 'foodBusinessOrder')
	}, {
		// 营业数据-理论耗用单
		path: 'theoryCostOrder',
		name: 'theoryCostOrder',
		component: r => require.ensure([], function (require) { r(require('@/views/business-data_theory-cost-order/Index.vue')) }, 'theoryCostOrder')
	}, {
		// 报表
		path: 'report',
		name: 'report',
		component: r => require.ensure([], function (require) { r(require('@/views/report/Index.vue')) }, 'report')
	}, {
		// 应用设置-账号绑定
		path: 'accountBinding',
		name: 'accountBinding',
		component: r => require.ensure([], function (require) { r(require('@/views/application-setting_account-binding/Index.vue')) }, 'accountBinding')
	}, {
		// 极速定商城
		path: 'biubiuorder',
		name: 'biubiuorder',
		component: r => require.ensure([], function (require) { r(require('@/views/biubiuorder/Index.vue')) }, 'biubiuorder')
	}]
}]
