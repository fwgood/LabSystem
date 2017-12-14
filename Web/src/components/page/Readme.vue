<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size:2em;"><i class="el-icon-setting"></i> 最近实验</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="work-doc" v-for="item in workList" v-bind:key="item.id">
            <div class="experTitle"> {{item.courseName}}</div>
            <el-table :data="item.courseWork" style="width: 100%" :default-sort="{prop:'date',order:'descending'}" @row-click="lookDetail">
                <el-table-column prop="workName" label="作业" width="180" ></el-table-column>
                <el-table-column prop="notyDate" label="截止日期" sortable></el-table-column>
                <el-table-column prop="deadLine" label="截止日期" sortable></el-table-column>
                <el-table-column prop="workState" label="状态" ></el-table-column>
                <el-table-column prop="score" label="分数" sortable></el-table-column>
            </el-table>
            <!-- <article>
                <h1>manage-system</h1>
                <p>基于Vue.js 2.x系列 + Element UI 的后台管理系统解决方案</p>
                <h2>前言</h2>
                <p>之前在公司用了Vue + Element组件库做了个后台管理系统，基本很多组件可以直接引用组件库的，但是也有一些需求无法满足。像图片裁剪上传、富文本编辑器、图表等这些在后台管理系统中很常见的功能，就需要引用其他的组件才能完成。从寻找组件，到使用组件的过程中，遇到了很多问题，也积累了宝贵的经验。所以我就把开发这个后台管理系统的经验，总结成这个后台管理系统解决方案。</p>
                <p>该方案作为一套多功能的后台框架模板，适用于绝大部分的后台管理系统（Web Management System）开发。基于vue.js,使用vue-cli脚手架快速生成项目目录，引用Element UI组件库，方便开发快速简洁好看的组件。分离颜色样式，支持手动切换主题色，而且很方便使用自定义主题色。</p>
                <h2>功能</h2>
                <el-checkbox disabled checked>Element UI</el-checkbox>
                <br>
                <el-checkbox disabled checked>登录/注销</el-checkbox>
                <br>
                <el-checkbox disabled checked>表格</el-checkbox>
                <br>
                <el-checkbox disabled checked>表单</el-checkbox>
                <br>
                <el-checkbox disabled checked>图表</el-checkbox>
                <br>
                <el-checkbox disabled checked>富文本编辑器</el-checkbox>
                <br>
                <el-checkbox disabled checked>markdown编辑器</el-checkbox>
                <br>
                <el-checkbox disabled checked>图片拖拽/裁剪上传</el-checkbox>
                <br>
                <el-checkbox disabled checked>支持切换主题色</el-checkbox>
                <br>
                <el-checkbox disabled checked>列表拖拽排序</el-checkbox>
                <br>
            </article> -->
        </div>
        <div class="crumbs">
            <el-breadcrumb separator="/" style="font-size:2em;">
                <el-breadcrumb-item ><i class="el-icon-document"></i> 最近博客</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="blogthrough">
            <el-card class="box-card" v-for="item in blogList" :key="item.id">
                <div slot="header" class="clearfix">
                    <div class="head-left">
                        <span style="padding-right:10px"><strong>{{item.name}}</strong></span>
                        <span>{{item.title}}</span>
                    </div>
                    <div class="head-right">
                        <el-button type="primary"><i class="el-icon-delete"></i></el-button>
                        
                    </div>
                </div>
                <div v-for="it in 4" :key="it" class="text">
                    博客内容: {{item.content}}
                </div>
                <img src="../../assets/test.png" alt="sorry" width="300px" style="margin-left:0%;">
                <div class="card-foot">
                    <div>{{item.blogTime}}</div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      workList: [
        {
          id: 0,
          courseName: 'python',
          courseWork: [
            {
              workName: '系统测试',
              notyDate: '2017-04-19',
              deadLine: '2017-05-04',
              workState: '未提交',
              score: ''
            },
            {
              workName: '系统测试',
              notyDate: '2017-04-17',
              deadLine: '2017-05-02',
              workState: '未提交',
              score: ''
            },
            {
              workName: '边界测试',
              notyDate: '2017-04-18',
              deadLine: '2017-05-03',
              workState: '已提交',
              score: '91'
            },
            {
              workName: '白盒测试',
              notyDate: '2017-04-19',
              deadLine: '2017-05-04',
              workState: '已提交',
              score: '92'
            },
            {
              workName: '黑盒测试',
              notyDate: '2017-04-20',
              deadLine: '2017-05-06',
              workState: '已提交',
              score: '93'
            }
          ]
        },
        {
          id: 1,
          courseName: 'python',
          courseWork: [
            {
              workName: '系统测试',
              notyDate: '2017-04-19',
              deadLine: '2017-05-04',
              workState: '未提交',
              score: ''
            },
            {
              workName: '系统测试',
              notyDate: '2017-04-17',
              deadLine: '2017-05-02',
              workState: '未提交',
              score: ''
            },
            {
              workName: '边界测试',
              notyDate: '2017-04-18',
              deadLine: '2017-05-03',
              workState: '已提交',
              score: '91'
            },
            {
              workName: '白盒测试',
              notyDate: '2017-04-19',
              deadLine: '2017-05-04',
              workState: '已提交',
              score: '92'
            },
            {
              workName: '黑盒测试',
              notyDate: '2017-04-20',
              deadLine: '2017-05-06',
              workState: '已提交',
              score: '93'
            }
          ]
        }
      ],
      blogList: [
        {
          id: 0,
          name: '冯伟',
          title: '我是世界上最好的程序员',
          content: '一个王者带一群青铜是怎样一种体验，哈哈哈哈哈哈哈哈哈好绝望',
          blogTime: '2017-12-12'
        },
        {
          id: 1,
          name: '九戒天子',
          title: '我是世界上最好的天道',
          content: '论#女朋友和别的女生吵架了#，怎么快速安抚女友！',
          blogTime: '2017-12-12'
        }
      ]
    }
  },
  methods: {
    lookDetail: function(row) {
      console.log(row)
    }
    // formatter: function (row, column) {
    //     return row.address;
    // }
  }
}
</script>

<style scoped>
.el-table {
  cursor: pointer;
}
.experTitle {
  font-family: 'Helvetica Neue', Helvetica, 'microsoft yahei', arial, STHeiTi,
    sans-serif;
  font-size: 2em;
  font-weight: 1.5em;
  padding: 5px;
  color: #97a8be;
}
.blogthrough {
  margin-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  max-width: 980px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif;
}
.work-doc {
  padding-bottom: 10px;
  width: 100%;
  max-width: 980px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif;
}
.crumbs {
  margin-top: 10px;
}
.text {
  height: 25px;
}
.head-left {
  display: inline-block;
  font-size: 1.5em;
}
.head-right {
  float: right;
  display: inline-block;
}
.card-foot {
  text-align: right;
}
.box-card {
  margin-top: 10px;
}

/* .ms-doc h3{
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 1px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    .ms-doc article{
        padding: 45px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .ms-doc article h1{
        font-size:32px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ddd;
    }
    .ms-doc article h2 {
        margin: 24px 0 16px;
        font-weight: 600;
        line-height: 1.25;
        padding-bottom: 7px;
        font-size: 24px;
        border-bottom: 1px solid #eee;
    }
    .ms-doc article p{
        margin-bottom: 15px;
        line-height: 1.5;
    }
    .ms-doc article .el-checkbox{
        margin-bottom: 5px;
    } */
</style>