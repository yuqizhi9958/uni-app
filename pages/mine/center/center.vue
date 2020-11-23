<template>
	<view class="center-home">
		<view class="center-header">
			<view class="u-flex u-row-right">
				<view class="center-set u-rela" @tap="goMessage">
					<u-badge type="error" count="7" :offset="[-10, -10]"></u-badge>
					<image class="setting-img" src="../../../static/image/center/bell.png" mode="widthFix"></image>
				</view>
				<view class="center-set u-m-l-50" @tap="goSetting">
					<image class="setting-img" src="../../../static/image/center/setting.png" mode="widthFix"></image>
				</view>

			</view>
			<view class="center-people u-flex u-row-between">
				<view class="center-avatar">
					<view class="center-ava-left u-inb u-rela">
						<u-avatar size="120" src="../../../static/image/center/hpic2119_s.jpg"></u-avatar>
						<view class="authen u-abso" style="bottom: 0;left: 16rpx;">
							<view class="autheninfo u-font-20 u-bg-white u-text-center">已认证</view>
						</view>

					</view>
					<view class="center-mid u-inb u-m-l-20">
						<view class="mid-title u-font-28">FSDFDGERDSF</view>
						<u-button size="mini" shape="circle" class="custom-style u-m-t-10 u-m-b-10" style="background-color: #EDE36D;color: #DD3935;">瓷器专家</u-button>
						<view class="mid-text u-font-20">推荐码：YC100369</view>
					</view>
				</view>
				<view class="center-code">
					<image class="code-pic" style="width: 48rpx;height: 48rpx;" src="../../../static/image/center/code.png" mode="widthFix"></image>
				</view>
			</view>

			<view class="head-grid u-text-center u-m-t-30 u-m-b-30">
				<u-row gutter="20" justify="center">
					<u-col span="3">
						<view class=""  @tap="goEarnings">
							<view class="head-grid-tit">总收益</view>
							<view class="head-grid-count u-m-t-10">156.23</view>
						</view>
					</u-col>
					<u-col span="3">
						<view class="" @tap="goTiger">
							<view class="head-grid-tit">虎宝</view>
							<view class="head-grid-count u-m-t-10">156</view>
						</view>
					</u-col>
					<u-col span="3">
						<view class="" @tap="goSocial">
							<view class="head-grid-tit">粉丝</view>
							<view class="head-grid-count u-m-t-10">15W</view>
						</view>
					</u-col>
					<u-col span="3">
						<view class="head-grid-tit">关注</view>
						<view class="head-grid-count u-m-t-10">156</view>
					</u-col>
				</u-row>
			</view>

			<view class="get-explain">
				<view class="explain-btn u-font-32">获得收益说明</view>
			</view>
		</view>

		<view class="order-wrap u-rela">
			<image class="order-bg u-abso" src="../../../static/image/center/arc.png" mode="widthFix"></image>
			<view class="order-info">
				<!-- <view class="order-title u-font-32">我的订单</view> -->
				<u-cell-item title="我的订单" hover-class="cell-hover-class" value="查看全部"></u-cell-item>
				<center-grid :list="orderGrid" :gridCol="5"></center-grid>
			</view>
		</view>
		<u-gap height="10" bg-color="#F9F9F9"></u-gap>
		<view class="life-wrap u-p-20">
			<view class="life-info">
				<view class="order-title u-font-32">我的生活</view>
				<center-grid :list="lifeGrid" :gridCol="5"></center-grid>
			</view>
		</view>
	</view>
</template>

<script>
	import centerGrid from './components/grid.vue'
	import {
		OrderGrid,
		LifeGrid
	} from '../../../common/json/grid.js'
	export default {
		name: 'center-home',
		data() {
			return {
				orderGrid: OrderGrid,
				lifeGrid: LifeGrid
			}
		},
		components: {
			centerGrid
		},
		methods: {
			goSetting() {
				uni.navigateTo({
					url: '/pages/mine/setting/setting'
				});
			},
			goMessage() {
				uni.navigateTo({
					url: '/pages/mine/message/index'
				});
			},
			goEarnings() {
				uni.navigateTo({
					url: '/pages/mine/earnings/earnings'
				})
			},
			goTiger() {
				uni.navigateTo({
					url: '/pages/mine/tiger/tiger'
				})
			},
			goSocial() {
				uni.navigateTo({
					url: '/pages/mine/social/social?socialId=1'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.center-header {
		padding: 20rpx 30rpx 0;
		background-color: #fe5354;

		.setting-img {
			height: 36rpx;
			width: 36rpx;
		}
	}

	.center-people {
		.autheninfo {
			margin: o auto;
			width: 90rpx;
			height: 30rpx;
			border-radius: 20rpx;
			color: #FE5455;
		}
	}

	.head-grid {
		.head-grid-tit {
			font-size: 24rpx;
		}

		.head-grid-count {
			font-size: 32rpx;
		}
	}

	.get-explain {
		width: 240rpx;
		height: 80rpx;
		line-height: 80rpx;
		margin: 0 auto;
		border-radius: 10rpx;
		text-align: center;
		background-color: #e5d14a;
	}

	.order-wrap {
		.order-bg {
			top: -30rpx;
			left: 0;
			width: 100%;
			height: 35rpx;
		}

	}
</style>
