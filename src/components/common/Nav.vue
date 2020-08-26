<template>
  <div class="container">
    <div class="wrap">
      <div class="nav">
        <div class="user">Halo</div>
        <div class="item">
          <ul>
            <li
              v-for="item in itemList"
              :key="item.id"
            >
              <i class="iconfont" :class="'icon-' + item.icon"></i>
              {{item.name}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemList: [{
        name: '首页',
        icon: 'zhuye'
      }, {
        name: '分类',
        icon: 'comiisbiaoqian'
      }, {
        name: '留言板',
        icon: 'liuyanban'
      }, {
        name: '关于',
        icon: 'geren'
      }]
    };
  },
  created() {

  }
}
</script>

<style lang="less" scoped>
@import '../../assets/base.less';
.container {
  position: relative;
  height: 60px;
  .wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fcfcfc;
    box-shadow: 0px 5px 5px #999;
    height: 60px;
    line-height: 60px;
    .nav {
      display: flex;
      align-items: center;
      width: 80%;
      margin: 0 auto;
      .user {
        display: inline-block;
        padding-right: 20%;
      }
      .item {
        flex: 1;
        ul {
          display: flex;
          li {
            flex: 1;
            text-align: center;
            display: flex;
            align-items: center;
            i {
              font-size: 18px;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
