<template>
	<view class="water-item">
		<view class="demo-warter" v-for="(item, index) in list" :key="index" @click="goDetail(item.id)">
			<!-- 警告：微信小程序不支持嵌入lazyload组件，请自行如下使用image标签 -->
			<!-- #ifndef MP-WEIXIN -->
			<u-lazy-load threshold="-450" border-radius="10" :image="item.itempic" :index="index"></u-lazy-load>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<view class="demo-img-wrap">
				<image class="demo-image" :src="item.itempic" mode="widthFix"></image>
			</view>
			<!-- #endif -->
			<view class="demo-text-wrap u-p-20">
				<view class="demo-title">
					{{item.itemdesc}}
				</view>
				<view class="demo-contents u-flex u-row-left">
					<view class="demo-info-left">
						<u-avatar :src="item.couponurl" size="50"></u-avatar>
					</view>
					<view class="demo-info-left u-m-l-10">
						<view class="demo-authen u-flex u-row-between">
							<view class="demo-name u-font-24">孙智礼</view>
							<view class="demo-tag-text">转发</view>
						</view>
		
						<view class="demo-attr u-font-20" style="color: #666;">
							著名雕刻艺术家
						</view>
		
					</view>
		
				</view>
			</view>
			<!-- 微信小程序无效，因为它不支持在template中引入组件 -->
			<u-icon name="play-circle-fill" color="#f40" size="34" class="u-close" @click="goDetail(item.id)"></u-icon>
		</view>
	</view>
	
</template>

<script>
	export default {
		props:{
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				
			}
		},
		methods:{
			goDetail(id) {
				uni.navigateTo({
					url: `/pages/home/video-detail/detail?id=${id}`
				});
				// this.$refs.uWaterfall.remove(id);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.demo-warter {
		border-radius: 8px;
		margin: 30rpx 15rpx;
		background-color: #ffffff;
		position: relative;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-title {
		margin-bottom: 5rpx;
		font-size: 30rpx;
		color: $u-main-color;
	}

	.demo-tag {
		display: flex;
		margin-top: 8px;
	}

	.demo-tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.demo-tag-text {
		border: 1px solid #ECB91B;
		color: #ECB91B;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}

	.demo-price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
	}

	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}
</style>

