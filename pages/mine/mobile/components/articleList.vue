<template>
	<view class="article-wrapper">
		<view class="add">
			<text>添加文章</text>
		</view>
		<view class="content">
			<view class="item">
				<view class="left">
					<image class="avatar" :src="url" mode="aspectFill"></image>
				</view>
				<view class="right">
					<text class="title">京剧《战荆楚》</text>
					<text class="synopsis">鲲鹏乘风赴前线，战歌起，召必至！解...</text>
					<view class="related">
						<text class="author">作者：巴特尔</text>
						<text class="chapter">共1276章</text>
					</view>
					<view class="shop">
						<text class="price">36.8</text>
						<text class="bought">36人已购</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: 'http://img.alicdn.com/imgextra/i1/2207870880605/O1CN01GwvBBW1GL8E16b39j_!!2207870880605.jpg',
			};
		}
	}
</script>

<style lang="scss" scoped>
.article-wrapper {
	padding: 30rpx 28rpx;
	.add {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 160rpx;
		height: 200rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		box-shadow: 0 0 10px -5px #666666;
		&::before,
		&::after {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			margin: auto;
			transform: translateY(-26rpx);
		}
		&::before {
			width: 50rpx;
			height: 0;
			border-top: 4rpx solid #8e9aae;
		}
		&::after {
			width: 0;
			height: 50rpx;
			border-left: 4rpx solid #8e9aae;
		}
		text {
			transform: translateY(36rpx);
			font-size: 20rpx;
			color: #999999;
		}
	}
	
	.content {
		.item {
			display: flex;
			margin-top: 30rpx;
			.left {
				margin-right: 28rpx;
				.avatar {
					width: 240rpx;
					height: 200rpx;
					border-radius: 10rpx;
					vertical-align: bottom;
				}
			}
			.right {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				overflow: hidden;
				.title {
					font-size: 36rpx;
				}
				.synopsis {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					font-size: 26rpx;
					color: #333333;
				}
				.related {
					display: flex;
					font-size: 24rpx;
					.author {
						flex: 1;
						color: #666666;
					}
					.chapter {
						flex: 1;
						color: #999999;
					}
				}
				.shop {
					display: flex;
					.price {
						flex: 1;
						font-size: 32rpx;
						color: #EE1E29;
						&::before {
							content: '￥';
							font-size: 26rpx;
						}
					}
					.bought {
						flex: 1;
						display: flex;
						justify-content: flex-end;
						font-size: 20rpx;
						color: #666666;
					}
				}
			}
		}
	}
}
		
</style>
