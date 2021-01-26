<template>
  <div class="container message">
    <div class="title">请留言给我吧！</div>
    <div class="rich-wrap">
      <RichText
        :value="form.content"
        @change="this.onRichChange"
        >
      </RichText>
      <div class="tip" v-show="richTip">随便吐槽下吧。</div>
    </div>
    <div class="form">
      <div class="form-input">
        <input type="text" v-model="form.name" placeholder="请输入您的昵称">
        <div class="tip" v-show="nameTip">请输入您的昵称</div>
      </div>
      <div class="submit-btn" @click="submit">提交</div>
    </div>
    <div class="list">
      <div class="total">共{{list.length}}条留言</div>
      <ul>
        <li v-for="item in list" :key="item.id">
          <div class="main">
            <div class="name">{{item.name}}</div>
            <div class="replay" v-html="item.content"></div>
          </div>
          <div class="date">{{item.createTime}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import RichText from '../components/tool/RichText';

export default {
  name: 'Message',
  data() {
    return {
      form: {
        content: '',
        name: ''
      },
      list: [],
      richTip: false,
      nameTip: false
    };
  },
  components: {
    RichText
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
    // 留言提交
    async submit() {
      if (!this.form.content) {
        this.richTip = true;
        return;
      } else {
        this.richTip = false;
      }
      if (!this.form.name) {
        this.nameTip = true;
        return;
      } else {
        this.nameTip = false;
      }
      const path = '/api/v1/admin/message';
      const res = await this.$http.post(path, this.form);
      if (res.code === 0) {
        this.fetch();
        this.form = {};
      } else {
        this.$requestStatus(res);
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/message.less';
</style>
