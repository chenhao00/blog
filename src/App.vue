<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/common/Nav';

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
@import "./assets/common.less";
</style>
