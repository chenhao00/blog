<template>
  <div class="container">
    <div class="content">
      <BlogItem></BlogItem>
    </div>
    <div class="right">
      <Card />
      <Ranking
        :type="1"
        :title="hotTitle" />
      <Ranking
        :type="2"
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
  }
}
</script>

<style lang="less" scoped>
.content {
  flex: 1;
  max-width: 66%;
  margin-right: 40px;
}
.right {
  width: 34%;
}
</style>
