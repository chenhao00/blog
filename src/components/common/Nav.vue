<template>
  <div class="nav">
    <div class="wrap">
      <div class="nav">
        <div class="user">Halo</div>
        <div class="item">
          <ul>
            <li
              v-for="item in itemList"
              :key="item.id"
            >
              <span @click="go(item.link)">
                <i class="iconfont" :class="'icon-' + item.icon"></i>{{item.name}}
              </span>
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
        icon: 'zhuye',
        link: '/'
      }, {
        name: '标签',
        icon: 'biaoqian',
        link: '/tag'
      }, {
        name: '分类',
        icon: 'fenlei',
        link: '/classify'
      }, {
        name: '留言板',
        icon: 'liuyanban',
        link: '/message'
      }, {
        name: '关于',
        icon: 'geren',
        link: '/aboutMe'
      }]
    };
  },
  // inject: ['reload'],
  created() {

  },
  methods: {
    go(link) {
      this.$router.push(link);
      this.$bus.$emit('showFoot');
      // this.reload();
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/base.less';
.nav {
  position: relative;
  height: 60px;
  .wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fafafa;
    box-shadow: 0px 5px 5px #999;
    height: 60px;
    line-height: 60px;
    z-index: 11;
    min-width: 800px;
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
            cursor: pointer;
            margin-right: 20px;
            span {
              color: inherit;
              font-weight: 350;
              i {
                font-size: 18px;
                margin-right: 6px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
