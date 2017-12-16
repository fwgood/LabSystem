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
            <strong>学号：{{user.id}}</strong>
          </div>
    <el-button style="float: right; padding: 3px 0;margin:-30px 0 0 0" type="text" @click="editDialog = true">编辑资料</el-button>
  </div>
<div>
        <div class="headImg" style="display:inline-block;">
          <img :src="avatar" alt="sorry" width="200px;" > 
        </div>
        <div class="personal-info" style="display:inline-block;">
          <div>年级：{{user.grade}}</div>
          <div>学院：{{user.college}}</div>
          <div>专业：{{user.major}}</div>
          <div>电话：{{user.phone}}</div>
          <div>课程档案：
            <div v-for="item in user.label" :key="item.id" style="margin-right:10px;display:inline-block;">
              <el-button @click="tagTouch(item.labelId)">{{item.labelName}}</el-button>
            </div>
            
          </div>
          <div>QQ：{{user.qq}}</div>
          <div>上次访问：{{user.lastVisit}}</div>
        </div>
      </div>
<el-popover
  ref="popover4"
  placement="right"
  width="370"
  trigger="click"
  v-model="visible"  
  >
<el-upload
  class="avatar-uploader"
  action="http://upload-z2.qiniu.com"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :data="qiniu"
  >

  <img v-if="avatarJust" :src="avatarJust" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
<el-button @click="submitAvatar">确认</el-button>
</el-popover>

<el-button v-popover:popover4>更换头像</el-button>
</el-card>
    <el-dialog title="编辑资料" :visible.sync="editDialog">
      <el-form :model="info">
        <el-form-item label="姓名" label-width="100px">
          <el-input v-model="user.username" auto-complete="off" :disabled="true" :placeholder="user.username"></el-input>
        </el-form-item>
        <el-form-item label="学号" label-width="100px">
          <el-input v-model="user.id" auto-complete="off" :disabled="true" :placeholder="user.account"></el-input>
        </el-form-item>
        <el-form-item label="年级" label-width="100px">
          <el-input v-model="user.grade" auto-complete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="学院" label-width="100px">
          <el-input v-model="user.college" auto-complete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="专业" label-width="100px">
          <el-input v-model="user.major" auto-complete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="手机" label-width="100px">
          <el-input v-model="info.phone" auto-complete="off" :placeholder="user.phone"></el-input>
        </el-form-item>
        <el-form-item label="QQ" label-width="100px">
          <el-input v-model="info.qq" auto-complete="off" :placeholder="user.qq"></el-input>
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
        id: '20151120222',
        phone: '',
        major: 'software',
        college: '',
        lastVisit: '2017-12-12',
        grade: '',
        qq: '',
        label: [
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
        ]
      },
      info: {},
      editDialog: false,
      qiniu: {
        token:
          'rcHe5WjHZQ9cfbxNWlPao4zNFgLGPZijSJei264R:u6vM29UFrDWzZxfrfLA_KbtcoF8=:eyJzY29wZSI6ImV0bXMiLCJkZWFkbGluZSI6MzI1MDM2NTQ4NjF9',
        file: 'xxx'
      },
      avatar: '',
      avatarJust: '',
      visible: false
    }
  },
  methods: {
    updateInfo: function() {
      console.log('提交修改表单请求')
    },
    tagTouch: function(id) {
      this.$router.push(`/course/${id}`)
    },
    handleAvatarSuccess: function(res, file) {
      this.avatarJust = 'http://p12cke86k.bkt.clouddn.com/' + res.key
      this.$message({
        message: '图片上传成功',
        type: 'success'
      })
    },
    submitAvatar: function() {
      this.visible = false
      this.avatar = this.avatarJust
    }
  },
  created: function() {
    this.$store.dispatch('getpersoninfo').then(res => {
      this.user = res.data
    })
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
  width: 90%;
}

.head-left {
  display: inline-block;
}

.head-right {
  float: right;
  display: inline-block;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 180px;
  height: 180px;
  display: block;
}
</style>
