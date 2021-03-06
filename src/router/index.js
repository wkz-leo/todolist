import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import TodoList from '@/components/TodoList'

Vue.use(Router)

export default new Router({
    mode: 'history', // 开启HTML5的history模式，可以让地址栏的url长得跟正常页面跳转的url一样。（不过还需要后端配合，讲Koa的时候会说）
    base: __dirname,
    routes: [
        {
            path: '/',  // 默认首页打开是登录页
            component: Login
        },
        {
            path: '/todolist',
            component: TodoList
        },
        {
            path: '*',
            redirect: '/' // 输入其他不存在的地址自动跳回首页
        }
    ]
})
