<template>
	<view class="fans-wapper">
		<view class="list">
			<view class="item" v-for="i in 20">
				<view class="left">
					<image class="avatar" src="../../../../static/image/logo.png" mode="scaleToFill" ></image>
					<view class="nickname">传扬美丽的心</view>
				</view>
				<view class="right">
					<view class="attention">
						<u-tag
							:text="temp ? '关注' : '已关注'"
							:bg-color="temp ? '#DD3935' : '#C7C7C7'"
							color="#fff"
							shape="circle"
							:show="show"
							border-color="transparent"
							index="1"
							@click="tagClick" />
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UserFans',
		data() {
			return {
				show: true,
				bgColor: 'red',
				temp: true,
			}
		},
		computed: {
		},
		methods: {
			tagClick(index) {
				console.log(index);
				// this.show = false;
				this.temp = !this.temp;
			}
		}
	}
</script>

<style lang="scss">
	.fans-wapper {
		padding: 0 23rpx 0 37rpx;
		.list {
			.item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 141rpx;
				.left {
					display: flex;
					justify-content: center;
					align-items: center;
					.avatar {
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;
						border: 1px solid red;
						margin-right: 21rpx;
						z-index: -1;
					}
					.nickname {
						font-size: 15px;
					}
				}
				.right {
					.attention {
						.u-tag {
							width: 124rpx;
							text-align: center;
							font-weight: normal;
						}
					}
				}
			}
		}
	}
</style>
