<script>
	export default {
		data() {
			return {}
		},
		onLaunch: function () {
			console.log('App Launch')
		    //#ifdef APP-PLUS
		    // var server = "https://www.baidu.com/update"; //检查更新地址
		    // var req = { //升级检测数据
		    //     "appid": plus.runtime.appid,
		    //     "version": plus.runtime.version
		    // };
		    // uni.request({
		    //     url: server,
		    //     data: req,
		    //     success: (res) => {
		    //         if (res.statusCode == 200 && res.data.status === 1) {
		    //             uni.showModal({ //提醒用户更新
		    //                 title: "更新提示",
		    //                 content: res.data.note,
		    //                 success: (res) => {
		    //                     if (res.confirm) {
		    //                         plus.runtime.openURL(res.data.url);
		    //                     }
		    //                 }
		    //             })
		    //         }
		    //     }
		    // })
		    //#endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import "./static/css/index.css";

	/* H5的时候，隐藏滚动条 */
	/* #ifdef H5 */
	::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}

	/* #endif */
</style>
