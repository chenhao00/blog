<template>
  <div class="card item">
    <div class="title">
      <i class="iconfont icon-mingpian1"></i>
      <span>我的名片</span>
    </div>
    <div class="con">
      <ul class="info">
        <li>网名：陈浩南</li>
        <li>职业：前端开发工程师</li>
        <li>现居地：广东深圳</li>
        <li>微信：chen137693</li>
        <li>手机号：18576795040</li>
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
.card {
  .info {
    line-height: 27px;
    font-size: 15px;
    color: #666;
    font-weight: 400;
  }
}
</style>
