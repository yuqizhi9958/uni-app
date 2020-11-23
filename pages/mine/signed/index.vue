<template>
	<view class="signed-wrapper">
		<view class="container">
			<view class="top">
				<view class="day">
					<view class="up">
						<view class="left">
							<text class="char">0</text>
							<text class="char">0</text>
							<text class="char">6</text>
						</view>
						<text class="center">天</text>
						<view class="right">
							<view class="btn">已签到</view>
							<view class="btn active">签到</view>
						</view>
					</view>
					<view class="down">
						<text>虎宝余额</text>
						<text>签到说明</text>
					</view>
				</view>
				<view class="score">
					<view class="desc">
						<view class="super">目前积分<text>1432</text>虎宝</view>
						<view class="sub">连续签到7天可获得更多虎宝机会</view>
					</view>
					<view class="progress">
						<u-line-progress
							striped
							striped-active
							:show-percent="false"
							height="20"
							active-color="#F23530"
							inactive-color="#F23530"
							:percent="((day-1)/6)*100"></u-line-progress>
						<view class="day">
							<block v-for="(num, index) in 7" :key="index">
								<view class="shell">{{num}}天<view v-if="day == num" class="icon"></view><view class="gift" v-if="num == 7">15000000小币</view></view>
							</block>
						</view>
					</view>
					<view class="total">
						<view class="num">参与人数达到<text>1000,021</text>人已参与</view>
					</view>
				</view>
			</view>
			<view class="hr"></view>
			<view class="middle">
				<view class="title">做任务 挣虎宝<navigator class="all" url="">全部任务</navigator></view>
				<view class="list">
					<view class="item">
						<view class="task">
							<view class="icon"></view>
							<text>购物</text>
						</view>
						<view class="state">立马完成</view>
					</view>
					<view class="item">
						<view class="task">
							<view class="icon"></view>
							<text>看视频</text>
						</view>
						<view class="state yes">已完成</view>
					</view>
				</view>
			</view>
			<view class="hr"></view>
			<view class="bottom">
				<button type="default" class="btn"><view class="icon"></view>邀请好友一起参与瓜分<text>10万</text>虎宝大奖</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				day: 4,
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.signed-wrapper {
		.container {
			.top {
				padding: 56rpx 28rpx 37rpx 22rpx;
				width: 750rpx;
				height: 741rpx;
				background: url(../../../static/image/center/hpic2119_s.jpg) no-repeat;
				background-size: cover;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.day {
					.up {
						display: flex;
						justify-content: space-between;
						align-items: center;
						.left {
							width: 235.6rpx;
							display: flex;
							justify-content: space-between;
							.char {
								position: relative;
								width: 74.8rpx;
								height: 101.6rpx;
								background: #FFFFFF;
								font-size: 33px;
								display: flex;
								justify-content: center;
								align-items: center;
								border-radius: 3px;
								color: #F23530;
								z-index: 0;
								&::after {
									content: '';
									position: absolute;
									top: 0;
									left: 0;
									right: 0;
									height: 50%;
									background: linear-gradient(transparent, hsla(0, 0%, 80%, 0.8));
									z-index: -1;
								}
							}
						}
						.center {
							font-size: 34px;
							color: #FFFFFF;
						}
						.right {
							width: 353rpx;
							display: flex;
							justify-content: space-between;
							.btn {
								width: 171rpx;
								height: 80rpx;
								border-radius: 40rpx;
								background: #FFFFFF;
								font-size: 15px;
								font-weight: bold;
								color: #666666;
								text-align: center;
								line-height: 80rpx;
							}
							.active {
								color: #F23530;
							}
						}
					}
					.down {
						padding-top: 28rpx;
						font-size: 12px;
						text {
							color: #FFFFFF;
						}
						text + text::before {
							position: relative;
							top: -2px;
							content: '';
							font-size: 0;
							padding: 10px 3px 6px;
							margin-left: 6px;
							border-left: 1px solid #FFFFFF;
						}
					}
				}
				.score {
					width: 700rpx;
					height: 449rpx;
					border-radius: 6px;
					background: #FFFFFF;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					padding: 41rpx 29rpx 49rpx 27rpx;
					.desc {
						text-align: center;
						.super {
							font-size: 18px;
							font-weight: bold;
							text {
								color: #F23530;
							}
						}
						.sub {
							font-size: 26rpx;
							color: #cdcdcd;
						}
					}
					
					.progress {
						width: 100%;
						/deep/ .u-striped {
							background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.5) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.5) 75%, transparent 75%, transparent);
							background-size: 19px 19px;
							text-align: right;
						}
						/deep/ .u-active {
							justify-content: flex-end;
						}
						.day {
							margin-top: 22rpx;
							width: 100%;
							display: flex;
							flex-wrap: wrap;
							justify-content: space-between;
							font-size: 24rpx;
							color: #999999;
							.shell {
								position: relative;
								.icon {
									position: relative;
									top: -94rpx;
									left: 1rpx;
									background: url(../../../static/image/center/bell.png);
									background-size: 100% 100%;
									width: 36rpx;
									height: 42rpx;
								}
								.gift {
									position: absolute;
									top: -100rpx;
									left: 50%;
									white-space: nowrap;
									border-radius: 16rpx;
									background-image: linear-gradient(to right, #FD4447, #FB5D5F);
									font-size: 18rpx;
									padding: 2rpx 12rpx;
									color: #FFFFFF;
									transform: translateX(-50%);
									&::after {
										display: block;
										content: '';
										position: absolute;
										left: 50%;
										transform: translateX(-50%);
										border: 10rpx solid transparent;
										border-top-color: #FD4447;
									}
								}
							}
						}
					}
					.total {
						.num {
							font-size: 26rpx;
							color: #CDCDCD;
							text {
								color: #F23530;
								font-size: 36rpx;
								font-weight: bold;
							}
						}
					}
				}
			}
			.middle {
				display: flex;
				flex-direction: column;
				height: 309rpx;
				padding: 33rpx 30rpx 7rpx 23rpx;
				.title {
					display: flex;
					justify-content: space-between;
					align-items: baseline;
					font-size: 34rpx;
					font-weight: bold;
					padding-bottom: 42rpx;
					.all {
						font-size: 26rpx;
						color: #666666;
					}
				}
				.list {
					.item {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
						padding: 11rpx 0 15rpx;
						border-bottom: 1px solid #DFDFDF;
						&:last-child {
							border-color: transparent;
						}
						.task {
							display: flex;
							flex-direction: row;
							align-items: center;
							.icon {
								margin-right: 42rpx;
								width: 70rpx;
								height: 70rpx;
								background: skyblue;
							}
							text {
								font-size: 26rpx;
								color: #333333;
							}
						}
						.state {
							font-size: 26rpx;
							color: #F23530;
						}
						.yes {
							color: #666666;
						}
					}
				}
			}
			
			.bottom {
				padding: 42rpx 72rpx 35rpx 67rpx;
				.btn {
					font-size: 28rpx;
					color: #FFFFFF;
					display: flex;
					align-items: center;
					width: 611rpx;
					height: 80rpx;
					border-radius: 40rpx;
					background-image: linear-gradient(to right, #FD4042, #F96D6F);
					.icon {
						width: 29rpx;
						height: 29rpx;
						background-color: skyblue;
						margin-right: 14rpx;
					}
					text {
						font-size: 36rpx;
						font-weight: bold;
					}
				}
			}
		}
	}
	.hr {
		width: 750rpx;
		height: 11rpx;
		background-color: #F7F7F7;
	}
</style>
