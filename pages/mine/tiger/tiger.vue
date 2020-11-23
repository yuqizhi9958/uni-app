<template>
	<view class="tiger-wrapper">
		<view class="tiger-list">
			<view class="tiger-item" v-for="i in 20">
				<view class="item-top">
					<view class="">富春山居图</view>
					<view class="">+ 23.56</view>
				</view>
				<view class="item-buttom">
					<view class="">2020.04.12 12: 56</view>
					<view class="">总收益 56.23</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onNavigationBarButtonTap(e) {
			let index = e.index;
			if (index == 0) {
				uni.navigateTo({
					url: '/pages/mine/withdraw/withdraw'
				})
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.tiger-list {
		display: flex;
		flex-direction: column;
		margin: 0 20rpx;
		.tiger-item {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			border-top: 1px solid #F9F9F9;
			padding: 19rpx 0 22rpx 0;
			.item-top {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				font-size: 14px;
				font-weight: bold;
			}
			.item-buttom {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				font-size: 12px;
				color: #666666;
			}
		}
	}
</style>
