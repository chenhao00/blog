<template>
  <div id="app">
    <AnimalBg />
    <Nav />
    <router-view v-if="isRouterAlive" />
    <Foot v-if="isFootShow" />
  </div>
</template>

<script>
import Nav from './components/common/Nav';
import AnimalBg from './components/common/AnimalBg';
import Foot from './components/common/Foot';

export default {
  name: 'App',
  // provide() {
  //   return {
  //     reload: this.reload
  //   }
  // },
  data() {
    return {
      isRouterAlive: false,
      isFootShow: true
    }
  },
  mounted() {
    // 先隐藏某些页面底部栏等分页加载到最后一页时再显示
    this.$bus.$on('hideFoot', () => {
      this.isFootShow = false;
    });
    this.$bus.$on('showFoot', () => {
      this.isFootShow = true;
    });
  },
  created() {
    this.isRouterAlive = true;
  },
  components: {
    Nav,
    AnimalBg,
    Foot
  },
  methods: {
    // reload() {
    //   this.isRouterAlive = false;
    //   this.$nextTick(() => {
    //     this.isRouterAlive = true;
    //   });
    // }
  }
}
</script>

<style lang="less">
@import './assets/common.less';
</style>
