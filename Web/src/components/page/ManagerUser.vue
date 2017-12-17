<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="font-size:1.5em;">
          <i class="el-icon-info"></i> 用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="operation">
      <el-button type="text" style="margin-left:30px;">批量导入</el-button>
      <el-button type="text" @click="remove" style="margin-left:30px;color:red;">批量删除</el-button>
    </div>
    <div>
      <el-tabs v-model="activeTab" type="border-card" @tab-click="chooseTab">
        <el-tab-pane v-for="item in usetType" :key="item" :label="item" :name="item.courseId">
          <!-- <span class="select">筛选</span> -->
          <el-input placeholder="请输入内容" style="width:40%;" prefix-icon="el-icon-search" v-model="search">
          </el-input>
          <span>
            <el-button class="el-icon-search" @click="searchUser"></el-button>
          </span>
          <el-table ref="multipleTable" :data="userList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="id" label="学号" width="200">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="200">
            </el-table-column>
            <el-table-column prop="major" label="专业" show-overflow-tooltip>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-dialog title="移除学生" :visible.sync="isDelete">
      <div>您将会批量删除以下用户</div>
      <div style="text-align:center" v-for="u in operationList" :key="u.id">{{u.id}} {{u.name}}</div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isDelete = false">取 消</el-button>
        <el-button type="primary" @click="handleDelete">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDelete: false,
      activeTab: '',
      usetType: ['学生', '老师', '管理员'],
      search: '',
      operationList: [],
      userList: [
        {
          id: '20161283923',
          name: '章等级分级',
          major: '软件工程'
        },
        {
          id: '201435345923',
          name: '的空间即可',
          major: '数字媒体'
        },
        {
          id: '201562856723',
          name: '章等卡级',
          major: '信息安全'
        }
      ]
    }
  },
  methods: {
    chooseTab(tab, event) {
      console.log(tab.name)
      //   加载不同课
    },
    remove() {
      this.isDelete = true
    },
    handleSelectionChange(val) {
      console.log(val)
      this.operationList = val
    },
    // 搜索相关学生
    searchUser() {},
    handleDelete() {
      if (this.operationList.length > 0) {
        console.log('批量移除学生')
      } else {
        this.fail('删除失败')
      }
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
