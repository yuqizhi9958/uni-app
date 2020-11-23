<template>
	<view class="u-flex wrap">
		<view>
			<image class="logo" src="../../../static/image/logo.png" mode="widthFix"></image>
		</view>
		<text class="u-margin-top-10 u-font-24 u-color-6">文化报国 原创兴国</text>

		<view class="groups">

			<view class="login-tab u-flex u-row-between">
				<view :class="[{'active':active === 0},'tab-btn']" @click="changeLoginType('captcha')">手机登录</view>
				<u-line color="black" direction="col" length="12px" margin="20rpx" />
				<view :class="[{'active':active === 1},'tab-btn']" @click="changeLoginType('password')">帐号登录</view>
			</view>

			<u-cell-group class="u-flex input-grop">

				<u-field v-if="loginType == 'password'" :field-style="fieldStyle" v-model="username" label="用户名" placeholder="请输入手机号码或电子邮箱"></u-field>
				<u-field v-if="loginType == 'password'" :field-style="fieldStyle" v-model="password" label="密码" :password="true"
				 placeholder="请输入登录密码"></u-field>
				<u-field v-if="loginType == 'captcha'" :field-style="fieldStyle" v-model="tel" label="手机号码" placeholder="请输入手机号码"
				 :focus="true"></u-field>
				 	<u-field v-if="loginType == 'captcha'" :field-style="fieldStyle" v-model="code" placeholder="验证码"
				 	 :focus="true"></u-field>
					 

			</u-cell-group>
		</view>
		<view class="u-flex buttons">
			<u-button :custom-style="buttonStyl" v-if="loginType == 'captcha'" type="primary" :disabled="!canGetCaptcha"
			 @click="getCaptcha">{{tips}}</u-button>
			 <u-button :custom-style="buttonStyl" type="primary" :disabled="!canLogin" @click="doLogin">登录</u-button>
		</view>
		<view class="u-flex u-row-between u-font-12 u-color-6" style="width: 80%;">
			<view class="a">找回密码</view>
			<view class="a">注册</view>
		</view>

		<u-divider style="margin-top: 160rpx;">其他登录方式</u-divider>
		<view class="u-flex u-m-t-20">
			<view class="u-margin-right-60">
				<u-icon name="qq-fill" size="80" color="rgb(17,183,233)" @click="qqLogin"></u-icon>
			</view>
			<view class="u-margin-left-60">
				<u-icon name="weixin-fill" size="80" color="rgb(83,194,64)" @click="weixinLogin"></u-icon>
			</view>
		</view>

		<view class="u-margin-top-80 u-font-20 u-color-9" style="width: 88%;">
			未注册的手机号验证后将自动创建原创网账号，登录即代表您已 经同意
			<text class="tips">《原创网用户协议》</text>和
			<text class="tips">《原创网隐私政策》</text>
		</view>
		<u-verification-code :seconds="10" ref="ucode" start-text="获取验证码" change-text="X秒后重新获取" end-text="重新获取" @change="codeChange"></u-verification-code>
		<u-popup v-model="showInput" mode="center" :border-radius="50" length="90%">
			<view class="u-flex captcha">
				<u-message-input class="u-margin-top-80" :focus="true" :maxlength="4" @finish="finish"></u-message-input>
				<view class="u-margin-50 tips" @click="getCaptcha">{{tips}}</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: "",
				password: "",
				tel: "",
				code: "",
				loginType: 'captcha',
				loading: false,
				tips: "获取验证码",
				showInput: false,
				buttonStyl: {
					width: '640rpx',
					marginBottom: '10px',
					backgroundColor: '#F32F2B',
					borderRadius: '40rpx',
				},
				fieldStyle: {
					width: "500rpx"
				},
				active: 0
			}
		},
		computed: {
			canLogin() {
				return !this.$u.test.isEmpty(this.username) && !this.$u.test.isEmpty(this.password);
			},
			canGetCaptcha() {
				return !this.$u.test.isEmpty(this.tel);
			}
		},
		methods: {
			changeLoginType(loginType) {
				this.loginType = loginType;
				this.active = loginType === 'captcha' ? 0 : 1
			},
			weixinLogin() {
				//这里写微信授权登录相关方法
			},
			qqLogin() {
				//这里写qq授权登录相关方法
			},
			//账号密码登录
			doLogin() {
				//防止重复请求
				if (this.loading) {
					return;
				}
				this.loading = true;
				//这里写登录逻辑
				//成功时跳转到主页,失败时弹窗提醒并重置	loading
				//this.$u.toast("用户名或密码错误!");
				this.loading = false;
			},
			//获取短信验证码
			getCaptcha() {
				if (!this.$u.test.mobile(this.tel)) {
					this.$u.toast("手机号码格式错误");
					return;
				}
				this.showInput = true;
				if (this.$refs.ucode.canGetCode) {
					//发送短信验证码的方法
					this.$refs.ucode.start();
				}
			},
			codeChange(text) {
				this.tips = text;
			},
			finish(value) {
				this.code = value
				console.log(value);
				//此处验证captcha是否正确,正确时跳转到主页,错误时可无响应或提示验证码错误
				//后端验证时一定要验证手机号码是否为获取验证码时使用的手机号码
				this.$u.toast("验证码错误!");
			},
		}
	}
</script>

<style lang="scss">
	.groups {
		width: 80%;
		.login-tab {
			margin-top: 50rpx;
			margin-bottom: 20rpx;
			.tab-btn {
				width: 40%;
				text-align: center;
				font-size: 28rpx;
				color: #999999;
			}
			.active {
				color: #333333;
			}
		}
	}

	.wrap {
		flex-direction: column;
		padding: 28rpx 0;
	}

	.logo {
		width: 150rpx;
	}

	.input-grop {
		height: 120px;
	}

	.buttons {
		flex-direction: column;
	}

	.tips {
		color: $u-type-primary;
	}

	.captcha {
		flex-direction: column;
	}
</style>
