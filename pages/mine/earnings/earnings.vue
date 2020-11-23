<template>
	<view class="earnings-wrapper">
		<view class="earnings-list">
			<view class="earnings-item" v-for="(item, index) in 20" :key="index">
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
					url: '../withdraw/withdraw'
				})
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.earnings-list {
		display: flex;
		flex-direction: column;
		margin: 0 20rpx;
		.earnings-item {
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
