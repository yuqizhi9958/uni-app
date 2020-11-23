<template>
	<view class="setp1-wrapper">
		<form @submit="submit" class="form">
			<view class="container" :class="!state ? 'audit':''">
				<view class="top">
					<text class="intro">认证信息将用于开直播，收益体现等，与帐号唯一绑定，我们会对信息进行严格保密</text>
					<view class="shell">
						<text class="depict">真实姓名</text>
						<input type="text" value="" placeholder="请输入您的真实姓名"/>
					</view>
					<view class="shell">
						<text class="depict">身份证号</text>
						<input type="text" value="" placeholder="请输入您的身份证号"/>
					</view>
				</view>
				
				<view class="shell" v-if="!state">
					<view class="state">待审核</view>
				</view>
				
				<view class="bottom" v-if="state">
					<checkbox-group @change="change">
						<label class="choose">
							<checkbox value="yes" :checked="false" color="#F23530" style="transform:scale(0.5)"/>已阅读并同意<navigator class="clause" url="">用户协议及隐私条款</navigator>
						</label>
					</checkbox-group>
					<button class="btn" :disabled="choose !== 'yes'" :class="disabledStyle"  form-type="submit">统一协议并认证</button>
				</view>
			</view>
		</form>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				choose: 'no',
				state: true,
			};
		},
		computed: {
			disabledStyle() {
				return this.choose !== 'yes' ? 'mask': '';
			}
		},
		onLoad(option) {
		},
		onShow() {
			this.state = uni.getStorageSync('state');
		},
		methods: {
			change(e) {
				this.choose = e.detail.value[0]
			},
			submit() {
				console.log('提交');
				uni.navigateTo({
					url: '/pages/mine/auth/person/step2'
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
		padding: 25rpx 44rpx 29rpx 31rpx;
		.container {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.top {
				.intro {
					font-size: 13px;
					color: #999999;
					margin-bottom: 23rpx;
				}
				.shell {
					display: flex;
					font-size: 14px;
					margin-bottom: 30rpx;
					padding: 30rpx 0 28rpx 0;
					border-bottom: 1px solid #F9F9F9;
					input {
						margin-left: 39rpx;
						font-size: 14px;
					}
				}
			}
			.bottom {
				.choose {
					font-size: 12px;
					display: flex;
					align-items: center;
					.clause {
						margin-left: 17rpx;
						color: #F23530;
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
				.mask {
					background: #FA817E;
				}
			}
			.state {
				// position: relative;
				// top: -450rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 43px;
				color: #FFFFFF;
				font-weight: bold;
				width: 686rpx;
				height: 400rpx;
				border-radius: 6px;
				background-color: #858585;
			}
		}
		
		.audit {
			justify-content: flex-start;
		}
		
	}
</style>
