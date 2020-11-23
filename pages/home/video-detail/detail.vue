<template>
	<view class="home-detail u-p-b-100" style="height: 3000rpx;">
		<view class="detail-video">
			<video :src="videoUri" controls class="u-w-100"></video>
		</view>
		<view class="detail_info u-p-30 u-bg-white">
			<view class="detail-title u-font-34" style="font-weight: bold;;">0基础学习绘画课</view>
			<text class="u-font-20 u-color-6" style="line-height:2.4;">音频课：共13节</text>
			<view class="u-font-24">插画设计/动画/0基础学习/低成本/简单易学/画画改变/ 静心</view>
			<view class="u-flex u-row-left u-col-bottom">
				<view>
					<text class="u-font-40" style="color: #DD3935;">36.8</text>
					<text class="u-font-30">宝</text>
				</view>
				<view class="u-m-l-20 u-font-26 u-color-6">48.2宝</view>
			</view>
		</view>
		<u-gap height="10" bg-color="#F9F9F9"></u-gap>
		<view class="param-wrap u-p-20">
			<view class="param-block u-p-b-20" style="border-bottom: 1px solid #F9F9F9;">
				<view class="params-title u-font-md">视频类详情页</view>
				<view class="param-text-content u-m-t-30 u-font-24" 
				style="line-height: 1.4;text-indent: 2em;">
					巴特尔，男，蒙古族，1955年2月生，辽宁康平人， 1981
					年12月加入中国共产党，1973年1月参加工作，复旦大学经
					济学院政治经济学专业毕业，经济学硕士。
					现任中共十九届中央委员，十三届全国政协副主席，国家民
					族事务委员会主任、党组书记，中央统战部副部长。
				</view>

			</view>
		</view>
        <!-- 底部购买 -->
		<view class="u-fixed param-bottom">
			<view class="param-btn-wrap u-flex u-row-center u-p-10 u-font-32">
				<view class="try-look u-text-center">
					<u-icon name="play-right"></u-icon>
					<text>试试看</text>
				</view>
				<view class="play-btn u-text-center">购买</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemid: '', //页面参数
				videoUri: '//player.alicdn.com/video/aliyunmedia.mp4', // 视频地址
			}
		},
		components: {

		},
		onLoad(e) {
			console.log("参数", e, e.id)
			this.itemid = e.itemid;
		}
	}
</script>

<style lang="scss" scoped>
	.detail-video{
		width: 750rpx;
	}
	
	.param-bottom{
		bottom: 0;
		left: 0;
		width: 100%;
		.param-btn-wrap{
			line-height: 80rpx;
			color: #fff;
			.try-look{
				width: 230rpx;
				height: 80rpx;
				border-top-left-radius:40rpx;
				border-bottom-left-radius:40rpx;
				background-color: #999999;
			}
			.play-btn{
				width: 460rpx;
				height: 80rpx;
				border-top-right-radius:40rpx;
				border-bottom-right-radius:40rpx;
				background-color: #EE1E29;
			}
		}
		
	}
</style>
