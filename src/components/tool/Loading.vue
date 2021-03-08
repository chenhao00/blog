<template>
  <div class="loading">
    <img src="../../assets/images/loading.gif" />
    <div>拼命加载中</div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.loading {
  text-align: center;
  color: #fff;
  font-size: 14px;
  margin-top: 5%;
  img {
    width: 26px;
    margin-bottom: 3px;
  }
}
</style>
