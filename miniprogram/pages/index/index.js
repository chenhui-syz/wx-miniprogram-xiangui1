const normalCallout = {
  id: 1,
  latitude: 23.098994,
  longitude: 113.322520,
  iconPath: '/images/location.png',
  callout: {
    content: '文本内容000',
    color: '#ff0000',
    fontSize: 14,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#000000',
    bgColor: '#fff',
    padding: 5,
    display: 'BYCLICK',
    textAlign: 'center'
  },
  // label: {
  //   content: 'label 文本',
  //   fontSize: 24,
  //   textAlign: 'center',
  //   borderWidth: 1,
  //   borderRadius: 5,
  //   bgColor: '#fff',
  //   padding: 5
  // }
}

const customCallout1 = {
  id: 2,
  latitude: 23.097994,
  longitude: 113.323520,
  iconPath: '/images/location.png',
  callout: {
    content: '文本内容111',
    color: '#ff0000',
    fontSize: 14,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#000000',
    bgColor: '#fff',
    padding: 5,
    display: 'BYCLICK',
    textAlign: 'center'
  },
}

const customCallout2 = {
  id: 3,
  latitude: 23.096994,
  longitude: 113.324520,
  iconPath: '/images/location.png',
  callout: {
    content: '文本内容222',
    color: '#ff0000',
    fontSize: 14,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#000000',
    bgColor: '#fff',
    padding: 5,
    display: 'BYCLICK',
    textAlign: 'center'
  },
}

const customCallout3 = {
  id: 4,
  latitude: 23.095994,
  longitude: 113.325520,
  iconPath: '/images/location.png',
  mytext: 'hahahhaa',
  callout: {
    content: '当前选择',
    color: '#ff0000',
    fontSize: 14,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#000000',
    bgColor: '#fff',
    padding: 5,
    display: 'BYCLICK',
    textAlign: 'center'
  },
}

const allMarkers = [normalCallout, customCallout1, customCallout2, customCallout3]

Page({
  data: {
    // 当前位置
    latitude: 23.096994,
    longitude: 113.324520,
    // 标记点
    markers: allMarkers,


    // 组件参数设置，传递到组件
    defaultData: {
      title: "我的主页", // 导航栏标题
    }
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },

  markertap(e) {
    console.log('@@@ markertap', e)
  },
  callouttap(e) {
    console.log('@@@ callouttap', e)
  },

  test() {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        console.log('resssssssssssssss', res)
        const MapContext = wx.createMapContext('myMap')
        console.log('mapobjjjjjjjjjjjjjj', MapContext)
        MapContext.openMapApp({
          // latitude,
          latitude: 23.15463,
          // longitude,
          longitude: 113.46199,
          destination: '显贵照明'
        })
        // wx.openLocation({
        //   // latitude,
        //   latitude:23.15463,
        //   // longitude,
        //   longitude:113.46199,
        //   scale: 18
        // })
      }
    })
  },
})