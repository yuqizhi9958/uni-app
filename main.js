import Vue from 'vue'
import App from './App'
import store from '@/store'

//把vuex定义成全局组件
Vue.prototype.$store = store
// 引入uView提供的对vuex的简写法文件
let vuexStore = require('@/store/$u.mixin.js')
Vue.mixin(vuexStore)

import uView from "uview-ui"
Vue.use(uView)

import HttpRequest from '@/common/httpRequest'
Vue.prototype.$Request = HttpRequest;


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
