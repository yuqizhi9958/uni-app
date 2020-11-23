<template>
  <view class="search-input" :class="[theme]">
    
    <u-image v-if="theme === 'red'" width="55rpx" height="38rpx" src="../../static/image/logo.png"/>
    <u-image v-if="theme === 'gray'" width="55rpx" height="38rpx" src="../../static/image/logo_gray.png"/>
    
    <u-input v-model="inputValue"
      :placeholderStyle="placeholderStyle"
      :custom-style="{ fontSize: '24rpx', color: '#FFF', paddingLeft: '21rpx' }"
      :clearable="true"
      confirm-type="search"
      :focus="autoFocus"
      :auto-height="false"
      :height="54"
      :placeholder="placeholder"/>
  </view>
</template>

<script>
export default {
  name: 'search-input',
  props: {
    // 首页红色调 red / 搜索页灰白调 gray
    theme: { type: String, default: 'red' },
    placeholder: { type: String, default: '搜索点什么呢' },
    autoFocus: { type: Boolean, default: false },
  },
  data () {
    return {
      inputValue: '',
    }
  },
  computed: {
    placeholderStyle () {
      const color = this.theme === 'red'
        ? '#FFFFFF'
        : '#999999'
      return `color: ${color};`
    },
  },
}
</script>

<style lang="scss">
.search-input {
  $height: 54rpx;
  height: $height;
  padding: 0 $height / 2;
  display: flex;
  align-items: center;
  overflow: hidden;
  line-height: $height;
  border-radius: $height;
  &.red {
    background-color: #F76F6B;
  }
  &.gray {
    background-color: #999999;
  }
}
</style>
