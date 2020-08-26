<template>
  <div class="container">
    <div class="content">
      <Article />
    </div>
    <div class="right">
      <Card />
      <Hot />
    </div>
  </div>
</template>

<script>
import Article from '../components/Article';
import Card from '../components/item/Card';
import Hot from '../components/item/Hot';

export default {
  components: {
    Article,
    Card,
    Hot
  }
}
</script>

<style lang="less" scoped>
@import '../assets/home.less';
</style>
