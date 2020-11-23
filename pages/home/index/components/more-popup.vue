<template>
	<view class="more-popup">
		<u-popup v-model="popupShow"
      mode="bottom"
      border-radius='10'
      length="80%"
      @close="popupClose">
      
			<view class="popup-wrap-block u-p-24">
				<view class="u-flex u-row-between u-color-3">
					<view class="u-font-28" @tap="handlerRight">取消</view>
					<view class="u-font-28" @tap="handlerRight">确定</view>
				</view>
				
				<view class="u-flex u-row-between u-m-t-24">
					<view class="popup-attr u-font-32">
						我的频道<text class="u-m-l-10 u-font-24 u-color-9">长按移动频道顺序</text>
					</view>
					<view>
						<button class="button-edit u-font-28">编辑</button>
					</view>
				</view>
				
        <movable-area class="popup-btn u-m-t-40" :style="movableArea">
          <movable-view v-for="(item, index) in categoryList" :key="item.name"
            :inertia="false"
            :damping="0"
            direction="all"
            :out-of-bounds="false"
            :style="{ top: item.y + 'px', left: item.x + 'px' }"
            @touchstart="handleCategoryPress(index)"
            @touchend="handleCategoryRelease(index)"
            @change="handlePosition(index, $event)"
            :class="{ move: item.move }"
            class="category-item">
            {{item.name}}
          </movable-view>
				</movable-area>
			</view>
		</u-popup>
	</view>
</template>

<script>
const systemInfo = uni.getSystemInfoSync()
const scalePX = systemInfo.windowWidth / 750
const categoryWidth = 160 // 类别项的rpx宽度
const categoryHeight = 80
const categoryNumInLine = 4 // 一行有几个
const categoryMarginH = (750 - 24 * 2 - categoryWidth * categoryNumInLine) / (categoryNumInLine - 1) // 水平间距
const categoryMarginV = 30 // 竖向间隔

	export default {
		props:{
			tabShow: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				popupShow: false,
				categoryList: [
          { position: 0, name: '推荐', move: false, x: 0, y: 0, offsetX: 0, offsetY: 0 },
          { position: 1, name: '好书在线', move: false, x: 0, y: 0, offsetX: 0, offsetY: 0 },
          { position: 2, name: '优秀讲堂', move: false, x: 0, y: 0, offsetX: 0, offsetY: 0 },
          { position: 3, name: '深度好文', move: false, x: 0, y: 0, offsetX: 0, offsetY: 0 },
          { position: 4, name: '漫风漫影', move: false, x: 0, y: 0, offsetX: 0, offsetY: 0 },
          { position: 5, name: '文房四宝', move: false, x: 0, y: 0, offsetX: 0, offsetY: 0 },
          { position: 6, name: '经典国学', move: false, x: 0, y: 0, offsetX: 0, offsetY: 0 },
         ]
			}
		},
    computed: {
      movableArea () {
        const { categoryList } = this
        const line = Math.ceil(categoryList.length / 4)
        const height = 80 * line + (line - 1) * categoryMarginV
        return {
          width: '702rpx',
          height: `${height}rpx`,
        }
      },
    },
		watch:{
			tabShow(val) {
				if (val) this.popupShow = true
			},
		},
		methods:{
			handlerRight() {
				this.popupShow = false
				this.$emit('tabPop')
			},
			popupClose() {
				this.$emit('tabPop')
			},
      handleCategoryPress (index) {
        this.categoryList[index].move = true
      },
      handleCategoryRelease (index) {
        const category = this.categoryList[index]
        category.x = this.xByPosition(category.position)
        category.y = this.yByPosition(category.position)
        category.move = false
      },
      handlePosition (index, e) {
        const category = this.categoryList[index]
        const { x, y } = e.detail // px
        // 中心点坐标
        const rpx = Math.ceil((category.x + x) / scalePX + categoryWidth / 2)
        const rpy = Math.ceil((category.y + y) / scalePX + categoryHeight / 2)
        // 中心点坐标范围 = [80 * n + (n - 1) * 30, 80 * (n + 1) + (n - 1) * 30]
        // 上边坐标范围 = [80 * n + (n - 1) * 30 - 40, 80 * (n + 1) + (n - 1) * 30 - 40]
        const scaleY = rpy / (categoryHeight + categoryMarginV)
        const row = Math.floor(scaleY)
        if ((scaleY - row) * (categoryHeight + categoryMarginV) <= categoryHeight) {
          const col = Math.floor(rpx / (categoryWidth + categoryMarginH))
          const nextPosition = categoryNumInLine * row + col
          const prevPosition = this.categoryList[index].position
          if (prevPosition !== nextPosition) {
            let range, num
            if (nextPosition > prevPosition) {
              range = [prevPosition + 1, nextPosition]
              num = -1
            } else {
              range = [nextPosition, prevPosition - 1]
              num = 1
            }
            // console.log(prevPosition, nextPosition, '影响范围：', range)
            this.categoryList.forEach((c) => {
              if (c.position >= range[0] && c.position <= range[1]) {
                c.position += num
                c.x = this.xByPosition(c.position)
                c.y = this.yByPosition(c.position)
              }
            })
            this.categoryList[index].position = nextPosition
            this.$forceUpdate()
          }
        }
      },
      xByPosition (position) {
        return (position % categoryNumInLine) * (categoryWidth + categoryMarginH) * scalePX
      },
      yByPosition (position) {
        return Math.floor(position / categoryNumInLine) * (categoryHeight + categoryMarginV) * scalePX
      },
    },
    beforeMount () {
      this.categoryList.forEach((category) => {
        category.x = this.xByPosition(category.position)
        category.y = this.yByPosition(category.position)
      })
    },
	}
</script>

<style lang="scss" scoped>
.button-edit {
  $color: #DD3935;
  border: 1rpx solid $color;
  color: $color;
  width: 96rpx;
  $height: 48rpx;
  height: 48rpx;
  line-height: $height - 2rpx;
  border-radius: $height;
  padding: 0;
  background-color: #fff;
  
  &.button-hover {
    background-color: $color;
    color: #fff;
  }
}
.category-item{
  $height: 80rpx;
  width: 160rpx;
  height: $height;
  line-height: $height;
  text-align: center;
  font-size: 28rpx;
  border-radius: 10rpx;
  background-color: #F9F9F9;
  
  &.move {
    color: red;
    z-index: 2;
  }
}
</style>
