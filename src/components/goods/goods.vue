<template>
  <div class="demo">
    <p>
      <span>email: {{mockData.email}}</span>
    </p>
    <p>
      sentence: {{mockData.content}}
    </p>
    <p>
      image: <img :src="mockData.dataImage"
        alt="">
    </p>
    <p>
      color:
      <span :style="{color:mockData.color}">text color</span>
    </p>
    <p>
      name: {{mockData.name}}
    </p>
  </div>
</template>
<script>
import { Random } from 'mockjs'
export default {
  data() {
    return {
      mockData: {}
    }
  },
  created() {
    this.mockData = {
      content: Random.sentence(),
      image: Random.image(),
      email: Random.email(),
      dataImage: Random.dataImage(),
      color: Random.color(),
      name: Random.name()

    }
  }
}
</script>
<style lang="stylus" scoped>
.demo {
  margin-left: 20px;
}

p {
  margin-top: 10px;
}

img {
  width: 100px;
  height: 100px;
}
</style>
