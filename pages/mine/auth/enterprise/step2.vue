<template>
	<view class="setp2-wrapper">
		<form class="form">
			<view class="container">
				<view class="top">
					<view class="shell">
						<text class="depict">企业名称</text>
						<input type="text" value="" placeholder="请输入企业名称"/>
					</view>
					<view class="shell">
						<text class="depict">设置密码</text>
						<input type="text" value="" placeholder="请设置密码（22字符以内）"/>
					</view>
					<view class="pic">
						<text class="desc">企业营业执照：</text>
						<view class="suffix">
							<view class="state">待审核</view>
						</view>
					</view>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oneValue: '',
				twoValue: '',
				threeValue: ''
			};
		},
		methods: {
			submit() {
				uni.navigateTo({
					url: '/pages/mine/auth/enterprise/step2'
				})
			},
		}
	}
</script>

<style lang="scss">
	
	page {
		height: 100%;
	}
	.setp2-wrapper {
		height: 100%;
		padding: 25rpx 38rpx 29rpx;
		margin-bottom: 29rpx;
		.container {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-bottom: 29rpx;
			.top {
				.shell {
					display: flex;
					font-size: 14px;
					padding: 30rpx 0 28rpx 0;
					border-bottom: 1px solid #F9F9F9;
					input {
						margin-left: 39rpx;
						font-size: 14px;	
						flex: 1;
					}
				}
				.pic {
					margin-top: 30rpx;
					.desc {
						font-size: 14px;
					}
					.suffix {
						position: relative;
						margin-top: 21rpx;

					}
					.state {
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 43px;
						color: #FFFFFF;
						font-weight: bold;
						width: 684rpx;
						height: 266rpx;
						border-radius: 6px;
						background-color: #858585;
					}
				}
			}
			.bottom {
				.btn {
					width: 686rpx;
					height: 80rpx;
					background: #F23530;
					color: #FFFFFF;
					font-size: 16px;
					border-radius: 40rpx;
					margin-top: 23rpx;
				}
			}
		}
		
	}
</style>
