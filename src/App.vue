<template>
  <div id="app">
    <AnimalBg />
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/common/Nav';
import AnimalBg from './components/common/AnimalBg';

export default {
  name: 'App',
  components: {
    Nav,
    AnimalBg
  }
}
</script>

<style lang="less">
@import './assets/common.less';
</style>
