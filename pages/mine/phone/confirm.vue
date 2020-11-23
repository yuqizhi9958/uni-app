<template>
	<view class="modify-wrapper">
		<image src="../../../static/image/logo.png" mode=""></image>
		<text>文化报国 原创兴国</text>
		<form @submit="confirmOperate" @reset="">
			<input type="text" value="" placeholder="请输入新手机号" placeholder-style="color:#999999"/>
			<view class="cell">
				<input type="text" value="" placeholder="请输入验证码" placeholder-style="color:#999999" />
				<button type="default" class="auth">获得验证码</button>
			</view>
			<button form-type="submit" class="next">确定</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			confirmOperate(e) {
				// console.log(e);
				uni.navigateBack({
					delta: 2
				});
			}
		}
	}
</script>

<style lang="scss">
	.modify-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 53rpx;
		image {
			width: 150rpx;
			height: 105rpx;
			padding-bottom: 31rpx;
		}
		text {
			font-size: 10px;
			word-spacing: 1em;
		}
		input {
			font-size: 14px;
			margin-top: 49rpx;
			// height: ;
			border-bottom: 1px solid #F9F9F9;
			padding-bottom: 30rpx;
		}
		.cell {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: baseline;
			width: 686rpx;
			.auth {
				width: 272rpx;
				height: 64rpx;
				background: #CECECE;
				border-radius: 32rpx;
				font-size: 14px;
				color: #FFFFFF;
				border: none;
				line-height: 64rpx;
				margin: 0;
			}
			.auth::after {
				content: none;
			}
		}
		.next {
			margin-top: 50rpx;
			width: 647rpx;
			height: 78rpx;
			background-color: #dd3935;
			border-radius: 39rpx;
			line-height: 78rpx;
			color: #FFFFFF;
			font-size: 16px;
			font-weight: bold;
			letter-spacing: 3px;
		}
		.next:after {
			content: none;
		}
		
	}
</style>
