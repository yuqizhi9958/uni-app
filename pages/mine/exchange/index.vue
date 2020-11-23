<template>
	<view class="exchange-wrapper">
		<view class="list">
			<view class="item" v-for="(item,index) in 6">
				<view class="left">
					<!-- #ifndef MP-WEIXIN -->
					<u-lazy-load threshold="-450" border-radius="10" :image="url" :index="index" img-mode="scaleToFill" height="200"></u-lazy-load>
					<!-- #endif -->
					<!-- #ifdef MP-WEIXIN -->
					<view class="demo-img-wrap">
						<image class="demo-image" :src="url" mode="scaleToFill"></image>
					</view>
					<!-- #endif -->
				</view>
				<view class="right">
					<view class="up">
						<text class="title">京剧《战荆楚》</text>
						<text class="desc">2.0基础学习绘画课2.0基础学习绘画课2.0基础学习绘画课</text>
						<view class="shell">
							
							<text class="author">作者：巴特尔</text>
							<view class="tag">已兑换</view>
						</view>
					</view>
					<view class="down">
						<text class="price">36.8</text>
					</view>
				</view>
				<!-- <view class="right"></view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// url: 'http://img.alicdn.com/imgextra/i1/2207870880605/O1CN01GwvBBW1GL8E16b39j_!!2207870880605.jpg',
				url: 'http://wx4.sinaimg.cn/mw600/006G49ezgy1ggftcva9hpj30c8093jsm.jpg'
				
			};
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.exchange-wrapper {
	padding-top: 11rpx;
	.list {
		.item {
			padding: 19rpx 32rpx 31rpx 29rpx;
			display: flex;
			border-bottom: 1px solid #F9F9F9;
			.left {
				flex: 0 0 200rpx;
			}
			.right {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding-left: 29rpx;
				overflow: hidden;
				.up {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					overflow: hidden;
					.title {
						font-size: 36rpx;
						color: #333333;
					}
					.desc {
						font-size: 28rpx;
						color: #333333;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.shell {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						.author {
							font-size: 20rpx;
							color: #999999;
						}
						.tag {
							// height: 36rpx;
							line-height: 36rpx;
							font-size: 24rpx;
							padding-left: 20rpx;
							padding-right: 20rpx;
							background: #f8d7d7;
							color: #DD3935;
							border-radius: 18rpx;
						}
					}
				}
				.down {
					.price {
						font-size: 48rpx;
						color: #DD3935;
						&::after {
							content: '贝';
							font-size: 28rpx;
						}
					}
				}
			}
		}
	}
}
</style>
