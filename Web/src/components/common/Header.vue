<template>
  <div class="header">
    <div class="logo">实验管理系统</div>
    <div class="user-info">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <img class="user-logo" :src="avatar"> {{username}}
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="password">修改密码</el-dropdown-item>
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-dialog :visible.sync="dialogTableVisible">
      <el-form label-width="120px" :model="pass">
        <el-form-item label=" 当前密码 ">
          <el-input v-model="pass.old" type="password"></el-input>
        </el-form-item>
        <el-form-item label="新密码 ">
          <el-input v-model="pass.new" type="password"></el-input>
        </el-form-item>
        <el-form-item label="重复输入密码 ">
          <el-input v-model="pass.reNew" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">确认</el-button>
          <el-button type="danger" @click="(dialogTableVisible=false,pass.old='',pass.new='',pass.reNew='')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'Ynu soft',
      dialogTableVisible: false,
      pass: {
        old: '',
        new: '',
        reNew: ''
      }
    }
  },
  computed: {
    username() {
      let username = this.$store.getters.getUsername
      return username || this.name
    },
    avatar() {
      let avatar = this.$store.getters.getAvatar
      return avatar
    }
  },
  methods: {
    handleCommand(command) {
      if (command === 'loginout') {
        localStorage.removeItem('ms_username')
        this.$router.push('/login')
      } else if (command === 'password') {
        this.dialogTableVisible = true
      }
    },
    submit() {
      if (!this.pass.old || !this.pass.new || !this.pass.reNew) {
        this.$message.error('请填写所有字段')
      } else if (this.pass.new !== this.pass.reNew) {
        this.$message.error('请检查密码是否一致')
      } else {
        this.$axios.post('/Courses', {
          params: {
            action: 'personalData',
            type: 'updateThePassword'
          }
        })
      }
    }
  }
}
</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  line-height: 70px;
  color: #fff;
}
.header .logo {
  float: left;
  width: 250px;
  text-align: center;
}
.user-info {
  float: right;
  padding-right: 50px;
  font-size: 16px;
  color: #fff;
}
.user-info .el-dropdown-link {
  position: relative;
  display: inline-block;
  padding-left: 50px;
  color: #fff;
  cursor: pointer;
  vertical-align: middle;
}
.user-info .user-logo {
  position: absolute;
  left: 0;
  top: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
