<template>
	<view class="page-home">
		<!-- 导航栏 -->
		<search-nav class="page-header" theme="red" :disabled="true" :search.sync="search.value" :placeholder="search.placeholder"
		 @click-search="routeSearch">
			<template v-slot:right>
				<view class="nav-menu-button" @click="isDisplayPublishMenu = true">
					<u-icon name="list" color="#FFFFFF" size="36"></u-icon>
					<text class="publish">发布</text>
				</view>
			</template>
		</search-nav>

		<!-- 发布悬浮菜单 -->
		<view v-if="isDisplayPublishMenu" class="publish-menu-mask" @click="isDisplayPublishMenu = false">
			<view class="publish-menu">
				<!-- 对话框标记 -->
				<image class="menu-header" src="../../../static/image/menu_top.png" :fade="false" :lazy-load="false" :style="{
            width: '256rpx',
            height: '26.67rpx',
          }">
					</u-image>
					<!-- 菜单列表 -->
					<view class="publish-menu-list">
						<view v-for="menu of publishMenuList" :key="menu.name" class="publish-menu-item" @click="handleMenu(menu)">
							<view class="icon-box">
								<image class="icon" :src="menu.icon" :fade="false" :lazy-load="false" :style="{
                  width: menu.iconSize[0] + 'rpx',
                  height: menu.iconSize[1] + 'rpx',
                }">
								</image>
							</view>
							<text class="menu-item-name">{{ menu.name }}</text>
						</view>
					</view>
			</view>
		</view>
		<u-modal v-model="joinVipShow" :content="joinVipContent" :show-title="false" :mask-close-able="true"
		 :show-cancel-button="true" confirm-color="#FFFFFF" :confirm-style="{backgroundColor:'#DD3935'}" @confirm="confirmEvent"
		 :confirm-text="joinVipconfirm">
		</u-modal>
		<!-- TAB 选项 -->
		<view class="tab-options-box" :style="{ top: tabListTop + 'px' }">
			<!-- TAB 列表 -->
			<u-tabs class="tab-options" :list="tabList" :is-scroll="false" :current="currentTab" @change="handleTab" :font-size="28"
			 :gutter="0" :bold="false" active-color="#ff4b4c">
			</u-tabs>
			<!-- 弹窗：更多选择 -->
			<more-popup :tabShow="isDisplayMoreTab" @tabPop="popHanlder"></more-popup>
		</view>

		<!-- 页面主内容 -->
		<view class="page-body" :style="{ marginTop: '80rpx' }">
			<!-- 瀑布流 -->
			<water-grid class="water-list" :waterList="waterList"></water-grid>
			<!-- 加载更多 -->
			<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
			<!-- 登陆框 -->
			<login-popup></login-popup>
		</view>
	</view>
</template>

