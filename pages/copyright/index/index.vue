<template>
	<view class="copy-right">

		<!-- 搜索框 -->
		<navbar-flow :navIcon="navObj.icon" :navText="navObj.text"></navbar-flow>

		<view class="tabs-block">
			<u-tabs :list="tabList" :is-scroll="true" :current="current" @change="tabChange" active-color="#ff4b4c"></u-tabs>
		</view>
		<view class="swiper-wrap-block u-m-t-10">
			<u-swiper :list="swiperList" mode="dot"></u-swiper>
		</view>

		<water-grid :waterList="waterList"></water-grid>
		<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>

	</view>
</template>

<script>
	import navbarFlow from '../../../components/navbar/navbar.vue'
	import waterGrid from '../../home/index/components/waterGrid.vue'
	export default {
		name: 'copy-right',
		data() {
			return {
				navObj: {
					icon: 'account',
					text: '我的版权'
				},
				waterList: [],
				min_id: 1,
				type: 1,
				loadStatus: 'loadmore',
				tabList: [{
					name: '推荐'
				}, {
					name: '深度好文'
				}, {
					name: '漫风漫影'
				}, {
					name: '古风古物'
				}, {
					name: '更多选择'
				}, {
					name: '古风古物'
				}, {
					name: '更多选择'
				}],
				swiperList: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
					}
				],
				current: 0, // tabs组件的current值，表示当前活动的tab选项

			}
		},
		onLoad: function(e) {
			this.loadCouponList();
		},
		onReachBottom: function() {
			// this.page = this.page + 1;
			this.loadStatus = 'loading';
			setTimeout(() => {
				this.loadCouponList();
				this.loadStatus = 'loadmore';
			}, 1000)
		}, // 下拉刷新
		onPullDownRefresh: function() {
			// this.page = 1;
			this.min_id = 1;
			this.loadCouponList("Refresh");
		},
		components: {
			navbarFlow,
			waterGrid
		},
		methods: {
			tabChange(index) {
				this.current = index;
			},
			handlerRight() {
				this.popupShow = false
			},
			loadCouponList: function(type) {
				this.$Request.getT('/column/apikey/maxd/type/' + this.type + '/back/20/sort/' + this.sort + '/min_id/' + this.min_id +
					'/cid/11').then(res => {

					if (res.code === 1) {
						this.min_id = res.min_id;
						this.waterList = res.data
					}
					uni.hideLoading();
					if (type === "Refresh") {
						uni.stopPullDownRefresh(); // 停止刷新
					}
				})
			},
		}
	}
</script>
