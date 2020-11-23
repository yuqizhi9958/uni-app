<template>
	<view class="step2-wrapper">
		<text class="desc">完成认证需要核实你的身份信息，请拍摄你本人的身份证</text>
		<view class="card">
			<view class="front">
				<image :src="frontUrl" mode="" @click="chooseFront"></image>
			</view>
			<view class="contrary">
				<image :src="contraryUrl" mode="" @click="chooseContrary"></image>
			</view>
		</view>
		<button class="btn" @click="submit">确认提交</button>
	</view>
</template>

<script>
	let _self;
	export default {
		data() {
			return {
				frontUrl: '',
				contraryUrl: ''
			};
		},
		onLoad() {
			_self = this;
		},
		methods: {
			chooseFront() {
				uni.chooseImage({
					sizeType: ["compressed"],
					sourceType: ["album", "camera"],
					success(res) {
						// 获取用户选择图片临时路径
						let tempFilePath = res.tempFilePaths[0];
						_self.frontUrl = tempFilePath;
					},
				})
			},
			chooseContrary() {
				uni.chooseImage({
					sizeType: ["compressed"],
					sourceType: ["album", "camera"],
					success(res) {
						// 获取用户选择图片临时路径
						let tempFilePath = res.tempFilePaths[0];
						_self.contraryUrl = tempFilePath;
					},
				})
			},
			submit() {
				uni.setStorageSync('state', false);
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}
	.step2-wrapper {
		height: 100%;
		padding-top: 35rpx;
		padding-bottom: 28rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		.desc {
			font-size: 13px;
			color: #999999;
		}
		.card {
			position: relative;
			top: -50rpx;
			width: 653rpx;
			height: 883rpx;
			// margin-top: 42rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			box-shadow: 0 0 10px -5px #7A7A7A;
			image {
				width: 335rpx;
				height: 214rpx;
				background-color: skyblue;
			}
		}
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
</style>
