<template>
	<view class="setp1-wrapper">
		<form @submit="submit" class="form">
			<view class="container">
				<view class="top">
					<view class="shell">
						<text class="depict">企业名称</text>
						<input type="text" value="" placeholder="请输入企业名称"/>
					</view>
					<view class="pic">
						<text class="desc">企业营业执照：</text>
						<view class="suffix">
							<text>企业营业执照</text>
							<image :src="oneValue" mode="" data-id="oneValue" @click="chooseImg"></image>
						</view>
					</view>
					<view class="pic">
						<text class="desc">企业法人身份证照片：</text>
						<view class="suffix">
							<text>身份证正面照</text>
							<image :src="twoValue" mode="" data-id="twoValue" @click="chooseImg"></image>
						</view>
						<view class="suffix">
							<text>身份证反面照</text>
							<image :src="threeValue" mode="" data-id="threeValue" @click="chooseImg"></image>
						</view>
					</view>
					<view class="shell">
						<text class="depict">设置密码</text>
						<input type="text" value="" placeholder="请设置密码（22字符以内）"/>
					</view>
					<view class="shell">
						<text class="depict">再次输入</text>
						<input type="text" value="" placeholder="请再次输入"/>
					</view>
				</view>
				
				<view class="bottom">
					<button class="btn"  form-type="submit">完成</button>
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
			chooseImg(option) {
				let property = option.currentTarget.dataset.id;
				
				uni.chooseImage({
					count: 1,
					sizeType: ['original'],
					success: (res) => {
						this[property] = res.tempFilePaths[0];
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	
	page {
		height: 100%;
	}
	.setp1-wrapper {
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
						&::after,
						&::before {
							content: '';
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							margin: auto;
						}
						&::before {
							width: 52rpx;
							height: 0;
							border-top: 2px solid #999999;
						}
						&::after {
							height: 52rpx;
							width: 0;
							border-left: 2px solid #999999;
							z-index: -1;
						}
						text {
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							margin: auto;
							text-align: center;
							line-height: 366rpx;
							color: #999999;
						}

						image {
							width: 676rpx;
							height: 226rpx;
							border-radius: 6px;
							box-shadow: 0 0 10px -5px #999999;
							vertical-align: bottom;
						}
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
