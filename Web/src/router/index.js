import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/readme',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve =>
            require(['../components/page/Readme.vue'], resolve)
        },
        {
          path: '/basetable',
          component: resolve =>
            require(['../components/page/BaseTable.vue'], resolve)
        },
        {
          path: '/vuetable',
          component: resolve =>
            require(['../components/page/VueTable.vue'], resolve) // vue-datasource组件
        },
        {
          path: '/baseform',
          component: resolve =>
            require(['../components/page/BaseForm.vue'], resolve)
        },
        {
          path: '/vueeditor',
          component: resolve =>
            require(['../components/page/VueEditor.vue'], resolve) // Vue-Quill-Editor组件
        },
        {
          path: '/markdown',
          component: resolve =>
            require(['../components/page/Markdown.vue'], resolve) // Vue-Quill-Editor组件
        },
        {
          path: '/upload',
          component: resolve =>
            require(['../components/page/Upload.vue'], resolve) // Vue-Core-Image-Upload组件
        },
        {
          path: '/onlinecompile',
          component: resolve =>
            require(['../components/page/OnlineCompile.vue'], resolve) // Vue-Core-Image-Upload组件
        },
        {
          path: '/basecharts',
          component: resolve =>
            require(['../components/page/BaseCharts.vue'], resolve) // vue-schart组件
        },
        {
          path: '/drag',
          component: resolve =>
            require(['../components/page/DragList.vue'], resolve) // 拖拽列表组件
        },
        {
          path: '/message',
          component: resolve =>
            require(['../components/page/Message.vue'], resolve) // 拖拽列表组件
        },
        {
          path: '/personal',
          component: resolve =>
            require(['../components/page/PersonInfo.vue'], resolve) // 拖拽列表组件
        },
        {
          path: '/forum',
          component: resolve =>
            require(['../components/page/forum.vue'], resolve) // 拖拽列表组件
        },
        {
          path: '/blog',
          component: resolve =>
            require(['../components/page/Blog.vue'], resolve)
        },
        {
          path: '/myLab',
          component: resolve =>
            require(['../components/page/MyLab.vue'], resolve)
        },
        {
          path: '/course/:name',
          component: resolve =>
            require(['../components/page/MyCourse.vue'], resolve)
        },
        {
          path: '/score',
          component: resolve =>
            require(['../components/page/Score.vue'], resolve)
        },
        {
          path: '/onlineCompile',
          component: resolve =>
            require(['../components/page/OnlineCompile.vue'], resolve)
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve)
    }
  ]
})
