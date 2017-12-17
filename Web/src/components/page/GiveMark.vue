<template>
  <div class="checkLab">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="font-size:1.5em;">
          <i class="el-icon-setting">{{labInfo.name}}</i>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <el-card class="box-card" v-for="item in stuLabList" :key="item.id">
        <div slot="header" class="clearfix">
          <span>{{item.username}}</span>
          <el-button @click="giveMark(item)" style="float: right; margin-right:20px;" type="text">打分</el-button>
          <el-button @click="sendMessage(item)" style="float: right; margin-right:20px;" type="text">发消息</el-button>
        </div>
        <div class="preview" v-for="file in item.fileList" :key="file.name">
          <span>
            <a :href="file.url">{{file.name}}</a>
          </span>
          <span>
            <el-button @click="preView(item)" type="text" size="small" style="margin-right:20px;">预览</el-button>
          </span>
        </div>
      </el-card>
    </div>
    <!-- 发消息 -->
    <el-dialog :title="concreateLab.username" :visible.sync="isSend">
      <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="请输入内容" v-model="sendMessageArea">
      </el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isSend = false">取 消</el-button>
        <el-button type="primary" @click="handleSend">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 打分 -->
    <el-dialog :title="concreateLab.username" :visible.sync="isMark">
      <el-input  placeholder="请输入分数" v-model="mark">
      </el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isMark = false">取 消</el-button>
        <el-button type="primary" @click="handleMark">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSend: false,
      isMark: false,
      sendMessageArea: '',
      mark: '',
      concreateLab: {},
      labInfo: {
        labId: 'java第一次实验id',
        name: 'java第一次实验'
      },
      stuLabList: [
        {
          id: '12',
          username: '张三',
          userId: '20151120242',
          fileList: [
            {
              name: '实验报告',
              url: 'http://dldir1.qq.com/qqfile/qq/TIM2.0.0/22317/TIM2.0.0.exe'
            },
            {
              name: '实验报告哦2',
              url: ''
            }
          ]
        },
        {
          id: '122',
          userId: '20151120242',
          username: '张三',
          fileList: [
            {
              name: '实验报告',
              url: ''
            },
            {
              name: '实验报告哦2',
              url: ''
            }
          ]
        }
      ]
    }
  },
  created() {
    console.log(this.$route)
  },
  methods: {
    sendMessage(item) {
      this.concreateLab.id = item.id
      this.concreateLab.userId = item.userId
      this.concreateLab.username = item.username
      this.concreateLab.fileList = item.fileList
      this.isSend = true
      console.log(item)
    },
    giveMark(item) {
      this.concreateLab.id = item.id
      this.concreateLab.userId = item.userId
      this.concreateLab.username = item.username
      this.concreateLab.fileList = item.fileList
      this.isMark = true
      console.log(item)
    },
    preView(item) {
      this.concreateLab.id = item.id
      this.concreateLab.userId = item.userId
      this.concreateLab.username = item.username
      this.concreateLab.fileList = item.fileList
      console.log(item)
    },
    handleSend() {
      if (this.sendMessageArea === '') {
        this.fail('请输入消息')
      } else {
        console.log('发送消息')
      }
      this.sendMessageArea = ''
    },
    handleMark() {
      if (this.mark === '') {
        this.fail('请输入分数')
      } else {
        if (parseInt(this.mark)) {
          console.log('打分')
        } else {
          this.fail('输入必须为数字')
        }
      }
      this.mark = ''
    },
    done: function(info) {
      this.$message({
        message: info,
        type: 'success'
      })
    },
    fail: function(info) {
      this.$message({
        message: info,
        type: 'warning'
      })
    }
  }
}
</script>
<style scoped>
.preview {
  text-align: center;
}

.box-card {
  margin-bottom: 20px;
}
</style>
