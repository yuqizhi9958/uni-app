<template>
	<view class="avatar-wrapper">
		<image class="avatar" :src="url" mode="scaleToFill"></image>
	</view>
</template>

<script>
	let _self;
	export default {
		data() {
			return {
				url: '',
			}
		},
		methods: {
			
		},
		onLoad(option) {
			_self = this;
			this.url = option.url;
		},
		onNavigationBarButtonTap(e) {
			let index = e.index;
			if (index == 0) {
				uni.showActionSheet({
					itemList: ["更换头像", "保存图片"],
					success(res) {
						let index = res.tapIndex;
						if (index == 0) {
							uni.chooseImage({
								sizeType: ["compressed"],
								sourceType: ["album"],
								success(res) {
									// 获取用户选择图片临时路径
									let tempFilePath = res.tempFilePaths[0];
									_self.url = tempFilePath;
								},
							})
						}  else if (index == 1) {
							console.log("保存图片");
							uni.showLoading({
								mask: true,
								title: '上传中，请稍后'
							});
							uni.uploadFile({
								url: 'www.jiangui.com',
								filePath: _self.url,
								name: 'file',
								success(res) {
									console.log(res);
								},
								complete() {
									uni.hideLoading();
								}
							})
						}
					}
				})
			}
			
		}
	}
</script>

<style lang="scss">
page {
	height: 100%;
	background-color: #000000;
}
.avatar-wrapper {
	height: 100%;
	display: flex;
	align-items: center;
	.avatar {
		width: 100%;
		// height: auto;
	}
}
</style>
