<template>
	<view class="article-wrapper">
		<view class="content">
			<view class="item">
				<view class="left">
					<image class="avatar" :src="url" mode="aspectFill"></image>
				</view>
				<view class="right">
					<text class="title">京剧《战荆楚》</text>
					<text class="synopsis">{{ellipsisContent}}</text>
					<view class="related">
						<text class="author">作者：巴特尔</text>
						<text class="chapter">2020-08-14 15:03</text>
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
				content: '鲲鹏乘风赴前线，战歌起，召必至！解鲲鹏乘风赴前线，战歌起，召必至！解'
			};
		},
		computed: {
			ellipsisContent() {
				return this.content.substring(0, 21) + '...';
			}
		}
	}
</script>

<style lang="scss" scoped>
.article-wrapper {
	padding: 30rpx 28rpx;
	
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
					// white-space: nowrap;
					// overflow: hidden;
					// text-overflow: ellipsis;
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
			}
		}
	}
}
		
</style>
