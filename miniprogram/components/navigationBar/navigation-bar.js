// components/navigationBar/navigation-bar.js
// 获取全局变量
const app = getApp()
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		// defaultData（父页面传递的数据-就是引用组件的页面）
		defaultData: {
			type: Object,
			value: {
				title: "我是默认标题"
			},
			observer: function (newVal, oldVal) {}
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		navBarHeight: app.globalData.navBarHeight,
		menuRight: app.globalData.menuRight,
		menuBotton: app.globalData.menuBotton,
		menuHeight: app.globalData.menuHeight,
	},

	/**
	 * 组件的方法列表
	 */
	methods: {

	}
})