<template>
	<view class="setting-demo u-bg-f9">


		<view class="setting-cell u-m-b-20" v-for="(item, ix) in cellData" :key="ix">
			<u-cell-group :title="item.title">
				<view v-for="(subItem,index) in item.list" :key="index">
					<u-cell-item v-if="subItem.is_cache" :icon="subItem.icon" @tap="openPage(subItem.path)" :title="subItem.title" :value="cache"></u-cell-item>
					<u-cell-item v-else :icon="subItem.icon" @tap="openPage(subItem.path)" :title="subItem.title"></u-cell-item>
				</view>
			</u-cell-group>
		</view>

		<u-popup v-model="pageShow" mode="center">
			<view class="u-text-center" style="width: 200rpx;line-height: 100rpx;">
				暂未开放</view>
		</u-popup>
	</view>
</template>

<script>
	var CellData = require('./cellJson.json')
	export default {
		name: 'setting-demo',
		data() {
			return {
				pageShow: false,
				cache: '120M',
				cellData: CellData.data
			}
		},
		methods: {
			openPage(path) {
				if (path) {
					uni.navigateTo({
						url: `/pages/mine/${path}/index`
					})
					return
				}
				this.$u.toast("暂未开放!");
				// this.pageShow = true;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.setting-cell {
		background-color: #FFFFFF;
	}
</style>
