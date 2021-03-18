// components/globalHeader.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {

	},

	/**
	 * 组件的初始数据
	 */
	data: {
		// 扫码获得的信息
		scanCodeMsg: ''
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		scan() {
			let _this = this
			wx.scanCode({
				// 只允许从相机扫码
				onlyFromCamera: true,
				//扫描成功回调函数
				success(res) {
					console.log(res)
					_this.setData({
						scanCodeMsg: JSON.stringify(res)
					});
					wx.showToast({
						title: '成功',
						duration: 1000
					})
				},
				// 扫码失败
				fail(err) {
					_this.setData({
						scanCodeMsg: JSON.stringify(err)
					});
				}
			})
		}
	}
})