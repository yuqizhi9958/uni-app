<template>
	<view class="status-bar-placeholder"
    :style="{ 'background-color': color }">
		
	</view>
</template>

<script>
export default {
  props: {
    color: { type: String, default: 'transparent' },
  },
}
</script>

<style lang="scss" scoped>
.status-bar-placeholder {
  width: 750rpx;
  height: var(--status-bar-height);
}
</style>
