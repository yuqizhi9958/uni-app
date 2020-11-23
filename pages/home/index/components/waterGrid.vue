<template>
	<view class="wrap u-w-100">
		<!-- <u-button @click="clear">清空列表</u-button> -->
		<u-waterfall v-model="flowList" ref="uWaterfall">
			<template v-slot:left="{leftList}">
				<water-item :list="leftList"></water-item>
			</template>
			<template v-slot:right="{rightList}">
				<water-item :list="rightList"></water-item>
			</template>
		</u-waterfall>
	</view>
</template>

<script>
	import waterItem from './waterItem.vue'
	export default {
		props: {
			waterList: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				flowList: [],
				list: []
			}
		},
		components: {
			waterItem
		},
		watch: {
			waterList: {
				handler(newVal, oldVal) {
                     if(newVal) this.addRandomData();
				},
				deep: true
			}
		},
		methods: {
			addRandomData() {
				for (let i = 0; i < 10; i++) {
					let index = this.$u.random(0, this.waterList.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.waterList[index]))
					item.id = this.$u.guid();
					this.flowList.push(item);

				}
			},
			goDetail(id) {
				uni.navigateTo({
					url: `/pages/home/video-detail/detail?id=${id}`
				});
				// this.$refs.uWaterfall.remove(id);
			},
			// clear() {
			// 	this.$refs.uWaterfall.clear();
			// }
		}
	}
</script>

<style>
	/* page不能写带scope的style标签中，否则无效 */
	page {
		background-color: rgb(240, 240, 240);
	}
</style>

<style lang="scss" scoped>
.wrap{
	padding-left: 15rpx;
	padding-right: 15rpx;
}
</style>
