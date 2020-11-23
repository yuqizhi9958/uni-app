<template>
	<view>
		<u-cell-group title="">
			<u-cell-item @tap="openPage" title="微信" :value="weixin"></u-cell-item>
			<u-cell-item @tap="openPage" title="QQ" :value="qq"></u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageShow: false,
				pic: '../../../static/image/center/hpic2119_s.jpg',
				weixin: '未绑定',
				qq: '已绑定',
			}
		},
		methods: {
			openPage() {
				this.$u.toast("暂未开放!");
			},
		}
	}
</script>

<style>

</style>
