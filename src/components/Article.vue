<template>
  <div class="article">
    <div class="container">
      <div class="title">JavaScript数据类型总结</div>
      <div class="text">
        将其挂载到从页面级别的过渡组件的事件上，令其滚动行为和页面过渡一起良好运行是可能的。但是考虑到用例的多样性和复杂性，我们仅提供这个原始的接口，以支持不同用户场景的具体实现。
      </div>
      <div class="desc">
        <div><i class="iconfont icon-rili"></i>2020年7月30日</div>
        <div><i class="iconfont icon-kanguo"></i>37</div>
        <div><i class="iconfont icon-zan"></i>80</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  }
}
</script>

<style lang="less" scoped>
@import '../assets/base.less';
.container {
  padding: 20px;
  box-shadow: 0px 0px 8px #c7c7c7;
  margin-bottom: 20px;
  .title {
    font-weight: 400;
    font-size: 22px;
    color: #333;
    margin-bottom: 10px;
  }
  .text {
    color: #000;
    line-height: 26px;
    font-size: 15px;
  }
  .desc {
    display: flex;
    margin-top: 10px;
    font-size: 12px;
    color: #666;
    div {
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-right: 15px;
      }
      i {
        margin-right: 3px;
      }
    }
  }
}
</style>
