<template>
	<u-navbar :is-back="isBack" title="" :background="background">
		<view class="u-w-100">
			<view class="slot-wrap">
				<view class="search u-flex u-row-left"
				 :class="{'copy-search': isAll}"
				 @tap="goSearch">
					<view class="u-m-l-20 u-m-t-20 copy-logo">
						<image style="width: 55rpx;height: 38rpx;" src="../../static/image/logo.png" mode="scaleToFill"></image>
					</view>
					<view class="u-font-24 u-m-l-20 copy-ploh">
						{{placeholder}}
					</view>
				</view>
				<view class="copy-top-icon u-text-center u-color-w" v-if="navIcon">
					<u-icon :name="navIcon" size="28"></u-icon>
					<view class="u-font-24">{{navText}}</view>
				</view>
			</view>
			
		</view>
		
	</u-navbar>
</template>

<script>
	export default {
		name: 'navbar-flow',
		props:{
			isBack: {
				type: Boolean,
				default: false
			},
			placeholder: {
				type: String,
				default: '书法馆李礼书法《海纳百川》上线'
			},
			navIcon: {
				type: String
			},
			navText: {
				type: String
			},
			isAll:{
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				background: {
					backgroundColor: '#F4302B'
				},
			}
		},
		methods:{
			goSearch() {
				uni.navigateTo({
					url: '/pages/search/index'
				});
			},
		}
	}
</script>

<style scoped lang="scss">
	.slot-wrap {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 20rpx 30rpx;
	    .search{
			width: 580rpx;
			height: 64rpx;
			line-height: 64rpx;
			background-color: #ec6f6f;
			border-radius: 30rpx;
			color: #FFFFFF;
		}
		.copy-search {
			width: 690rpx;
		}
	}
</style>
