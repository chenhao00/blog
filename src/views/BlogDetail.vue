<template>
  <div class="container detail">
    <div class="content">
      <div class="title">{{this.form.title}}</div>
      <div v-html="this.form.contents" class="text"></div>
    </div>
    <div class="mess-wrap">
      <Mess
        :articleId="this.$route.params.id"
        :commentSuccess="commentSuccess"
        :mesList="form.comment">
      </Mess>
    </div>
  </div>
</template>

<script>
import Mess from '../components/common/Mess';

export default {
  data() {
    return {
      form: {}
    };
  },
  components: {
    Mess
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const path = `/api/v1/admin/article/${this.$route.params.id}`;
      const res = await this.$http.get(path);
      if (res.code === 0) {
        this.form = res.data;
      } else {
        this.$requestStatus(res);
      }
    },
    // 留言成功
    commentSuccess() {
      this.fetch();
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/blogDetail.less';
</style>
