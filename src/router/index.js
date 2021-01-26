import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('../views/Home'); // 首页
const BlogDetail = () => import('../views/BlogDetail'); // 博客详情页
const Classify = () => import('../views/Classify'); // 文章分类
const Tag = () => import('../views/Tag'); // 文章标签
const Message = () => import('../views/Message'); // 留言板
const AboutMe = () => import('../views/AboutMe'); // 关于我

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/detail/:id',
      name: 'BlogDetail',
      component: BlogDetail,
      meta: {
        title: '博客详情'
      }
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify,
      meta: {
        title: '分类'
      }
    },
    {
      path: '/tag',
      name: 'Tag',
      component: Tag,
      meta: {
        title: '标签'
      }
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
      meta: {
        title: '留言板'
      }
    },
    {
      path: '/aboutMe',
      name: 'AboutMe',
      component: AboutMe,
      meta: {
        title: '关于'
      }
    }
  ]
});

export default router;
