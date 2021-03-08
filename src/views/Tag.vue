<template>
  <div class="container">
    <transition name="fade">
    <div class="tag-wrap">
      <span
        v-for="item in tagsData"
        :key="item.id"
        :style="{'color': randomRgbaColor(), 'font-size': Math.floor(Math.random() * 20) + 15 + 'px', 'padding-left': Math.floor(Math.random() * 20) + 30 + 'px'}">
        {{item.name}}
      </span>
    </div>
    </transition>
  </div>
</template>

<script>
import tagsData from '../data/tagsData';

export default {
  name: 'Tag',
  data() {
    return {
      tagsData
    };
  },
  methods: {
    randomRgbaColor() {
      var r = Math.floor(Math.random() * 256); // 随机生成256以内r值
      var g = Math.floor(Math.random() * 256); // 随机生成256以内g值
      var b = Math.floor(Math.random() * 256); // 随机生成256以内b值
      return `rgb(${r},${g},${b})`; // 返回rgba(r,g,b,a)格式颜色
    }
  }
}
</script>

<style lang="less" scoped>
.tag-wrap {
  width: 80%;
  margin: 20px auto;
  line-height: 56px;
  span {
    font-weight: 400;
  }
}
</style>
