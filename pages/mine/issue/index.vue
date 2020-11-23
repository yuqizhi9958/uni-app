<template>
	<view class="issue-wrapper">
		<view class="header">
			<u-tabs
				:list="list"
				:is-scroll="false"
				:current="current"
				@change="change"
				active-color="#DE3A36"></u-tabs>
		</view>
		<water-grid :waterList="articleList" v-if="current === 1"></water-grid>
		<article-list v-if="current === 0"></article-list>
	</view>
</template>

<script>
	import articleList from './components/articleList.vue';
	import waterGrid from './components/waterGrid.vue';
	export default {
		components: {
			articleList,
			waterGrid
		},
		data() {
			return {
				list: [
					{
						name: '文章'
					},
					{
						name: '短视频'
					},
				],
				current: 0,
				articleList: [],
				min_id: 1,
				type: 1,
			}
		},
		onLoad(e) {
			this.getArticle();
		},
		onPullDownRefresh: function() {
			this.min_id = 1;
			this.articleList = [];
			this.articleList.state = 'refresh';
			this.getArticle("Refresh");
		},
		onReachBottom: function() {
			this.getArticle();
			uni.showLoading({
				mask: true,
				title: '正在加载...'
			})
		},
		methods: {
			change(index) {
				if (this.current !== index) {
					this.current = index;
				}
				
				if (this.current === 0) {
					console.log('文章')
				} else {
					console.log('短视频');
				} 
			},
			getArticle(type) {
				this.$Request.getT('/column/apikey/maxd/type/' + this.type + '/back/20/sort/' + this.sort + '/min_id/' + this.min_id +
					'/cid/11').then(res => {
					if (res.code === 1) {
						this.min_id = res.min_id;
				        this.articleList = res.data;
					} 
					uni.hideLoading();
					if (type === "Refresh") {
						uni.stopPullDownRefresh(); // 停止刷新
					}
				})
				
			},
		}
	}
</script>

<style lang="scss" scoped>
.issue-wrapper {
	
}
</style>
