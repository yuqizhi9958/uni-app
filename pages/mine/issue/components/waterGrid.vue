<template>
	<view class="wrap u-w-100">
		<u-waterfall v-model="flowList" ref="uWaterfall" v-if="state === ''">
			<template v-slot:left="{leftList}">
				<!-- <view class="add"><text>添加音视频</text></view> -->
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
				list: [],
				state: '',
			}
		},
		components: {
			waterItem
		},
		watch: {
			waterList: {
				handler(newVal, oldVal) {
					if (newVal.state === 'refresh') {
						this.flowList = [];
						this.state = 'refresh';
					} else {
						if(newVal) this.addRandomData();
						this.state = '';
					}
				},
				deep: true,
				immediate: true
			}
		},
		methods: {
			addRandomData() {
				// debugger;
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
			},
		},
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

.add {
	position: relative;
	margin: 30rpx 15rpx 0;
	height: 297rpx;
	background-color: #FFFFFF;
	border-radius: 10rpx;
	box-shadow: 0 0 10rpx -5rpx #666666;
	display: flex;
	justify-content: center;
	align-items: center;
	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		transform: translateY(-26rpx);
	}
	&::after {
		height: 51rpx;
		width: 0;
		border-left: 4rpx solid #8e9aae;
	}
	
	&::before {
		width: 51rpx;
		height: 0;
		border-top: 4rpx solid #8e9aae;
	}
	text {
		transform: translateY(40rpx);
		font-size: 20rpx;
		color: #999999;
	}
}
</style>
