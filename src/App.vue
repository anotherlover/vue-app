<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
        <div class="tab-item">
          <router-link class="t" to='/goods'>商品</router-link>
        </div>
        <div class="tab-item">
          <router-link class="t" to='/ratings'>评论</router-link>
        </div>
        <div class="tab-item">
          <router-link class="t" to='/seller'>商家</router-link>
        </div>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
import header from './components/header/header'
const ERR_OK = 0
export default {
  name: 'App',
  data() {
    return {
      seller: {}
    }
  },
  components: {
    'v-header': header
  },
  created() {
    // FIXME: vue-resource  使用方法
    this.$http.get('/api/seller').then((res) => {
      res = res.body
      if (res.errno === ERR_OK) {
        this.seller = res.data
      }
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import './common/stylus/mixin.styl'
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex: 1
        text-align: center
  .t
    display: block
    font-size: 14px
    color: rgb(77, 95, 93)
    &.active
      color: rgb(240, 20, 20)
</style>
