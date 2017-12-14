<template>
  <div>
    <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size:2em;"><i class="el-icon-setting"></i> 我的资料</el-breadcrumb-item>
            </el-breadcrumb>
    </div>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <div class="head-left">
                <div style="padding-right:10px"><strong>姓名：{{user.name}}</strong></div>
                <div style="padding-right:10px"><strong>学号：{{user.number}}</strong></div>
            </div>
            <div class="head-right">
                <el-button type="primary"><i class="el-icon-edit"></i></el-button>           
            </div>
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
                   <div v-for="item in user.course" :key="item.id" style="margin-right:10px;display:inline-block;"><router-link :to="item.to">{{item.courseName}}</router-link></div>
                </div>
                <div>首次访问：{{user.firstVisit}}</div>
                <div>上次访问：{{user.lastVisit}}</div>
            </div>
        </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: '冯伟',
        number: '20151120222',
        country: '中国',
        city: '昆明',
        email: '10082@qq.com',
        major: 'software',
        course: [
          { id: 0, courseName: 'java', to: 'course/java' },
          { id: 1, courseName: 'python', to: 'course/python' }
        ],
        firstVisit: '2015-9-10',
        lastVisit: '2017-12-12'
      }
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
  width: 50%;
}
.head-left {
  display: inline-block;
}
.head-right {
  float: right;
  display: inline-block;
}
</style>

