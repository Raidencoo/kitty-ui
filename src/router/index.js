import Vue from 'vue'
import Router from 'vue-router'
import Login from "../views/Login";
import Home from "../views/Home";
import Error from "../views/404"
import Main from '../views/Main'
import User from '../views/User'
import Menu from '../views/Menu'
import Dept from '../views/Dept'
import Role from '../views/Role'
import Log from '../views/Log'

Vue.use(Router)


const router=new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        { path: '', component: Main, name: '系统介绍' },
        { path: '/user', component: User, name: '用户管理' },
        { path: '/dept', component: Dept, name: '机构管理' },
        { path: '/role', component: Role, name: '角色管理' },
        { path: '/menu', component: Menu, name: '菜单管理' },
        { path: '/log', component: Log, name: '日志管理' }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
    ,{
      path: '/404',
      name: 'Error',
      component: Error
    }
  ]
})
router.beforeEach((to, from, next) => {
  // 登录界面登录成功之后，会把用户信息保存在会话
  // 存在时间为会话生命周期，页面关闭即失效。
  let user = sessionStorage.getItem('user')
  if (to.path === '/login') {
    // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
    if(user){
      next({path:'/'})
    }else {
      next()
    }

  } else {
      if (!user){
        next({path:'/login'})
      }else {
        next()
      }
  }
})
export default router
