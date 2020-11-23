<template>
	<view class="login-popup">
		<u-popup v-model="isShow" mode="center" border-radius='10'>
			<view class="pop-wrap u-bg-white u-text-center">
				<view class="pop-phone">158*****8679</view>
				<view class="pop-text u-m-t-20 u-font-20 u-color-9">
					移动账号提供认证服务
				</view>
				<view class="goLogin-btn u-m-t-40 u-font-32 u-color-w" @tap="goLogin">
					一键登录
				</view>

				<view class="other-way u-m-t-30">
					<text class="u-color-9 u-font-26">其他方式登录 </text>
					<u-icon name="arrow-right" color="#999999" size="26"></u-icon>
				</view>

				<view class="text-detail u-color-9">
					登录即同意<text style="color: #2979FF;">《移动账号服务与隐私协议》和《隐私保护政策》</text>并使用本机号登录
				</view>
			</view>

		</u-popup>
	</view>
</template>

<script>
	export default {
		name: 'login-popup',
		data() {
			return {
				isShow: true
			}
		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url: '/pages/layout/login/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pop-wrap {
		padding: 90rpx 30rpx 60rpx;

		.pop-phone {
			font-size: 48rpx;
			font-weight: bold;
			color: #000;
		}

		.goLogin-btn {
			width: 520rpx;
			height: 80rpx;
			line-height: 80rpx;
			background-color: #F4302B;
			border-radius: 40rpx;
		}

		.text-detail {
			width: 480rpx;
			margin: 60rpx auto 0;
			font-size: 22rpx;
			word-wrap: break-word;
			word-break: normal;
		}
	}
</style>
