import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)


// // 路由懒加载啊啊
// const Home = () => import('./views/Home');
// const List = () => import('./views/List');
// const Profile = () => import('./views/Profile');

import Home from './views/Home';
import List from './views/List';

// 定义路由规则

const routes = [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/list/:id',
    component:List
  },
  {
    path:'*',
    component:Home
  }
]

export default new Router({ routes })
