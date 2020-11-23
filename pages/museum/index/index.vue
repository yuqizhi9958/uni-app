<template>
	<view class="home u-bg-f9">

        <!-- 搜索框 -->
		<navbar-flow :isAll="navObj.isAll"></navbar-flow>

		<view class="swiper-wrap-block u-m-t-10">
			<u-swiper :list="swiperList" :effect3d="true" mode="dot"></u-swiper>
		</view>
		<view class="grid-wrap-block u-m-t-10 u-bg-white">
			<center-grid :list="museGrid" :gridCol="5"></center-grid>
		</view>
		<view class="notice-block u-m-t-10">
			<u-notice-bar mode="vertical" type="error" :list="noticeList" :more-icon="true"></u-notice-bar>
		</view>
		<!-- 分割线 -->
		<view class="division-block u-m-t-10 u-p-20 u-relative u-bg-white">
			<u-divider half-width="40" color="#333" border-color="#333">经典推荐</u-divider>
			<view class="u-absolute" style="top: 12rpx;right: 20rpx;">
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
		<view class="goods-block">
			<view class="goods-list u-p-20 u-bg-white">

				<view class="goods-item u-flex u-row-between u-m-b-20" v-for="(item, index) in goodsList" @tap="goDetail(item.id)"
				 :key="index">
					<view class="goods-content">
						<view class="goods-title u-m-b-10 u-font-md u-line-2">{{item.title|| '-'}}</view>
						<view class="u-flex u-row-left">
							<image class="goods-peolpe" src="../../../static/image/qq.png" mode="widthFix"></image>
							<view class="goods-name u-m-l-10 u-font-xs">
								<view class="u-color-6 u-font-24">陈志贵</view>
								<text class="u-color-9 u-font-20">{{item.author_name|| '-'}}</text>
							</view>
						</view>
						<view class="goods-other u-m-t-10 u-flex u-row-between">
							<view class="goods-other-item u-font-xs">
								<u-icon name="chat" color="#666" size="26" class="u-m-r-10"></u-icon><text> 200</text>
							</view>
							<view class="goods-other-item u-font-xs">
								<u-icon name="eye" color="#666" size="26" class="u-m-r-10"></u-icon><text> 50</text>
							</view>
							<view class="goods-other-item u-font-xs">
								<u-icon name="zhuanfa" color="#666" size="26" class="u-m-r-10"></u-icon><text> 20</text>
							</view>
						</view>
					</view>
					<view class="goods-img u-m-l-10">
						<image class="goods-pic u-border-5" :src="item.cover"></image>
					</view>
				</view>


				<u-empty mode="list" v-if="isGoodsList"></u-empty>
			</view>
		</view>
	</view>
</template>

<script>
	import navbarFlow from '../../../components/navbar/navbar.vue'
	import centerGrid from '../../mine/center/components/grid.vue'
	import {
		MuseGrid
	} from '../../../common/json/grid.js'
	export default {
		name: 'home',
		data() {
			return {
				navObj: {
					isAll: true
				},
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
				noticeList: [
					'寒雨连江夜入吴',
					'平明送客楚山孤',
					'洛阳亲友如相问',
					'一片冰心在玉壶'
				],
				goodsList: [],
				isGoodsList: true,
				museGrid: MuseGrid
			}
		},
		components: {
			navbarFlow,
			centerGrid
		},
		onLoad() {
			this.$Request.get(
				`/api/news?column=id,post_id,title,author_name,cover,published_at&
minId=121354&time=1590653053190&pageSize=10`).then(
				res => {
					this.goodsList = res || []

					this.isGoodsList = false;

				});
		},
		methods: {
			goDetail(id) {
				uni.navigateTo({
					url: `/pages/museum/detail/detail?id=${id}`
				});
			},
			goSearch() {
				uni.navigateTo({
					url: '/pages/search/index'
				});
			}
		}
	}
</script>
<style scoped lang="scss">
	.goods-peolpe {
		width: 54rpx;
		height: 54rpx;
	}

	.goods-pic {
		width: 400rpx;
		height: 200rpx;
		border-radius: 10rpx;
	}
</style>
