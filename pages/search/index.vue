<template>
	<view class="page-search">
		<!-- 导航栏 -->
		<search-nav theme="gray"
		  :search.sync="search.value"
      :autoFocus="true"
		  :placeholder="search.placeholder">
		  <template v-slot:right>
		    <view class="nav-cancel-button" @click="clickCancel">取消</view>
		  </template>
		</search-nav>
	</view>
</template>

<script>
import SearchNav from '../../components/search/search-nav.vue'

export default {
  name:'page-search',
  data() {
    return{
      search: {
        value: '',
        placeholder: '三体3-死神永生',
      },
    }
  },
  methods: {
    clickCancel () {
      uni.navigateBack()
    },
  },
  components: { SearchNav },
}
</script>

<style lang="scss" scoped>
.nav-cancel-button {
  padding-left: 29rpx;
  color: #DD3935;
  font-size: 14px;
}
</style>
