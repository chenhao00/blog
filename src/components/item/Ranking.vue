<template>
  <div class="ranking item">
    <div class="title">
      <i class="iconfont" :class="'icon-' + icon"></i>
      <span>{{title}}</span>
    </div>
    <div class="con">
      <ul class="list">
        <li v-for="(item, index) in rankingList" :key="item.id" class="noWrap" @click="goDetail(item.id || item._id)">
          {{index + 1}}、{{item.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rankingList: []
    };
  },
  props: {
    title: {
      type: String
    },
    icon: {
      type: String
    },
    type: {
      type: Number
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const path = this.type === 1 ? '/api/v1/admin/article/hot' : '/api/v1/admin/article/recent';
      const res = await this.$http.get(path);
      if (res.code === 0) {
        this.rankingList = res.data;
      } else {
        this.$requestStatus(res);
      }
    },
    // 跳转文章详情
    goDetail(id) {
      this.$router.push(`/detail/${id}`);
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/item/item.less';
.list {
  font-size: 15px;
  line-height: 30px;
  font-weight: 400;
  color: #666;
  li {
    cursor: pointer;
  }
}
</style>
