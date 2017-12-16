<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="font-size:1.5em;">
          <i class="el-icon-setting"></i> 最近实验</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-loading="loading">
    <div class="work-doc" v-for="item in workList" v-bind:key="item.id" >
      <div class="experTitle"> {{item.couseName}}</div>
      <el-table :data="item.courses" style="width: 100%" :default-sort="{prop:'date',order:'descending'}" @row-click="lookDetail">
        <el-table-column prop="jobName" label="作业" width="180"></el-table-column>
        <el-table-column prop="startTime" label="开始日期" sortable></el-table-column>
        <el-table-column prop="deadline" label="截止日期" sortable></el-table-column>
        <el-table-column prop="state" label="状态"></el-table-column>
        <el-table-column prop="score" label="分数" sortable></el-table-column>
      </el-table>
    </div>
    </div>  

    <div class="crumbs">
      <el-breadcrumb separator="/" style="font-size:1.5em;">
        <el-breadcrumb-item>
          <i class="el-icon-document"></i> 最近博客</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="blogthrough">
      <el-card class="box-card" v-for="item in blogList" :key="item.id">
        <div slot="header" class="clearfix">
          <div class="head-left">
            <span style="padding-right:10px">
              <strong>{{item.author}}</strong>
            </span>
            <span>{{item.title}}</span>
          </div>
          <div class="head-right">
            <el-button type="primary" @click="toThrough(item)">
              <i class="el-icon-view"></i>
            </el-button>

          </div>
        </div>
        <div v-for="it in 4" :key="it" class="text">
          博客内容: {{item.content}}
        </div>
        <img src="../../assets/test.png" alt="sorry" width="300px" style="margin-left:0%;">
        <div class="card-foot">
          <div>{{item.time}}</div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      loading: true,
      workList: [],
      blogList: [
        {
          id: 0,
          account: 20151120222,
          author: '冯伟',
          title: '我是世界上最好的程序员',
          content: '一个王者带一群青铜是怎样一种体验，哈哈哈哈哈哈哈哈哈好绝望',
          blogTime: '2017-12-12'
        },
        {
          id: 1,
          account: 20151120222,
          author: '九戒天子',
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
    },
    toThrough(blog) {
      console.log(blog)
    }
    // formatter: function (row, column) {
    //     return row.address;
    // }
  },
  mounted: function() {
    this.$store
      .dispatch('getIndex')
      .then(res => {
        let work = res.data.lab
        work.map(d => {
          d.courses.map(c => {
            c.state = c.state ? '已提交' : '未提交'
          })
        })
        this.workList = work
        this.blogList = res.data.blog
        this.loading = false
      })
      .catch(e => {
        this.$message.error('出现了未知错误，请稍后重试')
      })
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