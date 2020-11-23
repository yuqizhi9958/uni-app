<template>
	<view class="center-grid">
		<u-grid :col="5" :border="false">
			<u-grid-item v-for="(item,index) in list" :key="index" @tap="openPage(item)">
				<image style="width: 48rpx;height: 48rpx;" :src="item.url" mode="widthFix"></image>
				<view class="grid-text u-m-t-10">{{item.name}}</view>
			</u-grid-item>
		</u-grid>

	</view>
</template>

<script>
	export default {
		name: 'center-grid',
		props: {
			gridCol: {
				type: Number,
			},
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				pageShow: false
			}
		},
		methods: {
			openPage(params) {
				if(params.path) {
					uni.navigateTo({
						url: `/pages/mine/${params.path}/index`
					})
					return
				}
				this.$u.toast("暂未开放!");
			}
		}
	}
</script>

<style>
</style>