<script>
	import navbarFlow from '../../../components/navbar/navbar.vue'
	import waterGrid from './components/waterGrid.vue'
	import LoginPopup from './components/login-popup.vue'
	import morePopup from './components/more-popup.vue'
	import SearchNav from '../../../components/search/search-nav.vue'

	const systemInfo = uni.getSystemInfoSync()

	export default {
		name: 'home',
		data() {
			return {
				// 搜索
				search: {
					value: '',
					placeholder: '三体2-黑暗森林',
				},
				// TAB 纵轴位置
				tabListTop: systemInfo.statusBarHeight + 44,
				currentTab: 0,
				// 前一个非更多选择的 TAB，当更多选择弹窗退出后，需要返回到前面的一个 TAB
				prevNotMoreTab: 0,
				isDisplayMoreTab: false,
				// 发布菜单
				publishMenuList: [{
						name: '发布文章',
						url: '/',
						icon: '../../../static/image/indexMenu/article.png',
						iconSize: [36, 36],
					},
					{
						name: '发布短视频',
						url: '/',
						icon: '../../../static/image/indexMenu/camera.png',
						iconSize: [38, 32],
					},
					{
						name: '创建移动馆',
						url: '/',
						icon: '../../../static/image/indexMenu/house.png',
						iconSize: [37, 37],
					},
					{
						name: '文化展览',
						url: '/',
						icon: '../../../static/image/indexMenu/picture.png',
						iconSize: [41, 36],
					},
					{
						name: '版权认证',
						url: '/',
						icon: '../../../static/image/indexMenu/safe.png',
						iconSize: [42, 45],
					},
				],
				isDisplayPublishMenu: false,

				waterList: [],
				min_id: 1,
				type: 1,
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
				}],
				navObj: {
					icon: 'list',
					text: '发布'
				},
				loadStatus: 'loadmore',
				// 加入会员，创建移动馆确认弹窗控制状态
				joinVipShow: false,
				// 是否是会员
				isVip: true,
				// 加入会员，创建移动馆确认弹窗内容
				joinVipContent: '',
				// 加入会员，创建移动馆确认弹窗确认按钮内容
				joinVipconfirm: ''
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
			waterGrid,
			LoginPopup,
			morePopup,
			SearchNav,
		},
		methods: {
			handleTab(index) {
				this.currentTab = index
				if (!(this.isDisplayMoreTab = index === 4)) this.prevNotMoreTab = index
			},
			popHanlder() {
				this.isDisplayMoreTab = false
				this.currentTab = this.prevNotMoreTab
			},
			loadCouponList: function(type) {

				this.$Request.getT('/column/apikey/maxd/type/' + this.type + '/back/20/sort/' + this.sort + '/min_id/' + this.min_id +
					'/cid/11').then(res => {

					if (res.code === 1) {
						// if (this.page === 1) {
						// 	this.couponlist = [];
						// }
						this.min_id = res.min_id;
						// res.data.forEach(d => {
						// 	this.couponlist.push(d);
						// });
						this.waterList = res.data
					}
					uni.hideLoading();
					if (type === "Refresh") {
						uni.stopPullDownRefresh(); // 停止刷新
					}
				})
			},
			routeSearch() {
				uni.navigateTo({
					url: '/pages/search/index'
				})
			},
			handleMenu(menu) {
				console.log(menu)
				switch (menu.name) {
					case '创建移动馆':
						this.joinVipShow = true
						if (this.isVip) {
							this.joinVipContent = "是否立即创建我的移动馆"
							this.joinVipconfirm = "立即创建"
						} else {
							this.joinVipContent = "成为会员才能创建移动馆"
							this.joinVipconfirm = "我要加入"
						}
						break;

					default:
						break;
				}
				console.log(JSON.stringify(menu))

			},
			confirmEvent() {
				console.log('confirmEvent')
				if (this.joinVipconfirm == '立即创建'){
					uni.navigateTo({
						url: '/pages/home/index/pages/publishMobilePavilion'
					})
				} else {
					uni.navigateTo({
						url: '/pages/home/index/pages/registeredMember'
					})
				}
		}
	},
	}
</script>

<style>
	/* page不能写带scope的style标签中，否则无效 */
	page {
		background-color: #F9F9F9;
	}
</style>

<style scoped lang="scss">
	$paddingHorizonal: 32rpx;

	.page-home {}

	.tab-options-box {
		position: fixed;
		z-index: 2;
		left: 0;
		width: 750rpx;
		padding: 0 $paddingHorizonal 0 0;
		background-color: #fff;
	}

	.tab-view {
		flex: 1 1 auto;
		overflow: auto;
		background-color: #F9F9F9;
	}

	.nav-menu-button {
		padding-left: 30rpx;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;

		.publish {
			color: #FFFFFF;
			font-size: 18rpx;
		}
	}

	// 发布菜单
	.publish-menu {
		position: fixed;
		right: $paddingHorizonal;
		top: var(--status-bar-height);
		z-index: 3;
		overflow: hidden;
		margin-top: 44px;
		$radius: 12rpx;
		border-bottom-left-radius: $radius;
		border-bottom-right-radius: $radius;

		.menu-header {
			display: block;
		}
	}

	.publish-menu-list {
		padding: 0 29rpx;
		color: #fff;
		background-color: #666;
		font-size: 24rpx;
	}

	.publish-menu-item {
		display: flex;
		align-items: center;
		height: 86rpx;
		padding: 0 8rpx;
		border-bottom: 0.5px solid #999;

		&:last-child {
			border-bottom: 0;
		}

		.icon-box {
			flex: 0 0 60rpx;
			display: flex;
			justify-content: flex-start;
		}
	}

	.publish-menu-mask {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 992;
		width: 750rpx;
		height: 100%;
	}
</style>
