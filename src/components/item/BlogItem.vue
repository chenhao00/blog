<template>
  <div class="blogItem">
    <ul class="article">
      <li v-for="item in blogList" :key="item.id">
        <div class="main" @click="detail(item._id)">
          <div class="title">{{item.title}}</div>
          <div class="text" v-html="item.contents"></div>
        </div>
        <div class="desc">
          <div class="mode" :class="{mode1: item.mode === 1, mode2: item.mode === 2}">
            <span>
              {{item.mode === 1 ? '原创' : (item.mode === 2 ? '转载' : '')}}
            </span>
          </div>
          <div class="sub">
            <div class="top">
              <div><i class="iconfont icon-rili"></i>{{item.createTime}}</div>
              <div><i class="iconfont icon-kanguo"></i>{{item.scan}}</div>
              <!-- <div><i class="iconfont icon-zan"></i></div> -->
            </div>
            <div class="bottom">
              <div class="left">
                分类专栏：
                <span v-for="itemChild in item.classify" :key="itemChild.id">{{itemChild}}</span>
              </div>
              标签：
              <span v-for="itemChild in item.articleTags" :key="itemChild.id">{{itemChild}}</span>
            </div>
          </div>
        </div>
      </li>
      <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10">
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogList: [],
      busy: false,
      page: 0,
      pageSize: 6,
      totalPage: 0
    };
  },
  props: {
    classifyItem: {
      type: String,
      default: ''
    }
  },
  created() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      this.page += 1;
      this.busy = true;
      this.fetchData(null, this.classifyItem || '');
    },
    async fetchData(type, classifyItem) {
      if (type) {
        this.page = 1;
        this.blogList = [];
      }
      const path = `/api/v1/admin/article?page=${this.page}&pageSize=${this.pageSize}&classifyName=${classifyItem}`;
      const res = await this.$http.get(path);
      if (res.code === 0) {
        this.page = res.data.page;
        this.totalPage = res.data.totalPages;
        this.blogList = this.blogList.concat(res.data.list);
        this.busy = this.page === this.totalPage || this.totalPage === 1;
      } else {
        this.$requestStatus(res);
      }
    },
    // 查看博客详情
    detail(id) {
      this.calScanCount(id);
      this.$router.push(`/detail/${id}`);
    },
    // 获取点击量
    calScanCount(id) {
      const path = `/api/v1/admin/article/${id}/setCount`;
      this.$http.get(path).then(res => {});
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/blogItem.less';
</style>
