<template>
  <div class="hot item">
    <div class="title">
      <i class="iconfont icon-remen"></i>
      <span>热门排行</span>
    </div>
    <div class="con">
      <ul class="list">
        <li v-for="item in hotList" :key="item.id">
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotList: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      //
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/item/item.less';
.list {
  font-size: 15px;
  line-height: 26px;
  font-weight: 400;
  color: #666;
}
</style>
