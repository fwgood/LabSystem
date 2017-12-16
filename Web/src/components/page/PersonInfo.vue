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
      </div>
      <div class="head-right">
        <el-button type="primary" @click="editDialog = true">
          <i class="el-icon-edit"></i>
        </el-button>
      </div>
      <div>
        <div class="headImg" style="display:inline-block;">
          <img src="../../assets/head.jpg" alt="sorry" width="200px;">
        </div>
        <div class="personal-info" style="display:inline-block;">
          <div>国家和地区：{{user.country}}</div>
          <div>市/县：{{user.city}}</div>
          <div>Email：{{user.email}}</div>
          <div>专业：{{user.major}}</div>
          <div>课程档案：
            <div v-for="item in user.course" :key="item.id" style="margin-right:10px;display:inline-block;">
              <router-link :to="item.to">{{item.courseName}}</router-link>
            </div>
          </div>
          <div>首次访问：{{user.firstVisit}}</div>
          <div>上次访问：{{user.lastVisit}}</div>
        </div>
      </div>
    </el-card>
    <el-dialog title="编辑资料" :visible.sync="editDialog">
      <el-form :model="info">
        <el-form-item label="姓名" label-width="100px">
          <el-input v-model="info.username" auto-complete="off" :disabled="true" :placeholder="user.username"></el-input>
        </el-form-item>
        <el-form-item label="学号" label-width="100px">
          <el-input v-model="info.account" auto-complete="off" :disabled="true" :placeholder="user.account"></el-input>
        </el-form-item>
        <el-form-item label="市区" label-width="100px">
          <el-input v-model="info.city" auto-complete="off" :disabled="true" :placeholder="user.city"></el-input>
        </el-form-item>
        <el-form-item label="国家或地区" label-width="100px">
          <el-input v-model="info.country" auto-complete="off" :disabled="true" :placeholder="user.country"></el-input>
        </el-form-item>
        <el-form-item label="年级" label-width="100px">
          <el-input v-model="info.grade" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机" label-width="100px">
          <el-input v-model="info.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="学院" label-width="100px">
          <el-input v-model="info.academy" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="专业" label-width="100px">
          <el-input v-model="info.major" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="自述" label-width="100px">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="info.intro"></el-input>
        </el-form-item>
        <el-form-item label="兴趣列表" label-width="100px">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="info.habby"></el-input>
        </el-form-item>
        <el-form-item label="网页" label-width="100px">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="info.page"></el-input>
        </el-form-item>
        <el-form-item label="QQ号码" label-width="100px">
          <el-input placeholder="请输入QQ" v-model="info.qq"></el-input>
        </el-form-item>
        <el-form-item label="Skype号码" label-width="100px">
          <el-input placeholder="请输入Skype" v-model="info.skype"></el-input>
        </el-form-item>
        <el-form-item label="Yahoo号码" label-width="100px">
          <el-input placeholder="请输入Yahoo" v-model="info.yahoo"></el-input>
        </el-form-item>
        <el-form-item label="MSN号码" label-width="100px">
          <el-input placeholder="请输入MSN" v-model="info.msn"></el-input>
        </el-form-item>
        <el-form-item label="卡号" label-width="100px">
          <el-input placeholder="请输入内容" v-model="info.cardNumber"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialog = false">取消</el-button>
        <el-button type="primary" @click="updateInfo">确定</el-button>
      </div>
    </el-dialog>
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
