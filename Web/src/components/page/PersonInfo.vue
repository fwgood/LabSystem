<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="font-size:1.5em;">
          <i class="el-icon-setting"></i> 我的资料</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-card class="box-card">
  <div slot="header" class="clearfix">
              <div style="padding-right:10px">
            <strong>姓名：{{user.username}}</strong>
          </div>
          <div style="padding-right:10px">
            <strong>学号：{{user.account}}</strong>
          </div>
    <el-button style="float: right; padding: 3px 0;margin:-30px 0 0 0" type="text" @click="editDialog = true">操作按钮</el-button>
  </div>
<div>
        <div class="headImg" style="display:inline-block;">
          <img src="../../assets/head.jpg" alt="sorry" width="200px;" > 
        </div>
        <div class="personal-info" style="display:inline-block;">
          <div>年级：{{user.country}}</div>
          <div>学院：{{user.city}}</div>
          <div>专业：{{user.email}}</div>
          <div>电话：{{user.major}}</div>
          <div>课程档案：
            <div v-for="item in user.course" :key="item.id" style="margin-right:10px;display:inline-block;">
              <router-link :to="item.to">{{item.courseName}}</router-link>
            </div>
            <el-tag>标签一</el-tag>
          </div>
          <div>QQ：{{user.firstVisit}}</div>
          <div>上次访问：{{user.lastVisit}}</div>
        </div></div>
</el-card>
    <el-dialog title="编辑资料" :visible.sync="editDialog">
      <el-form :model="info">
        <el-form-item label="姓名" label-width="100px">
          <el-input v-model="info.username" auto-complete="off" :disabled="true" :placeholder="user.username"></el-input>
        </el-form-item>
        <el-form-item label="学号" label-width="100px">
          <el-input v-model="info.account" auto-complete="off" :disabled="true" :placeholder="user.account"></el-input>
        </el-form-item>
        <el-form-item label="年级" label-width="100px">
          <el-input v-model="info.grade" auto-complete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="学院" label-width="100px">
          <el-input v-model="info.academy" auto-complete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="专业" label-width="100px">
          <el-input v-model="info.major" auto-complete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="手机" label-width="100px">
          <el-input v-model="info.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="QQ" label-width="100px">
          <el-input v-model="info.qq" auto-complete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialog = false">取消</el-button>
        <el-button type="primary" @click="updateInfo">确定</el-button>
      </div>
    </el-dialog>
    <el-popover
  ref="popover1"
  placement="top-start"
  title="标题"
  width="200"
  trigger="hover"
  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
</el-popover>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: '冯伟',
        account: '20151120222',
        country: '中国',
        city: '昆明',
        email: '10082@qq.com',
        major: 'software',
        course: [
          {
            id: 0,
            courseName: 'java',
            to: 'course/java'
          },
          {
            id: 1,
            courseName: 'python',
            to: 'course/python'
          }
        ],
        firstVisit: '2015-9-10',
        lastVisit: '2017-12-12'
      },
      info: {},
      editDialog: false
    }
  },
  methods: {
    updateInfo: function() {
      console.log('提交修改表单请求')
    }
  }
}
</script>

<style scoped>
.crumbs {
  margin-top: 10px;
}

.personal-info {
  line-height: 30px;
  margin-left: 20px;
}

.box-card {
  display: inline-block;
  min-height: 400px;
  width: 45%;
}

.head-left {
  display: inline-block;
}

.head-right {
  float: right;
  display: inline-block;
}
</style>
