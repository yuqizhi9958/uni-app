<template>
	<view class="withdraw-wrapper">
		<form>
			
			<view class="withdraw-item">
				<view class="title">提现方式</view>
				<radio-group @change="radioChange">
					<label class="u-flex u-row-between payment" v-for="(item, index) in items" :key="item.value">
						<view class="cell"><image class="icon" src="../../../static/image/center/life1.png" mode=""></image>{{item.name}}</view>
						<view>
							<radio :value="item.value" :checked="index === current" color="#dd3935" style="transform:scale(0.7)"/>
						</view>
					</label>
				</radio-group>
			</view>
			
			<view class="withdraw-item end">
				<view class="title">提现金额</view>
				<view class="price">
					<view class="icon-price">￥</view><input type="text" value="" class="input-price"/>
				</view>
				<view class="info"><label>当前余额625.21元，</label><label class="all">全部提现</label></view>
			</view>
			
			<view class="action">
				<button form-type="submit" class="submit">提现</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
						value: 'zhifubao',
						name: '支付宝'
					},
					{
						value: 'weixin',
						name: '微信',
						checked: 'true'
					},
				],
				
				current: 0
			}
		},
		methods: {
			// 选中某个单选框时，由radio时触发
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.withdraw-wrapper {
		background: #F9F9F9;
		.withdraw-item {
			padding: 33rpx 32rpx 0 31rpx;
			background: #ffffff;
			margin-bottom: 10rpx;
			.payment {
				padding-top: 23rpx;
				padding-bottom: 24rpx;
			}
			.title {
				font-size: 14px;
				color: #9A9A9A;
				height: 38rpx;
			}
			.cell {
				display: flex;
				align-items: center;
				font-size: 12px;
				color: #343434;
			}
			.icon {
				width: 30rpx;
				height: 30rpx;
				margin-right: 19rpx;
			}
			.price {
				display: flex;
				align-items: baseline;
				flex-direction: row;
				border-bottom: 1px solid #F9F9F9;
				font-weight: bold;
				.icon-price {
					flex-basis: 20px;
					font-size: 20px;
				}
				.input-price {
					flex-grow: 1;
					font-size: 28px;
					display: flex;
					line-height: 4.6em;
					height: auto;
					min-height: auto;
				}
			}
			.info {
				padding-top: 16rpx;
				font-size: 12px;
				color: #999999;
				label {
					transform: scale(.9);
					display: inline-block;
				}
				.all {
					color: #1890FF;
				}
			}
		}
		.end {
			margin-bottom: 0;
			padding-bottom: 30rpx;
		}
		.action {
			background-color: #ffffff;
		}
		.submit {
			background-color: #F9F9F9;
			color: #666666;
			margin: 0 31rpx;
			border-radius: 40rpx;
		}
		
		.submit:after {
			border: none;
		}
	}

</style>
