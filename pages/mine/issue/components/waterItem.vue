<template>
	<view class="water-item">
		<view class="demo-warter" v-for="(item, index) in list" :key="index" @click="goDetail(item.id)">
			<!-- 警告：微信小程序不支持嵌入lazyload组件，请自行如下使用image标签 -->
			<!-- #ifndef MP-WEIXIN -->
			<u-lazy-load threshold="-450" border-radius="10" :image="item.itempic" :index="index" img-mode="scaleToFill" height="431"></u-lazy-load>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<view class="demo-img-wrap">
				<image class="demo-image" :src="item.itempic" mode="widthFix"></image>
			</view>
			<!-- #endif -->
			<view class="desc">
				明朝双婴抱睡玉雕
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		props:{
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				
			}
		},
		watch: {
			list: {
				handler(newVal, oldVal) {
				}
			}
		},
		methods:{
			goDetail(id) {
				uni.navigateTo({
					url: `/pages/home/video-detail/detail?id=${id}`
				});
			},
		},
	}
</script>

<style lang="scss" scoped>
	.demo-warter {
		border-radius: 8px;
		margin: 30rpx 15rpx;
		background-color: #ffffff;
		position: relative;
		border-radius: 10rpx;
		overflow: hidden;
	}


	.demo-image {
		width: 100%;
		border-radius: 4px;
	}
	
	.desc {
		position: absolute;
		display: flex;
		padding-left: 17rpx;
		align-items: center;
		height: 67rpx;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba($color: #666666, $alpha: 0.5);
		color: #FFFFFF;
		font-size: 28rpx;
	}

</style>

