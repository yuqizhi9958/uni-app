<template>
	<view class="content_box">
		<view class="head_info">
			<view class="title">
				<view class="vip">会员权益</view>
				<view class="detail">详情介绍 > </view>
			</view>
		</view>
		<view class="privilege">
			<view class="privilege_box">
				<image src="../../../../static/image/vip_home.png" mode=""></image>
				<text class="info_text">免费移动馆</text>
			</view>
			<view class="privilege_box">
				<image src="../../../../static/image/vip_time.png" mode=""></image>
				<text class="info_text">视频5分钟</text>
			</view>
			<view class="privilege_box">
				<image src="../../../../static/image/vip_view.png" mode=""></image>
				<text class="info_text">免费展览</text>
			</view>
			<view class="privilege_box">
				<image src="../../../../static/image/vip_bq.png" mode=""></image>
				<text class="info_text">版权认证</text>
			</view>
		</view>
		<view class="head_info">
			<view class="title">
				<view class="vip">
					<text>开通服务</text>
					<image class="openVipImg" src="../../../../static/image/V@2x.png" mode=""></image>
					<text class="ycwVip">原创网会员</text>
				</view>
				<view class="detail">服务条款 > </view>
			</view>
		</view>
		<view class="privilege vipMoneyBox">
			<view class="vipMoney">
				<view class="left">
					<text class="yearVip">
						年卡会员
					</text>
					<br />
					<text class="yearInfo">
						相当于1元/天
					</text>
				</view>
				<view class="right">
					<text class="rmb">
						￥
					</text>
					<text class="number">365</text>
				</view>
			</view>
		</view>
		<view class="head_info">
			<view class="title">
				<view class="vip">
					<text>支付方式</text>
				</view>
			</view>
		</view>
		<view class="pd32">
			<view class="pay_box">
				<view class="icon_box">
					<image class="pay_icon" src="../../../../static/image/zfb_pay.png" mode=""></image>
					<text>
						支付宝
					</text>
				</view>
				<u-radio-group class="radioCheck" :wrap="true" v-model="value" @change="radioGroupChange">
					<u-radio @change="radioChange" name="zfb" shape="circle" active-color="#F4302B">
					</u-radio>
				</u-radio-group>
			</view>
			<view class="pay_box bt_box">
				<view class="icon_box">
					
						<image class="pay_icon" src="../../../../static/image/wx_pay.png" mode=""></image>
					<text>
						微信
					</text>
				</view>
				<u-radio-group class="radioCheck" :wrap="true" v-model="value" @change="radioGroupChange">
					<u-radio @change="radioChange" name="wx" shape="circle" active-color="#F4302B">
					</u-radio>
				</u-radio-group>
			</view>
			<view style="text-align: left;">
				<text class="agree">开通即视为同意<text class="agreement">《原创网用户协议》</text></text>
			</view>
		</view>
		<view class="submit_box">
			<button type="default">立即支付</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: 'apple',
						disabled: false
					},
					{
						name: 'banner',
						disabled: false
					}
				],
				// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				value: 'zfb',
				value1: 'wx',
			};
		},
		methods: {
			// 选中某个单选框时，由radio时触发
			radioChange(e) {
				// console.log(e);
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				// console.log(e);
			}
		}
	}
</script>

<style lang="scss">
	.title {
		display: flex;
		justify-content: space-between;
		padding: 20rpx 30rpx;
	}

	.title .vip {
		font-size: 28rpx;
		font-weight: normal;
		color: #333;
		display: flex;
		align-items: center;
	}

	.title .detail {
		font-size: 20rpx;
		color: #999;
	}

	.privilege {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 30rpx;
		border-bottom: 10rpx solid #F9F9F9;
	}

	.privilege .privilege_box {
		width: 25%;
		text-align: center;
	}

	.privilege .privilege_box image {
		width: 144rpx;
		height: 144rpx;
	}

	.info_text {
		display: inline-block;
		color: #333333;
		margin-top: 24rpx;
		margin-bottom: 24rpx;
	}

	.openVipImg {
		width: 28rpx;
		height: 28rpx;
		margin: 0 20rpx;
	}

	.ycwVip {
		font-weight: 300;
		color: #333333;
		font-size: 24rpx;
	}

	.vipMoneyBox {
		padding: 0 32rpx;
		margin-top: 0;
	}

	.vipMoney {
		height: 128rpx;
		width: 100%;
		padding: 30rpx;
		margin-bottom: 30rpx;
		background: url("~@/static/image/yearVipBg.png") no-repeat center;
		display: flex;
		justify-content: space-between;
		color: #FFFFFF;
		align-items: center;

		.left {
			.yearVip {
				font-size: 32rpx;
			}

			.yearInfo {
				font-size: 20rpx;
			}
		}

		.right {
			.rmb {
				font-size: 26rpx;
			}

			.number {
				font-size: 55rpx;
				font-weight: 900;
			}
		}
	}

	.pd32 {
		padding: 0 32rpx;
		text-align: right;

		.radioCheck {}
		.pay_box {
			position: relative;
			padding: 19rpx 0;
			.pay_icon {
				width: 30rpx;
				height: 30rpx;
				margin-right: 20rpx;
			}
			.icon_box {
				position: absolute;
				display: flex;
				align-items: center;
			}
		}
		.bt_box {
			border-top: 2rpx solid #F9F9F9;
		}
		.agree {
			font-size: 20rpx;
			color: #666;
			.agreement {
				color: #1890FF;
			}
		}
	}
	.submit_box {
		position: absolute;
		bottom: 24rpx;
		width: 100%;
		padding: 0 32rpx;
		button {
			background-color: #F4302B;
			color: #fff;
			border-radius: 48rpx;
		}
	}
	.content_box {
		height: calc(100vh - 88rpx);
		position: relative;
	}
</style>
