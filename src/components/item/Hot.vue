<template>
  <div class="hot item">
    <div class="title">
      <i class="iconfont icon-remen"></i>
      <span>热门排行</span>
    </div>
    <div class="con">
      <ul class="list">
        <li>1. javascript入门</li>
        <li>2. 如何在项目中使用Element</li>
        <li>3. javascript入门</li>
        <li>4. 如何在项目中使用Element</li>
        <li>5. javascript入门</li>
        <li>6. 如何在项目中使用Element</li>
      </ul>
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
@import '../../assets/item/item.less';
.list {
  font-size: 15px;
  line-height: 26px;
  font-weight: 400;
  color: #666;
}
</style>
