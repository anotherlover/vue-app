<template>
    <div class="header">
      <div class="content-wrapper">
        <!-- avatar -->
        <div class="avatar">
          <img :src="seller.avatar" width="64" height="64" alt="">
        </div>
        <!-- content -->
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <!-- description -->
          <div class="description">
            {{seller.description}}/{{seller.deliveryTime}}分钟送达
          </div>
          <!-- support -->
          <div v-if="seller.supports" class="supports">
            <span class="icon" :class="classMap[seller.supports[0].type]"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>
        <!-- support -->
        <div v-if="seller.supports" class="support-count" @click="showDetail">
          <span class="count">{{seller.supports.length}}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
      <!-- 广告 -->
      <div class="bulletin-wrapper" @click="showDetail">
        <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
      <!-- 背景色 -->
      <div class="background">
        <img :src="seller.avatar" width="100%" height="100%">
      </div>
      <!--  浮层-->
      <div v-show="detailShow" class="detail">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
          </div>
        </div>
        <div class="detail-close">
          <i class="icon-close"></i>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      detailShow: false
    }
  },
  props: {
    seller: {
      type: Object
    }
  },
  created() {
    this.classMap = [ 'decrease', 'discount', 'special', 'invoice', 'guarantee' ]
    console.log('seller', this.seller)
  },
  methods: {
    // 展示浮层
    showDetail () {
      this.detailShow = true
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '../../common/stylus/mixin'
  .header
    color: #fff
    overflow: hidden
    position: relative
    background: rgba(7, 17, 27, 0.5)
    .content-wrapper
      position: relative
      padding: 24px 12px 18px 24px
      // FIXME: content和avatar之间有空白，因为存在空白字符，解决： 现在父元素设置font-size：0，然后在子元素设置字体
      font-size: 0
      .avatar
        display: inline-block
        border-radius: 2px
        vertical-align: top
      .content
        display: inline-block
        font-size: 14px
        margin-left: 16px
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block
            // FIXME: 兄弟元素对齐，用vertical-align
            vertical-align: top
            width: 30px
            height: 18px
            bg-image('./brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            margin-left: 6px
            font-size: 16px
            font-weight: bold
            line-height: 18px
        .description
          margin-bottom: 10px
          font-size: 12px
          line-height: 12px
        .supports
          .icon
            display: inline-block
            width: 12px
            height: 12px
            margin-right: 4px
            background-size: 12px 12px
            background-repeat: no-repeat
            &.decrease
              bg-image('./decrease_1')
            &.discount
              bg-image('./discount_1')
            &.special
              bg-image('./special_1' )
            &.guarantee
              bg-image('./guarantee_1')
            &.invoice
              bg-image('./invoice_1')
          .text
            vertical-align: top
            line-height: 12px
            font-size: 10px
      .support-count
        position: absolute
        right: 12px
        bottom: 18px
        padding: 0 8px
        height: 24px
        line-height: 24px
        border-radius: 14px
        background-color: rgba(0, 0, 0, 0.2)
        .count
          font-size: 10px
          vertical-align: top
        .icon-keyboard_arrow_right
          margin-left: 2px
          line-height: 24px
          font-size: 10px
    .bulletin-wrapper
      position: relative
      height: 28px
      line-height: 28px
      padding: 0 22px 0 12px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      background: rgba(7, 17, 27, 0.1)
      // font-size: 0
      .bulletin-title
        margin-top: 8px
        display: inline-block
        width: 22px
        height: 12px
        bg-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      .bulletin-text
        vertical-align: top
        margin: 0 4px
        font-size: 10px
      .icon-keyboard_arrow_right
        position: absolute
        font-size: 10px
        top: 8px
        right: 12px
    .background
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      filter: blur(10px)
    .detail
      position: fixed
      z-index: 100
      top: 0
      left: 0
      width: 100%
      height: 100%
      overflow: auto
      background: rgba(1, 17, 27, 0.8)
      // FIXME: 底部固定套路， padding-bottom负值， margin-top为负值，占满同级元素内容的padding-bottom的空白
      .detail-wrapper
        min-height: 100%
        width: 100%
        .detail-main
          padding-top: 64px
          padding-bottom: 64px
          .name
            text-align: center
            font-size: 16px
            font-weight: 700
            color: rgb(255, 255, 255)
            line-height: 16px
      .detail-close
        position: relative
        width: 32px
        height: 32px
        margin: -64px auto 0 auto
        clear: both
        font-size: 32px
</style>
