<template>
  <div class="container">
    <div class="content">
      <BlogItem></BlogItem>
    </div>
    <div class="right">
      <Card />
      <Ranking
        :type="1"
        icon="remen"
        :title="hotTitle" />
      <Ranking
        :type="2"
        icon="new"
        :title="recentTitle" />
    </div>
    <GoTop />
  </div>
</template>

<script>
import BlogItem from '../components/item/BlogItem';
import Card from '../components/item/Card';
import Ranking from '../components/item/Ranking';
import GoTop from '../components/tool/GoTop';

export default {
  data() {
    return {
      hotTitle: '热门排行',
      recentTitle: '最新排行'
    };
  },
  components: {
    BlogItem,
    Card,
    Ranking,
    GoTop
  },
  created() {
    // 先隐藏底部foot再加载数据
    this.$bus.$emit('hideFoot');
  }
}
</script>

<style lang="less" scoped>
.content {
  width: 66%;
  box-sizing: border-box;
  padding-right: 40px;
}
.right {
  box-sizing: border-box;
  width: 34%;
}
</style>
