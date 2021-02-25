<template>
  <div class="message">
    <div :class="articleId ? 'title' : 'mes-title'">欢迎留言互动哦</div>
    <div class="rich-wrap">
      <RichText
        :value="form.content"
        @change="this.onRichChange"
        >
      </RichText>
      <div class="tip" v-if="richTip">随便吐槽下吧。</div>
    </div>
    <div class="form">
      <div class="form-input">
        <input type="text" v-model="form.name" placeholder="请输入您的昵称">
        <div class="tip" v-if="nameTip">请输入您的昵称</div>
      </div>
      <div class="submit-btn" @click="submit">提交</div>
    </div>
    <div class="list">
      <div class="total">共{{mesList.length}}条评论</div>
      <ul>
        <li v-for="item in mesList" :key="item.id">
          <div class="avator">{{item.name.substr(0, 1)}}</div>
          <div class="con">
            <div class="self">
              <div class="main">
                <div class="name">{{item.name}}</div>
                <div class="content" v-html="item.content"></div>
              </div>
              <div class="date">{{item.createTime | formateDate}}</div>
            </div>
            <div class="replay" v-if="item.replay">
              <span class="xieti">站长回复：</span><span v-html="item.replay"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import RichText from '../tool/RichText';

export default {
  name: 'Mess',
  data() {
    return {
      richTip: false,
      nameTip: false,
      form: {
        name: '',
        content: ''
      }
    };
  },
  props: {
    // 文章id
    articleId: {
      type: String
    },
    // 留言列表
    mesList: {
      type: Array,
      default: () => []
    },
    // 留言成功回调
    commentSuccess: {
      type: Function
    }
  },
  components: {
    RichText
  },
  methods: {
    // 提交
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
      if (this.articleId) {
        this.form.articleId = this.articleId;
      }
      const path = this.articleId ? '/api/v1/admin/comment' : '/api/v1/admin/message';
      const res = await this.$http.post(path, this.form);
      if (res.code === 0) {
        this.form = {};
        this.commentSuccess();
      } else {
        this.$requestStatus(res);
      }
    },
    // 富文本
    onRichChange(value) {
      this.form.content = value;
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/message.less';
</style>
