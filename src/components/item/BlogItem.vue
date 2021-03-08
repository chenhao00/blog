<template>
  <div class="blogItem">
    <loading v-if="isLoading" />
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
              <div><i class="iconfont icon-rili"></i>{{item.createTime | formateDate}}</div>
              <div><i class="iconfont icon-kanguo"></i>{{item.scan || 0}}</div>
              <!-- <div><i class="iconfont icon-zan"></i></div> -->
            </div>
            <div class="bottom">
              分类专栏：<span class="classifyName">{{item.classifyName}}</span> 标签：<span v-for="itemChild in item.articleTags" :key="itemChild.id">{{itemChild}}</span>
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
    <div class="more" v-if="!isLoading">
      <div v-if="page === totalPage && isLast">没有更多了～</div>
      <Loading v-else />
    </div>
  </div>
</template>

<script>
import Loading from '../tool/Loading';

export default {
  data() {
    return {
      blogList: [],
      busy: false,
      page: 0,
      pageSize: 4,
      totalPage: 0,
      isLoading: true,
      isLast: false
    };
  },
  components: {
    Loading
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
      this.busy = true;
      setTimeout(() => {
        this.page += 1;
        this.fetchData(null, this.classifyItem || '');
      }, 500);
    },
    async fetchData(type, classifyItem) {
      if (type) {
        this.isLoading = true;
        this.page = 1;
        this.blogList = [];
      }
      const path = `/api/v1/admin/article?page=${this.page}&pageSize=${this.pageSize}&classifyName=${classifyItem}`;
      const res = await this.$http.get(path);
      if (res.code === 0) {
        setTimeout(() => {
          this.isLoading = false;
          this.page = res.data.page;
          this.totalPage = res.data.totalPages;
          this.blogList = this.blogList.concat(res.data.list);
          this.busy = this.isLast = this.page === this.totalPage || this.totalPage === 1;
          // 滑到最底部时才展示出foot
          if (this.isLast) {
            this.$bus.$emit('showFoot');
          }
        }, 500);
      } else {
        this.$requestStatus(res);
      }
    },
    // 查看博客详情
    detail(id) {
      this.calScanCount(id);
      this.$bus.$emit('showFoot');
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
