<template>
	<view class="social-wrapper">
		<view class="header">
			<u-tabs
				:list="list"
				:is-scroll="false"
				:current="current"
				@change="change"
				active-color="#DE3A36"></u-tabs>
			<input class="search" type="text" v-model="search" @confirm="searchList" placeholder="请输入你想查找的内容"/>
		</view>
		<view class="content" :contentSlot="true">
			<user-attention v-if="current === 0"></user-attention>
			<user-fans v-if="current === 1"></user-fans>
		</view>
	</view>
</template>

<script>
	import UserAttention from './components/user-attention.vue';
	import UserFans from './components/user-fans.vue';
	export default {
		components: {
			UserAttention,
			UserFans
		},
		computed: {
			searchListResult() {
				return this.resultList.filter(v => v.name.indexOf(this.search) != -1);
			}
		},
		data() {
			return {
				list: [
					{
						name: '关注'
					}, {
						name: '粉丝'
					}
				],
				current: 0,
				search: '',
				resultList: [
					{
						name: '张三',
						flag: true,
					},
					{
						name: '李四',
						flag: false,
					},
				],
			}
		},
		methods: {
			change(index) {
				if (this.current !== index) {
					this.current = index;
				}
				
			},
			searchList() {
			}
		},
		onLoad(Option) {
			console.log(Option);
			this.current = parseInt(Option.socialId)
			uni.setNavigationBarTitle({
				title: '浩浩'
			});
		}
	}
</script>

<style lang="scss">
.social-wrapper {
	.header {
		position: fixed;
		top: 88rpx;
		width: 100%;
		background-color: #fff;
		.search {
			background-color: #f7f7f7;
			border-radius: 33rpx;
			// padding: 20rpx;
			font-size: 14px;
			line-height: 66rpx;
			height: 66rpx;
			padding-left: 39rpx;
			margin: 30rpx 30rpx 16rpx 30rpx;
		}
	}
	.content {
		margin-top: 200rpx;
	}
}
</style>
