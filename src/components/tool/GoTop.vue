<template>
  <div class="goTop" v-show="goTopShow" @click="goTop">
    <i class="iconfont icon-top"></i>
  </div>
</template>

<script>
export default {
  name: 'GoTop',
  data() {
    return {
      goTopShow: false,
      scrollTop: ''
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.goTopShow = this.scrollTop > 100;
    },
    goTop() {
      let timer = null;
      const that = this;
      cancelAnimationFrame(timer);
      timer = requestAnimationFrame(function fn() {
        if (that.scrollTop > 0) {
          that.scrollTop -= 250;
          document.body.scrollTop = document.documentElement.scrollTop = that.scrollTop;
          timer = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(timer);
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
.goTop {
  position: fixed;
  bottom: 10px;
  right: 10px;
  .iconfont {
    font-size: 40px;
    padding: 5px;
    cursor: pointer;
  }
}
</style>
