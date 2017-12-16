<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" @open="handle"       background-color="#242f42"
      text-color="#fff"
      active-text-color="#ffd04b" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
  data() {
    return {
      dynoRouter: '',
      items: [
        {
          icon: 'el-icon-date',
          index: '/readme',
          title: '我的主页'
        },
        {
          icon: 'el-icon-star-on',
          index: '/basecharts',
          title: '公告'
        },
        {
          icon: 'el-icon-menu',
          index: '/myLab',
          title: '管理课程'
        },
        {
          icon: 'el-icon-message',
          index: '/personalInfo',
          title: '个人资料',
          subs: [
            {
              index: '/message',
              title: '消息'
            },
            {
              index: '/personal',
              title: '查看个人资料'
            },
            {
              index: '/forum',
              title: '讨论区帖子'
            },
            {
              index: '/blog',
              title: '博客'
            }
          ]
        },
        {
          icon: 'el-icon-menu',
          index: 'course',
          title: '我的课程',
          subs: [
            {
              index: '/course/' + 'java',
              title: 'java实验'
            },
            {
              index: '/course/' + 'python',
              title: '数据分与处理'
            },
            {
              index: '/basetable',
              title: '基础表ddd格'
            },
            {
              index: '/vuetable',
              title: 'Vue表格组件'
            }
          ]
        },
        {
          icon: 'el-icon-date',
          index: 'score',
          title: '成绩'
        },
        {
          icon: 'el-icon-loading',
          index: 'onlineCompile',
          title: '在线编译'
        },
        {
          icon: 'el-icon-date',
          index: 'other',
          title: '其他',
          subs: [
            {
              index: '/baseform',
              title: '基本表单'
            },
            {
              index: '/vueeditor',
              title: '编辑器'
            },
            {
              index: '/markdown',
              title: 'markdown'
            },
            {
              index: '/upload',
              title: '文件上传'
            },
            {
              index: '/onlinecompile',
              title: '在线编译器'
            }
          ]
        },
        {
          icon: 'el-icon-upload2',
          index: '/drag',
          title: '拖拽'
        }
      ]
    }
  },
  methods: {
    handle: function(router) {
      console.log(router)
    }
  },
  computed: {
    onRoutes() {
      console.log(this.$route)

      return this.$route.path.replace('/', '')
    }
  }
}
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  width: 250px;
  left: 0;
  top: 70px;
  bottom: 0;
  background: #2e363f;
}
.sidebar > ul {
  height: 100%;
}
</style>
