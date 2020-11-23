<template>
	<view class="setp1-wrapper">
		<form @submit="submit" class="form">
			<view class="container">
				<view class="top">
					<view class="add_box">
						<image src="../../../../static/image/add.png" mode=""></image>
					</view>
					<text class="desc">个人信息</text>
					<view class="shell">
						<input type="text" value="" placeholder="输入姓名"/>
					</view>
					<view class="shell">
						<input type="text" value="" placeholder="输入个人简介"/>
					</view>
					<view class="shell">
						<input type="text" value="" placeholder="输入个人手机号"/>
					</view>
					<view class="shell">
						<input type="text" value="" placeholder="输入个人邮箱"/>
					</view>
					<view class="shell">
						<input type="text" value="" placeholder="输入个人地址"/>
					</view>
					<view class="pic">
						<text class="desc">身份认证</text>
						<view class="suffix" @click="chooseImg" data-id="twoValue">
							<text>身份证正面照</text>
							<image :src="twoValue" mode=""  ></image>
						</view>
						<view class="suffix" @click="chooseImg" data-id="threeValue">
							<text>身份证反面照</text>
							<image :src="threeValue" mode=""  ></image>
						</view>
					</view>
					<view class="pic">
						<text class="desc">技能认证</text>
						<view class="shell">
							<input type="text" value="" placeholder="请输入所在领域(例如:油画 限10字以内)"/>
						</view>
						<view class="suffix" @click="chooseImg" data-id="oneValue">
							<text>政府、国家等一些奖项或作品</text>
							<image :src="oneValue" mode=""  ></image>
						</view>
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
			},
			chooseImg(option) {
				console.log(option,'option');
				let property = option.currentTarget.dataset.id;
				
				uni.chooseImage({
					count: 1,
					sizeType: ['original'],
					success: (res) => {
						console.log(res,'res')
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
		background-color: #f9f9f9;
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
				.add_box {
					background-color: #fff;
					width: 180rpx;
					height: 180rpx;
					border-radius: 50%;
					box-shadow: 0 0 10px -5px #999999;
					display: flex;
					align-items: center;
					justify-content: center;
					margin: 0 auto;
					image {
						width: 70rpx;
						height: 70rpx;
					}
				}
				.shell {
					display: flex;
					font-size: 14px;
					padding: 28rpx 0 0rpx 0;
					input {
						background-color: #fff;
						height: 72rpx;
						font-size: 14px;	
						flex: 1;
						padding-left: 28rpx;
						box-shadow: 0 0 10px -5px #999999;
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
						background-color: #fff;
						&::after,
						&::before {
							content: '';
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							margin: auto;
							z-index: 1;
						}
						&::before {
							width: 52rpx;
							height: 0;
							border-top: 2px solid #999999;
							z-index: 1;
						}
						&::after {
							height: 52rpx;
							width: 0;
							border-left: 2px solid #999999;
							z-index: 1;
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
							height: 286rpx;
							border-radius: 6px;
							box-shadow: 0 0 10px -5px #999999;
							vertical-align: bottom;
							z-index: 2;
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
