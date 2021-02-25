<template>
  <div class="container">
    <div class="message-wrap">
      <Mess
        :commentSuccess="commentSuccess"
        :mesList="list">
      </Mess>
    </div>
  </div>
</template>

<script>
import Mess from '../components/common/Mess';

export default {
  name: 'Message',
  data() {
    return {
      list: []
    };
  },
  components: {
    Mess
  },
  created() {
    this.fetch();
  },
  methods: {
    // 富文本内容
    onRichChange(value) {
      this.form.content = value;
    },
    // 获取留言
    async fetch() {
      const path = '/api/v1/admin/message';
      const res = await this.$http.get(path);
      if (res.code === 0) {
        this.list = res.data.list;
      } else {
        this.$requestStatus(res);
      }
    },
    // 留言提交成功
    commentSuccess() {
      this.fetch();
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/message.less';
.message-wrap {
  width: 100%;
}
</style>
