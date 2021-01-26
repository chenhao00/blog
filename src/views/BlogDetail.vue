<template>
  <div class="container">
    <div class="content">
      <div class="title">{{this.form.title}}</div>
      <div v-html="this.form.contents" class="text"></div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      form: {}
    };
  },
  components: {
    //
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
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/blogDetail.less';
.content {
  .title {
    font-size: 28px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 15px;
  }
  .text {
    overflow: hidden;
    margin-bottom: 50px;
    img {
      width: 100%;
    }
  }
}
</style>
