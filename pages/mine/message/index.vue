<template>
	<view>
		<view class="list" v-for="(item,index) in couponlist" :key="index">
			<view class="list-left">
				<image :src="item.itempic"></image>
			</view>
			<view class="list-right">
				<view class="list-top">
					<text class="elli">{{item.itemtitle}}</text>
					<text>{{item.itemshorttitle}}</text>
				</view>
				<view class="list-con elli3">{{item.seller_name}}</view>
			</view>
		</view>
		<u-loadmore :status="loadStatus" icon-type="iconType" :load-text="loadText" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				couponlist: [],
				page: 1,
				min_id: 1,
				cid: 0,
				type: 1,
				sort: 4,
				loadingType: 0,
				loadStatus: 'loadmore',
				iconType: 'flower',
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了'
				}
			}
		},
		onLoad: function(e) {
			this.loadCouponList();
		},
		onReachBottom: function() {
			this.page = this.page + 1;

			this.loadStatus = 'loading';
			setTimeout(() => {
				this.loadCouponList();
				this.loadStatus = 'loadmore';
			}, 1000)
		}, // 下拉刷新
		onPullDownRefresh: function() {
			this.page = 1;
			this.min_id = 1;
			this.loadCouponList("Refresh");
		},
		methods: {
			loadCouponList: function(type) {
				this.loadingType = 1;
				let that = this;
				this.$Request.getT('/column/apikey/maxd/type/' + this.type + '/back/20/sort/' + this.sort + '/min_id/' + this.min_id +
					'/cid/11').then(res => {
					this.loadingType = 0;
					if (res.code === 1) {
						if (this.page === 1) {
							this.couponlist = [];
						}
						this.min_id = res.min_id;
						res.data.forEach(d => {
							this.couponlist.push(d);
						});

						// console.log('列表：',this.couponlist)
					} else {
						this.loadingType = 2;
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
	page {
		height: 1000rpx;
	}

	.elli {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.elli2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.elli3 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	.list {
		width: 94%;
		display: flex;
		flex-direction: row;
		padding: 3%;
		border-bottom: 1upx solid #ebe8e8;

		.list-left {
			width: 35%;
			margin-right: 3%;

			image {
				width: 220upx;
				height: 140upx;
				padding: 3%;
				border: 1upx solid #ebe8e8;
				box-sizing: border-box;
			}
		}

		.list-right {
			width: 65%;
			color: #999999;
			font-size: 24upx;

			.list-top {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding-bottom: 5upx;

				text {
					&:nth-child(1) {
						color: #333;
						font-size: 30upx;
						width: 65%;
					}
				}
			}
		}
	}

	.loading-text {
		height: 80upx;
		line-height: 80upx;
		font-size: 30upx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
</style>
