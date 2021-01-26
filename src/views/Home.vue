<template>
  <div class="container">
    <div class="content">
      <BlogItem></BlogItem>
    </div>
    <div class="right">
      <Card />
      <Hot />
    </div>
    <GoTop />
  </div>
</template>

<script>
import BlogItem from '../components/item/BlogItem';
import Card from '../components/item/Card';
import Hot from '../components/item/Hot';
import GoTop from '../components/tool/GoTop';

export default {
  data() {
    return {};
  },
  components: {
    BlogItem,
    Card,
    Hot,
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
