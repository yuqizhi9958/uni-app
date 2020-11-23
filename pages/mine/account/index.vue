<template>
	<view class="setting-demo u-bg-f9">
		<u-cell-group title="">
			<u-cell-item title="头像" :title-style="style" value="" :arrow="false" @tap="goAvatar">
				<u-avatar slot="right-icon" size="60" :src="pic"></u-avatar>
			</u-cell-item>
			<u-cell-item @tap="openPage" title="昵称" :value="subName"></u-cell-item>
			<u-cell-item @tap="openPage" title="原创号" :value="account"></u-cell-item>
			<u-cell-item @tap="editPhone" title="手机绑定" :value="phone"></u-cell-item>
			<u-cell-item @tap="goThirdparty" title="第三方帐号绑定" value=""></u-cell-item>
			<u-cell-item @tap="goPassword" title="原创网密码" :value="pass"></u-cell-item>
			<u-cell-item @tap="goPerson" title="实名认证" :value="trueName"></u-cell-item>
			<u-cell-item @tap="goEnterprise" title="企业实名认证" :value="company"></u-cell-item>
			<u-cell-item title="注销帐号"></u-cell-item>
		</u-cell-group>
		<u-modal
			v-model="show"
			:contentSlot="true"
			title="更换已绑定的手机？"
			:mask-close-able="true"
			:show-cancel-button="true"
			confirm-color="#333333"
			@confirm="changePhone"
			confirm-text="更换">
			<view class="slot-content">
				{{content.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')}}
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default {
		name: 'account',
		data() {
			return {
				pageShow: false,
				pic: '../../../static/image/center/hpic2119_s.jpg',
				subName: '陈发',
				account: 'DA5642',
				phone: '186*****531',
				pass: '未设置',
				trueName: '未认证',
				company: '未认证',
				style: {
					lineHeight: '60rpx'
				},
				show: false,
				content: '16838459328'
			}
		},
		methods: {
			openPage() {
				this.$u.toast("暂未开放!");
			},
			goAvatar() {
				uni.navigateTo({
					url: '/pages/mine/avatar/avatar?url='+this.pic,
				})
			},
			editPhone() {
				this.show = true;
			},
			changePhone() {
				uni.navigateTo({
					url: '/pages/mine/phone/modify?phone'+this.phone
				})
			},
			goThirdparty() {
				uni.navigateTo({
					url: '/pages/mine/thirdparty/thirdparty'
				})
			},
			goPassword() {
				uni.navigateTo({
					url: '/pages/mine/password/password'
				})
			},
			goPerson() {
				uni.navigateTo({
					url: '/pages/mine/auth/person/step1'
				})
			},
			goEnterprise() {
				uni.navigateTo({
					url: '/pages/mine/auth/enterprise/step1'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.slot-content {
		text-align: center;
		color: #999999;
		
		font-size: 12px;
		padding-top: 24rpx;
		padding-bottom: 48rpx;
	}
	.u-model-footer-button:nth-child(2n) {
		border-left: 1px solid gray;
	}
</style>
