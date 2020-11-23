<template>
	<view class="mobile-wrapper">
		<view class="header">
			<u-tabs
				:list="list"
				:is-scroll="false"
				:current="current"
				@change="change"
				active-color="#DE3A36"></u-tabs>
		</view>
		<water-grid :waterList="articleList" v-if="current === 2"></water-grid>
		<article-list></article-list>
	</view>
</template>

<script>
	import waterGrid from './components/waterGrid.vue';
	import articleList from './components/articleList.vue';
	export default {
		components: {
			waterGrid,
			articleList
		},
		data() {
			return {
				min_id: 1,
				type: 1,
				list: [
					{
						name: '文章'
					},
					{
						name: '电子书'
					},
					{
						name: '视频'
					},
					{
						name: '展馆'
					},
				],
				articleList: [],
				current: 0,
				
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
		onNavigationBarButtonTap: function(e) {
			console.log('修改', e);
		},
		methods: {
			change(index) {
				if (this.current !== index) {
					this.current = index;
				}
				
				if (this.current === 0) {
					console.log('文章')
				} else if (this.current === 1) {
					console.log('电子书');
				} else if (this.current === 2) {
					console.log('视频');
				} else {
					console.log('展馆');
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
</style>
