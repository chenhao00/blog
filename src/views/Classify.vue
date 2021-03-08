<template>
  <div class="container">
    <div class="wrap">
      <div class="slide">
        <ul>
          <li @click="filterClassify('0')">全部</li>
          <li v-for="item in classify" :key="item.id">
            <div @click="filterClassify(item.name)">{{item.name}}</div>
          </li>
        </ul>
      </div>
      <div class="blog">
        <BlogItem
          ref="child"
          :classifyItem="classifyItem">
        </BlogItem>
      </div>
    </div>
    <GoTop />
  </div>
</template>

<script>
import BlogItem from '../components/item/BlogItem';
import GoTop from '../components/tool/GoTop';

export default {
  data() {
    return {
      classify: [],
      classifyItem: ''
    };
  },
  components: {
    BlogItem,
    GoTop
  },
  created() {
    // 先隐藏底部foot再加载数据
    this.$bus.$emit('hideFoot');
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const path = '/api/v1/admin/classify';
      const res = await this.$http.get(path);
      if (res.code === 0) {
        this.classify = res.data.list;
      } else {
        this.$requestStatus(res);
      }
    },
    // 分类查询
    filterClassify(item) {
      this.$bus.$emit('hideFoot');
      this.classifyItem = item;
      this.$refs.child.fetchData('filter', item);
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/classify.less';
</style>
