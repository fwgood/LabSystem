<template>
  <div class="stu-manage">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="font-size:1.5em;">
          <i class="el-icon-info"></i> 学生管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    
     <el-tabs v-model="activeTab" type="border-card" @tab-click="chooseTab">
        <el-tab-pane v-for="item in courseList" :key="item.courseId" :label="item.courseName" :name="item.courseId">
            <span style="padding-left:30px;">
        <el-button type="text" class="el-icon-circle-plus-outline" @click="addStu(item)">添加学生</el-button>
      </span>
          <el-table :data="stuList" style="width: 100%">
            <el-table-column prop="stuId" sortable label="学号" width="180"></el-table-column>
            <el-table-column prop="name" label="名字"></el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
              <template slot-scope="scope">
                  <el-button @click="send(scope.row,item)" type="text" size="small">发消息</el-button>
                <el-button @click="CheckLab(scope.row,item)" type="text" size="small">查看</el-button>
                <el-button style="color:red;" @click="moveOut(scope.row,item)" type="text" size="small">移除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    <el-dialog title="添加学生" :visible.sync="isAddStu">
      <el-input  placeholder="请输入学号" v-model="addId">
      </el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isAddStu = false">取 消</el-button>
        <el-button type="primary" @click="handleAdd">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="移除学生" :visible.sync="isDelete">
      <div>您将会从 {{concreateStu.courseName}} 课程中移除 {{concreateStu.name}}</div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isDelete = false">取 消</el-button>
        <el-button type="primary" @click="handleDelete">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 发送消息 -->
    <el-dialog :title="concreateStu.name" :visible.sync="isSend">
      <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="请输入内容" v-model="sendMessageArea">
      </el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isSend = false">取 消</el-button>
        <el-button type="primary" @click="handleSend">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSend: false,
      isAddStu: false,
      isDelete: false,
      addId: '',
      activeTab: '214332',
      sendMessageArea: '',
      concreateStu: {},
      courseList: [
        {
          courseId: '214332',
          courseName: 'python'
        },
        {
          courseId: '34534',
          courseName: 'java'
        }
      ],
      stuList: [
        {
          stuId: '20151120242',
          name: '肖恩'
        },
        {
          stuId: '20151120232',
          name: '肖das恩'
        }
      ]
    }
  },
  methods: {
    // 移除学生
    moveOut(row, item) {
      this.concreateStu.courseId = item.courseId
      this.concreateStu.courseName = item.courseName
      this.concreateStu.name = row.name
      this.concreateStu.stuId = row.stuId
      this.isDelete = true
    },

    chooseTab(tab, event) {
      console.log(tab.name)
      //   加载不同课
    },
    send(row, item) {
      this.concreateStu.courseId = item.courseId
      this.concreateStu.courseName = item.courseName
      this.concreateStu.name = row.name
      this.concreateStu.stuId = row.stuId
      this.isSend = true
    },
    CheckLab(row, item) {
      this.concreateStu.courseId = item.courseId
      this.concreateStu.courseName = item.courseName
      this.concreateStu.name = row.name
      this.concreateStu.stuId = row.stuId
      this.$router.push({
        path: '/stuManage/' + this.concreateStu.stuId,
        query: { courseId: this.concreateStu.courseId }
      })
      console.log(this.concreateStu)
    },
    addStu(item) {
      this.isAddStu = true
    },
    // 处理新增学生对话框
    handleAdd() {
      if (this.addId === '') {
        this.fail('请输入学号')
      } else {
        if (parseInt(this.addId)) {
          console.log('添加')
        } else {
          this.fail('输入必须为数字')
        }
      }
      console.log('添加血红色')
      this.addId = ''
    },
    handleDelete() {
      console.log('移除学生')
    },
    handleSend() {
      if (this.sendMessageArea === '') {
        this.fail('请输入消息')
      } else {
        console.log('发送消息')
      }
      this.sendMessageArea = ''
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
.courseNum {
  margin-bottom: 20px;
}
</style>
