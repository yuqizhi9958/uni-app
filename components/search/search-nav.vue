<template>
  <u-navbar :is-back="false"
    :background="{ background: themeStyle.background }"
    :border-bottom="false"
    :is-fixed="true">
    <!-- 导航栏内容 -->
    <view class="search-panel">
      <!-- 搜索框 -->
      <view class="search-box"
        @click="clickSearch"
        :style="{ backgroundColor: themeStyle.inputBackground }">
        <!-- icon -->
        <u-image v-if="theme === 'red'" width="28px" height="19px" src="../../static/image/logo.png"></u-image>
        <u-image v-if="theme === 'gray'" width="28px" height="19px" src="../../static/image/logo_gray.png"></u-image>
        <!-- 输入框 -->
        <u-input class="search-input"
          v-if="!disabled"
          :placeholder="placeholder"
          :placeholderStyle="`color: ${themeStyle.placeholderColor};`"
          :clearabled="true"
          :focus="autoFocus"
          confirm-type="search"
          :disabled="disabled"
          :border="false"
          :custom-style="{ fontSize: '12px', color: themeStyle.textColor, padding: '0 20rpx', height: '27px' }"
          :placeholder-color="themeStyle.textColor"
          v-model="inputValue">
        </u-input>
        <!-- 禁用输入框时的替代显示控件 -->
        <view class="search-input"
          v-if="disabled"
          :style="{
            fontSize: '12px',
            color: inputValue ? themeStyle.textColor : themeStyle.placeholderColor,
            padding: '0 20rpx',
          }">
          {{ inputValue || placeholder }}
        </view>
      </view>
      <!-- 右插槽 -->
      <slot name="right"></slot>
    </view>
  </u-navbar>
</template>

<script>
export default {
  name: 'search-input',
  props: {
    // 首页红色调 red / 搜索页灰白调 gray
    theme: { type: String, default: 'red' },
    placeholder: { type: String, default: '' },
    autoFocus: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    search: { type: String, required: true },
  },
  data () {
    return {
      inputValue: '',
    }
  },
  computed: {
    themeStyle () {
      let style
      switch (this.theme) {
        case 'red':
          style = {
            background: '#F4302B',
            inputBackground: '#F76F6B',
            textColor: '#FFFFFF',
            placeholderColor: '#FFFFFF',
          }
          break
        default:
          style = {
            background: '#FFFFFF',
            inputBackground: '#F1F1F1',
            textColor: '#333333',
            placeholderColor: '#999999',
          }
          break
      }
      return style
    },
  },
  watch: {
    inputValue (val) {
      this.$emit('update:search', val)
    },
  },
  methods: {
    clickSearch () {
      console.log('click')
      this.$emit('click-search')
    },
  },
  beforeMount () {
    this.inputValue = this.search
  },
}
</script>

<style lang="scss" scoped>
.search-panel {
  width: 750rpx;
  padding: 0 32rpx;
  display: flex;
  align-items: center;
}
.search-box {
  $height: 27px;
  height: $height;
  flex: 1 1 auto;
  display: flex;  align-items: center;
  padding: 0 $height / 2;
  border-radius: $height;
  
  .search-input {
    flex: 1 1 auto;
  }
}
</style>
